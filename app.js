// let url = "https://jsonplaceholder.typicode.com/photos";

// let xhr = new XMLHttpRequest();

// xhr.open('GET', url);

// xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

// xhr.send();

// xhr.onload = function () {

//     if (xhr.status == 200) {

//         console.log("pics fetched successfully");

//         let pics = JSON.parse(xhr.responseText);

//         let Blogpost = '';

//         pics.forEach(pic => {

//             Blogpost += '<div class="col">';
//             Blogpost += '<div class="card " id="' + pic.id + '">'
//             Blogpost += '<img src="' + pic.url + '">'
//             Blogpost += '<div class="card-body">'
//             Blogpost += '</div>'
//             Blogpost += '<div>' + pic.title + '</div>'
//             Blogpost += '<button  id="delete">Delete</button>'
//             Blogpost += '<button >Edit</button>'
//             Blogpost += '</div>'
//             Blogpost += '</div>'
//             Blogpost += '</div>'

//         });

//         // document.getElementById("cards").innerHTML =Blogpost;

//         const del = document.querySelectorAll('[id^="delete"]');
//         del.forEach(button => {

//             button.addEventListener("click", function (event) {

//                 event.preventDefault();
//                 let cardId = event.target.closest(".card").id;
//                 let url = `https://jsonplaceholder.typicode.com/photos/${cardId}`;
//                 let xhr = new XMLHttpRequest();
//                 xhr.open("DELETE", url);
//                 xhr.setRequestHeader("Content-Type", "application/json");

//                 xhr.onload = function () {
//                     if (xhr.status === 200) {
//                         console.log(`Pic ${cardId} successfully deleted!`);
//                         document.getElementById(cardId).remove();
//                     } else {
//                         console.log('Error happened. Status code: ', xhr.status);
//                     }
//                 };

//                 xhr.send();

//             });

//         });

//     }

//     else {

//         console.log('Error happened. Status code: ', xhr.status);

//     }

// }

