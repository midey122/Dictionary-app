const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
  let inputWord = document.getElementById("input-word");
  inputWord = inputWord.value;
  let newurl = url + inputWord;
  console.log(newurl);
  fetch(newurl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `
            <div class="word">
          <h3>${inputWord}</h3>
          <button id='sound'><i class="fa-solid fa-volume-high"></i></button>
        </div>
        <div class="details">
          <p>${data[0].phonetic}</p>
           ${data[0].meanings[0].partOfSpeech}
        </div>
        <p class="word-meaning">
          ${data[0].meanings[0].definitions[0].definition}
        </p>
        <p class="word-example">
         ${data[0].meanings[0].definitions[0].example}
        </p>`;
      let obj = document.getElementById("sound");
      let bb = `${data[0].sourceUrls}`;
      obj.addEventListener("click", getSound(bb));
    });
});

let getSound = (data) => {
  data = data + "#Pronunciation";
  console.log(data);
  fetch(data).catch((err) => {
    console.log("unable to get sound");
  });
};
