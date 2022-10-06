export const apiPath = {
  user: {
    join: () => "/join",
    login: () => "/login",
    mypage: (grade: string) => `/my/${grade}`,
  },
  record: {
    write: (detailId: string) => `/record/${detailId}`,
    getFiltering: (year: string, month: string, field: string) =>
      `/record/all/${year}/${month}/${field}`,
    getCurrentWeek: (grade: string, field: string) =>
      `/record/main/${grade}/${field}`,
    getDetail: (detailId: string) => `/record/all/detail/${detailId}`,
  },
  tag: {
    create: (field: string, framework: string, detail: string) =>
      `/tag?field=${field}&framework=${framework}&detail=${detail}`,
    selectFramework: (field: string) => `/tag/framework/${field}`,
    selectDetail: (frameworkId: string) => `/tag/detail/${frameworkId}`,
  },
};
