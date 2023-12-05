import React, { useState, memo, useEffect  } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Form, Input, Select, message } from 'antd';
import commonRoute from '../../consts/api';

const { TextArea } = Input;

const EditWordForm = (props)  => {
    
    console.log(props._id)
    const onFinish = async (values) => {
        try {
          // Example: Send a POST request using Fetch API
          const response = await fetch(`${commonRoute}admin/word/${props._id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });
    
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          // Display a success message
          message.success('Data posted successfully');
        } catch (error) {
          console.error('Error posting data:', error.message);
          // Display an error message
          message.error('Error posting data');
        }
      };

    
    return (
    <>
      <Form labelCol={{ span: 7,}} wrapperCol={{span: 14, }} layout="horizontal" style={{ maxWidth: 700,}}  onFinish={onFinish}>
        <Form.Item label="Kanji" name="kanji">
          <Input />
        </Form.Item>
        <Form.Item label="Hiragana" name="hiragana">
          <Input  />
        </Form.Item>
        <Form.Item label="Romaji" name = "romaji">
          <Input/>
        </Form.Item>
        <Form.Item label="Meaning" name = "meaning">
          <Input />
        </Form.Item>
        <Form.Item label="Type" name = "type">
          <Select>
            <Select.Option value="type">Noun</Select.Option>
            <Select.Option value="type">Verd</Select.Option>
            <Select.Option value="type">Adjective</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Topic" name = "topic">
          <Select>
            <Select.Option value="topic">School</Select.Option>
            <Select.Option value="topic">Company</Select.Option>
            <Select.Option value="topic">Book</Select.Option>
            <Select.Option value="topic">Network</Select.Option>
          </Select>
        </Form.Item>
       
        <Form.Item label="Example" name = "example">
          <TextArea rows={2} />
        </Form.Item>
        <Form.Item label="Example(Romaji)" name = "example_romaji">
          <TextArea rows={2} />
        </Form.Item>
        <Form.Item label="Example(Meaning)" name = "example_meaning">
          <TextArea rows={2} />
        </Form.Item>
    
      </Form>
    </>
  );
};
export default EditWordForm;