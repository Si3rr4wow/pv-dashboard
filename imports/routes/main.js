import withLayout from '/imports/utils/with-layout';

import MainLayout from '/imports/ui/layouts/main'
import Home from '/imports/ui/pages/home'

export default {
  name: 'home',
  path: '/',
  component: withLayout(MainLayout)(Home)
};
