
import baseUrl from "../const/baseUrl";
const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
const token = storedUser.userLogged ? storedUser.userLogged.token : null;


class ResponseProvider {
  async postResponse(quizzId: any, questionId: any, value: any) {
    try {
      const response = await fetch(
        `${baseUrl}/response/${quizzId}/${questionId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ value }),
        }
      );
      const data = await response.json();
      return data.success;
    } catch (error) {
      throw error;
    }
  }
}

const respo = new ResponseProvider();
export default respo;
