export type Pagination = {
  total: number;
  pageSize: number;
  current: number;
};

export type Result<T> = {
  success: boolean;
  msgCode: string;
  msgInfo: string;
  errorMessage: string;
  errorCode: string;
  status: number;
  errorList: string[];
  data: T;
  featureMap: any; //实际上是一个Map<string, any>
  pagination: Pagination;
  total: number;
  pageSize: number;
};
