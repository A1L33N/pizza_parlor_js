function Order(orderName, orderType, phone) {
  this.orderName = orderName;
  this.orderType = orderType;
  this.phone = phone;
  this.address = "";
  this.pizzas = [];
}

function Pizza(pizzaSize, crustType) {
  this.pizzaSize = pizzaSize;
  this.crustType = crustType;
  this.toppings = [];
}

Pizza.prototype.pizzaCost = function() {
  var cost = 8;

  if (this.pizzaSize === "medium") {
    cost += 2;

  } if (this.pizzaSize === "large") {
    cost += 4;
  }

  if (this.crustType === "gluten-free" || "stuffed") {
    cost += 1;
  }

  this.toppings.forEach(function(topping) {
    cost += .5;
  });
  return cost;
};
