export default function convertCustomRouteConfig(routes = [], parentRoute) {
  return routes.map((route) => {
    const fullPath = route.path ?
      [parentRoute, route.path].filter(Boolean).join('/').replace(/\/{2,}/g, '/') : undefined;

    return {
      component: route.component,
      exact: route.exact,
      name: route.name,
      path: fullPath,
      render: route.render,
      routes: convertCustomRouteConfig(route.routes, fullPath)
    };
  });
}
