export const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const min = date.getMinutes().toString().padStart(2, "0");
  const sec = date.getSeconds().toString().padStart(2, "0");
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${day} ${monthNames[month]} ${year} - ${hours}:${min}:${sec}`;
};

export const createSuggested = (concatProducts) => {
  const suggested = [];
  for (let i = 0; i < concatProducts.length; i++) {
    const currentProduct = concatProducts[i];
    currentProduct.suggQuantity = [currentProduct.quantity];
    delete currentProduct.price;
    delete currentProduct.total;
    delete currentProduct.quantity;
    for (let j = i + 1; j < concatProducts.length; j++) {
      if (concatProducts[j].name === currentProduct.name) {
        currentProduct.suggQuantity.push(concatProducts[j].quantity);
        concatProducts.splice(j, 1);
        j--;
      }
    };
    let avg = 0;
    currentProduct.suggQuantity.forEach(elem => {
      avg += elem;
    });
    avg = Math.floor(avg / currentProduct.suggQuantity.length);
    currentProduct.suggQuantity = avg;
    suggested.push(currentProduct);
  };
  return suggested;
};
