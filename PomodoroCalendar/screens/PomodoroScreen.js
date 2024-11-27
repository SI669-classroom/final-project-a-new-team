import { View, Text, StyleSheet } from 'react-native';

function PomodoroScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>
        This is Pomodoro Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  }
});
export default PomodoroScreen;