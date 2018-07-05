<template>
  <div class="p-feed">
    <nav class="m-box m-head-top m-lim-width m-pos-f m-main m-bb1">
      <ul class="m-box m-flex-grow1 m-aln-center m-justify-center m-flex-base0 m-head-nav">
        <router-link
          :to="{ name:'feeds', query: { type: 'new' } }"
          tag="li"
          active-class="active"
          exact
          replace>
          <a>最新</a>
        </router-link>
        <router-link
          :to="{ name:'feeds', query: { type: 'hot' } }"
          tag="li"
          active-class="active"
          exact
          replace>
          <a>热门</a>
        </router-link>
        <router-link
          :to="{ name:'feeds', query: { type: 'follow' } }"
          tag="li"
          active-class="active"
          exact
          replace>
          <a>关注</a>
        </router-link>
      </ul>
    </nav>
    <jo-load-more
      ref="loadmore"
      class="p-feed-main"
      @onRefresh="onRefresh"
      @onLoadMore="onLoadMore" >
      <ul class="p-feed-list">
        <li
          v-for="(feed, index) in pinned"
          v-if="feed.id"
          :key="`pinned-feed-${feedType}-${feed.id}-${index}`">
          <feed-card
            :feed="feed"
            :pinned="true" />
        </li>
        <li
          v-for="(feed, index) in feeds"
          v-if="feed.id"
          :key="`feed-${feedType}-${feed.id}-${index}`">
          <feed-card :feed="feed" />
        </li>
      </ul>
    </jo-load-more>
    <foot-guide/>
  </div>
</template>
<script>
import FeedCard from "@/components/FeedCard/FeedCard.vue";
import * as api from "@/api/feeds.js";

const feedTypesMap = ["new", "hot", "follow"];

export default {
  name: "FeedList",
  components: {
    FeedCard
  },
  data() {
    return {
      ad: [], // 广告
      pinned: [], // 置顶

      newFeeds: [],
      hotFeeds: [],
      followFeeds: []
    };
  },
  computed: {
    feedType() {
      return this.$route.query.type;
    },
    feeds: {
      get() {
        return this.feedType ? this.$data[`${this.feedType}Feeds`] : [];
      },
      set(val) {
        this.$data[`${this.feedType}Feeds`] = val;
      }
    },
    maxId() {
      const len = this.feeds.length;
      return len ? this.feeds[len - 1].id : 0;
    }
  },
  watch: {
    feedType(val, oldVal) {
      feedTypesMap.includes(val) &&
        oldVal &&
        this.$refs.loadmore.beforeRefresh();
    }
  },
  created() {
    this.onRefresh(() => {});
  },

  methods: {
    onRefresh(callback) {
      api.getFeedsByType(this.feedType, 15).then(({ data }) => {
        const { ad = [], pinned = [], feeds = [] } = data;
        this.ad = ad;
        this.feeds = feeds;
        this.pinned = pinned;
        callback(feeds.length < 15);
      });
    },
    onLoadMore(callback) {
      // 热门动态 修改为 offset
      const after = this.feedType === "hot" ? this.hotFeeds.length : this.maxId;
      api.getFeedsByType(this.feedType, 15, after).then(({ data }) => {
        const { ad = [], pinned = [], feeds = [] } = data;
        this.ad = ad;
        this.pinned = pinned;
        this.feeds = [...this.feeds, ...feeds];
        callback(feeds.length < 15);
      });
    }
  }
};
</script>

<style lang="less">
.p-feed {
  .p-feed-main {
    padding-top: 90px;
    .jo-loadmore-head {
      top: 90px;
    }
  }
  .p-feed-list > li + li {
    margin-top: 20px;
  }
}
</style>