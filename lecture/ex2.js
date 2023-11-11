let mycake = {
  id: "0001",
  type: "donut",
  name: "Cake",
  ppu: 0.55,
  butters: {
    butter: [
      { id: "1001", type: "Regular" },
      { id: "1002", type: "Regular1" },
      { id: "1003", type: "Regular2" },
      { id: "1004", type: "Regular3" },
    ],
    topping: [
      { id: "2001", type: "Regular" },
      { id: "2002", type: "Regular1" },
      { id: "2003", type: "Regular2" },
      { id: "2004", type: "Regular3" },
    ],
  },
};
console.log(mycake.butters.butter);
let jsonObj = JSON.stringify(mycake);
console.log(typeof JSON.stringify(mycake));
let newJSO = JSON.parse(jsonObj);
console.log(newJSO.id);


