import React, { FC } from "react";

import { Button } from "components/common";
import Google from "assets/Google.png";

interface OwnProps {
  loginAction: () => void;
}

const CreatorButton: FC<OwnProps> = ({ loginAction }) => {
  return (
    <div onClick={loginAction}>
      <Button title="질문 방 생성" content={{ isImage: true, value: Google }} />
    </div>
  );
};

export default CreatorButton;
