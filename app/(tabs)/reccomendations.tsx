import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, Linking, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';

// Enable LayoutAnimation on Android
if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => {
    const [expandedBlock, setExpandedBlock] = useState<number | null>(null);
    const handlePress = () => {
        Linking.openURL('https://example.com');
    };


    // Sample data for each block
    const data = [
        {
            imageSource: require('../../assets/images/All_Star_Superman_Cover.jpg'),
            text: 'All Star Superman',
            description: 'After being poisoned by sun radiation, a dying Superman decides to fulfill his lifelong dreams while Lex Luthor has his own agenda.',
        },
        {
            imageSource: require('../../assets/images/Batman_638_(March_2005).jpg'),
            text: 'Under The Red Hood',
            description: 'After gaining control of the entire criminal underworld, Black Mask becomes the undisputed crime lord of Gotham City. However, there is a new criminal mastermind that goes by the name of Red Hood and starts taking control of the drug dealing business in Gotham.'
        },
        {
            imageSource: require('../../assets/images/box.jpg'),
            text: 'Wonder Woman Historia',
            description: 'The origins of the Amazons are reimagined through a feminist lens, chronicling their creation by the goddesses of Olympus and their struggle against patriarchal oppression.'
        },
        {
            imageSource: require('../../assets/images/images.jpg'),
            text: 'The Sandman',
            description: 'A  story about stories and how Morpheus, the Lord of Dreams, is captured and subsequently learns that sometimes change is inevitable.'
        },
    ];

    const toggleExpand = (index: number) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpandedBlock(expandedBlock === index ? null : index);
    };
    const [text, onChangeText] = React.useState('Enter Review');

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {data.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => toggleExpand(index)} style={styles.block}>
                    <View style={styles.header}>
                        <Image source={item.imageSource} style={styles.image} />
                        <Text style={styles.text}>{item.text}</Text>
                    </View>
                    {expandedBlock === index && ( // Conditional rendering for expanded content
                        <Text style={styles.description}>{item.description}</Text>
                    )}
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#DBDD9C',
    },
    block: {
        backgroundColor: '#fff2f1',
        borderRadius: 8,
        borderWidth: 3,
        borderColor: '#f97068',
        marginBottom: 16,
        padding: 10,
        shadowColor: '#f97068',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 4, // For Android shadow
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 16,
    },
    text: {
        fontSize: 16,
        color: '#0b4f6c',
        flex: 1,
        fontWeight: 'bold',
    },
    description: {
        marginTop: 10,
        fontSize: 14,
        color: '#555',
        lineHeight: 22,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default App;
