type DataObj = {
  [key:string]:any;
}

export default function queryStringify(data: DataObj = {}) {
  if (typeof data !== 'object') {
      throw new Error('Data not an object');
  }

  const result = Object.keys(data).reduce((result, key) => {
      return result += `${key}=${data[key]}&`;
  }, '?');

  return result.slice(0, -1);
}
