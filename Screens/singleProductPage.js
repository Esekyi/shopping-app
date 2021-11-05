import React,{useEffect,useState} from 'react';
import {TouchableOpacity, View, Text, ScrollView, StyleSheet, Image, Dimensions} from 'react-native';
import Appheader from '../components/Appheader';
import { FontAwesome, AntDesign, FontAwesome5 } from '@expo/vector-icons';

const width = (Dimensions.get("screen").width) - 300


const SingleProductPage = ({navigation, route}) => {
    const cardItemList = route.params;

const [isFavorite, setIsFavorite] = useState(false);

  useEffect(()=>{
    setIsFavorite(cardItemList.favorite);
  }, [cardItemList])
    
    return (
        <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <ScrollView style={{flex: 1}}>
                {/* <Appheader /> */}
                <TouchableOpacity onPress={navigation.goBack}>
                    <View style={{padding: 10, flexDirection: 'row', alignItems: 'center', marginTop: 50}}>
                        <FontAwesome name="chevron-left" size={15} color="black" />
                        <Text> Back</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.singleImage}>
                    <Image source={cardItemList.images.imageMain} style={{width: "100%", resizeMode: 'contain', height: 350}}/>
                </View>
                
                <View style={{ ...styles.description }}>
                    <View style={{marginTop:10, flexDirection: 'row', justifyContent: 'space-between', padding: 5}}>
                        <Text style={{fontSize: 20,fontFamily: 'Montserrat_600SemiBold',flex: 0.8, marginLeft: 10}}>
                            {cardItemList.name} 
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                            <FontAwesome name="star" size={15} color="rgb(255,191,0)" />
                            <FontAwesome name="star" size={15} color="rgb(255,191,0)" />
                            <FontAwesome name="star-half-empty" size={15} color="rgb(255,191,0)" />
                            <Text>(324)</Text>
                        </View>
                    
                    </View>
                    <View style={{ padding: 10, marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{ marginRight: 10 }}>COLOUR:</Text>
                            <View style={{ ...styles.imageColor, backgroundColor: '#f9f', marginRight:5 }} />
                            <View style={{...styles.imageColor, backgroundColor: 'rgb(159,96,64)'}} />
                        </View>
                        <View style={{flexDirection:'row', marginTop: 20}}>
                            <Text>Lace Part Size/Inch</Text>
                            <Text style={{ color: '#f00', marginRight: 130 }}> *</Text>
                            <Text>Density</Text>
                            <Text style={{ color: '#f00' }}> *</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.rectSizes}>
                                <Text>13x4</Text>
                            </View>
                            <View style={styles.rectSizes }>
                                <Text>150%</Text>
                            </View>
                        </View>
                        <View>
                            <View style={{flexDirection: 'row', marginTop:20 }}>
                                <Text>Stretched Length/inch</Text>
                                <Text style={{ color: '#f00' }}> *</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <View style={styles.rectLength }>
                                    <Text>14</Text>
                                </View>
                                <View style={styles.rectLength }>
                                    <Text>16</Text>
                                </View>
                                <View style={styles.rectLength }>
                                    <Text>18</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 20}}>
                                <View style={styles.rectLength }>
                                    <Text>20</Text>
                                </View>
                                <View style={styles.rectLength }>
                                    <Text>22</Text>
                                </View>
                                <View style={styles.rectLength }>
                                    <Text>24</Text>
                                </View>
                            </View>
                            <View style={{marginTop: 20}}>
                                <Text>QTY</Text>
                            </View>
            
                            {/* ++++++++++++++++++++++++==== */}
                            <View style={{flexDirection: 'row'}}>
                                <View style={{...styles.rectSizes, marginRight: 10, flexDirection: 'row'}}>
                                    <View >
                                        <AntDesign name="minuscircleo" size={24} color="black" />
                                    </View>
                                    <View style={{padding: 5}}>
                                        <Text style={{ fontFamily: 'NotoSerif_700Bold', fontSize: 19}}> 1 </Text>          
                                    </View>
                                    <View >
                                        <AntDesign name="pluscircleo" size={24} color="black" />
                                    </View>
                                    
                                </View>
                                <View style={{marginTop: 30, flexDirection: 'row'}}>
                                    <Text>( sold: </Text>
                                    <Text style={{ color: 'rgba(125, 33, 33, 1)' }}>1709)</Text>
                                    <View style={{ flexDirection: 'row', marginLeft: 30}}>
                                        <FontAwesome5 name="shipping-fast" size={15} color="black" />
                                        <Text> Free Delivery</Text>
                                    </View>
                                    
                                </View>
                            </View>

                            <View style={styles.lineHR} />
                            
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 25}}>
                                <Text style={{ fontSize: 20.5,fontFamily: 'NotoSerif_700Bold', marginRight: 5}}>
                                    Total:
                                </Text>
                                <Text style={{ fontSize: 20.5,fontFamily: 'NotoSerif_700Bold', color: 'rgba(125, 33, 33, 1)'}}>
                                    USD ${cardItemList.price}
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate("Bag", cardItemList)} style={{ flex: 1, width: 250, alignContent: 'center', marginLeft: 70}}>
                            <View style={{ ...styles.AddToBag, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flex:1, marginRight: 10 }} >
                                <View style={{ marginRight: 5 }}>
                                    <FontAwesome name="shopping-bag" size={18} color="white" />
                                </View>
                                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>Add to Bag</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.lineHR} />
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{ fontFamily: 'NotoSerif_400Regular', fontSize: 16 }}> 30-day Returns</Text>
                        </View>
                        <View style={styles.lineHR} />
                        

                       
                        
                    </View>
                    <TouchableOpacity>
                        <View style={{ alignContent: 'center', marginTop: 0}}>
                            <Image
                                style={{
                                    width: '100%',
                                    height: 125,
                                    resizeMode: 'contain'
                                    // maxHeight: 50,
                                }}
                                source={require('../assets/card.png')} />
                        </View>
                    </TouchableOpacity>
                    
                    <Text style={{fontSize: 14,textDecorationLine: 'underline',paddingLeft:10, fontWeight:'bold'}}>DESCRIPTION</Text>
                    <Text style={{ padding: 10 }}>
                        {cardItemList.description}
                    </Text>
                </View>
            </ScrollView>
            <View style={{padding: 18, flexDirection:'row'}}>
                <TouchableOpacity onPress={() => navigation.navigate("Bag", cardItemList)} style={{flex: 1}}>
                        <View style={{ ...styles.AddToBag, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flex:1, marginRight: 10 }} >
                            <View style={{ marginRight: 5 }}>
                                <FontAwesome name="shopping-bag" size={18} color="white" />
                            </View>
                            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>Add to Bag</Text>
                        </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>setIsFavorite(!isFavorite)} >   
                    <View style={{...styles.favoriteOval, alignItems: 'center', justifyContent: 'center'}}>
                        <FontAwesome name={isFavorite ? "heart" : "heart-o"} size={24} color={isFavorite ? 'rgb(426,42,68)' : '#000'} />            
                    </View>
                </TouchableOpacity>
            </View>

           

            
        </View>
  

    );
}
const styles = StyleSheet.create({
    singleImage:{
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgb(255,255,255)'
    },
    rectSizes: {
        height: 45,
        // width: 80,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 3,
        marginRight: 130,
        borderColor: '#777777',
        alignItems: 'center',
        justifyContent: 'center',
        width,
    },
    rectLength: {
        height: 45,
        width: 80,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 3,
        marginRight: 25,
        borderColor: '#777777',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    lineHR: {
        width: 389,
        height: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.14)',
        marginTop: 20,
        marginBottom: 20,
    },

    description:{
        flex: 1,
        backgroundColor: '#ffffff90',
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 20,
        marginTop: 20,
        
        
        
    },
    qtyButton: {
        height: 25,
        width: 25,
        borderRadius: 25 / 2,
        borderWidth: 1,
        // backgroundColor: '#000',
        borderColor: '#000',
        alignContent: 'center', justifyContent: 'center',
        paddingLeft: 4,
        paddingTop: 2
        
    },
    AddToBag: {
        height: 50,
        // width,
        backgroundColor: '#000',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        
    },
    favoriteOval: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        borderWidth: 0.2,
        borderColor: '#000',
    },
    imageColor: {
        height: 24,
        width: 24,
        borderRadius: 24/2,
    },
    imageColorOval: {
        height: 30,
        width: 30,
        borderRadius: 30 / 2,
        borderWidth: 1,  
        
    },

})


export default SingleProductPage;
