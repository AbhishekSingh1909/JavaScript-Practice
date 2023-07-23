myUser = {
  userList: [],
};

const getUserList = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  return jsonUserData;
};

const anotherFunc = async () => {
  const usersData = await getUserList();

  console.log("Users Data inside the another func");
  console.log(usersData);
  myUser.userList = usersData;
  console.log("Inside Function User List");
  console.log(myUser.userList);
};
//console.log(getUserList());
console.log(anotherFunc());
console.log("User List");
console.log(myUser.userList);
