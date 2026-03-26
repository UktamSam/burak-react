import { Box } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Button from "@mui/material/Button";
import { useGlobals } from "../../hooks/useGlobals";
import { useState } from "react";
import { MemberUpdateInput } from "../../../lib/types/member";
import { T } from "../../../lib/types/common";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { Messages, serverApi } from "../../../lib/config";
import MemberService from "../../services/MemberService";

export function Settings() {
  const { authUser, setAuthMember } = useGlobals();
  const [image, setImage] = useState(
    authUser?.memberImage
      ? `${serverApi}/${authUser.memberImage}`
      : "/icons/default-user.svg",
  );
  console.log("authUser:", authUser);
  const [memberUpdateInput, setMemberUpdateInput] = useState<MemberUpdateInput>(
    {
      memberNick: authUser?.memberNick,
      memberPhone: authUser?.memberPhone,
      memberAddress: authUser?.memberAddress,
      memberDesc: authUser?.memberDesc,
      memberImage: authUser?.memberImage,
    },
  );
  /** HANDLERS */
  const memberNickHandler = (e: T) => {
    memberUpdateInput.memberNick = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };
  const memberPhoneHandler = (e: T) => {
    memberUpdateInput.memberPhone = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };
  const memberAddressHandler = (e: T) => {
    memberUpdateInput.memberAddress = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };
  const memberDescHandler = (e: T) => {
    memberUpdateInput.memberDesc = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };
  const memberImageHandler = (e: T) => {
    memberUpdateInput.memberImage = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };
  const memberUpdateRequest = async () => {
    try {
      if (!authUser) throw new Error(Messages.error2);
      if (
        memberUpdateInput.memberNick === "" ||
        memberUpdateInput.memberPhone === "" ||
        memberUpdateInput.memberAddress === "" ||
        memberUpdateInput.memberDesc === ""
      ) {
        throw new Error(Messages.error3);
      }
      const member = new MemberService(),
        result = await member.updateMember(memberUpdateInput);
      setAuthMember(result);
      await sweetTopSmallSuccessAlert("Modified successfully!", 700);
    } catch (error) {
      console.log(error);
      sweetErrorHandling(error).then();
    }
  };
  const handleImageViewer = (e: T) => {
    const file = e.target.files[0];
    // console.log("file:", file)
    const fileType = file.type,
      valTypes = ["image/jpg", "image/jpeg", "image/png"];
    if (!valTypes.includes(fileType)) {
      sweetErrorHandling(Messages.error5).then();
    }
    if (file) {
      memberUpdateInput.memberImage = file;
      setMemberUpdateInput({ ...memberUpdateInput });
      setImage(URL.createObjectURL(file));
    }
  };
  return (
    <Box className={"settings"}>
      <Box className={"member-media-frame"}>
        <img src={image} className={"mb-image"} />
        <div className={"media-change-box"}>
          <span>Upload image</span>
          <p>JPG, JPEG, PNG formats only!</p>
          <div className={"up-del-box"}>
            <Button component="label" onChange={handleImageViewer}>
              <CloudDownloadIcon />
              <input type="file" hidden />
            </Button>
          </div>
        </div>
      </Box>
      <Box className={"input-frame"}>
        <div className={"long-input"}>
          <label className={"spec-label"}>Username</label>
          <input
            onChange={memberNickHandler}
            className={"spec-input mb-nick"}
            type="text"
            placeholder={authUser?.memberNick}
            value={memberUpdateInput?.memberNick ?? ""}
            name="memberNick"
          />
        </div>
      </Box>
      <Box className={"input-frame"}>
        <div className={"short-input"}>
          <label className={"spec-label"}>Phone</label>
          <input
            className={"spec-input mb-phone"}
            type="text"
            placeholder={
              authUser?.memberPhone ? authUser.memberPhone : "No Phone"
            }
            value={memberUpdateInput?.memberPhone ?? ""}
            onChange={memberPhoneHandler}
            name="memberPhone"
          />
        </div>
        <div className={"short-input"}>
          <label className={"spec-label"}>Address</label>
          <input
            className={"spec-input  mb-address"}
            type="text"
            placeholder={
              authUser?.memberAddress ? authUser.memberAddress : "No Address"
            }
            value={memberUpdateInput?.memberAddress ?? ""}
            onChange={memberAddressHandler}
            name="memberAddress"
          />
        </div>
      </Box>
      <Box className={"input-frame"}>
        <div className={"long-input"}>
          <label className={"spec-label"}>Description</label>
          <textarea
            className={"spec-textarea mb-description"}
            placeholder={
              authUser?.memberDesc ? authUser.memberDesc : "No Description"
            }
            onChange={memberDescHandler}
            value={memberUpdateInput?.memberDesc ?? ""}
            name="memberDesc"
          />
        </div>
      </Box>
      <Box className={"save-box"}>
        <Button onClick={memberUpdateRequest} variant={"contained"}>
          Save
        </Button>
      </Box>
    </Box>
  );
}
