import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { users } from '../Consts/cardItemList';
import { Ionicons, SimpleLineIcons, Octicons,Entypo, FontAwesome } from '@expo/vector-icons';

const Myaccount = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor:'#fff', flex:1}}>
            <View style={{ flexDirection: 'row', justifyContent:'space-between', paddingHorizontal:20}}>
                <TouchableOpacity onPress={()=>navigation.navigate('HomePage')}>
                    <Ionicons name="home-outline" size={24} color="black" />
                    <Text style={{ fontWeight:'700', marginLeft: -9.5, color:'rgb(70,70,70)'}}>HOME</Text>
                </TouchableOpacity>
                <View style={{justifyContent:'center'}}>
                    <Text style={{fontWeight:'500', fontSize:19, color:'#000'}}>My Account</Text>
                </View>
                <View style={{justifyContent:'center'}}><SimpleLineIcons name="logout" size={24} color="black" /></View>
            </View>

            <View style={{paddingHorizontal:10, paddingTop:30}}>
                <View style={{ marginBottom:10}}>
                    <Text style={{fontSize:32, fontWeight:'600', color:'rgb(123,130,152)'}}> Hi, {users[0].Fname}.</Text>
                </View>
                <View style={[styles.inputShadow,styles.AccountList, { backgroundColor:'#fff'}]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',   borderBottomWidth: 1, borderBottomColor:"rgb(234,231,233)", paddingHorizontal:15, paddingTop:25, paddingBottom:25 }}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{marginRight:10, alignItems:'center'}}>
                                <Octicons name="package" size={24} color="rgb(123,130,152)" />  
                            </View>
                            <View style={{justifyContent:'center'}}>
                                <Text style={{ fontSize:19, fontWeight:'500'}}>My Orders</Text>
                            </View>
                        </View>
                        <View style={{justifyContent:'flex-end'}}>
                            <Entypo name="chevron-small-right" size={24} color="rgb(123,130,152)" />
                        </View>
                    </View>
                    
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',   borderBottomWidth: 1, borderBottomColor:"rgb(234,231,233)", paddingHorizontal:15, paddingTop:25, paddingBottom:25 }}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{marginRight:10, alignItems:'center'}}>
                                <Ionicons name="md-share-outline" size={25} color="rgb(123,130,152)" />
                            </View>
                            <View style={{justifyContent:'center'}}>
                                <Text style={{ fontSize:19, fontWeight:'500'}}>Share with friends</Text>
                            </View>
                        </View>
                        <View style={{justifyContent:'flex-end'}}>
                            <Entypo name="chevron-small-right" size={24} color="rgb(123,130,152)" />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal:15, paddingTop:25, paddingBottom:25 }}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{marginRight:10, alignItems:'center'}}>
                                <FontAwesome name= "heart-o" size={24} color= 'rgb(123,130,152)'  />
                            </View>
                            <View style={{justifyContent:'center'}}>
                                <Text style={{ fontSize:19, fontWeight:'500'}}>My Favorites</Text>
                            </View>
                        </View>
                        <View style={{justifyContent:'flex-end'}}>
                            <Entypo name="chevron-small-right" size={24} color="rgb(123,130,152)" />
                        </View>
                    </View>
                </View>
                <View style={{marginTop:40}}>
                    <Text style={{ fontSize: 20, fontWeight: '500', color: 'rgb(70,70,70)' }}>Recently Viewed</Text>
                    <View style={{ paddingVertical: 20, alignItems:'center', borderWidth:1, borderColor:'rgb(234,231,231)', marginTop:20}}>
                        <Entypo name="eye-with-line" size={25} color="rgb(123,130,152)" />
                        <Text style={{marginHorizontal:110, textAlign:'center', padding:10, color:'rgb(123,130,152)'}}>Start browsing to have your Items show uo here</Text>
                    </View>
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
    AccountList: {
        borderRadius:15,
    }
})

export default Myaccount;
