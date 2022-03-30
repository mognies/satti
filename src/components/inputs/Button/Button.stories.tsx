import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from ".";

export default {
    title: 'inputs/Button',
    component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'OK'
};

export const Primary = Template.bind({})
Primary.args = {
    children: 'OK',
    variant: 'primary'
}