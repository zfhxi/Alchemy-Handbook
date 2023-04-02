<template>
    <div id="vcomments"></div>
</template>

<script>
export default {
  name: 'Valine',
  mounted: function () {
    // require window
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')
    }
    this.valine = new Valine()
    this.initValine()
  },
  watch: {
    $route (to, from) {
      if (from.path != to.path) {
        this.initValine()
      }
    }
  },
  methods: {
    initValine () {
      let path = location.origin + location.pathname
      this.valine.init({
        el: '#vcomments',
        appId:  VITE_VALINE_APP_ID, // your appId
        appKey: VITE_VALINE_APP_KEY, // your appKey
        notify: false,
        verify: false,
        path: path,
        enableQQ: true,
        avatar: 'monsterid',
        requiredFields: ['nick','mail'],
        placeholder: '欢迎留言或在GitHub提交issue！'
      });
    }
  }
}
</script>