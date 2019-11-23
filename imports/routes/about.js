import withLayout from '/imports/utils/with-layout';

import MainLayout from '/imports/ui/layouts/main'
import About from '/imports/ui/pages/about'

export default {
  name: 'about',
  path: '/about',
  component: withLayout(MainLayout)(About)
};
