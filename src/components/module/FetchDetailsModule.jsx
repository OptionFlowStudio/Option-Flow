import axios from "axios";

const FetchDetailsModule = (setCurrentPageData, link, id, navigate) => {
  const fetchService = async () => {
    try {
      const dataResponse = await axios.get(link + id);
      const resultResponse = await dataResponse.data;
      await setCurrentPageData(resultResponse);
    } catch (error) {
      console.error(error);
      navigate("/*");
    }
  };

  fetchService();
};

export default FetchDetailsModule;
