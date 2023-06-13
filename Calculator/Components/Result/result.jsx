import React from 'react';

import {
    View,
    Text,

} from 'react-native';

import { Style } from './Style/style';
 
export default Result = props => {
   
    return (
        
        <View style={Style.view}>

            <Text
                style={Style.txtResult}
                numberOfLines={1}
            >
                {props.value}
            
            </Text>
            
            <Text
                style={Style.txtAccount}
                numberOfLines={1}
            >
                {props.result}
            
            </Text>

        </View>
    );
}