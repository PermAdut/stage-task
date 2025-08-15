import axiosInstance from "./axios.instance";
class ProjectApiInstance {
  async searchProjects(searchString: string) {
    return await axiosInstance.get(
      `${process.env.API_SERVER_URL}/api/v1.0/projects?search=${encodeURIComponent(searchString)}`,
    );
  }
}
const projectInstance = new ProjectApiInstance();
export default projectInstance;
