function odd_even_product( my_list ) {
  let multiplyVal = my_list.reduce((acc, currVal) => {
    return acc * currVal;
  }, 1);
  return multiplyVal % 2 === 0 ? my_list.reduce((acc, curr) => acc + curr, 0) : 0;
}

var output = odd_even_product([1, 3]);