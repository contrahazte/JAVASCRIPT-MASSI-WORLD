//In this example we are trying to check if a value for the city property is defined. However, the code can be simplified. How can we do that?

const order = {
    customer:{
        address:{
            city:"Málaga"
            }}};

// if (order && order.customer && order.customer.address && !order.customer.address.city) {
//   console.log('City is required');}

  if (order.customer.address.city===undefined) {
    console.log('City is required');
  }
    else{console.log(Object.values(order.customer.address))}
