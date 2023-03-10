import { SafeAreaView, StyleSheet } from 'react-native';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ToDoList from './components/ToDoList.js';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useCallback} from 'react'
import Constants from './constants/Styles.js'

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'golos-regular': require('./assets/fonts/GolosText-Regular.ttf'),
    'golos-bold': require('./assets/fonts/GolosText-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <Header />
      <ToDoList />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.colorDark,
    alignItems: 'center',
    justifyContent: 'space-between',
    color: Constants.colorWhite,
  }
});
