import { VideoPlayer } from "@app/components/common";
import { useUserActions } from "@app/_actions/user.actions";
import { FC, useEffect, useState } from "react";
import ContentCreatorDetails from "./ContentCreatorDetails";
import s from "./VideoDetails.module.scss";
import { useParams, useSearchParams } from "react-router-dom";

const VideoDetails: FC = () => {
  const [listingData, setListingData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const userActions = useUserActions();

  const { id } = useParams();

  const getListing = async () => {
    try {
      setIsLoading(true);
      const response = await userActions.videoDetails(id!!);
      setListingData(response.data.data);
      console.log("response", response);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!id && listingData) {
      return;
    }
    getListing();
  }, [id]);
  return (
    <div className={s.container}>
      {listingData && (
        <div>
          <VideoPlayer
            thumbnail={`https://ipfs.io/ipfs/${listingData.thumbnail_id}`}
            src={`https://ipfs.io/ipfs/${listingData.video_id}`}
          />

          <div className={s.info}>
            <div className={s.content}>
              <span className={s.title}>{listingData.title}</span>
              <p>{listingData.description}</p>
            </div>
            <div className={s.wave}>
              <img src="/assets/images/icon/logo-icon.png" alt="" /> Wave (912
              Lowaved It!)
            </div>
          </div>
          <ContentCreatorDetails />
        </div>
      )}
    </div>
  );
};

export default VideoDetails;
