const timeHandler = function () {
  const now = new Date();
  // const nextTuesday
};

const getNextTuesday = function () {
  const nextTues = new Date()
  nextTues.setDate(nextTues.getDate() + (((1 + 7 - nextTues.getDay())%7)||7))
  console.log(nextTues)
}

// function formatTimeDifference(targetDate) {
//   const now = new Date();
//   const timeDifferenceMs = targetDate - now;

//   const days = Math.floor(timeDifferenceMs / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((timeDifferenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((timeDifferenceMs % (1000 * 60 * 60)) / (1000 * 60));

//   return `${days} days, ${hours} hours, ${minutes} minutes`;
// }

// // Example usage:
// const christmas = new Date(2024, 11, 25); // December 25th
// const timeToChristmas = formatTimeDifference(christmas);
// console.log(timeToChristmas);

getNextTuesday()
