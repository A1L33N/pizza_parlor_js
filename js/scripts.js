function Order(orderName, orderType, phone) {
  this.orderName = orderName;
  this.orderType = orderType;
  this.phone = phone;
  this.address = "";
  this.pizzas = [];
}

Order.prototype.totalCost = function() {
  var totalCost = 0;
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

$(document).ready(function() {
  $('form#order-form').submit(function(event) {
    event.preventDefault();

  var name = $('#order-name').val();
  var phone = $('#phone').val();
  var orderType = $('select').val();

  var newOrder = new Order(name, orderType, phone);
  $('form#order-form').hide();
  if (orderType === "pick-up") {
    $("#build-pizza-form").show();
  } else {
    $('#address-form').show();
  }

  $('form#add-address').submit(function(event) {
    event.preventDefault();
    var street = $('#street-name').val();
    var city = $('#city').val();
    var state = $('select#state').val();
    var address = street + " " + city + ", " + state;

    newOrder.address = address
    $('#address-form').hide();
    $("#pizza-form").show();
  });

  // $('#add-pizza').click(function() {
  //   event.preventDefault();
  //   $('.add-pizza').append("<div class='add-pizza'>" +
  //                                   "<div class='form-group' id='pizza-size'>" +
  //                                     "<label for='pizza-size'>Select a pizza size</label>" +
  //                                     "<select id='size'>" +
  //                                       "<option value='small'>Small (10 inch pie) - $8.00</option>" +
  //                                       "<option value='medium'>Medium (12 inch pie) - $10.00 </option>" +
  //                                       "<option value='large'>Large (15 inch pie) - $12.00 </option>" +
  //                                     "</select>" +
  //                                   "</div>" +
  //
  //                                   "<div class='form-group' id='pizza-crust'>" +
  //                                     "<label for='pizza-crust'>What type of crust would you like?</label>" +
  //                                     "<select id='crust'>" +
  //                                       "<option value='thin'>Thin</option>" +
  //                                       "<option value='pan'>Pan</option>" +
  //                                       "<option value='hand-tossed'>Hand-Tossed</option>" +
  //                                       "<option value='deep-dish'>Deep Dish</option>" +
  //                                       "<option value='stuffed'>Cheesy Stuffed Crust (add $1.00)</option>" +
  //                                       "<option value='gluten-free'>Gluten-Free (add $1.00)</option>" +
  //                                     "</select>" +
  //                                   "</div>" +
  //
  //                                   "<div class='form-group' id='toppings'>" +
  //                                   "<h3>Select Your Pizza Toppings - $0.50 each: (All pizzas include cheese and our scratch made tomato sauce.)</h3>" +
  //                                     "<div class='checkbox'>" +
  //                                       "<label>" +
  //                                         "<input type='checkbox' value='extra-cheese'>" +
  //                                         "Extra Cheese" +
  //                                       "</label>" +
  //                                     "</div>" +
  //                                     "<div class='checkbox'>" +
  //                                       "<label>" +
  //                                         "<input type='checkbox' value='extra-sauce'>" +
  //                                         "Extra Sauce" +
  //                                       "</label>" +
  //                                     "</div>" +
  //                                     "<div class='checkbox'>" +
  //                                       "<label>" +
  //                                         "<input type='checkbox' value='pepperoni'>" +
  //                                         "Pepperoni" +
  //                                       "</label>" +
  //                                     "</div>" +
  //                                     "<div class='checkbox'>" +
  //                                       "<label>" +
  //                                         "<input type='checkbox' value='ham'>" +
  //                                         "Ham" +
  //                                       "</label>" +
  //                                     "</div>" +
  //                                     "<div class='checkbox'>" +
  //                                       "<label>" +
  //                                         "<input type='checkbox' value='sausage'>" +
  //                                         "Sausage" +
  //                                       "</label>" +
  //                                     "</div>" +
  //                                     "<div class='checkbox'>" +
  //                                       "<label>" +
  //                                         "<input type='checkbox' value='onions'>" +
  //                                         "Onions" +
  //                                       "</label>" +
  //                                     "</div>" +
  //                                     "<div class='checkbox'>" +
  //                                       "<label>" +
  //                                         "<input type='checkbox' value='peppers'>" +
  //                                         "Peppers" +
  //                                       "</label>" +
  //                                     "</div>" +
  //                                     "<div class='checkbox'>" +
  //                                       "<label>" +
  //                                         "<input type='checkbox' value='artichokes'>" +
  //                                         "Artichokes" +
  //                                       "</label>" +
  //                                     "</div>" +
  //                                     "<div class='checkbox'>" +
  //                                       "<label>" +
  //                                         "<input type='checkbox' value='spinach'>" +
  //                                         "Spinach" +
  //                                       "</label>" +
  //                                     "</div>" +
  //                                     "<div class='checkbox'>" +
  //                                       "<label>" +
  //                                         "<input type='checkbox' value='jalepenos'>" +
  //                                         "Jalepenos" +
  //                                       "</label>" +
  //                                     "</div>" +
  //                                     "<div class='checkbox'>" +
  //                                       "<label>" +
  //                                         "<input type='checkbox' value='pineapple'>" +
  //                                         "Pineapple" +
  //                                       "</label>" +
  //                                     "</div>" +
  //                                     "<div class='checkbox'>" +
  //                                       "<label>" +
  //                                         "<input type='checkbox' value='tomatoes'>" +
  //                                         "Tomaotes" +
  //                                       "</label>" +
  //                                     "</div" +">" +
  //                                     "<div class='checkbox'>" +
  //                                       "<label>" +
  //                                         "<input type='checkbox' value='olives'>" +
  //                                         "Olives" +
  //                                       "</label>" +
  //                                     "</div>" +
  //                                   "</div>" +
  //
  //                                 "</div>");
  // });



  $('form#build-pizza-form').submit(function(event) {
    event.preventDefault();
    var totalCost = 0

    var pizzaSize = $('select#size').val();
    var pizzaCrust = $('select#crust').val();
    var pizzaToppings = []

    $(':checkbox:checked').each(function(i){
      pizzaToppings[i] = $(this).val();
    });
    var newPizza = new Pizza(pizzaSize, pizzaCrust);
    pizzaToppings.forEach(function(topping) {
      newPizza.toppings.push(topping);
    });
    newOrder.pizzas.push(newPizza);
  // });



    newOrder.pizzas.forEach(function(pizza) {
      $('ul#pizza-info').append("<li>" + pizza.pizzaSize  + " pizza, " +
                                pizza.crustType +  " crust, " +
                                "toppings: " + pizza.toppings.join(', ') +
                                " cost $:" + pizza.pizzaCost())
    });
    $('.order-total').show();
    $('.total-cost').text(newOrder.totalCost());
  });


  });


});
