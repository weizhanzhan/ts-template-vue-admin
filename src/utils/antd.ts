
import Vue from 'vue'
import WxContainer from '../components/Container/index.vue'
import { message } from 'ant-design-vue'

const selfComponent = [
    WxContainer
]
selfComponent.forEach(component => {
    Vue.component(component.name, component)
})
Vue.prototype.$message = message
