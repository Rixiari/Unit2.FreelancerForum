
// setting the first two freelancer
const freelancerinfo = [
    {   name: "Alice",
        occupation: "Writer",
        startingprice: 30,
    },
    {   name: "Bob",
        occupation: "Teacher",
        startingprice: 50,
    },
];

// Add 3rd freelancer info into freelancerinfo array
const carolInfo = {
    name: "Carol",
    occupation: "Programmer",
    startingprice: 70,
};
freelancerinfo.push(carolInfo);

// set interval for Carol
const intervalIdCarol = setInterval((carolInfo,2000));



//create possible names and array of possible occupations for randomization
const names = ['rachel', 'chandler', 'joey'];
const occupations = ['doctor', 'coder', 'teacher'];
const prices = [12,15,29];

// generating random freelancer
function generateFreelancer (){
    console.log("hi");
    const randomName = names[Math.floor(Math.random()*names.length)];
    const randomOccupation = occupations[Math.floor(Math.random()*occupations.length)];
    const randomPrice = prices[Math.floor(Math.random()*prices.length)];
    const randomFreelancer = {name:randomName, occupation: randomOccupation, startingprice: randomPrice}
    freelancerinfo.push (randomFreelancer);
    renderFreelancerList();
};

//add random freelancer object to array
// const randomFreelancer = generateFreelancer();
// console.log (randomFreelancer);


//Update the DOM to reflect the initial 2 freelancers
function renderFreelancerList(){
    const freelancerParent = document.querySelector("#freelancers");
    const freelancerList = freelancerinfo.map((Parameter) =>{
        const listElement = document.createElement("li");
        listElement.innerText = `${Parameter.name},${Parameter.occupation},${Parameter.startingprice}`;
        freelancerParent.appendChild(listElement);
    }); 
    console.log (freelancerParent, freelancerList);
    };
    // render();

// function orchestrate(){
// set interval for random Freelancer
const intervalIdRandom = setInterval(generateFreelancer,2000);
if (freelancerinfo.length>=5){
    clearInterval(intervalIdRandom)
}
// }
// orchestrate();


//Next Steps
//1. move clearinterval into the generateFreelancer function, might need to do line 62-65 outside of a function
//2. FIgure out how to generate 1 random 



// calculating average price
const averageStarting = () => {
    let sum = 0;
    starter.forEach((listElement) => (sum += listElement.lement.startingprice));
    return sum / startingprice.length; 
};




