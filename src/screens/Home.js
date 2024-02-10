import { Image, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories';
import fonts from '../utils/global/fonts';

const Home = ({ handleCategory }) => {

    return (
        <View style={styles.container}>
            <Header title='Home' />
            <View style={styles.container2}>
                <View style={styles.hero}>
                    <Text style={styles.title} >Welcome back!</Text>
                    <Image style={styles.img} source={require('../images/coffee.png')} />
                </View>
                <Categories handleCategory={handleCategory} />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    container2: {
        width: '90%',
    },
    hero: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 40
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.RalewayBld,
        paddingVertical: 20
    },
    img: {
        width: 120,
        height: 120,
        marginTop: 30,
        marginBottom: 10
    }
})