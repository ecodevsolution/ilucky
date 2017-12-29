import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar} from 'react-native';

class LoginForm extends Component {

state = {
    USER_ID :"",
    password : "",
    error: ""
}

onLoginPressed (){
    fetch('https://api.shoper.co.id/rs-login-js.php', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            USER_ID: 'adinugraha',
        })
    })
    .then((response)  => response.json())
    .then((responseJson) => {
       console.log("asdasd" +responseJson.USER_ID)
      })
}

// async onLoginPressed(){
//     try{
//         let response = await fetch('https://api.shoper.co.id/rs-login-js.php', {
//                                 method: 'POST',
//                                 headers:{
//                                     'Accept': 'application/json',
//                                     'Content-Type' : 'application/json',
//                                 },
//                                 body: JSON.stringify({
//                                     session:{
//                                         USER_ID: 'adinugraha',
//                                         password: this.state.password                                                                     
//                                     }
//                                 })
//                             });
                     
//         let res = await response.text();
//         if(response.status >= 200 && response.status < 300){
//             this.setState({error : ""});
//             let accessToken = res;
//             console.log("res Token" + accessToken);            
//         }else{
//             let error = res;
//             throw error;
//         }
//     }catch(error){
//         this.setState({error : error});
//         console.log ("error "+ error)
//     }
// }

    render() {
        return (
            <View style={styles.container}>
              <StatusBar 
                barStyle="light-content"
              />

               <TextInput
                       onChangeText = {(text) => this.setState ({USER_ID: text})}
                       placeholder="USER_ID"
                       placeholderTextColor = 'rgba(255,255,255,0.7)'
                       returnKeyType="next"
                       style={styles.input}
                       onSubmitEditing={()=> this.passwordInput.focus()}
                       keyboardType="email-address"
                       autoCapitalize="words"
                       autoCorrect={false}
                       underlineColorAndroid="transparent"
               />
               <TextInput
                       onChangeText = {(text) => this.setState ({password: text})}
                       placeholder="Password"
                       placeholderTextColor = 'rgba(255,255,255,0.7)'
                       returnKeyType="go"
                       secureTextEntry
                       style={styles.input}
                       underlineColorAndroid="transparent"
                       ref={(input) => this.passwordInput = input}
               /> 

               <TouchableOpacity onPress={this.onLoginPressed.bind(this)} style={styles.buttonContainer}>            
                       <Text style={styles.buttonText}>LOGIN</Text>
               </TouchableOpacity>
               <Text style= {styles.Title}>Create Account ? </Text>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container :{
        padding : 20
    },
    input : {
        height : 40,
        backgroundColor : 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color : '#FFF',
        paddingHorizontal : 10      
       
    },
    buttonContainer : {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText : {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700'

    },
    Title : {
        fontSize:12,
        textAlign: 'right',
        color:'#FFF'
    }
    
})
export default LoginForm;