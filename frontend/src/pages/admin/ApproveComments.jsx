import React, { useState } from 'react'
import { Table , Pagination, Button, Modal  } from 'antd';
import icons from '../../consts/const';

const ApproveComments = () => {
  const dataSource = [
    {
      id: '1',
      word: '宿題',
      hiragana: 'しゅくだい',
      user: 'Bryan',
      comment_content: '10 Downing Street',
      time: new Date().toLocaleTimeString(),
    },
    {
      id: '2',
      word: '宿題',
      hiragana: 'しゅくだい',
      user: 'Jame',
      comment_content: '10 Downing Street',
      time: new Date().toLocaleTimeString(),
    },
    {
      id: '3',
      word: '宿題',
      hiragana: 'しゅくだい',
      user: 'Ronaldo',
      comment_content: '10 Downing Street',
      time: new Date().toLocaleTimeString(),
    },
    {
      id: '4',
      word: '宿題',
      hiragana: 'しゅくだい',
      user: 'Messi',
      comment_content: '10 Downing Street',
      time: new Date().toLocaleTimeString(),
    },
  ];
  const [data, setData] = useState(dataSource)
  
  const columns = [
    {
      title: <strong>ID</strong>,
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: <strong>Word</strong>,
      dataIndex: 'word',
      key: 'word',
    },
    {
      title: <strong>Hiragana</strong>,
      dataIndex: 'hiragana',
      key: 'hiragana',
    },
    {
      title: <strong>User</strong>,
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: <strong>Comment content</strong>,
      dataIndex: 'comment_content',
      key: 'comment_content',
    },
    {
      title: <strong>Time</strong>,
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: <strong>Accept</strong>,
      dataIndex: 'accept', // Use a unique identifier for each row
      render: (_, record) => (
        <input type="checkbox" onChange={(e) => console.log('Checkbox checked:', e.target.checked)} />
      ),
    },
    {
      title: <strong>Remove</strong>,
      dataIndex: 'remove',
      key: 'remove',
      render: (_, record) => (
        <Button 
          type="primary" 
          style={{ background: 'none', border: 'none' }} 
          onClick={() =>
            handleButtonClick(record)
          }>
          <img src={icons.RemoveButton} alt="Button Image" style={{ height: '20px', width: '20px' }} />
        </Button>
      ),
    }
  ];
  
  const handleButtonClick = (record) => {
    Modal.confirm({
      title: 'Confirm',
      content: 'Are you sure you want to remove this comment?',
      onOk: () => removeRow(record.id),
      okButtonProps: { style: { background: 'blue' } },
    });
  };

  const removeRow = (id) => {
    if (data && data.length > 0) {
      console.log(data)
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
      console.log(updatedData);
    }
  };

  return (
      <div className="w-full">
        <div><img src="./assets/icons/home.png" alt = ""></img></div>
          
        <div className = "m-10 flex rounded-2xl justify-center items-center">
          <h1 className="text-2xl font-bold">
            New comments
          </h1>
        </div>
        <div className="flex justify-left items-center h-full">
            <h2 className="text-sm font-bold ml-10"> Results</h2>
        </div>
        <div className="m-10 justify-center content-center overflow-x-auto">
          <Table dataSource={data} columns={columns} pagination = {false}  />
          {/* <Pagination style={{ marginTop: '16px' }} defaultCurrent={1} total={50} pageSize={10} /> */}
        </div>
    </div>

  )
}

export default ApproveComments