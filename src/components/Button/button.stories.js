import Button from "./button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    onClick: { action: "onClick" },}
};

const Template = (args) => {
  return (
    <div
      style={{
        maxWidth: "400px",
        border: "1px solid black",
        padding: "1rem",
        backgroundColor: "#FEFEFE",
        borderRadius: "1rem",
      }}
    >
      <Button {...args}>{args.children}</Button>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
  isFullWidth: undefined,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: "Button",
  isFullWidth: true,
};
