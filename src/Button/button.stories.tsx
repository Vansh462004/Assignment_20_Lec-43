import { Meta, StoryFn } from "@storybook/react";
import Button from "./button";
import React from "react";
import '../index.css';


const ButtonStory = {
    title:"Button"
} as Meta<typeof Button>

export default ButtonStory;


const Template: StoryFn<typeof Button> = (args) => <Button {...args}>SignUp</Button>;



export const Primary = Template.bind({});
Primary.args = {
  theme: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {

  theme: 'secondary',
};
