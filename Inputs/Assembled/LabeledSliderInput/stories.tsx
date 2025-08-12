import * as React from 'react';

import { action } from '@storybook/addon-actions';

import LabeledSliderInput from './index';

export default {
    title: 'UIParts/Assembled/LabeledSliderInput',
    component: LabeledSliderInput,
};

export const Basic = () => <LabeledSliderInput label="Basic"></LabeledSliderInput>
