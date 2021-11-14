import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import {  Entypo, Fontisto } from '@expo/vector-icons';

const SignUppage = () => {
    return (
            <SafeAreaView style={styles.container}>
                <View style={styles.formContainer}>

                    <Text style={{fontWeight:'bold', color:'gray'}}>First Name</Text>
                    <TextInput 
                        placeholder="First Name" style={{...
                            styles.textInput, fontSize: 15, fontWeight:'300'
                        }}></TextInput>
                    
                    <Text style={{fontWeight:'bold', color:'gray'}}>Last Name</Text>
                    <TextInput
                        placeholder="Last Name" style={{...
                            styles.textInput, fontSize: 15,fontWeight:'300'
                        }}></TextInput>
                    
                    <Text style={{fontWeight:'bold', color:'gray'}}>First Name</Text>
                    <TextInput
                        placeholder="Email Address" style={{...
                            styles.textInput, fontSize: 15,fontWeight:'300'
                        }}></TextInput>
                    
                    <Text style={{fontWeight:'bold', color:'gray'}}>Password</Text>
                    <TextInput style={{...
                            styles.textInput, fontSize: 15,fontWeight:'300'
                    }} placeholder="Password" secureTextEntry={true} />
                    <View style={{flexDirection:'row'}}>
                        <Text>By registering you agree with our </Text>
                        <Text style={{textDecorationLine:'underline'}}>Terms & Conditions </Text>
                        <Text>and </Text>
                    </View>
                    <View>
                        <Text style={{textDecorationLine:'underline', paddingTop:2}}>Privacy Policy.</Text>
                    </View>
                
                <TouchableOpacity style={{ padding: 12, backgroundColor: 'black', flexDirection: 'row', marginTop:30, borderRadius:6, alignItems:'center', justifyContent:'center' }}>
                    
                    <View style={{  }}>
                        
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Register</Text>
                        
                    </View>
                    
                    <View style={{ alignItems: 'flex-end', paddingRight: 4, paddingLeft:4 }}>
                        
                        <Fontisto name="locked" size={24} color="white" />
                        
                    </View>
                    
                </TouchableOpacity>

                        
                </View>
                
            </SafeAreaView>
    );
}
    const styles = StyleSheet.create({
        container: {
            flex:1,
            // padding: 20,
            backgroundColor: '#fff'
        },
        formContainer: {
            marginTop: 50,
            paddingHorizontal: 10
        },
        textInput: {
            borderBottomWidth: 1,
            borderColor: "#ccc",
            borderRadius: 100,
            padding: 5,
            marginBottom: 35,
        },
});

export default SignUppage;
