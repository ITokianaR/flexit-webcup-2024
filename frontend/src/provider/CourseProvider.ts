import baseUrl from "../const/baseUrl";
const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
const token = storedUser.userLogged ? storedUser.userLogged.token : null;

class CourseProvider {
  async getCourses() {
    try {
      const response = await fetch(`${baseUrl}/course/getCourses`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data.courses;
    } catch (error) {
      throw error;
    }
  }
  async getCourseById(id: any) {
    try {
      const response = await fetch(`${baseUrl}/course/getCourses/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data.course;
    } catch (error) {
      throw error;
    }
  }
  async finishCourse(courseId:any) {
    try {
      const token = localStorage.getItem("user");
      const response = await fetch(`${baseUrl}/course/finish/${courseId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data.course;
    } catch (error) {
      throw error;
    }
  }
}

const course = new CourseProvider();
export default course;
