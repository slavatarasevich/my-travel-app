import axios from "axios";

class GetServices {
  static async getUsers() {
    const result = await axios.get("http://localhost:3001/users");
    return result.data;
  }

  static async getTrips() {
    const result = await axios.get("http://localhost:3001/trips");
    return result.data;
  }
}
export default GetServices;
