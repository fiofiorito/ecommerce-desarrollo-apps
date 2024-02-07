import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories';

const Home = ({ handleCategory }) => {

    return (
        <View>
            <Header title='Home' />
            <Categories handleCategory={handleCategory} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})