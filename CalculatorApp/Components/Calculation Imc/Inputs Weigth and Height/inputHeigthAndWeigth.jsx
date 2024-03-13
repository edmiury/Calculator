import React, {useState} from 'react'

import {
    View,
    Text,
    TextInput,
    Pressable,
    Keyboard,
} from 'react-native';

import ResultButton from '../Result Button/button'

import {Style} from './Styles/style'

export default WeightAndHeight = () => {
    const [weight, setWeight] = useState(null);
    const [height, setHeight] = useState(null);
    
    return (

        <Pressable
            onPress={() => Keyboard.dismiss() }
            style={Style.Container}> 
            
            <Text style = {Style.CustomTitle}> Índice De Massa Corporal:</Text>

            <View style = {Style.ViewInputsCustom} >

                <Text style = {Style.CustomText}> Digite seu peso: </Text>
                <TextInput
                    style = {Style.InputsCustom} 
                    placeholder = 'Ex: 80.456'
                    keyboardType='phone-pad'
                    value={weight}
                    onChangeText={setWeight}
                />
                
                <Text style={Style.CustomText}>  Digite sua altura:  </Text>
                <TextInput
                    style = {Style.InputsCustom} 
                    placeholder='Ex: 1.75'
                    keyboardType='phone-pad'
                    value={height}
                    onChangeText={setHeight}
                    
                />

                <ResultButton
                    weight={weight}
                    height={height}
                    setWeight={setWeight}
                    setHeight ={setHeight}
                />
            </View>

        </Pressable>
    );
}