import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Dimensions } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import cardItemList  from '../Consts/cardItemList'
const width = Dimensions.get("screen.").width/2-15

const HomePage = () => {
  const CardItem =() =>{
   return(<View style={styles.cardDesign}>
     
    </View>
   )
  }
  return (
        <SafeAreaView style={{backgroundColor: "#fff"}}>

          <View style={{backgroundColor: "#fff", flexDirection: 'row', marginTop: 10}}>
              <Text style={{fontWeight: "bold", fontSize: 24, color: "#fff", marginRight: 10, marginLeft: 8, fontFamily: 'NotoSerif_400Regular', backgroundColor: '#000'}}> WOMEN </Text>
              <Text style={{fontWeight: "bold", fontSize: 24, color: "#000", fontFamily: 'NotoSerif_400Regular', backgroundColor: '#fff', marginRight: 10}}>MEN</Text>
              <Text style={{fontWeight: "bold", fontSize: 24, color: "#000", fontFamily: 'NotoSerif_400Regular', backgroundColor: '#fff'}}>BEAUTY</Text>   
          </View>

          <View style={{backgroundColor: "#000"}}>
            <View style={styles.header}>
              <FontAwesome name="navicon" size={24} color="white" />
              <Text style = {{fontWeight: "bold", fontSize: 24, color: "#fff", fontFamily: 'NotoSerif_400Regular'}}>SKERT APPARELS</Text>
              <View style={{flexDirection: 'row'}}>
                <AntDesign name="user" size={24} color="white" style={{marginRight: 10}} />
                <FontAwesome name="shopping-bag" size={24} color="white" />
              </View>              
            </View>            
          </View>

          <View style={{margin: 10, flexDirection: 'row'}}>
            <View style={styles.rectangleView}>
              <Text style={{fontSize: 20, textAlign: 'center', justifyContent: 'center', margin: 13}}>
                Filter (0)
              </Text>
            </View>
            <View style={styles.rectangleView}>
              <Text style={{fontSize: 20, textAlign: 'center', justifyContent: 'center', margin: 13}}>
                Featured
              </Text>
            </View>
          </View>
          <FlatList numColumns={2} data={cardItemList} renderItem={({item}) => <Card cardItemList={item}/>} />
        </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  rectangleView: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    marginRight: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
  cardDesign: {
    height: 250,
    backgroundColor: '#A9A9A9',
    width,
    marginHorizontal: 2,
    marginBottom: 20,
  }
});

export default HomePage;