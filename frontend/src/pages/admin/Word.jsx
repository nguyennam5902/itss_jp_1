import React, { useState,useEffect } from 'react'
import { Table, Button, Modal } from 'antd';
import icons from '../../consts/const';
import EditWordForm from '../../components/admin/EditWordForm';
import { useNavigate,useParams, } from 'react-router-dom';

import commonRoute from '../../consts/api';
const Word = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [listWords, setListWords] = useState([])  
  const [visible, setVisible] = useState(false);
  const [editWord, setEditWord] = useState(null)

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
        setVisible(false);
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
        //   setListWords(result.data)
        const updatedList = [...listWords, ...result.data];
        setListWords(updatedList);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

  // handle delete word
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

  useEffect(() =>{
    handleGetWordByTopic(id);
  },[])

  return (
      <div className="w-full ">
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
        <div className="m-10 justify-center content-center h-full overflow-y-auto overflow-x-auto">
          <Table dataSource={listWords} columns={columns} pagination = {false} />
          <EditWordForm editWord={editWord} visible = {visible} handleCreate={handleCreate} handleCancel = {handleCancel}/>
        </div>
    </div>
  )
}

export default Word