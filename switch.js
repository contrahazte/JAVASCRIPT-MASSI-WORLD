function calculateSalary(role) {
    switch(role){
      case 'ceo':console.log('2200');
      break;
      case 'manager':console.log('1800');
      break;
      case 'cto':console.log('1800');
      break;
      case 'developer': console.log('1500');
      break;
      default:
        console.log('Esto es 1000')
    }
  }

  const ceoSalary = calculateSalary('developer');
 
