import axios from "axios";

axios
  .get("https://www.zerocho.com/api/get")
  .then((result) => {
    console.log(result);
    console.log(result.data);
  })
  .catch((error) => {
    console.log(error);
  });

(async () => {
  try {
    const result = await axios.get("https://www.zerocho.com/api/get");
    console.log(result);
    console.log(result.data);
  } catch (error) {
    console.log(error);
  }
})();

(async () => {
  try {
    const result = await axios.post("https://www.zerocho.com/api/post/json", {
      name: "zerocho",
      birth: 1996,
    });
    console.log(result);
    console.log(result.data);
  } catch (error) {
    console.log(error);
  }
})();
