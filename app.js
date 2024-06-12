const sortString = () => {
  const inputString = prompt("Enter a string:");
  const sortedString = inputString.split("").sort().join("");
  alert(`Sorted string: ${sortedString}`);
};

sortString();
