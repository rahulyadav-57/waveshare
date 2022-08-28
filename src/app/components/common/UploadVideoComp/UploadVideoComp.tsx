import { FC} from "react";
import s from "./UploadVideoComp.module.scss";
import { Button, Form, Input, Radio } from "antd";
import TextArea from "antd/lib/input/TextArea";
// import ReactPlayer from "react-player";

const UploadVideoComp: FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className={`${s.compWrapper}`}>
      <div className={`${s.compRow}`}>
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
        <div className={`${s.colLeft}`}></div>
      </div>
    </div>
  );
};

export default UploadVideoComp;
