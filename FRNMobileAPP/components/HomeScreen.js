import * as React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

 
 const HomeScreen = ({ navigation }) => {
  return (
    <>

      <View style={{ margin: 50 ,alignItems: 'center' , justifyContent: 'center' , alignSelf: 'center' ,width:'95%',height:'30%',backgroundColor:"gray",padding:10}}> 
        <Text style={{color:"white", fontSize: '30%'}}> N E X T G E N</Text>

        <Text style={{margin: 10 ,color:"white", fontSize: '15%'}}> Modern Web Application Designs</Text>        
      </View>

      <Button
        title="Profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Darius' })
        }
      />

      <Button
        style={{color: "yellow"}}
        title="Access Camera"
        onPress={() =>
          navigation.navigate('Camera')
        }
        
      />

      <Button
        style={{color: "yellow"}}
        title="Maps"
        onPress={() =>
          navigation.navigate('MapView')
        }
        
      />    

      <Button
        style={{color: "yellow"}}
        title="Location"
        onPress={() =>
          navigation.navigate('LocationView')
        }
        
      /> 

      <View style={{ position: "absolute", bottom: 0 ,alignItems: 'center' , justifyContent: 'center' , alignSelf: 'center' ,width:'100%',height:'10%',backgroundColor:"gray",padding:10}}> 
        <Text style={{color:"white", fontSize: '15%'}}>  All rights reserved </Text>
      </View>

    </>
   
  );
};

export default HomeScreen;