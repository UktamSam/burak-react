import axios from "axios";
import { serverApi } from "../../lib/config";

import {
  LoginInput,
  Member,
  MemberInput,
  MemberUpdateInput,
} from "../../lib/types/member";

class MemberService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async getTopUsers(): Promise<Member[]> {
    try {
      const url = this.path + "/member/top-users";
      const result = await axios.get(url);
      console.log("result:", result);
      return result.data;
    } catch (error) {
      console.log("Error getTopUsers:", error);
      throw error;
    }
  }

  public async getRestaurant(): Promise<Member> {
    try {
      const url = this.path + "/member/restaurant";
      const result = await axios.get(url);
      console.log("result:", result);
      return result.data;
    } catch (error) {
      console.log("Error getRestaurant:", error);
      throw error;
    }
  }

  public async signUp(input: MemberInput): Promise<Member> {
    try {
      const url = this.path + "/member/signup";
      const result = await axios.post(url, input, { withCredentials: true });

      const member = result.data.member;
      console.log("result", member);

      localStorage.setItem("memberData", JSON.stringify(member));
      return member;
    } catch (error) {
      console.log("ERROR, signUp", error);
      throw error;
    }
  }

  public async login(input: LoginInput): Promise<Member> {
    try {
      const url = this.path + "/member/login";
      const result = await axios.post(url, input, { withCredentials: true });

      const member = result.data.member;
      console.log("result", member);

      localStorage.setItem("memberData", JSON.stringify(member));
      return member;
    } catch (error) {
      console.log("ERROR, login", error);
      throw error;
    }
  }
  public async logout(): Promise<void> {
    try {
      const url = this.path + "/member/logout";
      const result = await axios.post(url, null, { withCredentials: true });
      console.log("logout success", result);

      localStorage.removeItem("memberData");
    } catch (error) {
      console.log("ERROR, logout", error);
      throw error;
    }
  }
  public async updateMember(input: MemberUpdateInput): Promise<Member> {
    try {
      const url = this.path + "/member/update";
      const formData = new FormData();
      formData.append("memberNick", input.memberNick || "");
      formData.append("memberPhone", input.memberPhone || "");
      formData.append("memberAddress", input.memberAddress || "");
      formData.append("memberDesc", input.memberDesc || "");
      formData.append("memberImage", input.memberImage || "");
      const result = await axios(url, {
        method: "POST",
        data: formData,
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      localStorage.setItem("memberData", JSON.stringify(result.data));
      return result.data;
    } catch (error) {
      console.log("ERROR, updateMember", error);
      throw error;
    }
  }
}

export default MemberService;
