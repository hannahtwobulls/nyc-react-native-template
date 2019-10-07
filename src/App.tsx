import { createBottomTabNavigator } from 'react-navigation';
import { Home, Settings } from './containers';

const App = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  Settings: {
    screen: Settings,
  },
});

export default App;
