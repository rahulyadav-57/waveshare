import Layout from "@app/components/ui/Layout";
import { VideoDetails } from "@app/components/video";
import { FC } from "react";

const VideoDetailsPage: FC = () => {
  return (
    <Layout>
      <VideoDetails />
    </Layout>
  );
};

export default VideoDetailsPage;
