import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import Typography from '../../../app/components/Typography';

storiesOf('Typography', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Customized Typography', () => <Typography>Welcome!</Typography>);
