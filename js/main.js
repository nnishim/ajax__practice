const addBtn = document.querySelector(`.btn__add`);
const inputCountry = document.querySelector(`#name`);
const inputDate = document.querySelector(`#date`);
const inputText = document.querySelector(`#text`);

const options = {
  url: `https://restcountries.com/v2/all?fields=name,flag`,
  getValue: `name`,
  list: {
    match:{
      enabled: true
    }
  },
  template: {
		type: "custom",
		method: function (value, item) {
      return `
      <span style="color: tomato">${value}</span> 
      <img src="${item.flag}" alt="${item.name}" style="width: 20px"></img>
      `
    }
	}
};

$(`#name`).easyAutocomplete(options);


function addItem() {
  
}