import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Center } from "@chakra-ui/react";

const useStyles = makeStyles({
  container: {
    background: "#addce9",
    height: "70vh",
  },
  title: {},
});

const HorizontalLoginForm = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    console.log("Finish:", values);
  };

  return (
    <Form
      form={form}
      name="horizontal_login"
      layout="inline"
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item shouldUpdate={true}>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length)
                .length
            }
          >
            Log in
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default function NewsLetter() {
  const classes = useStyles();
  return (
    <div id="news">
      <br />
      <br />
      <hr />
      <Container className={classes.container}>
        <br />
        <br />
        <br />
        <Typography align="center" variant="h3">
          <b> Are You Interested In More Photos?</b>
        </Typography>
        <br />
        <Typography variant="h5" align="center">
          Subscribe to My Newsletter!
        </Typography>
        <br />
        <Typography variant="h6" align="center">
          I'll send you a pack of free stock photos each month.
        </Typography>
        <br />
        <Center>
          <HorizontalLoginForm />
        </Center>
        <br />
        <br />
        <br />
      </Container>
    </div>
  );
}
