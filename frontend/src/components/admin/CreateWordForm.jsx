import React, { useState, memo, useEffect  } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Form, Input, Select, message, Modal, Button } from 'antd';
import commonRoute from '../../consts/api';

const { TextArea } = Input;

const CreateWordForm = ({topic, visible, handleCreate, handleCancel})  => {
    const onFinish = async (values) => {
        console.log('Received values:', values);
        values.topic_id = topic._id
        try {
          // Example: Send a POST request using Fetch API
            const response = await fetch(`${commonRoute}admin/word/`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }     
        } catch (error) {
          console.error('Error posting data:', error.message);
          message.error('Edit word fail!');
        }
    };

    return (
        <Modal
            title="Edit this word"
            open={visible}
            onOk={handleCreate}
            onCancel={handleCancel}
            okText="Edit"
            cancelText="Cancel"
            okButtonProps={{ style: { background: 'blue', color: 'white' }}}
            footer = {null}
        >
            <Form labelCol={{ span: 7,}} wrapperCol={{span: 14, }} layout="horizontal" style={{ maxWidth: 700,}}  onFinish={onFinish}>
                <Form.Item label="Kanji" name="kanji" rules={[{ required: true, message: 'Please input this field!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Hiragana" name="hiragana">
                    <Input />
                </Form.Item>
                <Form.Item label="Katakana" name="Katakana">
                    <Input />
                </Form.Item>
                <Form.Item label="Romaji" name = "romaji" rules={[{ required: true, message: 'Please input this field!' }]}>
                    <Input/>
                </Form.Item>
                <Form.Item label="Meaning" name = "meaning" rules={[{ required: true, message: 'Please input this field!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Type" name = "type" rules={[{ required: true, message: 'Please input this field!' }]}>
                    <Select>
                        <Select.Option value="noun">Noun</Select.Option>
                        <Select.Option value="verd">Verd</Select.Option>
                        <Select.Option value="adjective">Adjective</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Example" name = "example" rules={[{ required: true, message: 'Please input this field!' }]}>
                    <TextArea rows={2} />
                </Form.Item>
                <Form.Item label="Example(Meaning)" name = "example_meaning">
                    <TextArea rows={2} />
                </Form.Item>
                <Form.Item style={{ textAlign: 'right' }}>
                    <Button type="primary" htmlType="cancel" onClick={handleCancel} className="bg-red-400" >
                        Cancel
                    </Button>
                    <Button type="primary" htmlType="submit" onClick={handleCreate} className= "bg-blue-500 ml-8">
                        Submit
                    </Button>
                </Form.Item>
            </Form>    
        </Modal>
  );
};
export default CreateWordForm;