import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Dice1 from './assets/dice1.png';
import Dice2 from './assets/dice2.png';
import Dice3 from './assets/dice3.png';
import Dice4 from './assets/dice4.png';
import Dice5 from './assets/dice5.png';
import Dice6 from './assets/dice6.png';

const App = () => {
  const [uri, setUri] = useState();
  
  const playGame = () => {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    switch (randomNum) {
      case 1:
        setUri(Dice1);
        break;
      case 2:
        setUri(Dice2);
        break;
      case 3:
        setUri(Dice3);
        break;
      case 4:
        setUri(Dice4);
        break;
      case 5:
        setUri(Dice5);
        break;
      case 6:
        setUri(Dice6);
        break;
      default:
        setUri(Dice3);
        break;
    }
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={uri} />
      <TouchableOpacity onPress={playGame}>
        <Text style={styles.button}> Play game</Text>
      </TouchableOpacity>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
  button: {
    fontSize: 20,
    color: 'white',
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderColor: 'aqua',
    borderRadius: 5,
    borderWidth: 3,
    fontWeight: 'bold',
  },
});
