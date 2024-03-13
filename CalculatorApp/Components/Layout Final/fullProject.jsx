import React, {useState} from 'react';

import { View } from 'react-native';

import Result from '../Result/result';
import Buttons from '../Buttons/buttons';
import LinkImg from '../Calculation Imc/Image Link/imgTouchable';

import { Style } from './Styles/style';

export default FullProject = ({navigation}) => {

    const [value, setValue] = useState(0);
    const [result, setResult] = useState(0);

    return (
        <View style={Style.container}>
            
            <LinkImg navigation={navigation} />

            <Result value={value} result={result} />
            
            <View>
                <Buttons setValue={setValue}  setResult={setResult} />
            </View>

        </View>
    );
} 
