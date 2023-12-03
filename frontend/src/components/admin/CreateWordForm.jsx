import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const CreateWordForm = () => {
  return (
    <>
      <Form
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        
        style={{
          maxWidth: 700,
        }}
      >
        <Form.Item label="Kanji">
          <Input />
        </Form.Item>
        <Form.Item label="Hiragana">
          <Input />
        </Form.Item>
        <Form.Item label="Romaji">
          <Input />
        </Form.Item>
        <Form.Item label="Meaning">
          <Input />
        </Form.Item>
        <Form.Item label="Topic">
          <Select>
            <Select.Option value="topic">School</Select.Option>
            <Select.Option value="topic">Company</Select.Option>
            <Select.Option value="topic">Book</Select.Option>
            <Select.Option value="topic">Network</Select.Option>
          </Select>
        </Form.Item>
        {/* <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              {
                title: 'Light',
                value: 'light',
                children: [
                  {
                    title: 'Bamboo',
                    value: 'bamboo',
                  },
                ],
              },
            ]}
          />
        </Form.Item> */}
       
        <Form.Item label="Example">
          <TextArea rows={2} />
        </Form.Item>
        <Form.Item label="Example(Romaji)">
          <TextArea rows={2} />
        </Form.Item>
        <Form.Item label="Example(Meaning)">
          <TextArea rows={2} />
        </Form.Item>
    
      </Form>
    </>
  );
};
export default () => <CreateWordForm />;