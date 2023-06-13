import { StyleSheet } from 'react-native';

export const Style = StyleSheet.create({

    view: {
        justifyContent: 'flex-end'

    },

    txtResult: {
        marginBottom: 10,
        padding: 5,
        textAlign: 'right',
        fontSize: 45,
        fontWeight: 'bold',
        color: '#9C9B9B',
        textShadowColor: '#333',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 7
    },

    txtAccount: {
        fontSize: 35,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#F88A04',
        color: '#9C9B9B',
        padding: 5,
        textAlign: 'right',
    }

});