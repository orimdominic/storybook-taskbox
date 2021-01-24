import React from "react";
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import { PureInboxScreeen } from "../components/InboxScreen";
import * as TaskListStories from './TaskList.stories';

// A simple mock of redux store
const store = {
  getState: () => {
    return {
      tasks: TaskListStories.Default.args.tasks,
    }
  },
  subscribe: () => 0,
  dispatch: action('dispatch')
}

export default {
  component: PureInboxScreeen,
  title: "InboxScreen",
  decorators: [story => <Provider store={store}>{story()}</Provider> ]
};


const Template = (args) => <PureInboxScreeen {...args} />;
const bindToTemplate = (Template) => Template.bind({});

export const Default = bindToTemplate(Template);

export const Error = bindToTemplate(Template);
Error.args = {
  error: "Something went wrong",
};
