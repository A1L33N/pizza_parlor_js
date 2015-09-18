describe('Order', function(){
  it('creates an order with the given specifications', function() {
    var testOrder = new Order('Leonardo', 'delivery', 123456789);
    expect(testOrder.orderName).to.equal('Leonardo');
    expect(testOrder.orderType).to.equal('delivery');
    expect(testOrder.phone).to.equal(123456789);
    expect(testOrder.address).to.equal("");
    expect(testOrder.pizzas).to.eql([]);
  });
});
