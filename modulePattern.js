const createSupplier = (function () {
  // Private
  const name = "General Motors";
  const field = "automobile";
  const getSupplierName = () => name;
  const getSupplierField = () => field;

  // Public
  return {
    name,
    field,
    getName: () => getSupplierName(),
    getField: () => getSupplierField(),
  };
})();

console.log(createSupplier.name);
console.log(createSupplier.field);
console.log(createSupplier.getName());
// can't access private method from out side.
//console.log(getSupplierField());

// Function returning function
const add = (x) => (y) => console.log("x :" + x, "y :" + y, "sum :" + (x + y));
// Function accepting function
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);

console.log("clouser");
console.log(add(5)(6));
console.log(babies);
