<template>
  <div>
    <VueUeditorWrap class="aaasss" ref="myEditor" v-model="defaultMsg" :config="ueConfig" @ready="onEditorReady" />
    <!-- <script id="editor" type="text/plain"></script> -->
  </div>
</template>
<script>
import VueUeditorWrap from 'vue-ueditor-wrap'
export default {
  name: 'Editor',
  components: {
    VueUeditorWrap
  },
  data() {
    return {
      editor: null,
      myConfig: {

      },
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    defaultMsg: {
      type: String
    },
    ueConfig: {
      type: Object
    },
    value: {
      type: String
    }
  },
  created() {
    // getQiNiuToken().then(res => {
    //   window.globalQiuToken = res
    // })
  },
  mounted() {
    console.log('富文本', window)
    console.log('window.UE===', window.UE)
    const _this = this
    console.log('_this=====', _this)

    // this.editor = window.UE.getEditor('editor', this.ueConfig) // 初始化UE
    // console.log('this.editor========== ', this.editor);
    // console.log(this.ueConfig, 'this.ueConfig')

    // this.editor.addListener('ready', function () {
    //   if (_this.disabled) {
    //     _this.editor.setDisabled()
    //   } else {
    //     _this.editor.setContent(_this.defaultMsg) // 确保UE加载完成后，放入内容。
    //   }
    // })
    // this.editor.addListener('contentChange', () => {
    //   this.$emit('input', this.editor.getContent())
    //   this.$emit('change', this.editor.getContent())
    // })


  },
  watch: {
    // defaultMsg: function(val) {
    //   const con = val || ''
    //   this.editor.ready(() => {
    //     this.editor.setContent(con)
    //   })
    // },
    // value: function(value) {
    //   value === this.editor.getContent() || this.editor.setContent(value)
    // }
  },
  methods: {
    // getUEContent() {
    //   // 获取内容方法
    //   return this.editor.getContent()
    // }

    onEditorReady() {
      console.log(111111)
      // 修改样式
      // const editor = this.$refs.ueditorWrap.editor;
      // debugger
      // const body = editor.document.body;
      // body.style.backgroundColor = 'lightblue';
      // body.style.color = 'red';
    },

  },
  destroyed() {
    // this.editor.destroy()
  }
}
</script>
<style lang="scss" scoped></style>
