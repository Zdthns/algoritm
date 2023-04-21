import { SHORT_DELAY_IN_MS, delay } from "../../constants/delays";


export const fibIterative = async (n: number, setNumber: Function) => {
  const fibArr = [];
  for (let i = 0; i < n; i++) {
    fibArr.push(fib(i));
    setNumber([...fibArr]);
    await delay(SHORT_DELAY_IN_MS);
  }

}

const fib = (n: number, memo: Record<number, number> = {}): number => {
  if (n in memo) {
    return memo[n];
  }
  if (n === 0) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};