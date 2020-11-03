export const sumExpense = (value, index, current, array, key) => {
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

export const sumIncome = (value, index, current, array, key) => {
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

export const onetimeCalc = (nums) => {
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

export const sumExpenseMonthly = (
  value,
  index,
  current,
  array,
  key,
  update
) => {
  // 0 == duration
  // 2 == price
  const durationObj = {};
  const arr = [0, 2];

  if (parseInt(value) > 0 && array[0] === 0 && update) {
    update("monthlyNums", key, 0, 1);
  }
  if (parseInt(value) > 0 && array[0] > 0) {
    durationObj.months = parseInt(array[0]);
    durationObj.price = parseInt(value);
  }
  return { current: parseInt(current) + parseInt(value), durationObj };
};

export const sumIncomeMonthly = (value, index, current, array, key, update) => {
  // 3 == duration
  // 5 == price
  const durationObj = {};
  const arr = [3, 5];

  if (parseInt(value) > 0 && array[3] === 0 && update) {
    update("monthlyNums", key, 3, 1);
  }
  if (parseInt(value) > 0 && array[3] > 0) {
    durationObj.months = parseInt(array[3]);
    durationObj.price = parseInt(value);
  }
  return { current: parseInt(current) + parseInt(value), durationObj };
};

export const sumAssets = (value, index, current, array, key) => {
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

export const monthlyCalc = (nums, update) => {
  let expenseSum = 0;
  let incomeSum = 0;
  let assetsSum = 0;
  const durationSet = { income: {}, expense: {} };
  Object.entries(nums).forEach(([key, value], i) => {
    const r = key;
    value.forEach((val, i) => {
      if (i === 2) {
        const ex = sumExpenseMonthly(val, i, expenseSum, value, r, update);
        durationSet.expense[r] = ex.durationObj;
        expenseSum = ex.current;
      }

      if (i === 5) {
        const inc = sumIncomeMonthly(val, i, incomeSum, value, r, update);
        durationSet.income[r] = inc.durationObj;
        incomeSum = inc.current;
      }

      if (i === 7) {
        assetsSum = sumAssets(val, i, assetsSum, value, r);
      }
    });
  });
  return { expenseSum, incomeSum, assetsSum, durationSet };
};
