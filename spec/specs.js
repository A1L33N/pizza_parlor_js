describe('Order', function() {
  it('creates an order with the given specifications', function() {
    var testOrder = new Order('Leonardo', 'delivery', 123456789);
    expect(testOrder.orderName).to.equal('Leonardo');
    expect(testOrder.orderType).to.equal('delivery');
    expect(testOrder.phone).to.equal(123456789);
    expect(testOrder.address).to.equal("");
    expect(testOrder.pizzas).to.eql([]);
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
    expect(testPizza.pizzaCost()).to.equal(12.50);
  });
});
