import * as React from 'react';

import { action } from '@storybook/addon-actions';

import RoundButton from './index';

export default {
    title: 'UIParts/Buttons/RoundButton',
    component: RoundButton,
};

export const Basic = () => <RoundButton>CommonButton</RoundButton>
export const aggressive = () => <RoundButton aggressive>CommonButton</RoundButton>
export const danger = () => <RoundButton danger>CommonButton</RoundButton>
export const disabled = () => <RoundButton disabled>CommonButton</RoundButton>

