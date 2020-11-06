$("#scripts").hide();

$(".back").on("click", function (e) {
  e.preventDefault();
  $("#scripts").hide();
  $("#card-buffer").show();
});

const api = `https://intelli-script.herokuapp.com/script/`;

let myHeader = new Headers();

myHeader.append("Access-Control-Allow-Origin", "*");

let requestOptions = {
  method: "GET",
  headers: myHeader,
};

$(".card").on("click", function (e) {
  e.preventDefault();

  fetch(api, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
    });

  $("#scripts").show();
  $("#card-buffer").hide();
});
