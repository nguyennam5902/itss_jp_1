import commonRoute from "../consts/api";

const user = JSON.parse(sessionStorage.getItem("user"));
export const getListBookmark = async() =>{
    try {
      const response = await fetch(`${commonRoute}bookmark/${user._id}`);

      const result = await response.json();
      return result.data || []
    } catch (error) {
      console.error("Error fetching data:", error);
      return []
    }
}
