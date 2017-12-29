import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, KeyboardAvoidingView} from 'react-native';
import LoginForm from './loginform';

class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
               <View style={styles.logoContainer}>
                    <Image 
                        style={styles.logo}
                        source = {require('../assets/images/splash.png')}
                    />
                   
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
           </KeyboardAvoidingView>
           
        );
    }
}

const styles = {
    container :{
        flex :1,
        backgroundColor: '#3498db'
    },
    logoContainer : {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    formContainer :{

    } ,
    logo : {                
        height: 55,
        width: 150
    },
    Title : {
        color :'white',
        marginTop: 10,
        width: 150,
        textAlign: 'center'
    }
};

export default Login;