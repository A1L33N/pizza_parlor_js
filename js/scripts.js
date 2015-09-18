function Order(orderName, orderType, phone) {
  this.orderName = orderName;
  this.orderType = orderType;
  this.phone = phone;
  this.address = "";
  this.pizzas = [];
}

Order.prototype.totalCost = function() {
  var totalCost = 0;
debugger;
  if (this.orderType === "delivery") {
    totalCost += 2.50;
  }

  this.pizzas.forEach(function(pizza) {
    totalCost += pizza.pizzaCost();
  });
  return totalCost;
}

function Pizza(pizzaSize, crustType) {
  this.pizzaSize = pizzaSize;
  this.crustType = crustType;
  this.toppings = [];
  // this.cost = this.pizzaCost(); <---- will no longer include toppings in total cost??
}

Pizza.prototype.pizzaCost = function() {
  var cost = 8;
  debugger;
  this.toppings.forEach(function(topping) {
    cost += 0.5;
  });

  if (this.pizzaSize === "medium") {
    cost += 2;

  } if (this.pizzaSize === "large") {
    cost += 4;
  }

  if ((this.crustType === "gluten-free") || (this.crustType ==="stuffed")) {
    cost += 1;
  }

  return cost;
};
