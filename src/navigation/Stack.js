import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import DetailsScreen from "../screens/Details";
import SettingsScreen from "../screens/Settings";
import { createStackNavigator } from "@react-navigation/stack";

const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const Settings = () => {
 return (
  <SettingsStack.Navigator>
   <SettingsStack.Screen name="Profile" component={ProfileScreen} />
   <SettingsStack.Screen name="Settings" component={SettingsScreen} />
  </SettingsStack.Navigator>
 );
};

const Home = () => {
 return (
  <HomeStack.Navigator>
   <HomeStack.Screen name="Home" component={HomeScreen} />
   <HomeStack.Screen name="Details" component={DetailsScreen} />
  </HomeStack.Navigator>
 );
};

export { Home, Settings };
