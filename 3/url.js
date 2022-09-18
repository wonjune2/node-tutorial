const url = require("url");

const { URL } = url;
const myURL = new URL(
  "http://www/gilbut.co.kr/book/booList.aspx?sercate1=00100100#ancbor"
);
console.log("newURL():", myURL);
console.log("url.format():", url.format(myURL));
console.log("-------------------------");
console.log("");
const parsedUrl = url.parse(
  "http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor"
);
console.log("url.parse():", parsedUrl);
console.log("url.format():", url.format(parsedUrl));
