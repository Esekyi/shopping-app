import React,{useEffect,useState} from 'react';
import {TouchableOpacity, View, Text, ScrollView, StyleSheet, Image, Dimensions, TouchableWithoutFeedback} from 'react-native';
import Appheader from '../components/Appheader';
import { FontAwesome, AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons';

const width = (Dimensions.get("screen").width) - 300;

const partSizes = ["13x4", "15x2", "13x1", "12x2"];
const densities = [150, 90, 112, 300];
const stretchedLengths = [14, 16, 18, 20, 22, 24];


const SingleProductPage = ({navigation, route}) => {
    const cardItemList = route.params;
    const [isFavorite, setIsFavorite] = useState(false);
    const [color, setColor] = useState("imageMain");

    // partSize
    const [partSize, setPartSize] = useState("13x4");
    // density
    const [density, setDensity] = useState(150);
    // stretched length
    const [stretchedLength, setStretchedLength] = useState(14);
    // quantity
    const [quantity, setQuantity] = useState(1);

    useEffect(()=>{
        setIsFavorite(cardItemList.favorite);
    }, [cardItemList])

    const handleDecrease = () =>
    {
        if (quantity > 1)
        {
            setQuantity(old => old - 1);
        }
    }

    const handleIncrease = () =>
    {
        if (quantity < cardItemList.stock)
        {
            setQuantity(old => old + 1);
        }
    }
    
    return (
        <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', marginTop: 50 }}>
                            <Entypo name="chevron-thin-left" size={25} color="#777" />
                            <Text style={{fontSize: 15}}> Back</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView style={{flex: 1}}>
                {/* <Appheader /> */}
                <View style={styles.singleImage}>
                    <Image source={cardItemList.images[color]} style={{width: "100%", resizeMode: 'contain', height: 350}}/>
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
                            {Object.keys(cardItemList.images)
                                .filter(color => color !== "imageMain")
                                .map(color => <TouchableWithoutFeedback onPress={() => setColor(color)
                            }>
                                <View style={{ ...styles.imageColor, backgroundColor: color, marginRight:5 }} />
                            </TouchableWithoutFeedback>)}
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 20 }}>
                            <View style={{flex: 1}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text>Lace Part Size/Inch</Text>
                                    <Text style={{ color: '#f00', marginRight: 130 }}> *</Text>  
                                </View>
                                <View style={{flexDirection: "row", flexWrap: "wrap"}}>
                                    {partSizes.map(size => <TouchableWithoutFeedback onPress={()=> setPartSize(size)}>
                                        <View style={{...styles.rectSizes, backgroundColor: partSize === size ? "black" : "white"}}>
                                            <Text style={{
                                                color: partSize === size ? "white" : "black",
                                                fontWeight: partSize === size ? "800" : "400"
                                            }}>{size}</Text>
                                        </View>
                                    </TouchableWithoutFeedback>)}
                                </View>
                            </View>
                            <View style={{flex: 1}}>
                                <View style={{flexDirection: "row"}}>
                                    <Text>Density</Text>
                                    <Text style={{ color: '#f00' }}> *</Text>
                                </View>
                                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                                    {densities.map(dens => <TouchableWithoutFeedback onPress={()=> setDensity(dens)}>
                                        <View style={{...styles.rectSizes, backgroundColor: density === dens ? "black" : "white"} }>
                                            <Text style={{
                                                color: density === dens ? "white" : "black",
                                                fontWeight: density === dens ? "800" : "400"
                                            }}>{dens}%</Text>
                                    </View>
                                    </TouchableWithoutFeedback>)}
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={{flexDirection: 'row', marginTop:50 }}>
                                <Text>Stretched Length/inch</Text>
                                <Text style={{ color: '#f00' }}> *</Text>
                            </View>
                            <View style={{ flexDirection: 'row', flexWrap: "wrap" }}>
                                {stretchedLengths.map(len => <TouchableWithoutFeedback onPress={()=> setStretchedLength(len)}>
                                    <View style={{...styles.rectLength, backgroundColor: stretchedLength === len ? "black" : "transparent"} }>
                                        <Text
                                            style={{
                                                color: stretchedLength === len ? "white" : "black",
                                                fontWeight: stretchedLength === len ? "800" : "400"
                                            }}>{len}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                                )}
                            </View>
                            <View style={{marginTop: 20}}>
                                <Text>QTY</Text>
                            </View>
            
                            {/* ++++++++++++++++++++++++==== */}
                            <View style={{flexDirection: 'row'}}>
                                <View style={{ ...styles.rectSizes, marginRight: 10, flexDirection: 'row' }}>
                                    <TouchableWithoutFeedback onPress={handleDecrease}>
                                        <View >
                                            <AntDesign name="minuscircleo" size={24} color="black" />
                                        </View>
                                    </TouchableWithoutFeedback>
                                    <View style={{padding: 5}}>
                                        <Text style={{ fontFamily: 'NotoSerif_700Bold', fontSize: 19}}> {quantity} </Text>          
                                    </View>
                                    <TouchableWithoutFeedback onPress={handleIncrease}>
                                        <View >
                                            <AntDesign name="pluscircleo" size={24} color="black" />
                                        </View>
                                    </TouchableWithoutFeedback>
                                    
                                </View>
                                <View style={{ marginTop: 30, flex: 1, flexDirection: 'row', justifyContent: "space-around" }}>
                                    <View style={{flexDirection: "row"}}>
                                        <Text>( sold: </Text>
                                        <Text style={{ color: 'rgba(125, 33, 33, 1)' }}>1709)</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row'}}>
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
                    
                    <Text style={{fontSize: 14,textDecorationLine: 'underline',paddingLeft:10, fontWeight:'bold', paddingTop: 20}}>DESCRIPTION</Text>
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
        borderColor: '#777777',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginRight: 10,
        marginBottom: 10
        // width,
    },
    rectLength: {
        height: 45,
        // width: 80,
        paddingHorizontal: 35,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 3,
        marginBottom: 10,
        marginRight: 10,
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
