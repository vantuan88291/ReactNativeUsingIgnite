import { createStackNavigator, createAppContainer } from 'react-navigation'
import DemoscrScreenNameScreen from '../Containers/DemoscrScreenNameScreen'
import DemoScrScreen from '../Containers/DemoScrScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  DemoscrScreenNameScreen: { screen: DemoscrScreenNameScreen },
  DemoScrScreen: { screen: DemoScrScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
