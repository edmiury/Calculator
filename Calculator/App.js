import React from 'react';

import {
  View,
  TouchableHighlight,
  TextInput,
  Text
} from 'react-native';

import {Style} from './style'

export default function App() {

  const [ value1, setValue1] = React.useState('')
  const [ value2, setValue2] = React.useState('')
  const [result, setResult] = React.useState('')
  
  const sum = () => {
    const n1 = Number.parseFloat(value1);
    const n2 = Number.parseFloat(value2);

    return setResult(n1 + n2)
  };

  return (
    <View style={Style.container}>

      <TextInput
        style={Style.txtInput}
        value={String(value1)}
        placeholder = ' Digite o primeiro número:'
        onChangeText={text =>  setValue1(text) }
      />

      <TextInput
        style={Style.txtInput}
        value={String(value2)}
        placeholder=' Digite o segundo número:'
        onChangeText = { text  => setValue2(text)}
      
      />

      <Text style={{ marginBottom: 15, fontWeight: 'bold' }}> Resultado: {result} </Text>
      

      <TouchableHighlight
        style={Style.txtInput}
         onPress={ () =>  sum()}
      >

        <Text>
          Somar:
        </Text>

      </TouchableHighlight >
      
    </View>
  );
}