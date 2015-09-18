describe('Order', function() {
  it('creates an order with the given specifications', function() {
    var testOrder = new Order('Leonardo', 'delivery', 123456789);
    expect(testOrder.orderName).to.equal('Leonardo');
    expect(testOrder.orderType).to.equal('delivery');
    expect(testOrder.phone).to.equal(123456789);
    expect(testOrder.address).to.equal("");
    expect(testOrder.pizzas).to.eql([]);
  });

  it('calculates the total cost of an order', function (){
    var testOrder = new Order('The Ninja Turtles','delivery', 123456789)
    var testPizza1 = new Pizza('medium', 'gluten-free');
    var pizzaToppings = ['mushrooms', 'extra cheese', 'pepperoni'];
    pizzaToppings.forEach(function(topping) {
      testPizza1.toppings.push(topping);
    });
    var testPizza2 = new Pizza('large', 'thin');
    var pizzaToppings2 = ['mushrooms', 'pepperoni'];
    pizzaToppings2.forEach(function(topping) {
      testPizza2.toppings.push(topping);
    });
    testOrder.pizzas.push(testPizza1);
    testOrder.pizzas.push(testPizza2);
    expect(testOrder.totalCost()).to.equal(28);
    var testOrder2 = new Order('The Ninja Turtles','pick-up', 123456789)
    var testPizza3 = new Pizza('medium', 'gluten-free');
    var pizzaToppings3 = ['mushrooms', 'extra cheese', 'pepperoni'];
    pizzaToppings3.forEach(function(topping) {
      testPizza3.toppings.push(topping);
    });

  });
});

describe('Pizza', function() {
  it('creates a pizza with the given specifications', function(){
    var testPizza = new Pizza('small', 'thin');
    var pizzaToppings = ['mushrooms', 'extra cheese', 'pepperoni'];
    pizzaToppings.forEach(function(topping) {
      testPizza.toppings.push(topping);
    });
    expect(testPizza.pizzaSize).to.equal('small');
    expect(testPizza.crustType).to.equal('thin');
    expect(testPizza.toppings).to.eql(['mushrooms', 'extra cheese', 'pepperoni']);
  });

  it('calculates the cost of a pizza', function(){
    var testPizza = new Pizza('medium', 'gluten-free');
    var pizzaToppings = ['mushrooms', 'extra cheese', 'pepperoni'];
    pizzaToppings.forEach(function(topping) {
      testPizza.toppings.push(topping);
    });
    // expect(testPizza.cost).to.equal(12.50); <---- why doesn't this work?? no longer includes toppings in cost
    expect(testPizza.pizzaCost()).to.equal(12.50);
    var testPizza2 = new Pizza('large', 'thin');
    var pizzaToppings2 = ['mushrooms', 'pepperoni'];
    pizzaToppings2.forEach(function(topping) {
      testPizza2.toppings.push(topping);
    });

    expect(testPizza2.pizzaCost()).to.equal(13.00);
  });



});
