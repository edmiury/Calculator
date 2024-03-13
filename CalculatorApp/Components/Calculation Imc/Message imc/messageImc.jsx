import React from 'react'

import {
    View,
    Text,
    Image,
} from 'react-native';

import {Styles} from './Styles/styles'

export default MessageImc = (props) => {

    return (

        <View style = {Styles.ViewMessage}>

            <Text style={Styles.messageImc}> {props.messageImc} </Text>
        
            <Text style={Styles.imc}> {props.resultImc} </Text>
            
            {
                !props.resultImc ?
                    <View />
                    : <Image
                        style = {Styles.imgCustom}
                        source={require('../../../assets/tabelaImc.png')} />
            }
        </View>

    );
}