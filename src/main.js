import Vue from 'vue'
import App from './App.vue'

import MyButton from './components/button'
import MyDialog from './components/dialog'
import MyInput from './components/input'
import MySwitch from './components/switch'
import MyRadio from './components/radio'
Vue.config.productionTip = false

Vue.component(MyButton.name, MyButton)
Vue.component(MyDialog.name, MyDialog)
Vue.component(MyInput.name, MyInput)
Vue.component(MySwitch.name, MySwitch)
Vue.component(MyRadio.name, MyRadio)

new Vue({
  render: h => h(App)
}).$mount('#app')
