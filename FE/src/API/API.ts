import axios from "axios";

const mainURL: string = "http://localhost:6677";

export const getPopulation = async () => {
  try {
    const url: string = `${mainURL}/api/read-population`;
    return await axios.get(url).then((res) => {
      return res.data?.data[0]?.population;
    });
  } catch (error) {
    console.clear();
  }
};

export const getEconomic = async () => {
  try {
    const url: string = `${mainURL}/api/read-economic`;
    return await axios.get(url).then((res: any) => {
      return res?.data?.data[0]?.economic;
    });
  } catch (error) {
    console.clear();
  }
};

export const getMigrant = async () => {
  try {
    const url: string = `${mainURL}/api/read-migrant`;
    return await axios.get(url).then((res) => {
      return res.data?.data[0]?.migrant;
    });
  } catch (error) {
    console.clear();
  }
};