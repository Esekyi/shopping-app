import React from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { users } from '../Consts/cardItemList';


const width = (Dimensions.get("screen").width / 2) - 15


const Checkout = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
                <View style={{flexDirection:'row', marginBottom:25, paddingHorizontal:10}}>
                    <TouchableOpacity onPress={navigation.goBack}>
                        <Entypo name="chevron-thin-left" size={25} color="#777" />
                    </TouchableOpacity >
                    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                        <Text style={{fontSize:18, fontWeight:'600'}}>Checkout</Text>
                    </View>
                </View>
            <ScrollView style={{paddingHorizontal:10}}>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection:'row', marginBottom:15 }}>
                    <Text style={{color:'rgb(123,130,152)', fontWeight:'500'}}>signed in as </Text>
                    <Text style={{fontWeight:'700',letterSpacing:0.5}}>{users[0].email}</Text>
                </View>
                <View style={[ { }]}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign:'center', marginVertical:10 }}>
                            Shipping
                        </Text>
                    <View style={[styles.inputShadow, { padding: 10, backgroundColor: 'white', borderRadius: 6 }]}>
                        <View style={{flexDirection:'row'}}>
                                    <Text style={{color:'rgb(123,130,152)', fontWeight:'600', width}}>First Name</Text>
                                    <Text style={{color:'rgb(123,130,152)', fontWeight:'600', width}}>Last Name</Text>
                                </View>
                        <View style={{ flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor: '#ccc', paddingHorizontal:5}}>
                            <View style={{ justifyContent:'flex-start', width,}}>
                                <TextInput placeholder="First Name" style={{ paddingVertical: 10 }} >{users[0].Fname }</TextInput>
                            </View>

                            <View style={{ borderLeftWidth: 0.5, borderLeftColor: '#ccc', justifyContent: 'flex-end' }}>
                                <TextInput placeholder="Last Name" style={{ paddingVertical: 10, paddingLeft: 10, width }} >{users[0].Lname }</TextInput>
                        </View>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <View style={{borderBottomWidth: 0.5, borderBottomColor: '#ccc' }}>
                                <Text style={{color:'rgb(123,130,152)', fontWeight:'600'}}>Address</Text>
                                <TextInput placeholder="Street Address" style={{ paddingVertical: 10, paddingLeft: 10, width }}></TextInput>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{color:'rgb(123,130,152)', fontWeight:'600', width}}>City</Text>
                                    <Text style={{color:'rgb(123,130,152)', fontWeight:'600', width}}>State</Text>
                                </View>
                                <View style={{flexDirection:'row', borderBottomWidth:0.5, borderBottomColor: '#ccc' }}>
                                    <TextInput placeholder="City" style={{ paddingVertical: 10, paddingLeft: 10, width }}></TextInput>   
                                    <TextInput placeholder="State" style={{ paddingVertical: 10, paddingLeft: 10, width, borderLeftWidth: 0.5, borderLeftColor: '#ccc' }}></TextInput>
                                </View>
                                
                            <View style={{ marginTop: 10, borderBottomWidth: 0.5, borderBottomColor: '#ccc' }}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{color:'rgb(123,130,152)', fontWeight:'600', width}}>Postal</Text>
                                    <Text style={{color:'rgb(123,130,152)', fontWeight:'600', width}}>Country</Text>
                                </View>
                                <View style={{flexDirection:'row',borderBottomWidth: 0.5, borderBottomColor: '#ccc'}}>
                                    <TextInput placeholder="ZIP code" style={{ paddingVertical: 10, paddingLeft: 10, width }}></TextInput>   
                                    <TextInput placeholder="Country" style={{ paddingVertical: 10, paddingLeft: 10, width, borderLeftWidth: 0.5, borderLeftColor: '#ccc' }}></TextInput>
                                    </View>
                                <View style={{ marginTop:10 }}>
                                    <Text style={{color:'rgb(123,130,152)', fontWeight:'600'}}>Phone Number</Text>
                                    <TextInput placeholder="+1 (209)338-9028" style={{ paddingVertical: 10, paddingLeft: 10, width }}></TextInput>
                                </View>
                            </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.inputShadow,[{marginTop:15, paddingVertical: 20,backgroundColor:'#fff',paddingHorizontal:10 }]}>
                        <View>
                            <Text style={{fontSize:18, fontWeight:'bold'}}>Summary</Text>
                        </View>
                        <View style={{marginTop:10, flexDirection:'row'}}>
                            <Text style={{ fontWeight: '600', fontSize: 15 }}>Subtotal</Text>
                            <Text>$</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={[styles.continuePayShadow,{justifyContent:'center', alignItems:'center', backgroundColor:'#fff', padding:20}]}>
                <View style={{backgroundColor:'#000', paddingHorizontal:30, paddingVertical: 10, borderRadius: 4}}>
                    <Text style={{fontSize:20, fontWeight:'700', color:'#fff'}}>Continue to Payment</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    inputShadow: {
        shadowColor: '#dfdfdf',
        shadowOpacity: 0.70,
        shadowRadius: 21,
        shadowOffset: {
            width: 2, height: 2,
        }
    },
    continuePayShadow: {
        shadowColor: '#dfdfdf',
        shadowOpacity: 0.70,
        shadowRadius: 7,
        shadowOffset: {
            width: 0, height: -7,
        }
    },
})

export default Checkout;
