import React from 'react';
import {NativeModules, Button} from 'react-native';

const { CalendarModule } = NativeModules;

const onPress = () => {
  CalendarModule.createCalendarEvent('testName', 'testLocation');
};

const NewModuleButton = () => {


  return (
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
    />
  );
};

export default NewModuleButton;
