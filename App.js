/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  NativeModules,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const {CalendarModule, MusicPlayer} = NativeModules;

  const onPress = () => {
    CalendarModule.createCalendarEvent('testName', 'testLocation', 'date');
  };

  const sounds = [
    'https://www.soundboard.com/mediafiles/od/ODcwMjMzMjU4NzAzMzc_gaAj5aiCAns.mp3',
    'https://www.soundboard.com/mediafiles/mt/MTM5MjEzMjMxMzkyMzM_H4pS9n9xzFE.mp3',
    'https://www.soundboard.com/mediafiles/nj/NjA3MDMzMjU2MDcwODA_9aT0qAxDHoQ.mp3'
  ];

  const onPlay = () => {
    MusicPlayer.initPlayer(sounds[Math.floor(Math.random() * sounds.length)]);
    MusicPlayer.play();
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <Button
              title="Click to invoke your native module!"
              color="#841584"
              onPress={onPress}
            />
          </View>
          <View style={styles.body}>
            <Button
              title="Play Sound"
              color="#841584"
              onPress={onPlay}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
