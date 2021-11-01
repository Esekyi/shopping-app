import React,{useEffect,useState} from 'react';
import {TouchableOpacity, View, Text, ScrollView, StyleSheet, Image, Dimensions} from 'react-native';
import Appheader from '../components/Appheader';
import { FontAwesome } from '@expo/vector-icons';

const width = (Dimensions.get("screen").width) - 15

const SingleProductPage = ({navigation, route}) => {
    const cardItemList = route.params;

const [isFavorite, setIsFavorite] = useState(false);

  useEffect(()=>{
    setIsFavorite(cardItemList.favorite);
  }, [cardItemList])
    
    return (
        <View style={{ flex: 1, backgroundColor: "aliceblue" }}>
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
                
                <View style={{ ...styles.description, height: 350 }}>
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
                            <Text style={{ color: '#f00', marginRight: 150 }}> *</Text>
                            <Text>Density</Text>
                            <Text style={{ color: '#f00' }}> *</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{ height: 45, width: 80, borderWidth: 1, borderRadius: 5, marginTop: 3, marginRight: 200, borderColor: '#777777', alignItems: 'center', justifyContent: 'center' }}>
                                <Text>13x4</Text>
                            </View>
                            <View style={{ height: 45, width: 80, borderWidth: 1, borderRadius: 5, marginTop: 3, borderColor: '#777777', alignItems: 'center', justifyContent: 'center' }}>
                                <Text>150%</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={{fontSize: 14,textDecorationLine: 'underline',paddingLeft:10, fontWeight:'bold'}}>DESCRIPTION</Text>
                    <Text style={{ padding: 10 }}>
                        {cardItemList.description}
                    </Text>
                </View>
            </ScrollView>
            <View style={{padding: 18, flexDirection:'row'}}>
                <TouchableOpacity style={{flex: 1}}>
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
    description:{
        flex: 1,
        backgroundColor: '#ffffff90',
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 20,
        marginTop: 20,
        paddingTop: 10,
        width,
        
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
