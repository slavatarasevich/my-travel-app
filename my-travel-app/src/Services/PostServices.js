import axios from "axios";

class PostServices {
  static async postUser(user, password) {
    try {
      const result = await axios.post("http://localhost:3001/users", {
        user,
        password,
      });
      return result.status;
    } catch (error) {
      return error;
    }
  }

  static async postTrip(destination, activity, dates, guests) {
    try {
      const result = await axios.post("http://localhost:3001/trips", {
        destination,
        activity,
        dates,
        guests,
      });
      return result.status;
    } catch (error) {
      return error;
    }
  }
}

export default PostServices;
