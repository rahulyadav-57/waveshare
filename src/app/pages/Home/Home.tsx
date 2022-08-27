import Layout from "@app/components/ui/Layout";
import { RecentUploads } from "@app/components/video";
import { FC } from "react";

const Home: FC = () => {
  return (
    <Layout>
      <RecentUploads heading="Recommended For You" />
    </Layout>
  );
};

export default Home;
