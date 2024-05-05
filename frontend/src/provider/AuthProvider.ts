import baseUrl from "../const/baseUrl";
const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
const token = storedUser.userLogged ? storedUser.userLogged.token : null;
class AuthProvider {
  async registerUser(userData: any) {
    try {
      const response = await fetch(`${baseUrl}/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();

      if (!response.ok) {
        throw data;
      }
      console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async loginUser(userData: any) {
    try {
      const response = await fetch(`${baseUrl}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();

      if (!response.ok) {
        throw data;
      }

      return data;
    } catch (error) {
      throw error;
    }
  }
  async updateUser(userData: any) {
    try {
      const response = await fetch(`${baseUrl}/user/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw data;
      }
    } catch (error) {}
  }
  async getUserById(userId: any) {
    try {
      const response = await fetch(`${baseUrl}/user/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw data;
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
const auth = new AuthProvider();

export default auth;
