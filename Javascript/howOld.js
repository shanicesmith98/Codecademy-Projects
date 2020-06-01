// Write a function, howOld(), that has two number parameters, age and year.
// Return how old someone who is currently that age was (or will be) during that year.

const howOld = (age, year) => {
  if (year > 2020) {
    return 'You will be ' + ((year-2020) + age) + ' in the year ' + year;
  }
  else if (year < 2020 - age) {
    return 'The year ' + year + ' was ' + ((2020 - age) - year) + ' years before you were born'
  }
  else if (year < 2020 && year > 2020 - age) {
    return 'You were ' + (year - (2020-age)) + ' in the year ' + year
  }
}

console.log(howOld(21, 2021));
// Returns: You will be 22 in the year 2021
