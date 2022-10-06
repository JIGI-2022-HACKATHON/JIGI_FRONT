import { apiPath } from "../apiPath";
import { instance } from "./instance";

export const postNewTag = (
  filed: string,
  framework: string,
  detail: string
) => {
  const path = apiPath.tag.create(filed, framework, detail);
  return instance.post(path);
};

type Tag = Record<"name" | "id", string>;
export const getFrameWorks = async (filed: string) => {
  const path = apiPath.tag.selectFramework(filed);
  return (await instance.get<Tag[]>(path)).data;
};

export const getDetail = async (frameworkId: string) => {
  const path = apiPath.tag.selectDetail(frameworkId);
  return await instance.get<Tag[]>(path);
};
