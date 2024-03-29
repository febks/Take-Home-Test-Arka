import axios from "axios";
import { message } from "antd";

const api = `https://robohash.org`;

export async function getImage(search) {
  const result = { data: {}, error: undefined, ok: false, status: undefined };
  try {
    const response = await axios.get(api + `/${search}`);
    if (response.status === 200) {
      result.ok = true;
      result.data = response.data;
      result.status = response.status;
    } else {
      result.ok = false;
    }
  } catch (err) {
    result.error = err.response.data.error;
    result.status = err.response.status;
    message.error({ content: err.response.data.error })
  }
  return result;
}