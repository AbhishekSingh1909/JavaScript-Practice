const person = function () {
  let dob = "1990/07/30";
  return {
    id: 1,
    name: "Abhishek Singh",

    get getAge() {
      const today = new Date();

      const age = Math.floor(today.getFullYear() - new Date(dob).getFullYear());
      return age;
    },

    /**
     * @param {string | null} value
     */
    set setAge(value) {
      if (value !== null) {
        try {
          const d = new Date(value);
          if (!(d instanceof Date && !isNaN(d))) {
            throw new Error("string is not valid date format");
          }
          dob = `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
          //this.dob = moment(dob).format("yyyy/mm/dd");
        } catch (e) {
          throw new Error(e.message);
        }
      }
    },
  };
};

const p = person();

console.log(p.getAge);

function change() {
  debugger;
  //document.getElementsByTagName("p")[0].innerHTML = "Hi Abhishek";
  document.getElementsByName("demo")[0].innerHTML = "Hi Abhishek";
}

const b = BigInt(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2);
console.log(Number.MAX_SAFE_INTEGER + 2);
console.log(b);
console.log(b + 1n === b + 2n);
console.log(b + 2n);
