import axios from "axios";

const defaultUrl = "https://api.punkapi.com/v2";

export async function getBeers() {
  try {
    const response = await axios.get(`${defaultUrl}/beers`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
