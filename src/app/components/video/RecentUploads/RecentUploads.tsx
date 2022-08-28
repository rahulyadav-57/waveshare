import { useUserActions } from "@app/_actions/user.actions";
import { FC, useEffect, useState } from "react";
import VideoCard from "../VideoCard";
import s from "./RecentUploads.module.scss";

interface Props {
  heading: string;
}

const RecentUploads: FC<Props> = ({ heading }) => {
  const [listingData, setListingData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const userActions = useUserActions();

  const getListing = async () => {
    try {
      setIsLoading(true);
      const response = await userActions.getListedVideos();
      setListingData(response.data.data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getListing();
  }, []);

  return (
    <div className={s.container}>
      <span className={`heading-default ${s.heading}`}>{heading}</span>
      <div className={s.videoContent}>
        {listingData.map((item: any, i: number) => (
          <VideoCard data={item} key={i} className={s.card} />
        ))}
      </div>
    </div>
  );
};

export default RecentUploads;
