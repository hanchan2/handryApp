import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text, Pressable, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { searchPlace, getHistory } from '../storage/actions/place';
import PlaceItem from '../components/PlaceItem';
import { useFocusEffect } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    const { places } = useSelector(state => state);
    const dispatch = useDispatch();

    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [place, setPlace] = useState(null);

    const [fetchFlag, setFetchFlag] = useState(false);

    useFocusEffect(
        React.useCallback(() => {
            dispatch(getHistory());
            console.log('history: ' + JSON.stringify(places.searchHistory));
            return () => {
            };
        }, [])
    );

    useEffect(() => {
        dispatch(getHistory());
        console.log('history: ' + JSON.stringify(places.searchHistory));
    }, [fetchFlag]);

    useEffect(() => {
        dispatch(searchPlace());
        setFetchFlag(true);
    }, [dispatch]);



    const autocomplete = (input) => {
        // dispatch(searchPlace());
        
        if (input) {
            const newData = places.places.filter(
                function (item) {
                    const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
                    const textData = input.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
            setSearchResults(newData);
            setSearch(input);
        } else {
            setSearchResults([]);
            setSearch(input);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                placeholder='Search place'
                value={search}
                onChangeText={(value) => autocomplete(value)}
            />
            <FlatList
                data={searchResults}
                // data={places!=null?place:[]}
                
                renderItem={({ item }) => <PlaceItem item={item} type='Results' />}
                keyExtractor={item => item.name}
            />
              <FlatList
                data={places.searchHistory}
                ListEmptyComponent={() => (
                    <View style={styles.emptyListMsgContainer}>
                        <Text style={styles.emptyListMsgText}>No records</Text>
                    </View>
                )}
                renderItem={({ item }) => <PlaceItem item={item} type='History' />}
                keyExtractor={item => item.name}
            />
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchBar: {
        marginTop: 5,
        borderRadius: 10,
        padding: 8,
        fontSize: 15,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
    }
});

export default Home;