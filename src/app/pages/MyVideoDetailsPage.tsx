import Layout from "@app/components/ui/Layout";
import { VideoDetails } from "@app/components/video";
import UserUploads from "@app/components/video/UserUploads";
import { FC } from "react";

const MyVideoDetailsPage: FC = () => {
  return (
    <Layout>
      <UserUploads />
    </Layout>
  );
};

export default MyVideoDetailsPage;
