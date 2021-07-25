import React, { useContext, useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import { AuthContext } from "../../hooks/auth.context";
import { IRegisterDTO } from "../../types/auth";

export const Register: React.FC = () => {
  const { isLogged, register } = useContext(AuthContext);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values: IRegisterDTO) => {
    register(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  if (isLogged) {
    return null;
  }

  return (
    <>
      <Button ghost onClick={showModal} style={{ border: 0 }}>
        Criar conta
      </Button>
      <Modal
        title="Criar nova conta"
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Nome: "
            name="name"
            rules={[{ required: true, message: "Insira seu e-mail!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="E-mail: "
            name="email"
            rules={[{ required: true, message: "Insira seu e-mail!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Senha: "
            name="password"
            rules={[{ required: true, message: "Insira sua senha!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
            <Button type="primary" htmlType="submit">
              Logar
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
