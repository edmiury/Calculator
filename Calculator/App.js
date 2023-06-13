import React, {useState} from "react";

import { View } from "react-native";

import { Style } from "./style";

import Result from "./Components/Result/result";

import LayoutButtons from './Components/Buttons/buttons';

export default function App() {

  const [value, setValue] = useState(0)
  const [result, setResult] = useState(0)

  return (

    <View style={Style.container}> 
      
      <Result
        value= {value}
        result={result}
      />

      <View >

        <LayoutButtons
          setValue={setValue}
          setResult = {setResult}
        />
        
      </View>

    </View>
  );
}
