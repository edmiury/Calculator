import React from "react";

import {
  View,
  Text,
  TouchableHighlight,
  
} from "react-native";

import { Style } from "./Style/style";

export default button = props => {

  const buttonStyle = [Style.btn];

  if (props.double) buttonStyle.push(Style.btnDouble);
  if (props.colors) buttonStyle.push(Style.btnColors); 
  if (props.sum) buttonStyle.push(Style.btnSum);

  return (
    <View style = {Style.view}>

      <TouchableHighlight
        onPress={ props.onClick}
      >
        
        <Text style = { buttonStyle }>
          {props.label}
        </Text>

      </TouchableHighlight>

    </View>
  );
};
