const user = {
  name: "test",
  getUser() {
    console.log(this.name);
  },
};

let { name, getUser } = user;
getUser = getUser.bind(user);
getUser();
