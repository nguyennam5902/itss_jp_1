import React, { useEffect, useState } from "react";
import { Table, Pagination, Button, Modal } from "antd";
import icons from "../../consts/const";
import commonRoute from "../../consts/api";
const ApproveComments = () => {
  const [data, setData] = useState([]);

  const columns = [
    {
      title: <strong>ID</strong>,
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: <strong>Word</strong>,
      dataIndex: "kanji",
      key: "kanji",
    },
    {
      title: <strong>Hiragana</strong>,
      dataIndex: "hiragana",
      key: "hiragana",
    },
    {
      title: <strong>User</strong>,
      dataIndex: "user_id",
      key: "user_id",
    },
    {
      title: <strong>Comment content</strong>,
      dataIndex: "comment_text",
      key: "comment_text",
    },
    {
      title: <strong>Time</strong>,
      dataIndex: "created_at",
      key: "created_at",
    },
    {
      title: <strong>Accept</strong>,
      dataIndex: "accept", // Use a unique identifier for each row
      render: (_, record) => (
        <input type="checkbox" onChange={(e) => approveComments(record)} />
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
          onClick={() => handleButtonClick(record)}
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

  const handleButtonClick = (record) => {
    Modal.confirm({
      title: "Confirm",
      content: "Are you sure you want to remove this comment?",
      onOk: () => removeRow(record.id),
      okButtonProps: { style: { background: "blue" } },
    });
  };

  const removeRow = (id) => {
    if (data && data.length > 0) {
      const updatedData = data.filter((item) => item._id !== id);
      setData(updatedData);
    }
  };

  // approve comments
  const approveComments = async (record) => {
    Modal.confirm({
      title: "Approve comment",
      onOk: async () => {
        // e.preventDefault();
        try {
          const response = await fetch(
            `${commonRoute}admin/word/${record.word_id}/comments/${record._id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const result = await response.json();
          if (result.status === 200) {
            removeRow(record._id);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      },
      okButtonProps: { style: { background: "blue" } },
    });
  };

  // lay tat ca cac comment chua duoc approve
  const getComments = async () => {
    try {
      const response = await fetch(`${commonRoute}admin/comments`);
      const result = await response.json();
      setData(result.data);
      console.log(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="w-full">
      <div>
        <img src="./assets/icons/home.png" alt=""></img>
      </div>

      <div className="m-10 flex rounded-2xl justify-center items-center">
        <h1 className="text-2xl font-bold">New comments</h1>
      </div>
      <div className="flex justify-left items-center h-full">
        <h2 className="text-sm font-bold ml-10">
          {data.length} New comments to approve
        </h2>
      </div>
      <div className="m-10 justify-center content-center overflow-x-auto">
        <Table dataSource={data} columns={columns} pagination={false} />
        {/* <Pagination style={{ marginTop: '16px' }} defaultCurrent={1} total={50} pageSize={10} /> */}
      </div>
    </div>
  );
};

export default ApproveComments;
