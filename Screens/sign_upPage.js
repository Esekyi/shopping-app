import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
import {  Entypo, Fontisto } from '@expo/vector-icons';




const SignUppage = ({navigation}) => {
    return (
            <SafeAreaView style={{...styles.container, flex:1}}>
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
                    
                    <Text style={{fontWeight:'bold', color:'gray'}}>Email</Text>
                    <TextInput
                        placeholder="johndoe@gmail.com" style={{...
                            styles.textInput, fontSize: 15,fontWeight:'300'
                        }}></TextInput>
                    
                    <Text style={{fontWeight:'bold', color:'gray'}}>Password</Text>
                    <TextInput style={{...
                            styles.textInput, fontSize: 15,fontWeight:'300'
                    }} placeholder="**************" secureTextEntry={true} />
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:15}}>By registering you agree with our </Text>
                        <Text style={{textDecorationLine:'underline',fontSize:15.5}}>Terms & Conditions </Text>
                        <Text style={{fontSize:15}}>and </Text>
                    </View>
                    <View>
                        <Text style={{textDecorationLine:'underline', paddingTop:2,fontSize:15.5}}>Privacy Policy.</Text>
                    </View>
                
                <TouchableOpacity style={{ padding: 14, backgroundColor: 'black', flexDirection: 'row', marginTop:50, borderRadius:6, alignItems:'center', justifyContent:'space-between' }}>
                        <Fontisto name="locked" size={20} color="transparent" />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Register</Text>
                        <Fontisto name="locked" size={20} color="white" />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("LoginPage")} style={{flex:1}}>
                    <View style={{ marginHorizontal: 20,padding:15, borderWidth:1, flexDirection: 'column', borderRadius: 4,borderColor:'#ccc',marginBottom:10, alignItems: 'center', justifyContent: 'center', marginTop:20}}>
                        <Text style={{color:'black', fontSize:15, fontWeight:'bold'}}>Already have an account?</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </SafeAreaView>
    );
}
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#fff',
            flex: 1,
            justifyContent: "space-between"
        },
        formContainer: {
            marginTop: 50,
            paddingHorizontal: 15,
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
