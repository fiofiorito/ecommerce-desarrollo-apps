import { Pressable, Keyboard, StyleSheet, Text, TextInput, View } from 'react-native'
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
                />
                <Pressable onPress={handleSearch}>
                    <Text>Buscar</Text>
                    {/* <AntDesing name='seach1' size={35} color={'#000'} /> */}
                </Pressable>
                <Pressable onPress={handleResetSearch}>
                    <Text>Cerrar</Text>
                    {/* <AntDesing name='closecircle' size={35} color={'#000'} /> */}
                </Pressable>
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
        backgroundColor: colors.primary,
        flexDirection: 'row',
        padding: 10,
    },
    seachBar: {
        borderWidth: 2,
        paddingHorizontal: 10,
        borderRadius: 5
    }
})