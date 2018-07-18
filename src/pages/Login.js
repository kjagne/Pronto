import React from 'react';
import { StyleSheet, 
          Text, 
          View,
          TextInput,
          TouchableOpacity

} from 'react-native';
//import Login from './src/pages/Login';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.logincontainer}>
          <TextInput underlineColorAndroid='transparent' 
          placeholder='Email' style={styles.textinput}/>

          <TextInput underlineColorAndroid='transparent' 
          placeholder='Password' style={styles.textinput}/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  logincontainer:{
    alignItems: 'center',
  },

  textinput: {
    color:'white',
    alignSelf: 'stretch',
    padding: 12,
    marginBottom: 20,
    backgroundColor:'rgba(0,0,0, 0.2)',
    borderColor:'#000',
    borderWidth: 0.6,
    
  }
});
