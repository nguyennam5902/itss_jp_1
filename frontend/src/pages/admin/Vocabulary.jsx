import React, { useState } from 'react'
import { Table , Pagination, Button, Modal  } from 'antd';
import icons from '../../consts/const';
import CreateWordForm from '../../components/admin/CreateWordForm';
const Vocabulary = () => {
  const dataSource = [
    {
      topic_id: '1',
      topic_name: 'School',
      total_vocabulary: 32,
      created_time: new Date().toLocaleTimeString(),
    },
    {
      topic_id: '2',
      topic_name: 'School',
      total_vocabulary: 32,
      created_time: new Date().toLocaleTimeString(),
    },
    {
      topic_id: '3',
      topic_name: 'School',
      total_vocabulary: 32,
      created_time: new Date().toLocaleTimeString(),
    },
    {
      topic_id: '4',
      topic_name: 'School',
      total_vocabulary: 32,
      created_time: new Date().toLocaleTimeString(),
    },
  ];
  const [data, setData] = useState(dataSource)
  
  const columns = [
    {
      title: <strong>Topic ID</strong>,
      dataIndex: 'topic_id',
      key: 'topic_id',
    },
    {
      title: <strong>Topic name</strong>,
      dataIndex: 'topic_name',
      key: 'topic_name',
    },
    {
      title: <strong>Total Vocabulary</strong>,
      dataIndex: 'total_vocabulary',
      key: 'total_vocabulary',
    },
    {
      title: <strong>Created Time</strong>,
      dataIndex: 'created_time',
      key: 'created_time',
    },
    {
      title: <strong>Create new word</strong>,
      dataIndex: 'create_new_word',
      key: 'create_new_word',
      render: (_, record) => (
        <Button 
          type="primary" 
          style={{ background: 'none', border: 'none' }} 
          onClick={() =>
            showCreateModal()
          }>
          <img src={icons.EditButton} alt="Button Image" style={{ height: '20px', width: '20px' }} />
        </Button>
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

  const [visible, setVisible] = useState(false);

  const showCreateModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleCreate = () => {
    // Handle form submission logic here
    alert('Add new word successful');
    setVisible(false);
  };

  
  
  const handleButtonClick = (record) => {
    Modal.confirm({
      title: 'Confirm',
      content: 'Are you sure you want to remove this comment?',
      onOk: () => removeRow(record.topic_id),
      okButtonProps: { style: { background: 'blue' } },
    });
  };

  const removeRow = (id) => {
    if (data && data.length > 0) {
      console.log(data)
      const updatedData = data.filter((item) => item.topic_id !== id);
      setData(updatedData);
      console.log(updatedData);
    }
  };

  return (
      <div className="w-full">
        <div><img src="./assets/icons/home.png" alt = ""></img></div>
          
        <div className = "m-10 flex rounded-2xl justify-center items-center">
          <h1 className="text-2xl font-bold">
            List of topics
          </h1>
        </div>
        <div className="flex justify-left items-center h-full">
            <h2 className="text-sm font-bold ml-10">{data.length} Topics</h2>
        </div>
        <div className="m-10 justify-center content-center overflow-x-auto">
          <Table dataSource={data} columns={columns} pagination = {false}  />
          {/* <Pagination style={{ marginTop: '16px' }} defaultCurrent={1} total={50} pageSize={10} /> */}
        </div>
          <Modal
            title="Create a new word"
            open={visible}
            onOk={handleCreate}
            onCancel={handleCancel}
            okText="Create"
            cancelText="Cancel"
            okButtonProps={{ style: { background: 'blue', color: 'white' }}}
          >
            <CreateWordForm />
          </Modal>
    </div>
  )
}

export default Vocabulary