"use strict";

let btn = document.querySelector(".btn");

btn.addEventListener("click", async (e) => {
  let input = document.getElementsByName("Input")[0].value;
  let display = document.querySelector(".display");
  e.preventDefault();

  const result = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
  );
  const data = await result.json();
  console.log(data);

  const html = `<div>
  <h4>Word : ${data[0].word}</h4>
  <p>Part of speech : ${data[0].meanings[0].partOfSpeech}</p>
  <p>Synosnyms : ${data[0].meanings[0].synonyms[0]}</p>
  </div>`;

  document.querySelector(".display").innerHTML = html;
  //   const result = function (input) {
  //     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
  //       .then((response) => response.json())
  //       .then((response) => {
  //         console.log(response[0]);
  //       });
  //   };
});
