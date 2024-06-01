const updateButton = document.querySelector("#update-button");
const deleteButton = document.querySelector("#delete-button");
const vaderQuotes = [
  "I am your father.",
  "The Force is strong with this one.",
  "You underestimate the power of the Dark Side.",
  "I find your lack of faith disturbing.",
  "I am altering the deal. Pray I don't alter it any further.",
  "The ability to destroy a planet is insignificant next to the power of the Force.",
  "You have failed me for the last time.",
  "Give yourself to the Dark Side. It is the only way you can save your friends.",
  "The circle is now complete. When I left you, I was but the learner; now I am the master.",
  "You don't know the power of the dark side!",
  "No. I am your father.",
  "Impressive. Most impressive.",
];
const vaderQuotesLength = vaderQuotes.length;

updateButton.addEventListener("click", (_) => {
  fetch("/quotes", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Darth Vader",
      quote: `${vaderQuotes[Math.floor(Math.random() * vaderQuotesLength)]}`,
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((response) => {
      window.location.reload(true);
    });
});

deleteButton.addEventListener("click", () => {
  fetch("/quotes", {
    method: "delete",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Darth Vader",
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((data) => {
      window.location.reload();
    });
});
