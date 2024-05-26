import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Linking, TouchableOpacity } from 'react-native';

const fetchData = async (setArticles) => {
    const url = 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd6972a0a9fmsh2d6a027290b136ap1e17a2jsn16b8f77e5ddc',
            'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        setArticles(result.data);
    } catch (error) {
        console.error(error);
    }
};

export default function ScreenNews() {
    const [articles, setArticles] = useState([]);
    const [visibleCount, setVisibleCount] = useState(10);

    useEffect(() => {
        fetchData(setArticles);
    }, []);

    const handlePress = (url) => {
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    };

    const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 10);
    };

    return (
        <ScrollView style={styles.container}>
            {articles.slice(0, visibleCount).map((article, index) => (
                <View key={index} style={styles.article}>
                    <Image source={{ uri: article.thumbnail }} style={styles.image} />
                    <Text style={styles.title} onPress={() => handlePress(article.url)}>
                        {article.title}
                    </Text>
                    <Text>{article.description}</Text>
                    <Text style={styles.createdAt}>{new Date(article.createdAt).toLocaleDateString()}</Text>
                </View>
            ))}
            {visibleCount < articles.length && (
                <TouchableOpacity onPress={loadMore} style={styles.loadMoreButton}>
                    <Text style={styles.loadMoreText}>Загрузить еще</Text>
                </TouchableOpacity>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    article: {
        marginBottom: 15,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'blue',
    },
    createdAt: {
        fontStyle: 'italic',
    },
    loadMoreButton: {
        padding: 10,
        backgroundColor: '#007bff',
        alignItems: 'center',
    },
    loadMoreText: {
        color: 'white',
        fontSize: 16,
    },
});
