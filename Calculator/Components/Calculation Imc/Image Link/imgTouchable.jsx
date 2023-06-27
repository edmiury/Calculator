import React from 'react';

import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import { Style } from './Styles/style';

export default LinkImg = ({navigation}) => {

    return (
        
        <View style={Style.ViewImg}>

            <TouchableOpacity onPress={() => navigation.navigate('inputs')} >
                <Image
                    style={Style.img}
                    source={require('../../../assets/balance.png')}
                />
            </TouchableOpacity>

        </View>
    );
}