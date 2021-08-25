import React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet, FlatList,Image } from 'react-native';

const request = async(callback)=>{
const response = await fetch('https://apieliezer.azurewebsites.net/v1/Api.php?apicall=getDicastb');
const parsed = await response.json();
callback(parsed.dadoslista)
}

export default function App() {

  const [registro, setRegistro] = useState([]);

  useEffect(()=> {request(setRegistro);},[]);

  return (
    <View style={estilo.container}>
     <FlatList
      data = {registro}
      //keyExtractor={(item) => item.uid.toString()}
      renderItem={({item})=>
      <View style={estilo.con3}>
      <View style={estilo.con}>
      <View style={estilo.con2}>
      <Image style={estilo.img} source={{uri:item.imgLogo}} />
      <View style={estilo.con1}> 
      <Text style={estilo.text}>Região: {item.regiao}</Text>
      <Text style={estilo.text}>Estado: {item.estado}</Text>
      <Text style={estilo.text}>Cidade: {item.cidade}</Text>
      </View>
      </View>
      </View>
      <Text style={estilo.text1}> 
      Pontos Turistico: {item.pontoturisticos}.</Text>
      <Text style={estilo.text1}> 
      Gastronomia Local: {item.gastronomiaLocal}.</Text>
      </View>
      
 } />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    marginTop: 20
    
  },
  con:{
    backgroundColor:'#00FFFF',
    width:344,
    height:115,
    marginTop:5,
    flexDirection:'row',
    alignSelf:'center'
  },
  con1:{
    alignSelf:'center'
  },
  con2:{
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems:'center',
    
  },
  con3:{
     backgroundColor:'#00FFFF',
     marginTop:5,
     borderRadius:5,
  },
  img:{
    width:100,
    height:100,
    marginTop:5,
    marginLeft:5,
    borderRadius:5
  },
  text:{
    fontSize: 20,
    marginLeft:15
  }
});