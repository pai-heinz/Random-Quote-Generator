let btn = document.querySelector(".btn");
let quote_txt = document.querySelector(".quote-txt");
let author = document.querySelector(".author");

btn.addEventListener("click", () => {
  btn.innerHTML = "Loading Quote..";
  btn.classList.add("loading");
  fetch("https://dummyjson.com/quotes/random")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      btn.classList.remove("loading");
      btn.innerHTML = "New Quote";
      quote_txt.innerText = `${data.quote}`;
      author.innerText = `By ${data.author}`;
    })
    .catch((reject) => {});
});

let speech = document.getElementById("speech");
speech.addEventListener("click", (_) => {
  let txtToSpeech = new SpeechSynthesisUtterance(
    `${quote_txt.innerText} ${author.innerText}`
  );
  speechSynthesis.speak(txtToSpeech);
});
