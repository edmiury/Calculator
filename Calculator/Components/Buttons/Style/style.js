import {
    StyleSheet,
    Dimensions
} from 'react-native';

export const Style = StyleSheet.create({

    view: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    
    btn: {
        margin: 1,
        fontSize: 32,
        width: Dimensions.get('window').width / 5,
        height: Dimensions.get('window').width / 5,
        padding: 20,
        backgroundColor: '#111',
        color: '#9C9B9B',
        textAlign: 'center'
    },

    btnColors: {
        color: '#F88A04',
        fontWeight: 'bold',
    },
    
    // btnDouble: {
    //     width: (Dimensions.get('window').width / 5) * 2,
    // },

    btnSum: {
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: '#F88A04',
        color: '#fff'
    } 

});

//#9C9B9B