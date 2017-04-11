import Vue from 'vue'
import Router from 'vue-router'

import Splash from '@/components/Splash'

import Items from '@/components/Items'
import Item from '@/components/Item'
import Helpfiles from '@/components/Helpfiles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Splash',
      component: Splash
    },
    {
      path: '/items',
      name: 'Items',
      component: Items
    },
    {
      path: '/items/:entityReference',
      name: 'Item',
      component: Item,
      props: true
    },
    {
      path: '/helpfiles',
      name: 'Helpfiles',
      component: Helpfiles
    }
  ]
})
