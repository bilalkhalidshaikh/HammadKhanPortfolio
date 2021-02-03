import React, { Fragment } from "react";
import { Form, Input, InputNumber, Button } from "antd";
import { CssBaseline, Container, Typography } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import { makeStyles } from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";
import { Center } from "@chakra-ui/react";

const useStyles = makeStyles({
  container: {
    background: "#fff",
    height: "50vh",
  },
  title: {},
  line: {
    width: "50px",
    height: "5px",
    backgroundColor: "skyblue",
  },
});

const layout = {
  labelCol: {
    span: 12,
  },
  wrapperCol: {
    span: 18,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const GetForm = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Center>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
          
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "age"]}
          label="Age"
          rules={[
            {
              type: "number",
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name={["user", "website"]} label="Website">
          <Input />
        </Form.Item>
        <Form.Item name={["user", "introduction"]} label="Introduction">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Center>
  );
};

export default function GetInTouch() {
  const classes = useStyles();
  return (
    <div id="get">
      <br />
      <br />
      <hr />
      <Container className={classes.container}>
        <CssBaseline />
        <br />
        <br />
        <br />
        <Typography align="center" variant="h3">
          <b>GET IN TOUCH</b>
        </Typography>
        <br />
        <Center>
          <div className={classes.line} />
        </Center>
        <br />
        <Typography align="center" variant="h6">
          Hyderabad , Pakistan
        </Typography>
        <Typography align="center" variant="h6">
          <a href="tel:+923363309425">
            <PhoneIcon />
            +92 336 3309425
          </a>
        </Typography>
        <Typography align="center" variant="h6">
          <a href="mailto:hammadkhan@gmail.com">
            <MailIcon />
            hammadkhan@gmail.com
          </a>
        </Typography>
        <br />
        <br />
        <GetForm />
      </Container>
    </div>
  );
}
