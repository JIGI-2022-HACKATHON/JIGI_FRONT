import { apiPath } from "../apiPath";
import { instance } from "./instance";

interface PostDetail {
  comment: string;
}

export const postDetail = (param: PostDetail, detailId: string) => {
  const path = apiPath.record.write(detailId);
  return instance.post(path, param);
};

type RecordType = {
  framework: string;
  frameworkCount: number;
  details: {
    name: string;
    id: number;
    cnt: number;
  }[];
}[];

export const getCurrentWeek = async (grade: string, field: string) => {
  const path = apiPath.record.getCurrentWeek(grade, field);
  return (await instance.get<RecordType>(path)).data;
};

export const getFiltering = async (
  year: string,
  month: string,
  field: string
) => {
  const path = apiPath.record.getFiltering(year, month, field);
  return (await instance.get<RecordType>(path)).data;
};

interface HistoryDetailType {
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

export const getAllDetail = async (fieldId: string) => {
  const path = apiPath.record.getDetail(fieldId);
  return (await instance.get<HistoryDetailType>(path)).data;
};
