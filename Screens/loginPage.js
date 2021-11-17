import React, { useState } from 'react';
import { View, TouchableOpacity, Text, SafeAreaView, StyleSheet, TextInput, TouchableWithoutFeedback} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { users } from '../Consts/cardItemList';


const Loginpage = ({ navigation }) => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleSubmit = () =>
  {
    let exists = false;

    users.forEach(user =>{
          if (user.email === formValues.email) {
            if (user.password === formValues.password)
            {
              exists = true;
            } else
            {
              setError("Incorrect password!")
          }
          } else
          {
            setError("User does not exist!")
      }
    });

    if (exists)
    {
      navigation.navigate("HomePage");
    }
  }

  const handleChange = (name, value) => setFormValues({ ...formValues, [name]: value });

    return (
        <SafeAreaView style={[styles.container, {flex: 1}]}>
            
        <View style={{ padding: 10, borderBottomWidth: 1, flex: 1, borderBottomColor: '#eee' }}>
          <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <Entypo name="chevron-thin-left" size={27} color="#777" />
                </TouchableOpacity>
            
                <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                  <Text style={{fontWeight:'bold', fontSize:19, fontFamily: 'Poppins_400Regular'}}>My Account</Text>
                </View>
            </View>
                
                
                  <View style={styles.container}>
                          <View style={{flexDirection:'row', justifyContent:'center'}}>
                            <Text style={{...styles.title, fontFamily:'Poppins_200ExtraLight',letterSpacing:-1.6 }}>SKERBELS</Text>
                            <Text style={{...styles.title, fontFamily:'Poppins_900Black',letterSpacing:-1.8 }}>APPAREL</Text>
                          </View>
            <View style={[styles.formContainer]}>
              <View style={{paddingBottom:20}}>
                <Text style={{color:'red', textAlign:'center'}}>{ error }</Text>
              </View>
              <View style={[styles.inputShadow, styles.textInputArea, { backgroundColor: "#fff" }]}>
                <View style={{paddingHorizontal:12, paddingVertical: 10,}}>
                    <Text style={{fontWeight: "bold", color: "#777"}}>Email</Text>
                    <TextInput value={formValues.email} onChangeText={(value)=> handleChange("email", value.toLowerCase())}
                        placeholder="johndoe@gmail.com" style={{ paddingVertical: 10, borderBottomWidth:0.3, borderBottomColor:'#ccc' }} ></TextInput>
                </View>
                <View style={{paddingHorizontal:12, paddingVertical: 10,}}>
                    <Text style={{fontWeight: "bold", color: "#777"}}>Password</Text>
                    <TextInput secureTextEntry={true} value={formValues.password} onChangeText={(value)=> handleChange("password", value)}
                        placeholder="************" style={{paddingVertical: 10}}></TextInput>
                </View>
                  </View>
              </View>
                            <TouchableOpacity onPress={handleSubmit}>
                                <View style={[styles.button, { marginHorizontal:60 }]}>
                                    <Text style={styles.buttonText}>Sign In</Text>
                                </View>
            </TouchableOpacity>
            <View style={{paddingTop:20, alignItems:'center'}}>
              <Text style={{ fontWeight: 'bold', color: 'gray' }}>Forgot password?</Text>
              <View style={{paddingTop:25, flexDirection:'row'}}>
                <Text style={{ fontWeight: 'bold', color: 'gray', fontSize:14 }}>Don't have an account? </Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("SignUpPage")}>
                  <Text style={{ fontSize:16,textDecorationLine:'underline',textDecorationColor:'#000' }}>Create Account</Text>
                </TouchableWithoutFeedback>
                
              </View>
              
            </View>
            </View>
            
        </View>
        
        </SafeAreaView>
    );
}

  const styles = StyleSheet.create({
    container: {
    paddingHorizontal:10,
    height: "100%",
      paddingTop: 40,
    backgroundColor: "#fff"
    },
    title: {
      fontSize: 24,
    },
    formContainer: {
      marginTop: 50,
      marginBottom: 40,
    },
    textInputArea: {
      borderRadius: 5,
    },
    inputShadow: {
      shadowColor: '#dfdfdf',
      shadowOpacity: 0.70,
      shadowRadius: 21,
      shadowOffset: {
        width: 2, height: 2
      }
    },
    button: {
      padding: 15,
      marginTop:10,
      borderRadius: 5,
      backgroundColor: "black",
      color: "white",
      justifyContent: "center",
    },
    buttonText: {
      textAlign: "center",
      color: "white",
      fontSize: 18,
      fontWeight: "bold"
    }
  });

export default Loginpage;
