import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
// Custom directive
Vue.directive("rainbow",{
  bind(el){
    el.style.color = "#" + Math.random().toString().slice(2,8)
  }
})
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

// Custom Filter
Vue.filter("to-uppercase",data=> data.toUpperCase())

Vue.filter("shotter",data=> data.slice(0,100) + "...")

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
