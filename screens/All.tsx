    import React, { useEffect, useState } from 'react';
    import { View, Text, StyleSheet, Alert } from 'react-native';
    import { NativeBaseProvider, FlatList, ScrollView, Divider, Image, Spinner } from 'native-base';
    import { services } from '../services/services';
    import moment from 'moment';

    interface NewsItem {
    id: string;
    urlToImage: string;
    title: string;
    publishedAt: string;
    description: string;
    }

    export default function All() {
    const [newsData, setNewsData] = useState<NewsItem[]>([]);

    useEffect(() => {
        services('general')
        .then((data: NewsItem[]) => {
            setNewsData(data);
        })
        .catch((error) => {
            Alert.alert(error);
        });
    }, []);

    return (
        <NativeBaseProvider>
        <ScrollView height={850}>
            {newsData.length > 1 ? (
            <FlatList
                data={newsData}
                renderItem={({ item }: { item: NewsItem }) => (
                <View>
                    <View style={styles.newsContainer}>
                    <Image
                        width={550}
                        height={250}
                        resizeMode={'cover'}
                        source={{
                        uri: item.urlToImage,
                        }}
                        alt="Alternate Text"
                    />
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.date}>{moment(item.publishedAt).format('LLL')}</Text>
                    <Text style={styles.newsDescription}>{item.description}</Text>
                    </View>
                    <Divider my={2} bg="#e0e0e0" />
                </View>
                )}
                keyExtractor={(item) => item.id}
            />
            ) : (
            <View style={styles.spinner}>
                <Spinner color="danger.400" />
            </View>
            )}
        </ScrollView>
        </NativeBaseProvider>
    );
    }

    const styles = StyleSheet.create({
    newsContainer: {
        padding: 10,
    },
    title: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: '600',
    },
    newsDescription: {
        fontSize: 16,
        marginTop: 10,
    },
    date: {
        fontSize: 14,
    },
    spinner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 400,
    },
    });
