<template>
  <vue-ueditor-wrap ref="ue" :value="value" @input="input" :config="editorConfig" @ready="ready"></vue-ueditor-wrap>
</template>
<script>
import urlConfig from '@/utils/url'
import VueUeditorWrap from 'vue-ueditor-wrap'
export default {
  name: 'Editor',
  components: {
    VueUeditorWrap
  },
  data() {
    return {
      editor: null,
      editorConfig: {
        initialFrameHeight: 350,
        autoFloatEnabled: true,
        UEDITOR_HOME_URL: window.location.host === 'jymp.yishengzhan.cn'? '/mp/static/ueditor/' : process.env.NODE_ENV === 'development' ? '/static/ueditor/' : '/community/wx-mis/static/ueditor/',
        serverUrl: urlConfig.API_HOST + '/api/ueditor/config'
      }
    }
  },
  props: {
    value: String,
    disabled: Boolean,
  },
  mounted() {
    
  },
  watch: {
   
  },
  methods: {
    input(value) {
      this.$emit('input', value)
    },
    ready (editorInstance) {
      if(this.disabled) editorInstance.setDisabled()
    }
  },
  
}
</script>
<style lang="">
</style>
