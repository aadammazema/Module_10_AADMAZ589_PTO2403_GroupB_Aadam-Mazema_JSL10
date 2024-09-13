document.addEventListener("DOMContentLoaded", () => {
  // Add click event listener to the element with ID 'solveRoom1'
  document.getElementById("solveRoom1").addEventListener("click", () => {
    // Fetch book data from 'books.json'
    fetch("books.json")
      .then((response) => response.json())
      .then((books) => {
        // Find the most recently published book
        const mostRecentBook = findMostRecentBook(books);
        // Display the title of the most recent book
        document.getElementById(
          "room1Result"
        ).textContent = `The key to the next room is: ${mostRecentBook.title}`;
      });
  });
// Function to find the most recently published book based off date published
  function findMostRecentBook(books) {
    return books.reduce((mostRecent, book) => {
      return new Date(book.published) > new Date(mostRecent.published)
        ? book
        : mostRecent;
    });
  }
// Add click event listener to the element with ID 'solveRoom2'
  document.getElementById("solveRoom2").addEventListener("click", () => {
    const jsConcepts = new Set(["closure", "scope", "hoisting", "async"]);
    const reactConcepts = new Set(["components", "jsx", "hooks", "async"]);
    // function call to find common concepts between JavaScript and React
    const commonConcepts = findIntersection(jsConcepts, reactConcepts);
     // Display the common concept
    document.getElementById(
      "room2Result"
    ).textContent = `The code to unlock the door is: ${Array.from(
      commonConcepts
    ).join(", ")}`;
  });

  // 🪲 Bug: Asynchronous function ?
  document.getElementById("solveRoom3").addEventListener("click", () => {
    fetch("directions.json")
      .then((response) => response.json())
      .then((directions) => {
        navigateLabyrinth(directions).then((message) => {
          // 🪲 Bug: Incorrect method
          document.getElementById("room3Result").innerHTML = message;
        });
      });
  });
});


// Function to find intersection between JavaScript and React concepts
  function findIntersection(setA, setB) {
    return new Set([...setA].filter(item => setB.has(item)));
}

async function navigateLabyrinth(directions) {
  for (let direction of directions) {
    // 🪲 Bug: No delay
    new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`Navigating: ${direction.step}`);
  }
  return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}
