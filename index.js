const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {


const root = document.getElementById("root");

    const heading= document.createElement("h1");

    heading.innerText = FREELANCERS;

    root.appendChild(heading);
    
let list = document.createElement ('ul');

for (let i=0;i<users.length;i++){
    let item = document.createElement('li');
    item.innerText = users[i].name;
    list.appendChild(item);
} 
root,appendChild(list);
}
//call the main function

main();

