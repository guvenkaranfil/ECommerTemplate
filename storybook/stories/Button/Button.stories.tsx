import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import CustomButton from '../../../app/components/Button';

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Customized Button', () => (
    <CustomButton label="Press" onPress={action('clicked-button')} />
  ));
