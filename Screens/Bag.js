import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity,Image } from 'react-native';
import Appheader from '../components/Appheader';
import { FontAwesome,Entypo, SimpleLineIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';


    
const Bag = ({ navigation, route }) =>
{
    const cardItemList = route.params;
    const [isFavorite, setIsFavorite] = useState(false);

  useEffect(()=>{
    setIsFavorite(cardItemList.favorite);
  }, [cardItemList])
    return (
        <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            {/* <Appheader /> */}
            <View >
                <TouchableOpacity onPress={navigation.goBack}>
                    <View style={{padding: 10,  flexDirection: 'row', alignItems: 'center', marginTop: 50, justifyContent: 'space-between',borderBottomWidth: 0.5,borderBottomColor: '#eee'}}>
                        <Entypo name="chevron-thin-left" size={27} color="#777" />
                        <FontAwesome name={isFavorite ? "heart" : "heart-o"} size={27} color={'#7770'} />
                        <TouchableOpacity onPress={()=>navigation.navigate('HomePage', cardItemList)}>
                            <View style={{flexDirection:'row', alignItems:'flex-start'}}>
                                <Text style={{fontSize: 22, fontFamily: 'Poppins_700Bold_Italic', letterSpacing:-1.8}}>SKERBEL APPARELS</Text>
                                <Text style={{fontSize: 14}}>®️</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{flexDirection: "row"}}>
                            <TouchableOpacity style={{marginRight: 15}} onPress={()=>setIsFavorite(!isFavorite)} >   
                                <FontAwesome name={isFavorite ? "heart" : "heart-o"} size={27} color={isFavorite ? 'rgb(426,42,68)' : '#777'} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <SimpleLineIcons name="handbag" size={29} color="#777" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </TouchableOpacity>
            </View>
            <ScrollView style={{flex: 1}}>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize: 20, fontFamily: 'Poppins_600SemiBold',marginTop: 20, marginBottom: 20}}>Shopping Bag (2)</Text>
                </View>
                <View style={{padding: 20}}>
                    <View style={{ flexDirection:'row', flex:1}}>
                        <Image source={cardItemList.images.imageMain}
                            style={{
                                width: 70,
                                resizeMode: 'contain',
                                height: 70,
                                marginRight: 10,
                                marginTop:15
                            }} />
                        <View style={{flex: 1, marginRight:50}}>
                            <Text style={{ fontFamily: 'Poppins_400Regular', letterSpacing: -0.7, color: '#000' }}>{cardItemList.name}</Text>
                             <View style={{marginTop: 8}}>
                                <Text style={{color:'#777', fontSize: 13.5}}>{cardItemList.productNumber}</Text>
                            </View>
                            <View style={{marginTop: 3}}>
                                <Text style={{color:'#777', fontSize:12}}>size: OS</Text>
                            </View>
                            
                            <View style={{ marginTop: 10, flexDirection: 'row' }}>
                                <View>
                                    <Entypo name="resize-100-" size={14} color="#777" />
                                </View>
                                <Text style={{ marginLeft: 3, color: '#777', fontSize: 12, marginRight: 19 }}>Edit size</Text>
                                <AntDesign name="close" size={16} color="#777" />
                                <Text style={{ marginLeft: 3, color: '#777', fontSize: 12, marginRight: 19 }}>Remove</Text>
                                <TouchableOpacity style={{marginRight: 15, flexDirection: 'row'}} onPress={()=>setIsFavorite(!isFavorite)} >   
                                    <FontAwesome name={isFavorite ? "heart" : "heart-o"} size={15} color={isFavorite ? 'rgb(426,42,68)' : '#777'} />
                                    <Text style={{ marginLeft: 3, color: '#777', fontSize: 12, marginRight: 19, paddingTop: 1 }}>Move to Favorites</Text>
                                </TouchableOpacity>
                                
                            </View>
                           
                        </View>
                       

                        <View style={{alignItems:'flex-end'}}>
                            <Text>${cardItemList.price}</Text>
                        </View>
                        
                    </View>
                    
                    
                    
                </View>
                <View>

                </View>
                
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    
})
export default Bag;
