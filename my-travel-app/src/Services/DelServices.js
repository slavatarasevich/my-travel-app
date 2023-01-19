import axios from "axios";

class DelServices {
  static async delPosts(id) {
    try {
      const result = await axios.delete(`http://localhost:3001/trips/${id}`);
      console.log("я отработала");
      return result.status;
    } catch (error) {
      return error;
    }
  }
}

export default DelServices;
