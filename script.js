//Question 1
const cat = {
    complain: function () {
        console.log("Meow");
    }
}

cat.complain();

//Question 2
const heading = document.querySelector("h3")

heading.innerHTML = "Updated heading";


//Question 3
heading.style.fontSize = "2em";

//Question 4
heading.className = "subheading";

//Question 5
const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

//Question 6
const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";

resultsContainer.style.backgroundColor = "yellow";

//Question 7
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function nameList(list) {
    for (let i = 0; i < cats.length; i++)
        console.log(name[i]);
}

nameList(cats);

//Question 8
function createCats(cats) {
    for (let i = 0; i < cats.lentgh; i++) {
        console.log(i);
    }
}