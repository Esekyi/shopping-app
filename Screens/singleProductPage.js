import React from 'react';
import {TouchableOpacity, View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import Appheader from '../components/Appheader';
import { FontAwesome } from '@expo/vector-icons';

const SingleProductPage = ({navigation, route}) => {
    const cardItemList = route.params;
    
    return (
        
        <ScrollView style={{flex: 1, backgroundColor: "#fff"}}>
            <Appheader />
            <TouchableOpacity onPress={navigation.goBack}>
                <View style={{padding: 10, flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome name="chevron-left" size={15} color="black" />
                    <Text> Back</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.singleImage}>
                <Image source={cardItemList.images} style={{width: "100%",resizeMode: 'contain', height: 600}}/>
            </View>
            <View style={{marginTop:10, flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                <Text style={{fontSize: 12}}>
                     {cardItemList.name} 
                </Text>
                <View style={{flexDirection: 'row'}}>
                    <FontAwesome name="star" size={15} color="rgb(255,191,0)" />
                    <FontAwesome name="star" size={15} color="rgb(255,191,0)" />
                    <FontAwesome name="star-half-empty" size={15} color="rgb(255,191,0)" />
                    <Text>(324)</Text>
                </View>
            </View>
            <View style={styles.description}>
                <Text>
                    {cardItemList.description}
                </Text>
            </View>
        </ScrollView>
  

    );
}
const styles = StyleSheet.create({
    singleImage:{
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',     
    },
    description:{
        flex: 1,
        backgroundColor: 'rgb(181,181,181)',
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 20,
        marginTop: 20,
        paddingTop: 30,
        
    },
})


export default SingleProductPage;
