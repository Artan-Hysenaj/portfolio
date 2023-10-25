export function calculateWorkHours(
  startDate: string,
  weeklyHours: number = 40
) {
  const millisecondsPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  const millisecondsPerWeek = 7 * millisecondsPerDay; // Number of milliseconds in a week

  const start = new Date(startDate);
  const end = new Date();

  let totalHours = 0;

  while (start < end) {
    const daysInCurrentWeek = 7 - start.getDay(); // Calculate the remaining days in the current week
    const weeksInMilliseconds = daysInCurrentWeek * millisecondsPerDay;

    // Calculate work hours for the current week
    const workHoursForWeek =
      (weeksInMilliseconds / millisecondsPerWeek) * weeklyHours;

    totalHours += workHoursForWeek;

    // Move to the start of the next week
    start.setTime(start.getTime() + weeksInMilliseconds);
  }

  return Math.round(totalHours);
}
