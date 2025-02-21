import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '47d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'ae0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'd76'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'b62'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '8d9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'd70'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'feb'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '757'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '4e6'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '301'),
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
