import { StyleSheet } from 'react-native';

import { Alert, View, Text, Pressable } from 'react-native';

export default function HomePage() {
  // When General Care is Pressed: 
  const genCareFunction = () => {
    Alert.alert('General Care Pressed!');
  };

  const healthFunction = () => {
    Alert.alert('Health Pressed!');
  };

  const nutritionFunction = () => {
    Alert.alert('Nutrition Pressed!');
  };

  const entertainmentFunction = () => {
    Alert.alert('Entertainment Pressed!');
  };

  return (
    <View style = {styles.screen}>
      <View style = {styles.titleContainer}>
        <Text style = {styles.title}>Cool Name</Text>
        <Text>Cool Motto</Text>
      </View>
      <View style = {styles.optionsContainer}>
        <Pressable onPress={genCareFunction}>
          <Text>General Care</Text>
        </Pressable>
        <Pressable onPress={healthFunction}>
          <Text>Health</Text>
        </Pressable>
        <Pressable onPress={nutritionFunction}>
          <Text>Nutrition</Text>
        </Pressable>
        <Pressable onPress={entertainmentFunction}>
          <Text>Entertainment</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize: 50,
  },

  titleContainer:{
    alignItems: 'center',
    backgroundColor: 'rgb(245, 66, 221)',
    padding: 20,
  },

  screen: {
    backgroundColor: 'rgb(66, 245, 206)',
    flex: 1,
  },

  optionsContainer: {
    alignItems: 'center',
    flex: 1,
    gap: 10,
    paddingTop: 150,
  },
});
