import React, { FC } from "react";

import { Button } from "components/common";

interface OwnProps {
  openModal: () => void;
}

const UserButton: FC<OwnProps> = ({ openModal }) => {
  return (
    <div onClick={openModal}>
      <Button
        title="질문 하기"
        content={{ isImage: false, value: "익명 유저" }}
      />
    </div>
  );
};

export default UserButton;
