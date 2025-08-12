import * as React from 'react';
import { Component } from "react";

import { action } from '@storybook/addon-actions';

import InputBox from './index';

export default {
    title: 'UIParts/Basics/InputBox',
    component: InputBox,
};

export const Basic = () => <InputBox></InputBox>
export const Text = () => <InputBox inputType="text" value="text"></InputBox>
export const TextDefault = () => <InputBox inputType="text" defaultValue="text"></InputBox>
export const Number = () => <InputBox inputType="number" value={100}></InputBox>
export const NumberDefault = () => <InputBox inputType="number" defaultValue={100}></InputBox>
export const Password = () => <InputBox inputType="password" value="password"></InputBox>
