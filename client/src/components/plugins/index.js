import VueQuillEditor from 'vue-quill-editor'
import 'element-ui/lib/theme-chalk/index.css'
import ElementComp from './element'

export default (Vue) => {
  Vue.use(VueQuillEditor) // Vue 编辑器
  ElementComp(Vue)        // 饿了么 UI
}
