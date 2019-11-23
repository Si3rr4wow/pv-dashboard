import { routesToPaths } from './utils/routes-to-paths';

import routes from './routes';

export default new class PathBuilder {
  get build() {
    if (!this.paths) { this.paths = routesToPaths(routes); }

    return this.paths
  }
}
