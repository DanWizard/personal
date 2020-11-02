export const onetimeCalc = (nums) => {
  const sumExpense = (value, index, current, array, key) => {
    // 1 == price
    const arr = [1];

    if (!arr.includes(index)) {
      return current;
    }

    if (index === 1) {
      return parseInt(current) + parseInt(value);
    }

    return current;
  };

  const sumIncome = (value, index, current, array, key) => {
    // 3 == price
    const arr = [3];

    if (!arr.includes(index)) {
      return current;
    }

    if (index === 3) {
      return parseInt(current) + parseInt(value);
    }

    return current;
  };

  let expenseSum = 0;
  let incomeSum = 0;
  Object.entries(nums).forEach(([key, value], i) => {
    const r = key;
    value.forEach((val, i) => {
      expenseSum = sumExpense(val, i, expenseSum, value, r);
      incomeSum = sumIncome(val, i, incomeSum, value, r);
    });
  });
  return { expenseSum, incomeSum };
};

export const monthlyCalc = (nums, update) => {
  const sumExpense = (value, index, current, array, key) => {
    // 0 == duration
    // 2 == price
    const arr = [0, 2];

    if (!arr.includes(index)) {
      return current;
    }

    if (index === 2) {
      if (parseInt(value) > 0 && array[0] === 0) {
        update("monthlyNums", key, 0, 1);
      }
      return parseInt(current) + parseInt(value);
    }

    return current;
  };

  const sumIncome = (value, index, current, array, key) => {
    // 3 == duration
    // 5 == price
    const arr = [3, 5];

    if (!arr.includes(index)) {
      return current;
    }

    if (index === 5) {
      console.log(key);
      if (parseInt(value) > 0 && array[3] === 0) {
        update("monthlyNums", key, 3, 1);
      }
      return parseInt(current) + parseInt(value);
    }

    return current;
  };

  const sumAssets = (value, index, current, array, key) => {
    // 7 === price

    const arr = [7];

    if (!arr.includes(index)) {
      return current;
    }

    if (index === 7) {
      return parseInt(current) + parseInt(value);
    }

    return current;
  };

  let expenseSum = 0;
  let incomeSum = 0;
  let assetsSum = 0;
  Object.entries(nums).forEach(([key, value], i) => {
    const r = key;
    value.forEach((val, i) => {
      expenseSum = sumExpense(val, i, expenseSum, value, r);
      incomeSum = sumIncome(val, i, incomeSum, value, r);
      assetsSum = sumAssets(val, i, assetsSum, value, r);
    });
  });
  return { expenseSum, incomeSum, assetsSum };
};
