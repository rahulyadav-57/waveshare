import { useUserActions } from "@app/_actions/user.actions";
import { authAtom } from "@app/_state";
import { Button } from "antd";
import { FC, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import VideoCard from "../VideoCard";
import s from "./UserUploads.module.scss";

const UserUploads: FC = () => {
  const [listingData, setListingData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const userActions = useUserActions();
  const [userAuth, setUserAuth] = useRecoilState(authAtom);

  const getListing = async () => {
    try {
      setIsLoading(true);
      const response = await userActions.getMyListedVideos(userAuth?.email!!);
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
      <div className={s.header}>
        <span className={`heading-default ${s.heading}`}>My Uploads</span>
        <NavLink to="/upload-video" className={`${s.item}`}>
          <Button className={`${s.profile} theme-btn-primary`}>
            Upload Video
          </Button>
        </NavLink>
      </div>
      <div className={s.videoContent}>
        {listingData.map((item: any, i: number) => (
          <VideoCard data={item} key={i} className={s.card} />
        ))}
      </div>
    </div>
  );
};

export default UserUploads;
