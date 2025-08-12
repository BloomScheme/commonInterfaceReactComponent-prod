import * as React from 'react';
import { Component } from "react";

import { action } from '@storybook/addon-actions';

import Tab from './index';

export default {
    title: 'UIParts/Tab/Tab',
    component: Tab,
};

export const Basic = () => <Tab>タブ名</Tab>
