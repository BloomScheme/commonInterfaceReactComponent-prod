import * as React from 'react';
import { Component } from "react";

import { action } from '@storybook/addon-actions';

import TextBox from './index';

export default {
    title: 'UIParts/Basics/TextBox',
    component: TextBox,
};

export const Basic = () => <TextBox></TextBox>
