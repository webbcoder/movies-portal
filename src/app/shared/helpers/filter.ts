export function years(startYear:number = 2000) {
  const currentYear = new Date().getFullYear();
  let years = [];
  while ( startYear <= currentYear ) {
    years.push(startYear++);
  }
  return years;
}
export const rating = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
