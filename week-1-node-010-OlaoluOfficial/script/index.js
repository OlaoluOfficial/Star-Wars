window.addEventListener("load", main);

function main() {
  const url = "https://swapi.dev/api/people";

  let images = [
    "images/luke-skywalker.jpeg",
    "images/C-3PO.jpeg",
    "images/R2-D2.jpeg",
    "images/Darth-Vader.jpeg",
    "images/Leia-Organa.jpeg",
    "images/Owen-Lars.jpeg",
    "images/Beru-Whitesun.jpeg",
    "images/R5-D4.jpeg",
    "images/Biggs-Darklighter.jpeg",
    "/images/Obi-Wan-Kenobi.jpeg",
  ];

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      arrOfObjects = data.results;
      // console.log("array: ", arrOfObjects);

      let id;
      let output;
      output = arrOfObjects.map((content, index) => {
        id = index;
        return `
            
            <div class="card" id="#${id}" >
                <img src="${images[index]}"></img>
                <div class='class-details'>
                    <h2>Name: ${content.name}</h2>
                    <button class="modalButton" id="modalBtn${id}">Read More...</button>
                </div>
                <div class="modal" id="modal${id}">
                    <div class="modal-content">
                        <div class="modal-header">
                            <div class="title"><h2>Bio</h2>
                              <button  id="modalCloseBtn${id}" class="modalCloseBtn">&times;</button>
                            </div>
                        </div>
                        <div class="modal-body">
                            <div>Name: ${content.name}</div>
                            <div>Gender: ${content.gender}</div>
                            <div>Height: ${content.height}</div>
                            <div>Mass: ${content.mass}</div>
                            <div>Skin Color: ${content["skin_color"]}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
      });

      document.querySelector(".output").innerHTML = output.join("");

      const modal = document.querySelectorAll(".modal");
      const openModal = document.querySelectorAll(".modalButton");
      const closeModal = document.querySelectorAll(".modalCloseBtn");

      openModal.forEach((elem, i) => {
        let modal = `#modal${i}`;
        modal = document.querySelector(modal);
        elem.addEventListener("click", () => {
          modal.style.display = "block";
        });
      });

      closeModal.forEach((elem, i) => {
        let modal = `#modal${i}`;
        modal = document.querySelector(modal);
        elem.addEventListener("click", () => {
          modal.style.display = "none";
        });
      });

      window.addEventListener("click", (e) => {
        modal.forEach((elem) => {
          if (e.target == elem) {
            elem.style.display = "none";
          }
        });
      });
    });
}

// module.exports = { main };
