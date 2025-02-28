import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '466'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '80e'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '711'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '1ce'),
            routes: [
              {
                path: '/api',
                component: ComponentCreator('/api', '98a'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contracts/',
                component: ComponentCreator('/contracts/', '4a6'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contracts/Gateway',
                component: ComponentCreator('/contracts/Gateway', '57b'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/deploymentAddresses',
                component: ComponentCreator('/deploymentAddresses', '872'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/guides/',
                component: ComponentCreator('/guides/', '837'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/guides/GatewayOrders',
                component: ComponentCreator('/guides/GatewayOrders', '05a'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/guides/sender',
                component: ComponentCreator('/guides/sender', 'fba'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '1d4'),
                exact: true,
                sidebar: "contractSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
