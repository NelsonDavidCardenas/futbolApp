
import React, { useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text} from 'react-native';


const Argentina1 = require('./assets/images/messi.png');
const Argentina2 = require('./assets/images/dibu.png');
const Argentina3 = require('./assets/images/dimaria.png');


const France1 = require('./assets/images/mbappe.png');
const France2 = require('./assets/images/griezmann.png');
const France3 = require('./assets/images/lloris.png');

const Croatia1 = require('./assets/images/modric.png');
const Croatia2 = require('./assets/images/Perisic.png');
const Croatia3 = require('./assets/images/livakovic.png');


const Separator = () => (
  <View style={styles.separator} />
);

const [showArg, setShowArg] = useState(false)
const [showFr, setShowFr] = useState(false)
const [showCr, setShowCr] = useState(false)
let argentina = [Argentina1,Argentina2,Argentina3]
let france = [France1,France2,France3]
let croatia = [Croatia1,Croatia2,Croatia3]

const App = () => (
  
  
  <SafeAreaView style={styles.container}>
    
      
    <View>
      <Text style={styles.title}>
        Argentina
      </Text>
      <Button
        title="see players"
        onPress={()=>setShowArg(!showArg)}
      />
    </View>
    
    <Separator />
    <View>
      <Text style={styles.title}>
       France
      </Text>
      <Button
        title="see players"
        color="#0000ff"
        onPress={()=>setShowFr(!showFr)}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Tercer puesto
      </Text>
      <Button
        title="see team"
        color="#696969"
        onPress={()=>setShowCr(!showCr)}
      />
    </View>
    <Separator />

    {showArg && (
      <View style={styles.imageContainer}>
        {argentina.map((item)=>{
          return(
          <Image
          source={item}
        style={styles.image}
      />
          )})}
      
      </View>
    )}

    {showFr && (
      <View style={styles.imageContainer}>
        {france.map((item)=>{
          return(
          <Image
          source={item}
        style={styles.image}
      />
          )})}
      
      </View>
    )}


    {showCr && (
      <View style={styles.imageContainer}>
        {croatia.map((item)=>{
          return(
          <Image
          source={item}
        style={styles.image}
      />
          )})}
      
      </View>
    )}


    
  </SafeAreaView>

  
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    
    
  },
  imageContainer:{
    display:'flex',
    flexDirection:'row',
    
  },
  image:{
    width:100,
    height:100,
    marginRight:'10px'

  },

  title: {
    textAlign: 'center',
    marginVertical: 8,
    
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  imageContainer: {
    flex:1, 
    paddingTop: 58
  },
});

export default App;