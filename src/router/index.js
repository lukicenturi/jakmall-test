import Vue from 'vue'
import Router from 'vue-router'
import Delivery from '@/components/Delivery/Delivery';
import Payment from '@/components/Payment/Payment';
import Finish from '@/components/Finish/Finish';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/1',
    },
    {
      path: '/1',
      name: 'delivery',
      component: Delivery
    },
    {
      path: '/2',
      name: 'payment',
      component: Payment
    },
    {
      path: '/3',
      name: 'finish',
      component: Finish
    }
  ]
})
