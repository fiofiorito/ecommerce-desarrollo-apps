import { StyleSheet, Text, View, FlatList } from 'react-native'
import categories from '../utils/data/categories.json';
import CategoriesCard from './CategoriesCard';

const Categories = () => {
    return (
        <View>
            <FlatList
                data={categories}
                keyExtractor={item => item}
                renderItem={({ item }) => (<CategoriesCard item={item} />)}
            />
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({})