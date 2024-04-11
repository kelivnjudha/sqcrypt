const menu = {
    _meal: "",
    _price: 0,
  
    set meal(mealToCheck) {
      if (typeof mealToCheck === "string") {
        this._meal = mealToCheck;
      }
    },
  
    set price(priceToCheck) {
      if (typeof priceToCheck === "number") {
        this._price = priceToCheck;
      }
    },
  
    get meal() {
      return this._meal;
    },
  
    get price() {
      return this._price;
    }
  };
  
  menu.meal = "Pizza";
  menu.price = 9.99;
  console.log(menu);