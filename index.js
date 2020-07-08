/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import * as Sentry from '@sentry/react-native';

Sentry.init({
    dsn: 'xxxx',
});


AppRegistry.registerComponent(appName, () => App);
