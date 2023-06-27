import React from 'react';

import {
    Alert,
    View,
    Vibration
} from 'react-native';
import {Style} from './Style/style'

import Layout from './layout';

let operators = {
    value: '',
    sum: false,
};

export default props => {

    const addNumber = e => {
        operators.value = operators.value + e;
        props.setValue(operators.value);
        operators.sum = false;
    };

    const resetValue = () => {
        props.setValue('0')
        props.setResult('0')
        operators.value = ''
    };

    const deleteOneNumber = () => {
        operators.value = operators.value.slice(0, -1)
        props.setValue(operators.value)
    };

    const operationSum = () => {
        try {
            props.setResult(eval(operators.value));
            operators.sum = true;
        } catch {
            Alert.alert('Atenção', 'Dados inválidos!')
            Vibration.vibrate()
            props.setValue('0')
            props.setResult('0')
            operators.value = ''
        }
    };

    return (
        
        <View style = { Style.view }>
            
            <Layout label='Ac' colors onClick = { () => {resetValue()} }  ></Layout>
            <Layout label='*' colors  onClick={() => { addNumber('*') }} ></Layout>
            <Layout label='←' colors  onClick  = { () => {deleteOneNumber()} } ></Layout>
            <Layout label='/' colors  onClick = { () => {addNumber('/')} }></Layout>
            <Layout label='7' onClick = { () => {addNumber('7')} } ></Layout>
            <Layout label='8' onClick = { () => {addNumber('8')} }></Layout>
            <Layout label='9' onClick = { () => {addNumber('9')} }></Layout>
            <Layout label='-' colors onClick={() => { addNumber('-') }}></Layout>
            <Layout label='4' onClick={() => { addNumber('4') }}></Layout>
            <Layout label='5' onClick={() => { addNumber('5') }}></Layout>
            <Layout label='6' onClick={() => { addNumber('6') }}></Layout>
            <Layout label='+'colors  onClick={() => { addNumber('+') }}></Layout>
            <Layout label='1' onClick={() => { addNumber('1') }}></Layout>
            <Layout label='2' onClick={() => { addNumber('2') }}></Layout>
            <Layout label='3' onClick={() => { addNumber('3') }}></Layout>
            <Layout label='.' onClick={() => { addNumber('.') }}colors = 'colors'></Layout>
            <Layout label='' ></Layout>
            <Layout label='0' onClick={() => { addNumber('0') }}></Layout>
            <Layout label='' colors  ></Layout>
            <Layout label='='  sum  colors  onClick={() => { operationSum() }}></Layout>

        </View>       
    );
}