import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity,ImageBackground,Dimensions} from 'react-native';


export default function Home(props){
  return(
    <View style = {estilo.container}> 
    <ImageBackground style = {estilo.imgfundo} source={{uri:'https://i.pinimg.com/originals/6c/b6/e3/6cb6e3f89858e46b717a57d216aa3025.jpg'}}>
    <Text style = {estilo.titulo}> Vamos viajar? </Text>
</ImageBackground>
    </View>
  );
}
const largura = Dimensions.get('screen').width;
const estilo = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
 imgfundo:{
   width: largura,
   height: 745, 
  },
  titulo:{
    marginTop: 340,
    alignSelf: 'center',
    fontSize: 55,
    color: '#ADFF2F'
  },
 
});