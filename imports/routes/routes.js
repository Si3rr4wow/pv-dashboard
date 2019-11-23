import convertCustomRouteConfig from './utils/convert-custom-route-config';

import Main from './main'
import About from './about'

const routes = [
  About,
  Main
];

export default convertCustomRouteConfig(routes);
