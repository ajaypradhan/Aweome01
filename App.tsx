import React from 'react';
import {View, Text, SafeAreaView,Button} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World</Text>
      </View>
      <View>
        <Button
          title="Press me"
          onPress={() => console.log('button pressed')}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
