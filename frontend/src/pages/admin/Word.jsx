import React, { useState,useEffect } from 'react'
import { Table , Pagination, Button, Modal, Popconfirm, Form  } from 'antd';
import icons from '../../consts/const';
import EditWordForm from '../../components/admin/EditWordForm';
import { useNavigate,useParams } from 'react-router-dom';
import commonRoute from '../../consts/api';
const Word = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [listWords, setListWords] = useState([])
  const [visible, setVisible] = useState(false);
  const [editWord, setEditWord] = useState(null)
  const [form] = Form.useForm();

  const columns = [
    {
      title: <strong>Word ID</strong>,
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: <strong>Kanji</strong>,
      dataIndex: 'kanji',
      key: 'kanji',
    },
    {
      title: <strong>Hiragana</strong>,
      dataIndex: 'hiragana',
      key: 'hiragana',
    },
    {
      title: <strong>Romaji</strong>,
      dataIndex: 'romaji',
      key: 'romaji',
    },
    {
        title: <strong>Meaning</strong>,
        dataIndex: 'meaning',
        key: 'meaning',
    },
    {
        title: <strong>Example</strong>,
        dataIndex: 'example',
        key: 'example',
    },
    {
      title: <strong>Edit</strong>,
      dataIndex: 'edit',
      key: 'edit',
      render: (_, record) => (
        <Button 
          type="primary" 
          style={{ background: 'none', border: 'none' }} 
          onClick={() => {
            setEditWord(record)
            console.log(record)
            showCreateModal()
          }}>
          <img src={icons.EditButton} alt="Button Image" style={{ height: '20px', width: '20px' }} />
        </Button>
      ),

    },
    {
      title: <strong>Remove</strong>,
      dataIndex: 'remove',
      key: 'remove',
      render: (text, record) => (
        <Button 
            type="primary" 
            style={{ background: 'none', border: 'none' }} 
            onClick={() =>{
                handleButtonClick(record)
            }}
        >
            <img src={icons.RemoveButton} alt="Button Image" style={{ height: '20px', width: '20px' }} />
        </Button>
      ),
    }
  ];

    const showCreateModal = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const handleCreate = () => {
        // Handle form submission logic here
        setVisible(false);
        alert('Edit word successfull');
    };
  
  const handleButtonClick = (record) => {
    Modal.confirm({
      title: 'Confirm',
      content: 'Are you sure you want to delete this word?',
      onOk: () => handleDeleteWord(record._id),
      okButtonProps: { style: { background: 'blue' } },
    });
  };

  const backAction = () => {
    navigate(-1)
  }

    // handle get word by topic
  const handleGetWordByTopic = async (id) =>{
    try {
      const response = await fetch(`${commonRoute}topic/${id}`);
      const result = await response.json();
      setListWords(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const handleDeleteWord = async(id) =>{
    try{
        const response = await fetch(`${commonRoute}admin/word/${id}`,{
            method: 'DELETE',
        });

        if (!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        handleGetWordByTopic(id)
    }catch (error) {
      console.error('Error fetching data:', error);
    }
  }
    //fetch api
  useEffect(() =>{
    handleGetWordByTopic(id);

  },)

  return (
      <div className="w-full">
         <button className="bg-neutral-200 font-bold py-2 px-4 rounded text-sm ml-5 mt-5" onClick={backAction}>
            Back
        </button>
          
        <div className = "mr-10 ml-10 mb-10 flex rounded-2xl justify-center items-center">
          <h1 className="text-2xl font-bold">
            School
          </h1>
        </div>
        <div className="flex justify-left items-center h-full">
            <h2 className="text-sm font-bold ml-10">{listWords.length} Words</h2>
        </div>
        <div className="m-10 justify-center content-center overflow-x-auto">
          <Table
            dataSource={listWords}
            columns={columns} 
            pagination = {false} 
          >
            
          </Table>
          {/* <Pagination style={{ marginTop: '16px' }} defaultCurrent={1} total={50} pageSize={10} /> */}
          {
            editWord != null && (
            <Modal
                title="Edit this word"
                open={visible}
                onOk={handleCreate}
                onCancel={handleCancel}
                okText="Edit"
                cancelText="Cancel"
                okButtonProps={{ style: { background: 'blue', color: 'white' }}}
                >
                    {console.log(editWord)}
                    <EditWordForm editWord = {editWord}/>       
            </Modal>
            )
          }
          
        </div>
        
    </div>
  )
}

export default Word