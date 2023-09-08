import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router'
import "@/assets/app.css"

Vue.use(VueResource);
// Custom directive
// Vue.directive("rainbow",{
//   bind(el){
//     el.style.color = "#" + Math.random().toString().slice(2,8)
//   }
// })
Vue.directive("theme",{
  bind(el,binding){
    if(binding.value == "wide"){
      el.style.maxWidth = "1280px"
    }else if(binding.value == "narrow"){
      el.style.maxWidth = "580px"
    }
    if(binding.arg == "background"){
      el.style.background = "#ddd"
      el.style.padding = "30px"
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
