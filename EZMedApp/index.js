/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Home from './home.js'; // Import your home.js file
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Home); // Use Home as the registered component