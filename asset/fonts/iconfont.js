;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-eyes" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M983.36 484.608C976 473.984 798.848 224 512 224S48 473.984 40.576 484.608c-11.456 16.448-11.456 38.336 0 54.784C48 550.08 225.152 800 512 800s464-249.92 471.36-260.544C994.88 522.944 994.88 501.056 983.36 484.608zM512 752C246.848 752 80 512 80 512S246.848 272 512 272c265.088 0 432 240 432 240S777.088 752 512 752z"  ></path>' +
    '' +
    '<path d="M512 320C405.952 320 320 406.016 320 512c0 106.048 85.952 192 192 192 105.984 0 192-85.952 192-192C704 406.016 617.984 320 512 320zM512 656c-79.424 0-144-64.576-144-144 0-79.36 64.576-144 144-144 79.36 0 144 64.64 144 144C656 591.424 591.36 656 512 656z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-duihua" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M103.501794 123.484406l800.174282 0c15.616676 0 29.871331 6.307659 40.234353 16.45681l0.040932-0.040932c10.321066 10.128685 16.72901 24.12956 16.72901 39.544645l0 550.960337c0 15.415085-6.407943 29.404704-16.72901 39.534412-0.494257 0.49528-1.030469 0.950651-1.565658 1.385557-10.197246 9.31925-23.835871 15.030321-38.709627 15.030321L588.950068 786.355555l-9.435906 16.042371-0.040932 0.061398 0.040932 0.020466-56.570413 96.151897c-6.201236 10.481725-19.880793 14.060227-30.572296 7.995091-3.502777-2.001587-6.262634-4.78191-8.137331-7.995091l-56.571437-96.151897c-0.24764-0.405229-0.473791-0.818645-0.680499-1.243317l-8.755408-14.879895L103.501794 786.356578c-15.636119 0-29.892821-6.297426-40.234353-16.45681l-0.041956 0.040932c-10.321066-10.128685-16.727986-24.118304-16.727986-39.534412L46.497499 179.443905c0-15.415085 6.40692-29.41596 16.727986-39.544645 0.494257-0.485047 1.010003-0.949628 1.545192-1.384533C74.989413 129.204687 88.606549 123.484406 103.501794 123.484406L103.501794 123.484406zM903.676076 167.506015l-800.174282 0c-3.027963 0-5.788843 1.061169-7.889691 2.809999l-0.680499 0.697895c-2.204202 2.163269-3.584642 5.155417-3.584642 8.429996l0 550.960337c0 3.27458 1.38044 6.256494 3.584642 8.420787l-0.041956 0.040932 0.041956 0.039909c2.142803 2.112104 5.191232 3.436262 8.570189 3.436262l327.560314 0 0 0.091074c7.724938 0.020466 15.244192 3.962242 19.365046 10.998495l15.245216 25.937742 0.700965 1.102101 37.20639 63.24851 37.225833-63.24851 0.021489 0.029676 14.853289-25.261337c3.543709-7.611352 11.352559-12.897751 20.437471-12.897751l327.560314 0c3.028986 0 5.788843-1.061169 7.890714-2.809999l0.679475-0.707105c2.204202-2.163269 3.584642-5.145184 3.584642-8.420787L915.832953 179.443905c0-3.27458-1.38044-6.26775-3.584642-8.429996l0.040932-0.040932-0.040932-0.040932C910.082996 168.81994 907.054009 167.506015 903.676076 167.506015L903.676076 167.506015z"  ></path>' +
    '' +
    '<path d="M300.264133 415.537018c26.245757 0 47.50699 20.86419 47.50699 46.620807 0 25.746384-21.26021 46.619784-47.50699 46.619784-26.245757 0-47.505967-20.8734-47.505967-46.619784C252.758166 436.400185 274.018376 415.537018 300.264133 415.537018L300.264133 415.537018z"  ></path>' +
    '' +
    '<path d="M500.508783 415.537018c26.245757 0 47.50699 20.86419 47.50699 46.620807 0 25.746384-21.26021 46.619784-47.50699 46.619784s-47.50699-20.8734-47.50699-46.619784C453.002816 436.400185 474.263026 415.537018 500.508783 415.537018L500.508783 415.537018z"  ></path>' +
    '' +
    '<path d="M700.753433 415.537018c26.225291 0 47.50699 20.86419 47.50699 46.620807 0 25.746384-21.281699 46.619784-47.50699 46.619784-26.245757 0-47.50699-20.8734-47.50699-46.619784C653.246443 436.400185 674.507676 415.537018 700.753433 415.537018L700.753433 415.537018z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xin-1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M514.031263 900.587226 135.016043 537.873274c-12.113899-12.916171-23.00904-27.228131-32.346709-42.551118-9.209756-15.098883-16.879436-31.207769-22.815635-47.894823-10.060123-28.318976-15.178701-70.808696-15.178701-100.106975 0-143.041834 116.358101-228.320079 259.399935-228.320079 72.010057 0 139.912563 54.723346 188.528817 106.179274C561.203632 173.724647 629.122511 119.001301 701.132568 119.001301c143.025461 0 259.383562 85.278245 259.383562 228.320079 0 28.800953-4.941546 70.840418-14.665001 98.726535-6.209422 17.746176-14.376429 34.881438-24.323988 50.895157-8.359388 13.477966-18.003026 26.249851-28.672016 37.978986l-2.037403 2.053776L514.031263 900.587226z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)