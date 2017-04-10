import Vue from 'vue'
import Router from 'vue-router'

import Splash from '@/components/Splash'
import Items from '@/components/Items'
import Item from '@/components/Item'

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
      path: '/items/:id',
      name: 'Item',
      component: Item,
      props: true
    }
  ]
})
