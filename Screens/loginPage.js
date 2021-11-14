import React from 'react';
import { View, TouchableOpacity, Text, SafeAreaView, StyleSheet, TextInput, ScrollView } from 'react-native';
import {  Entypo } from '@expo/vector-icons';

const Loginpage = ({ navigation }) =>
{
    return (
        <SafeAreaView style={{flex: 1}}>
            
            <View style={{ padding: 10, borderBottomWidth: 1, flex: 1, borderBottomColor: '#eee' }}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <Entypo name="chevron-thin-left" size={27} color="#777" />
                </TouchableOpacity>
                <ScrollView>
                    <View style={SkertStyles.container}>
                        <Text style={SkertStyles.title}>Welcome</Text>
                        <Text style={SkertStyles.title}>Back 💋</Text>
                        <View style={SkertStyles.formContainer}>
                            <TextInput
                                placeholder="Enter your email" style={SkertStyles.textInput}></TextInput>
                            <TextInput secureTextEntry={true}
                                placeholder="Enter your password" style={SkertStyles.textInput}></TextInput>
                            <TouchableOpacity onPress={() => navigation.navigate("SignUpPage")}>
                                <View style={SkertStyles.button}>
                                    <Text style={SkertStyles.buttonText}>Sign In</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

  const SkertStyles = StyleSheet.create({
    container: {
    //   display: 'flex',
        justifyContent: "center",
        paddingLeft: 50,
        paddingRight: 50,
          height: "100%",
        paddingTop: 50,

      
    },
    title: {
      fontSize: 50,
      fontWeight: "900",
    },
    formContainer: {
      marginTop: 50
    },
    textInput: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 100,
      padding: 15,
      marginBottom: 15
    },
    button: {
      padding: 15,
      borderRadius: 100,
      backgroundColor: "blue",
      color: "white",
      display: "flex",
      justifyContent: "center"
    },
    buttonText: {
      textAlign: "center",
      color: "white",
      fontSize: 18,
      fontWeight: "bold"
    }
  });

export default Loginpage;
