import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function TabTwoScreen({}) {
  const [text, onChangeText] = React.useState('Search');
  const [number, onChangeNumber] = React.useState('');
  const handleSearchPress = () => {
    // Send an alert when the little search icon is pressed
    alert(`Searching for: ${text}. Please be patient`);
    alert('Search found')

  };

  return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View style={styles.inputContainer}>
            //Search Box
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Search here"
            />
            //Pressable icon cause yes
            <TouchableOpacity onPress={handleSearchPress}>
              <Ionicons name="search" size={24} color="gray" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF2F1',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    width: '80%',
    backgroundColor: '#f7f3f2',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 3,
    borderColor: '#f97068',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,

    marginTop: 20,
  },
  icon: {

    marginLeft: 10,
  },
});
