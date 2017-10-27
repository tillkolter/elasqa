import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/corpus',
      name: 'corpus-manager',
      component: require('@/components/CorpusManager').default
    },
    {
      path: '/elastic',
      name: 'elastic-manager',
      component: require('@/components/ElasticManager').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
