import * as React from 'react'
import {View, TouchableOpacity, Text, StyleSheet, TextInput, Keyboard} from 'react-native'

export const Login=() => {
    return(
        <TouchableOpacity style={{flex: 1}} onPress={() => {
            Keyboard.dismiss()
        }}
        activeOpacity= {0.9}
        >
            <View style={styles.main}>
                    <TextInput style= {styles.textinput}
                        placeholder="Логин"/>
                    <TextInput style= {styles.textinput}
                                            placeholder="Пароль"/>
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.text}>
                            Войти
                        </Text>
                    </TouchableOpacity>
            </View>
        </TouchableOpacity>)
}

const styles= StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        justifyContent: 'center'
        },
    button2: {
        backgroundColor: '#479ED8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        width: '65%',
        marginTop: '12%'
    },
    text: {
        color: '#fff',
        paddingVertical: 12,
        fontSize: 21,
        fontFamily: 'lato'
    },
    textinput:{
        color: '#ABABAB',
        backgroundColor: '#E6E6E6',
        width: '80%',
        borderRadius: 4,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 12,
        fontSize: 21,
        fontFamily: 'lato'
    }
})