import React from 'react';
import { StyleSheet, 
          Text, 
          View,
          TextInput,
          Image

} from 'react-native';
import Login from './src/pages/Login';

export default class App extends React.Component {
  render() {
    return (
      <View  style={styles.vcontainer} >
        <Image source={require('./src/images/img1.jpg')} style={styles.container}/>
          

        
        <Login/>
        </View>

        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    padding:20,
    justifyContent: 'center',
  }, 
  vcontainer:{
    flex: 1,
    justifyContent: 'center',
    


  }


  
});
