import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '@/layouts/index.vue';
import i18n from '@/locales';
const { global } = i18n;
export const constantRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
    },
    hidden: true,
  },
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/errorPage/401.vue'),
    hidden: true,
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/errorPage/404.vue'),
    hidden: true,
  },
];

export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/datacloud',
    name: 'datamount',
    meta: { title: global.t('route.dataset'), icon: 'icon-data' },
    children: [
      {
        path: '/datacloud',
        name: 'datacloud',
        component: () => import('@/views/datamount/datacloud.vue'),
        meta: {
          title: global.t('route.datacloud'),
          icon: 'icon-link-cloud',
        },
      },
      {
        path: '/dataset',
        name: 'dataset',
        component: () => import('@/views/datamount/dataset.vue'),
        meta: {
          title: global.t('route.datamount'),
          icon: 'icon-code',
        },
      }
    ]
    },
    {
      path: '/datadiscover',
      component: Layout,
      name: 'datadiscover',
      meta: { title: global.t('route.datadiscover'), icon: 'icon-aiming' },
      children: [
        {
          path: '/datafind',
          name: 'datafind',
          component: () => import('@/views/datadiscover/datafind.vue'),
          meta: {
            title: global.t('route.datafind'),
            icon: 'icon-find-one',
          },
        },
        {
          path: '/node',
          name: 'node',
          component: () => import('@/views/datadiscover/node.vue'),
          meta: {
            title: global.t('route.node'),
            icon: 'icon-connection-point',
          },
        },
        {
          path: '/task',
          name: 'task',
          component: () => import('@/views/datadiscover/task.vue'),
          meta: {
            title: global.t('route.task'),
            icon: 'icon-list',
          },
        }
      ]
      },
      {
        path: '/datasearch',
        component: Layout,
        name: 'datasearch',
        meta: { title: global.t('route.datasearch'), icon: 'icon-search' },
        children: [
          {
            path: '/datascreen',
            name: 'datascreen',
            component: () => import('@/views/datasearch/datascreen.vue'),
            meta: {
              title: global.t('route.datascreen'),
              icon: 'icon-find',
            },
          },
          {
            path: '/dataretrieve',
            name: 'dataretrieve',
            component: () => import('@/views/datasearch/dataretrieve.vue'),
            meta: {
              title: global.t('route.dataretrieve'),
              icon: 'icon-filter',
            },
          },
        ]
        },
        {
          path: '/datacompute',
          name: 'datacompute',
          component: Layout,
          meta: {
            title: global.t('route.datacompute'),
            icon: 'icon-new-computer',
          },
          children: [
            {
              path: '/compute',
              name: 'compute',
              component: () => import('@/views/datacompute/compute.vue'),
              meta: {
                title: global.t('route.compute'),
                icon: 'icon-data-server',
              },
            }
          ],
        },
        {
          path: '/systemmanage',
          name: 'systemmanage',
          component: Layout,
          meta: {
            title: global.t('route.systemmanage'),
            icon: 'icon-system',
          },
          children: [
            {
              path: '/usermanage',
              name: 'usermanage',
              component: () => import('@/views/systemmanage/usermanage.vue'),
              meta: {
                title: global.t('route.usermanage'),
                icon: 'icon-people',
              },
            }
          ],
        },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

// reset router
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}

export default router;
