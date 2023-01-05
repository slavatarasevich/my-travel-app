import axios from "axios";

class GetServices {
  static async getUsers() {
    const result = await axios.get("http://localhost:3001/users");
    return result.data;
  }
}
export default GetServices;
