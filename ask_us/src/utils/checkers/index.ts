export const checkStatus = (status: number, checkNumber: number) => {
  return status === checkNumber;
};

export const checkExcessStatus = (status: number, checkNumber: number) => {
  return status >= checkNumber;
};

export const checkHttpCode = (status: number): number => {
  return Math.floor(status / 100);
};
