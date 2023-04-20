

//export const fib1 = (n: number): number => {
//  if (n === 1 || n === 2) {
//    return 1
//  }
//  return fib1(n - 1) + fib1(n - 2)
//}

// или

//const fibIterative = (n: number): number => {
//  let arr: number[] = [0, 1];
//  for (let i = 2; i < n + 1; i++) {
//    arr.push(arr[i - 2] + arr[i - 1])
//  }
//  return arr[n]
//}

// а так еще лучше
export const fib = (n: number, memo: Record<number, number> = {}): number => {
  if (n in memo) {
    return memo[n];
  }
  if (n <= 2) {
    return 1;
  }
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};