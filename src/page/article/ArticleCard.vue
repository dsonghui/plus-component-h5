<template>
  <transition>
    <div class="m-wrapper m-wbox">
      <div class="m-box-model m-art-card">
        <div 
          ref="head" 
          class="m-box-model m-justify-center m-pos-f m-head-top m-main m-bb1 m-lim-width">
          <slot name="head">
            <header class="m-box m-justify-bet m-aln-center">
              <div class="m-box m-flex-grow1 m-aln-center m-flex-base0">
                <svg 
                  class="m-style-svg m-svg-def" 
                  @click="goback">
                  <use 
                    xmlns:xlink="http://www.w3.org/1999/xlink" 
                    xlink:href="#base-back"/>
                </svg>
              </div>
              <div class="m-box-model m-flex-grow1 m-aln-center m-flex-base0 m-head-top-title">资讯详情</div>
              <div class="m-box m-flex-grow1 m-aln-center m-flex-base0 m-justify-end">
                <svg 
                  v-if="!isWechat" 
                  class="m-style-svg m-svg-def">
                  <use 
                    xmlns:xlink="http://www.w3.org/1999/xlink" 
                    xlink:href="#base-share"/>
                </svg>
              </div>
            </header>
          </slot>
        </div>
        <div 
          v-if="loading" 
          class="m-spinner pos-f">
          <div/>
          <div/>
        </div>
        <main class="m-lim-width m-box-model m-art-card-main mt90">
          <slot/>
        </main>
        <footer 
          v-if="canOprate" 
          ref="foot" 
          class="m-pos-f m-box m-aln-center m-justify-aro m-bt1 m-art-card-foot">
          <slot name="foot">
            <a 
              class="m-box-model m-aln-center" 
              @click.prevent="handelLike">
              <svg class="m-style-svg m-svg-def">
                <use :xlink:href="liked ? '#feed-like' :'#feed-unlike'"/>
              </svg>
              <span>喜欢</span>
            </a>
            <a 
              class="m-box-model m-aln-center" 
              @click.prevent="handelComment">
              <svg class="m-style-svg m-svg-def">
                <use xlink:href="#feed-comment"/>
              </svg>
              <span>评论</span>
            </a>    
            <a 
              class="m-box-model m-aln-center" 
              @click.prevent="handelShare">
              <svg class="m-style-svg m-svg-def">
                <use xlink:href="#base-share"/>
              </svg>
              <span>分享</span>
            </a>    
            <a 
              class="m-box-model m-aln-center" 
              @click.prevent="handelMore">
              <svg class="m-style-svg m-svg-def">
                <use xlink:href="#feed-more"/>
              </svg>
              <span>更多</span>
            </a>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script>
import HeadRoom from "headroom.js";
export default {
  name: "ArticleCard",
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    liked: {
      type: Boolean,
      default: false
    },
    canOprate: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      headroom: null,
      footroom: null
    };
  },
  computed: {
    isWechat() {
      return this.$store.state.BROWSER.isWechat;
    }
  },
  watch: {
    canOprate(val) {
      val &&
        this.$nextTick(() => {
          this.footroom
            ? this.footroom.init()
            : ((this.footroom = new HeadRoom(this.$refs.foot, {
                tolerance: 5,
                offset: 50,
                classes: {
                  initial: "headroom-foot",
                  pinned: "headroom--footShow",
                  unpinned: "headroom--footHide"
                }
              })),
              this.footroom.init());
        });
    }
  },
  mounted() {
    this.headroom = new HeadRoom(this.$refs.head, {
      tolerance: 5,
      offset: 50,
      classes: {
        initial: "headroom-head",
        pinned: "headroom--headShow",
        unpinned: "headroom--headHide"
      }
    });
    this.headroom.init();

    this.canOprate &&
      this.$nextTick(() => {
        this.footroom = new HeadRoom(this.$refs.foot, {
          tolerance: 5,
          offset: 50,
          classes: {
            initial: "headroom-foot",
            pinned: "headroom--footShow",
            unpinned: "headroom--footHide"
          }
        });

        this.footroom.init();
      });
  },
  methods: {
    handelLike() {
      this.$emit("on-like");
    },
    handelComment() {
      this.$emit("on-comment");
    },
    handelShare() {
      this.$emit("on-share");
    },
    handelMore() {
      this.$emit("on-more");
    },
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>
