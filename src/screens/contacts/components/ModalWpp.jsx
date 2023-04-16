import React from "react"

import { Button, Input, Form, Modal } from "antd"

export default function ModalWpp({ onClose }) {
  const [form] = Form.useForm()
  const { TextArea } = Input
  const sendToWpp = (values) => {
    const text = `
      Nome: ${values.name} \n
      Mensagem: ${values.message}
    `
    const codedText = encodeURIComponent(text)
    const wppNumber = "5547992848725"
    const url = `https://wa.me/${wppNumber}?text=${codedText}`

    window.open(url, "_blank")
  }

  const onFinish = (values) => {
    sendToWpp(values)
    onClose()
  }

  return (
    <Modal
      title={<span className="text-primary-400">WhatsApp</span>}
      open={true}
      onOk={sendToWpp}
      onCancel={onClose}
      footer={[
        <Button
          key="back"
          className="text-secondary border border-secondary font-bold"
          onClick={() => onClose()}
        >
          Cancelar
        </Button>,
        <Button
          key="submit"
          className="bg-primary-200 border border-primary-400 text-primary-400 font-bold"
          onClick={form.submit}
        >
          Enviar
        </Button>,
      ]}
    >
      <Form
        form={form}
        name="control-ref"
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          label="Nome"
          rules={[
            {
              required: true,
              message: "Por favor insira seu nome!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="message"
          label="Mensagem"
          rules={[
            {
              required: true,
              message: "por favor insira sua mensagem!",
            },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  )
}
