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
  
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Today's Meal is ${this._meal} for $${this._price}!`;
      } else {
        return "Meal or price was not set correctly!";
      }
    },
  };
  
  // Directly manipulate properties to show the need for setters
  //menu._meal = 123;
  //menu._price = "free";
  //console.log(menu);
  
  // Now set the values correctly using setters
  menu.meal = "Spaghetti";
  menu.price = 5;
  console.log(menu.todaysSpecial); 
  // Output: Today's Meal is Spaghetti for $5!
  