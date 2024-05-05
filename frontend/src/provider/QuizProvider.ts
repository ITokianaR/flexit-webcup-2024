import baseUrl from "../const/baseUrl";
const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
const token = storedUser.userLogged ? storedUser.userLogged.token : null;


class QuizProvider {
  async getQuizz() {
    try {
      const response = await fetch(`${baseUrl}/quiz/getQuizz`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async evaluateQuizResult(quizId: any) {
    try {
      const token = localStorage.getItem("user");
      const response = await fetch(`${baseUrl}/quizz/evaluate/${quizId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data.val;
    } catch (error) {
      throw error;
    }
  }
}

const quiz = new QuizProvider();
export default quiz;
