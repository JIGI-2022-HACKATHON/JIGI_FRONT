import { apiPath } from "../apiPath";
import { instance } from "./instance";

type RequestJoinKey = "email" | "password" | "grade" | "name" | "field";
type RequestJoinType = Record<RequestJoinKey, string>;

export const postJoin = (param: RequestJoinType) => {
  const path = apiPath.user.join();
  instance.post(path, param);
};

type RequestLoginKey = "email" | "password";
type RequestLoginType = Record<RequestLoginKey, string>;

export const postLogin = (param: RequestLoginType) => {
  const path = apiPath.user.login();
  instance.post(path, param);
};

interface MyInfoType {
  memberId: number;
  name: string;
  email: string;
  records: [
    {
      writerId: number;
      email: string;
      writerName: string;
      frameworkName: string;
      frameworkId: number;
      detailName: string;
      detailId: number;
      commentId: number;
      comment: string;
      date: string;
    }
  ];
}

export const getMyPage = async (grade: string) => {
  const path = apiPath.user.mypage(grade);
  return (await instance.get<MyInfoType>(path)).data;
};
