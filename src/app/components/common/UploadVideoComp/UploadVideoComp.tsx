import { FC, useState, useEffect } from "react";
import s from "./UploadVideoComp.module.scss";
import { Button, Form, Input, Radio } from "antd";
import TextArea from "antd/lib/input/TextArea";
import FileUpload from "../FileUpload";
import { UploadOutlined, PictureOutlined } from "@ant-design/icons";
import { Web3Storage } from "web3.storage";

// import ReactPlayer from "react-player";

const UploadVideoComp: FC = () => {
  const [storageClient, setStorageClient] = useState<any>(undefined);
  const [thumbnailCid, setThumbnailCid] = useState<string>("");
  const [videoCid, setVideoCid] = useState<string>("");

  useEffect(() => {
    const client: any = new Web3Storage({
      token: process.env.REACT_APP_WEB3_STORAGE_API_KEY as string,
    });
    setStorageClient(client);
  }, []);

  const onFinish = (values: any) => {
    console.log("Success:", values, videoCid, thumbnailCid);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleThumbnailUpload = async ({ target }: any) => {
    if (storageClient) {
      const cid = await storageClient.put(target.files, {
        wrapWithDirectory: false,
      });
      setThumbnailCid(cid);
    }
  };

  const handleVideoUpload = async ({ target }: any) => {
    if (storageClient) {
      const cid = await storageClient.put(target.files, {
        wrapWithDirectory: false,
      });
      setVideoCid(cid);
    }
  };

  return (
    <div className={`${s.compWrapper}`}>
      <div className={`${s.compRow}`}>
        <div className={`${s.colLeft}`}>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              flexDirection: "column",
            }}
          >
            <label
              htmlFor="video"
              style={{
                height: "300px",
                width: "100%",
                padding: "20px",
                backgroundColor: "#1a1a1a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
            >
              <UploadOutlined
                style={{ fontSize: "40px", marginBottom: "20px" }}
              />
              <p style={{ fontSize: "30px" }}>Upload Video</p>
              <input
                id="video"
                onChange={handleVideoUpload}
                style={{ display: "none" }}
                type="file"
                accept="video/*"
              />
            </label>
            <label
              htmlFor="thumbnail"
              style={{
                height: "300px",
                width: "100%",
                padding: "20px",
                backgroundColor: "#1a1a1a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                borderRadius: "10px",
              }}
            >
              <PictureOutlined
                style={{ fontSize: "40px", marginBottom: "20px" }}
              />
              <p style={{ fontSize: "30px" }}>Upload Thumbnail</p>
              <input
                id="thumbnail"
                onChange={handleThumbnailUpload}
                style={{ display: "none" }}
                type="file"
                accept="image/*"
              />
            </label>
          </div>
        </div>

        <div className={`${s.colRight} uploadVideoForm`}>
          <Form
            name="basic"
            onFinish={onFinish}
            layout="vertical"
            onFinishFailed={onFinishFailed}
          >
            <Form.Item label="Title" name="title">
              <Input />
            </Form.Item>

            <Form.Item name="description" label="Description">
              <TextArea rows={6} />
            </Form.Item>

            <Form.Item label="Category" name="category">
              <Input />
            </Form.Item>

            <Form.Item name="tags" label="Tags">
              <Radio.Group>
                <Radio.Button value="blockchain">Blockchain</Radio.Button>
                <Radio.Button value="arcana">Arcana</Radio.Button>
                <Radio.Button value="polygon">Polygon</Radio.Button>
              </Radio.Group>
            </Form.Item>

            <div className="visibility">
              <Form.Item name="membership" label="Select Membership">
                <Radio.Group>
                  <Radio.Button value="public">Public</Radio.Button>
                  <Radio.Button value="plan-1">Plan One</Radio.Button>
                  <Radio.Button value="plan-2">Plan Two</Radio.Button>
                </Radio.Group>
              </Form.Item>
            </div>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default UploadVideoComp;
