//random arr
export const randomArr = async (min = 0, max = 100, dMax: number, dMin: number) => {
  let arr = []
  let lenArr = Math.floor(Math.random() * (dMax - dMin) + dMin);
  for (let i = 0; i < lenArr; i++) {
    arr.push(Math.floor(Math.random() * 100))
  }
  return arr
}