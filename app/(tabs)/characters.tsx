// App.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const App = () => {
    // Sample data for each block
    const data = [
        { imageSource: require('../../assets/images/All_Star_Superman_Cover.jpg'), text: 'All Star Superman' },
        { imageSource: require('../../assets/images/Batman_638_(March_2005).jpg'), text: 'Under The Red Hood' },
        { imageSource: require('../../assets/images/box.jpg'), text: 'Wonder Woman Historia' },
        { imageSource: require('../../assets/images/images.jpg'), text: 'The Sandman' },
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {data.map((item, index) => (
                <View key={index} style={styles.block}>
                    <Image source={item.imageSource} style={styles.image} />
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
    block: {
        flexDirection: 'row', // Align the image and text horizontally
        alignItems: 'center', // Vertically align the items
        marginBottom: 16,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 16,
    },
    text: {
        fontSize: 16,
        color: '#333',
        flex: 1, // Ensures text takes the remaining space
    },
});

export default App;
