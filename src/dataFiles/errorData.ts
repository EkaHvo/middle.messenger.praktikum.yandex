const err404: {
  errorCode: string,
  errorText: string,
} = {
  errorCode: "404",
  errorText: "Не туда попали",
};
const err500: {
  errorCode: string,
  errorText: string,
} = {
  errorCode: "500",
  errorText: "Мы уже фиксим",
};

const errorObj: {
  err404: Object | null,
  err500: Object | null,
} = {
  err404: err404,
  err500: err500,
};

export default errorObj;
