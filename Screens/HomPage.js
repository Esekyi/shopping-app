import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Dimensions, Image } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import cardItemList  from '../Consts/cardItemList';


const width = (Dimensions.get("screen").width/2) - 15

const HomePage = () => {
  const CardItem =({cardItemList}) =>{
   return( 
   <View style={styles.cardDesign}>
      <View style={{height: 250, alignContent: 'center'}}>
        <Image style={{resizeMode: 'contain'}} style={{width: "100%", maxHeight: "100%"}} source={cardItemList.images} />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}> 

        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
          <Text style={{fontWeight: 'bold'}}>
            ${cardItemList.price}
          </Text>
        </View>
        <View >   
          <FontAwesome name={cardItemList.favorite ? "heart" : "heart-o"} size={20} color={cardItemList.favorite ? 'rgb(426,42,68)' : '#000'} />
        </View>
       
      </View>
      <Text style={{fontSize: 13.5, fontFamily: 'Montserrat_400Regular', marginTop: 25, marginBottom: 10}}>
        {cardItemList.name}
      </Text>
    
    </View>
   );
  };
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{backgroundColor: "#fff"}}>
          <View style={{backgroundColor: "#fff", flexDirection: 'row', marginTop: 10}}>
              <Text style={{fontWeight: "bold", fontSize: 24, color: "#fff", marginRight: 10, marginLeft: 8, fontFamily: 'NotoSerif_400Regular', backgroundColor: '#000'}}> WOMEN </Text>
              <Text style={{fontWeight: "bold", fontSize: 24, color: "#000", fontFamily: 'NotoSerif_400Regular', backgroundColor: '#fff', marginRight: 10}}>MEN</Text>
              <Text style={{fontWeight: "bold", fontSize: 24, color: "#000", fontFamily: 'NotoSerif_400Regular', backgroundColor: '#fff'}}>BEAUTY</Text>   
          </View>

          <View style={{backgroundColor: "#000"}}>
            <View style={styles.header}>
              <FontAwesome name="navicon" size={24} color="white" />
              <Text style = {{fontWeight: "bold", fontSize: 24, color: "#fff", fontFamily: 'NotoSerif_400Regular'}}>SKERBEL's APPARELS</Text>
              <View style={{flexDirection: 'row'}}>
                <AntDesign name="user" size={24} color="white" style={{marginRight: 10}} />
                <FontAwesome name="shopping-bag" size={24} color="white" />
              </View>              
            </View>            
          </View>

          <View style={{paddingHorizontal: 10, paddingVertical: 10, flexDirection: 'row', justifyContent: "space-between"}}>
            <View style={{...styles.rectangleView, marginRight: 10}}>
              <Text style={{fontSize: 20, textAlign: 'center', justifyContent: 'center'}}>
                Filter (0)
              </Text>
            </View>
            <View style={styles.rectangleView}>
              <Text style={{fontSize: 20, textAlign: 'center', justifyContent: 'center'}}>
                Featured
              </Text>
            </View>
          </View>
        </SafeAreaView>
      <FlatList 
          style={{paddingHorizontal: 5, paddingBottom: 100, flex: 1}} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 50,
          }}
          numColumns={2} 
          data={cardItemList} 
          renderItem={({item}) => <CardItem cardItemList={item}/>} />
    </View>
        

  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 20
  },
  rectangleView: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    alignContent: 'center',
    justifyContent: 'center',
  },
  cardDesign: {
    // height: 350,
    backgroundColor: '#fff',
    borderWidth: 0.3,
    borderColor: '#A9A9A9',
    width,
    marginBottom: 20,
    marginHorizontal: 5,
    padding: 15,
  }
});

export default HomePage;