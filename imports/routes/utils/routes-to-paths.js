const pathBuilder =
  path => (params = {}) => path.replace(/\/:(\w*)\??/g, (_, param) => params[param] ? `/${params[param]}` : '');

export function routeToPath(route) {
  const paths = {};

  if (route.name) {
    paths[route.name] = pathBuilder(route.path);
  }

  if (route.routes) {
    Object.assign(paths, routesToPaths(route.routes))
  }

  return paths;
}

export function routesToPaths(routes) {
  return routes.reduce(
    (paths, route) => Object.assign(paths, routeToPath(route)), {}
  );
}
