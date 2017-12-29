import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const Splash = () => {
    return(
        <View style={styles.Wrapper}>
          <View style ={styles.titleWraper}>
              
              <Image
                style={{flex:1, height:150, width: 150}}
                source={require('../assets/images/splash.png')}
                resizeMode="contain"
              />
          </View>
          <View>
              <Text style={styles.subTitle}>Version 1.0.0</Text>
          </View>
       </View>
    )

}



const styles= {
    Wrapper : {
      backgroundColor: '#3498db',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    Title : {
      color: 'white',
      fontSize: 45,
  
    },
    subTitle : {
      color : 'white',
      fontWeight : '200',
      paddingBottom: 20
   
    },
    titleWraper :{
      justifyContent:'center',
      flex: 1
    }
  };

  
export default Splash;
