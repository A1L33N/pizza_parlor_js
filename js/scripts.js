function Order(orderName, orderType, phone) {
  this.orderName = orderName
  this.orderType = orderType
  this.phone = phone
  this.address = ""
  this.pizzas = []
};

function Pizza(pizzaSize, crustType) {
  this.pizzaSize = pizzaSize;
  this.crustType = crustType;
  this.toppings = []
}
