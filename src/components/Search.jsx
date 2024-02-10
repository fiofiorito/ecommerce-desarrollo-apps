import { Pressable, Keyboard, StyleSheet, Text, TextInput, View, Image } from 'react-native'
import colors from '../utils/global/colors'
import { useState } from 'react'

const Search = ({ handleKeyword }) => {
    const [input, setInput] = useState('')
    const [error, setError] = useState('')
    const handleInput = (txt) => {
        setInput(txt)
    }

    const handleSearch = () => {
        const specialCharExpression = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
        if (specialCharExpression.test(input)) {
            setError('caracteres de busqueda incorrectos')
            return
        }
        handleKeyword(input)
        setError('')
        Keyboard.dismiss()
    }

    const handleResetSearch = () => {
        handleKeyword('')
        handleInput('')
        setError('')
        Keyboard.dismiss()
    }
    return (
        <>
            <View style={styles.container}>
                <TextInput
                    placeholder='Buscar Producto'
                    style={styles.seachBar}
                    value={input}
                    onChangeText={handleInput}
                    placeholderTextColor={colors.shadowyTexts}
                />
                <View style={styles.buttonsCont}>
                    <Pressable onPress={handleSearch}>
                        <Image style={styles.img} source={require('../images/search.png')} />
                    </Pressable>
                    <Pressable onPress={handleResetSearch}>
                        <Image style={styles.img2} source={require('../images/cross.png')} />
                    </Pressable>
                </View>
            </View>
            <View>
                {error ? <Text>{error}</Text> : null}
            </View>
        </>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primaryBgColor,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        marginTop: -20
    },
    seachBar: {
        borderWidth: 2,
        paddingHorizontal: 10,
        borderRadius: 5,
        width: '80%'
    },
    buttonsCont: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },
    img: {
        width: 20,
        height: 20
    },
    img2: {
        width: 25,
        height: 25
    }
})