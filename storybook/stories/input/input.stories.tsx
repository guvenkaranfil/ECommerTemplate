import React from 'react';
import {storiesOf} from '@storybook/react-native';
import CenterView from '../CenterView';
import Input from '../../../app/components/Input';

storiesOf('Input', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Customized Input', () => (
    <Input onChangeText={() => {}} value="Email" placeholder="E-Mail" />
  ));
