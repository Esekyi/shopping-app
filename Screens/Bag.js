import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity,Image, TouchableWithoutFeedback } from 'react-native';
import Appheader from '../components/Appheader';
import { FontAwesome, Entypo, SimpleLineIcons, AntDesign, Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import storeItems, { bag } from '../Consts/cardItemList';
import { useBag } from '../providers/bagProvider';

const Bag = ({ navigation }) =>
{
    const { bag, remove } = useBag();
    const estShipping = 12.90;

    const subtotal = (() =>
    {
        var output = 0;
        bag.forEach(item => output += parseFloat(item.price));
        return output;
    })();

    const total = bag.length < 1 ? 0 : subtotal + estShipping;

    const [isFavorite, setIsFavorite] = useState(false);
    
    return (
        <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            {/* <Appheader /> */}
            <View >
                <TouchableOpacity onPress={navigation.goBack}>
                    <View style={{padding: 10,  flexDirection: 'row', alignItems: 'center', marginTop: 50, justifyContent: 'space-between',borderBottomWidth: 0.5,borderBottomColor: '#eee'}}>
                        <Entypo name="chevron-thin-left" size={27} color="#777" />
                        {/* <FontAwesome name={isFavorite ? "heart" : "heart-o"} size={27} color={'#7770'} /> */}
                        <TouchableOpacity onPress={()=>navigation.navigate('HomePage', storeItems)}>
                            <View style={{flexDirection:'row', alignItems:'flex-start'}}>
                                <Text style={{fontSize: 22, fontFamily: 'Poppins_700Bold_Italic', letterSpacing:-1.8}}>SKERBEL APPARELS</Text>
                                <Text style={{fontSize: 14}}>®️</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{flexDirection: "row"}}>
                            {/* <TouchableOpacity style={{marginRight: 15}} onPress={()=>setIsFavorite(!isFavorite)} >    */}
                                {/* <FontAwesome name={isFavorite ? "heart" : "heart-o"} size={27} color={isFavorite ? 'rgb(426,42,68)' : '#777'} />
                            </TouchableOpacity> */}
                            <TouchableOpacity>
                                <SimpleLineIcons name="handbag" size={29} color="#777" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </TouchableOpacity>
            </View>
            <ScrollView style={{flex: 1}}>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize: 20, fontFamily: 'Poppins_600SemiBold',marginTop: 20, marginBottom: 20}}>Shopping Bag ({bag.length})</Text>
                </View>

                {bag.map(item=> <View style={{ padding: 20 }}>
                    <View key={item.id} style={{ flexDirection:'row', flex:1, paddingBottom: 20}}>
                        <Image source={item.image}
                            style={{
                                width: 70,
                                resizeMode: 'contain',
                                height: 70,
                                marginRight: 10,
                                marginTop:15
                            }} />
                        <View style={{flex: 1, marginRight:50}}>
                            <Text style={{ fontFamily: 'Poppins_400Regular', letterSpacing: -0.7, color: '#000' }}>{item.name}</Text>
                             <View style={{marginTop: 8}}>
                                <Text style={{color:'#777', fontSize: 13.5}}>{item.productNumber}</Text>
                            </View>
                            <View style={{marginTop: 3}}>
                                <Text style={{color:'#777', fontSize:12}}>size: {item.size}</Text>
                            </View>
                            <View style={{paddingTop: 4}}>
                                <Text style={{color:'#777', fontSize:12}}>QTY: {item.quantity}</Text>
                            </View>
                            
                            <View style={{ marginTop: 10, flexDirection: 'row' }}>
                                <View>
                                    <Entypo name="resize-100-" size={14} color="#777" />
                                </View>
                                <Text style={{ marginLeft: 3, color: '#777', fontSize: 12, marginRight: 19 }}>Edit size</Text>
                                <AntDesign name="close" size={16} color="#777" />
                                <TouchableWithoutFeedback onPress={()=> remove(item)}>
                                    <Text style={{ marginLeft: 3, color: '#777', fontSize: 12, marginRight: 19 }}>Remove</Text>
                                </TouchableWithoutFeedback>
                                <TouchableOpacity style={{marginRight: 15, flexDirection: 'row'}} onPress={()=>setIsFavorite(!isFavorite)} >   
                                    <FontAwesome name={isFavorite ? "heart" : "heart-o"} size={15} color={isFavorite ? 'rgb(426,42,68)' : '#777'} />
                                    <Text style={{ marginLeft: 3, color: '#777', fontSize: 12, marginRight: 19, paddingTop: 1 }}>Move to Favorites</Text>
                                </TouchableOpacity>
                                
                            </View>
                           
                        </View>
                       

                        <View style={{alignItems:'flex-end'}}>
                            <Text>${item.price.toFixed(2)}</Text>
                        </View>
                        
                    </View>
                </View>)}
                


                <View style={{ backgroundColor: 'rgb(249,247,247)', paddingLeft: 20, paddingRight:20, paddingBottom:20 }}>
                    <View style={{paddingTop: 25}}>
                        <Text style={{fontSize: 15, fontFamily: 'Poppins_500Medium'}}>ORDER SUMMARY</Text>
                    </View>
                    <View style={{flexDirection:'row', paddingTop:25, flex:1}}>
                        <Text style={{ color: '#777',}}>Subtotal: </Text>
                        <View style={{alignItems:'flex-end', flex:1}}>
                            <Text style={{ color: '#777',}}>${subtotal.toFixed(2)}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', paddingTop:5}}>
                        <Text style={{ color: '#777',}}>Estimated Shipping:</Text>
                        <View style={{alignItems:'flex-end', flex:1}}>
                            <Text style={{ color: '#777',}}>${estShipping.toFixed(2)}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', paddingTop:5}}>
                        <Text style={{fontSize: 15, fontFamily: 'Poppins_500Medium'}}>TOTAL:</Text>
                        <View style={{alignItems:'flex-end', flex:1}}>
                            <Text style={{ fontSize: 15, fontFamily: 'Poppins_500Medium' }}>${total.toFixed(2)}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingTop: 10 }}>
                    <View style={{paddingRight:8}}>
                        <Ionicons name="md-shield-checkmark-outline" size={24} color="rgb(96,96,96)" />
                    </View>
                    <View style={{paddingTop:5}}>
                        <Text style={{color:"rgb(96,96,96)"}}>AUTHENCITY GUARANTEED</Text>
                    </View>
                    <View style={{alignItems:'flex-end', flex:1, paddingTop:5}}>
                        <Text style={{color:'rgb(145,14,27)', fontSize: 20}}>+</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingTop: 20 }}>
                    <View style={{paddingRight:8}}>
                        <MaterialCommunityIcons name="truck-outline" size={24} color="rgb(96,96,96)" />
                    </View>
                    <View style={{paddingTop:5}}>
                        <Text style={{color:"rgb(96,96,96)"}}>IN STOCK & READY TO SHIP</Text>
                    </View>
                    <View style={{alignItems:'flex-end', flex:1, paddingTop:5}}>
                        <Text style={{color:'rgb(145,14,27)', fontSize: 20}}>+</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingTop: 20 }}>
                    <View style={{paddingRight:8}}>
                        <MaterialCommunityIcons name="package-variant" size={25} color="rgb(96,96,96)" />
                    </View>
                    <View style={{paddingTop:5, paddingBottom:35}}>
                        <Text style={{color:"rgb(96,96,96)"}}>RETURNS ACCEPTED</Text>
                    </View>
                    <View style={{alignItems:'flex-end', flex:1, paddingTop:5}}>
                        <Text style={{color:'rgb(145,14,27)', fontSize: 20}}>+</Text>
                    </View>
                </View>
                
            </ScrollView>

            <View style={{paddingTop:15, alignItems:'center', borderTopWidth:1, borderColor:'#eee'}}>
                <Text style={{color:"rgb(96,96,96)", fontSize:11}}>Estimated Shipping has been included</Text>
            </View>
            
            <View style={{ marginHorizontal: 8, alignContent: 'center' }}>

                <View style={{ flexDirection: 'row', marginTop: 15 }}>

                    <TouchableOpacity style={{ backgroundColor: 'rgb(145,14,27)', flex: 1, marginRight: 5, padding: 10, alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}>CHECKOUT</Text>
                        <Text style={{ color: '#fff', paddingTop:2, fontSize:13, fontWeight:'bold' }}>${total.toFixed(2)}</Text>
                    </TouchableOpacity>

                    
                    <TouchableOpacity style={{ backgroundColor: '#000', flex: 1, padding: 10, alignItems: 'center', flexDirection: 'row', marginLeft: 5 }}>
                        <View>
                            <Text style={{ color: '#fff', paddingRight: 3, fontSize: 15 }}>Checkout with</Text>
                        </View>
                        <View>
                            <FontAwesome5 name="apple-pay" size={40} color="white"  />
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
            
            <SafeAreaView edges={['bottom']} />
        </View>
    );
}
const styles = StyleSheet.create({
    
})
export default Bag;
