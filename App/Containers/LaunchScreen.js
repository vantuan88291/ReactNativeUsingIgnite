import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'
export default class LaunchScreen extends Component {
  goTo = () => {
    this.props.navigation.navigate('DemoScrScreen')
  }
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch'/>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo}/>
          </View>

          <View style={styles.section}>
            <Image source={Images.ready}/>
            <TouchableOpacity
              onPress={this.goTo}
              style={{padding: 20}}>
              <Text style={{color: 'white'}}>Go to</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    )
  }
}
