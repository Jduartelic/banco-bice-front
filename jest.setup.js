// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import { setConfig } from 'next/config';
// import config from './next.config';

// // Make sure you can use "publicRuntimeConfig" within tests.
// setConfig(config.publicRuntimeConfig);
// configure({ adapter: new Adapter() });

import { setConfig } from 'next/config';
import generateNextConfig from './next.config';
// or
// import * as generateNextConfig from "./next.config"

// Make sure you can use "publicRuntimeConfig" within tests
setConfig({
  publicRuntimeConfig: generateNextConfig('', {}).publicRuntimeConfig,
});
