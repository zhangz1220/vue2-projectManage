<template>
  <div style="height: 100%;background: #fff;padding: 20px;">
    <UE :defaultMsg="formData.content" :ueConfig="ueConfig" ref="ue"></UE>
  </div>
</template>

<script>
import UE from '@/components/Editor'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'App',
  mounted() {

  },
  components: {
    UE
  },
  data() {
    return {
      formData: {
        content: '<p>专精特新企业专精特新企业专精特新企业专精特新企业专精特新企业专精特新企业专精特新企业专精特新企业专精特新企业专精特新企业</p>'
      },
      ueConfig: {
        toolbars: [[
          'link',
          'fullscreen', 'source', '|', 'undo', 'redo', '|',
          'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', '|',
          'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
          'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
          'directionalityltr', 'directionalityrtl', 'indent', '|',
          'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'touppercase', 'tolowercase', '|',
          'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
          'emotion', 'map', 'insertcode', 'background', '|',
          'horizontal', 'date', 'time', 'spechars', '|',
          'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', '|',
          'print', 'kityformula', 'preview',
        ]],
        autoHeightEnabled: false,// 编辑器不自动被内容撑高
        initialFrameHeight: 600, // 初始容器高度
        initialFrameWidth: '100%',// 初始容器宽度
        serverUrl: '',
        UEDITOR_HOME_URL: '/UEditor/',
        maximumWords: '100000000'
      },
    }
  },
  methods: {

  },
}
</script>
<style lang="scss" scoped></style>