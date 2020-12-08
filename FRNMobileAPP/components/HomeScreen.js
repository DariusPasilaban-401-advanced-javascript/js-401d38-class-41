import * as React from 'react';
import { Button } from 'react-native';

 
 const HomeScreen = ({ navigation }) => {
  return (
    
      <Button
        title="Go to Darius' profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Darius' })
        }
      />,

      <Button
        title="Access Camera"
        onPress={() =>
          navigation.navigate('Camera')
        }
      />

   
  );
};

export default HomeScreen;