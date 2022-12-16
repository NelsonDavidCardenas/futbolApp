import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import ImageViewer from './components/ImageViewer';



const Separator = () => (
  <View style={styles.separator} />
);

const ArgentinaImage = require('./assets/images/messi.png');
const FranceImage = require('./assets/images/mbappe.png');
const CroatiaImage = require('./assets/images/modric.png');


const App = () => (

  
  <SafeAreaView style={styles.container}>
     
      
    <View>
      <Text style={styles.title}>
        Argentina
      </Text>
      <Button
        title="see player"
        onPress={ArgentinaImage}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
       France
      </Text>
      <Button
        title="see player"
        color="#0000ff"
        onPress={FranceImage}
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
        onPress={CroatiaImage}
      />
    </View>
    <Separator />
    
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    
    
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