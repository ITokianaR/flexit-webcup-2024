import baseUrl from "../const/baseUrl";
const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
const token = storedUser.userLogged ? storedUser.userLogged.token : null;


class ChoiceProvider {
  async getChoices() {
    try {
      const response = await fetch(`${baseUrl}/choice/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  async getQuestionById(questionId:any) {
    try {
      const response = await fetch(`${baseUrl}/question/${questionId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data.choiceAndQuestions;
    } catch (error) {
      throw error;
    }
  }
}

const choice = new ChoiceProvider();
export default choice;
