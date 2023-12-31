import React, { useEffect, useState, useContext } from "react";
import { Table, Pagination, Button, Modal, message } from "antd";
import icons from "../../consts/const";
import CreateWordForm from "../../components/admin/CreateWordForm";
import { useNavigate, useParams } from "react-router-dom";
import commonRoute from "../../consts/api";
const Vocabulary = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [topics, setTopics] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  // const dataSource = [
  //   {
  //     topic_id: '1',
  //     topic_name: 'School',
  //     total_vocabulary: 32,
  //     created_time: new Date().toLocaleTimeString(),
  //   },
  //   {
  //     topic_id: '2',
  //     topic_name: 'School',
  //     total_vocabulary: 32,
  //     created_time: new Date().toLocaleTimeString(),
  //   },
  // ];
  // const [data, setData] = useState(dataSource)

  const newData = {
    id: "656954a74d1a8f73e4eb6c3a",
    kanji: "友達",
    hiragana: "ともだち",
    romaji: "tomodachi",
    meaning: "Friend",
    example: "友達がたくさんいます",
  };

  const columns = [
    {
      title: <strong>Topic ID</strong>,
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: <strong>Topic name</strong>,
      dataIndex: "topic_name",
      key: "topic_name",
    },
    // {
    //   title: <strong>Total Vocabulary</strong>,
    //   dataIndex: 'total_vocabulary',
    //   key: 'total_vocabulary',
    // },
    // {
    //   title: <strong>Created Time</strong>,
    //   dataIndex: 'created_time',
    //   key: 'created_time',
    // },
    {
      title: <strong>Create new word</strong>,
      dataIndex: "create_new_word",
      key: "create_new_word",
      render: (_, record) => (
        <Button
          type="primary"
          style={{ background: "none", border: "none" }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setNextPage(record);
            showCreateModal();
          }}
        >
          <img
            src={icons.AddButton}
            alt="Button Image"
            style={{ height: "20px", width: "20px" }}
          />
        </Button>
      ),
    },
    {
      title: <strong>Remove</strong>,
      dataIndex: "remove",
      key: "remove",
      render: (_, record) => (
        <Button
          type="primary"
          style={{ background: "none", border: "none" }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleButtonClick(record);
          }}
        >
          <img
            src={icons.RemoveButton}
            alt="Button Image"
            style={{ height: "20px", width: "20px" }}
          />
        </Button>
      ),
    },
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
    message.success("Create new word successfully");
    // navigate(`/admin/topic_manage/${nextPage._id}`);
  };

  const handleButtonClick = (record) => {
    Modal.confirm({
      title: "Confirm",
      content: "Are you sure you want to remove this comment?",
      onOk: () => removeRow(record._id),
      okButtonProps: { style: { background: "blue" } },
    });
  };

  const removeRow = (id) => {
    if (topics && topics.length > 0) {
      const updatedData = topics.filter((item) => item._id !== id);
      setTopics(updatedData);
    }
  };

  // tap to one row
  const rowTapped = (record) => {
    return {
      onClick: () => handleRowClick(record),
    };
  };

  const handleRowClick = (record) => {
    // Your custom logic when a row is clicked
    navigate(`/admin/topic_manage/${record._id}`);
  };

  // fetch API
  const allTopics = async () => {
    try {
      const response = await fetch(`${commonRoute}search/topic/`);
      const result = await response.json();
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  //fetch api
  useEffect(() => {
    const fetchData = async () => {
      const topicsData = await allTopics();
      if (topicsData) {
        setTopics(topicsData);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full ">
      <div className="m-10 flex rounded-2xl justify-center items-center">
        <h1 className="text-2xl font-bold">List of topics</h1>
      </div>
      <div className="flex justify-left items-center h-full">
        <h2 className="text-sm font-bold ml-10">{topics.length} Topics</h2>
      </div>
      <div className="m-10 justify-center content-center h-full overflow-x-auto">
        <Table
          dataSource={topics}
          columns={columns}
          pagination={false}
          onRow={(record) => ({
            ...rowTapped(record),
          })}
        />
        <CreateWordForm
          visible={visible}
          topic={nextPage}
          handleCreate={handleCreate}
          handleCancel={handleCancel}
        />
        {/* <Pagination style={{ marginTop: '16px' }} defaultCurrent={1} total={50} pageSize={10} /> */}
      </div>
    </div>
  );
};

export default Vocabulary;
