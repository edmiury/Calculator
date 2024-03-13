import React,{useState} from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    Vibration,
    Keyboard,
} from 'react-native';

import MessageImc from '../Message imc/messageImc'

import { Styles } from './Styles/style';

export default ResultArea = props => {
    const [textButton, setTextButton] = useState('Calcular');
    const [resultImc, setResultImc] = useState(null);
    const [messageImc, setMessageImc] = useState(null);
    const [textCalc, setTextCalc] = useState('Preencha peso e altura');

    const weight = Number.parseFloat(props.weight);
    const height = Number.parseFloat(props.height);

    const finalCalculationImc = () => {

        const result = weight / (height * height);
        setResultImc(result.toFixed(2));
        Keyboard.dismiss();
    }   

    const validationImc = () => {

        if (!weight && !height || weight === 0 || height === 0) {
            Vibration.vibrate();
            setTextButton('Calcular');
            setMessageImc('Digite seu peso e altura');
            setResultImc('');
            setTextCalc('Preencha peso e altura');
            Keyboard.dismiss();
            props.setWeight(null);
            props.setHeight(null);
        
        } else {
        
            finalCalculationImc();
            setMessageImc('Seu indice é de: ');
            setTextButton('Calcular novamente');
            setTextCalc('Cálculo efetuado com sucesso');
            props.setWeight(null);
            props.setHeight(null);
        }
    }

    return (
        <View style = {Styles.container}> 
            
            <View style = {Styles.viewTouchable}>
                <Text style= {Styles.textCalc}> {textCalc}  </Text>
                <TouchableOpacity
                    style = {Styles.touchableTextCustom}
                    onPress = { () => {validationImc()} }>
                    <Text style= {Styles.textButton}>  {textButton}  </Text>
                </TouchableOpacity>

            </View>

            <View>
                <MessageImc
                    messageImc={messageImc}
                    resultImc={resultImc}
                />
            </View>

        </View>
    );
}