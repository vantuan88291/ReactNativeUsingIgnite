import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import {getApiType} from '../Redux/demoRedux'

// Styles
import styles from './Styles/DemoScrScreenStyle'

class DemoScrScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      message: ''
    }
  }

  getApiFromSV = () => {
    this.props.getAPi()
  }
  static getDerivedStateFromProps (nextProps, prevState) {
    console.log(nextProps)
    return null
  }
  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>{this.state.message}</Text>
          <TouchableOpacity
            onPress={this.getApiFromSV}>
            <Text>get api</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    getApi: state.getApi
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAPi: () => {
      let requestAction = {
        type: getApiType.REQUEST_API
      }
      dispatch(requestAction)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoScrScreen)
