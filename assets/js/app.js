var cl = console.log;

let ages = [10,21,30,41,50,61,71,81,90];

//lastIndexNumber = array.length - 1
//doubleAges = [20,42,60,100,122,140,162,180]

// let doubleAges = [];

// for (let i = 0; i < ages.length; i++) {
//     // cl(ages[i] * 2);
//     doubleAges.push(ages[i] * 2)
// }

// cl(doubleAges);

// Higher Order Function >> A function which accepts another function as a parameter/argument

// callback function >> A function which is passed as a parameter/argument inside another function

// arrayName.forEach(callBackFunction(para){
//     // para >> it will gives us each and every element of array one by one
// })

// ages.forEach(function(age){
//     // cl(age)
//     doubleAges.push(age * 2)
// })

// ages.forEach(age => doubleAges.push(age * 2))
// cl(doubleAges);

// Usecase of map method 
// Ypu have given array.
// You have to Create a new array from given array 
// you have to apply same funtionality on each and every element of given array

// 1 Map
// It returns a new array
// length of new array === length of given array (always)
ages = [10,21,30,41,50,61,70,81,90]

// arrayName.map(callBackFunction(para){
//     para >> It gives us each and every element of given array (arrayName)
// })

// let doubleAges = ages.map(function(age){
//     return age * 2
// })

// let doubleAges = ages.map((age) => {
//     return age * 2
// })

let doubleAges = ages.map(age =>  age * 2)

cl(doubleAges)

// squareroot

ages = [10,21,30,41,50,61,70,81,90];

//  let sqrtAges = [];
// for (let i = 0; i < ages.length; i++) {
//     sqrtAges.push(Math.sqrt(ages[i]));
// }

// ages.forEach(function(age){
//     sqrtAges.push(Math.sqrt(age))
// })

// ages.forEach((age) => {
//     sqrtAges.push(Math.sqrt(age))
// })

// ages.forEach(age => sqrtAges.push(Math.sqrt(age)))
// cl(sqrtAges)

// let sqrtAges = ages.map(function(age){
//     return Math.sqrt(age)
// })

let sqrtAges = ages.map(age => Math.sqrt(age))
cl(sqrtAges)

let companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

let compNamesOnly = [];

// for (let i = 0; i < companies.length; i++){
//      compNamesOnly.push(companies[i].name)
// }

// companies.forEach(function(comp){
//     compNamesOnly.push(comp.name)
// });

// companies.forEach(comp => compNamesOnly.push(comp.name))

compNamesOnly = companies.map(comp => comp.name)
cl(compNamesOnly);

let compStart = [];

// for(let i = 0; i < companies.length; i++){
//     // cl(companies[i])
//     compStart.push({
//         compName : companies[i].name,
//         start : companies[i].start
//     })
// }

// companies.forEach(function(comp){
//     compStart.push({
//         compName : comp.name,
//         start : comp.start
//     })
// });

// companies.forEach(comp => 
//     compStart.push({
//         compName : comp.name,
//         start : comp.start
//     }))

// compStart = companies.map(function(comp){
//     return{
//         compName : comp.name,
//         start : comp.start
//     }
// })

compStart = companies.map(comp => ({
    compName : comp.name,
    start :comp.start
}))
cl(compStart)


// [{compName : 'company One', duration : 22}]

let comDuration = [];

// for( let i = 0; i < companies.length; i++){
//     comDuration.push({
//         compName : companies[i].name,
//         duration : companies[i].end - companies[i].start
//     })
// }

// companies.forEach(function(comp){
//     comDuration.push({
//         compName : comp.name,
//         duration : comp.end - comp.start
//     })
// })

// companies.forEach(comp => comDuration.push({
//     compName : comp.name,
//     duration : comp.end - comp.start
// }))

// comDuration = companies.map(comp => {
//     return{
//         compName : comp.name,
//         duration : comp.end - comp.start
//     }
// })

comDuration = companies.map(comp =>({
    compName : comp.name,
    duration : comp.end - comp.start
}))
cl(comDuration)


// ** filter
// use cases of filtrer
// you have given a array end one condition
// you have to create a new array of elements (of given array ),who pass /satisfy the given condition 
// filter returns array 
// length of new array is may not be equal to length of given array 

ages = [10,21,30,41,50,61,70,81,90];

// let adultAges = [];

// for(let i = 0 ; i < ages.length; i++){
//     if(ages[i] >= 18){
//         adultAges.push(ages[i])
//     }
// }

// ages.forEach(age => {
//     if(age >= 18){
//         adultAges.push(age)
//     }
// })

// let adultAges = ages.filter(function(age){
//     if(age >= 18){
//         return true
//     }else{
//         return false
//     }
// })

// let adultAges = ages.filter(function(age){
//     return age >= 18
// })

let adultAges = ages.filter(age => age >= 18)
cl(adultAges)

companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

// array companies whose category is retail

// let compRetail = [];
// for(let i = 0; i < companies.length; i++){
//     if(companies[i].category.toLowerCase().trim() === 'retail'){
//         compRetail.push(companies[i])
//     }
// }

// companies.forEach(comp => {
//     if(comp.category.toLowerCase().trim() === 'retail'){
//         compRetail.push(push)
//     }
// })

// let compRetail = companies.filter(comp => {
//     return comp.category.toLowerCase().trim() === 'retail'
// })

let compRetail = companies.filter(comp => comp.category.toLowerCase().trim() === 'retail')
cl(compRetail)


// duration >= 10

let compAtLeast10 = [];

// for(let i = 0; i < companies.length; i++){
//     if(companies[i].end - companies[i].start >= 10){
//         compAtLeast10.push(companies[i])
//     }
// }

// companies.foeEach(comp => {
//     if(comp.end - comp.start >= 10){
//         compAtLeast10.push(comp)
//     }
// })

// compAtLeast10 = companies.filter(comp => {
//     return comp.end - comp-start >= 10
// })

compAtLeast10 = companies.filter(comp => comp.end - comp.start >= 10) 

cl(compAtLeast10)

companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

//[{compName : "Company one", duration : 22}] and who started in 80s (1980 to 1989)

// let comp80s = [];
// 80, 81, 82, 83 ,84,85, 86,87,88,89

// companies.forEach(comp => {
//     if(comp.start >=1980 && comp.start <= 1989){
//         comp80s.push({
//             compName : comp.name,
//             duration : comp.end - comp.start
//         })
//     }
// })

// let comp80s = companies.filter(comp => {
//     return comp.start >= 1980 && comp.start <= 1989
// }).map(comp => {
//     return {
//         compName : comp.name,
//         duration : comp.end - comp.start
//     }
// })

let comp80s = companies.filter(comp => comp.start >= 1980 && comp.start <= 1989).map(comp =>({
    compName : comp.name,
    duration : comp.end - comp.start
})) 
cl(comp80s)

// [{compName : "Company Name", lifeSpan : "1981 - 2000"}] and comp.category === finance

let compFinance = [];

// for (let i = 0 ; i < companies.length; i++){
//     if(companies[i].category.toLowerCase().trim() ==='finance'){
//         compFinance.push({
//             compName :companies[i].name,
//             lifeSpan : `${companies[i].start} - ${companies[i].end}`
//         })
//     }
// }

// companies.forEach(comp => {
//     if(comp.category.toLowerCase().trim() === 'finance'){
//         compFinance.push({
//             compName : comp.name,
//             lifeSpan : `${comp.start} - ${comp.end}`
//         })
//     }
// })

compFinance = companies
                    .filter(comp => comp.category.toLowerCase().trim() === 'finance')
                    .map(comp => ({compName : comp.name, lifeSpan : `${comp.start} - ${comp.start}`}))
cl(compFinance)

// [ { compName : "Company One", catg : "Finance"}] && comp who run at least for 10 years

let compRunAt10 = [];

// companies.forEach(comp => {
//     if(comp.end - comp.start >= 10){
//         compRunAt10.push({
//             compName : comp.name,
//             category : comp.category
//         })
//     }
// })


// compRunAt10 = companies.filter(comp =>{
//     return (comp.end - comp.start) >= 10
// }).map(comp => {
//     return {
//         compname : comp.name,
//         category : comp.category
//     }
// })

compRunAt10 = companies.filter(comp => (comp.end - comp.start) >= 10).map(comp => ({
    compname : comp.name,
    category : comp.category
}))

cl(compRunAt10)


// find method
// use case of find method
// we have given a array with one condition 
// and we have to find out a object which pass the given condition

companies = [
    { name: "Company One", id: "1", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: "2", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: "3", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: "4", category: "RetAil", start: 1989, end: 2010 },
    { name: "Company Five", id: "5", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: "6", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: "7", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: "8", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: "9", category: " retail ", start: 1981, end: 1989 }
];

let givenId = 4;
let getObj;

// companies.forEach(comp => {
//     if(Number(comp.id) === givenId){
//         getObj = comp
//     }
// })

// getObj = companies.find(comp => {
//     return +comp.id === givenId
// })

getObj = companies.find(comp => +comp.id === givenId)
cl(getObj)

// reduce method

ages = [10,22,30,41,50,61,70,81,90];

// let totalAges = 0; // unndefined
// ages.forEach(age =>{
//     // totalAges = totalAges + age;
//     totalAges += age;
// })

// let totalAges = ages.reduce((accum,nextvalue) => {
//     return accum = accum + nextvalue
// })

let totalAges = ages.reduce((accum,nextvalue) => accum += nextvalue)
cl(totalAges);

// let multiAges = 1;
// ages.forEach(age => multiAges *= age);
let multiAges = ages.reduce((multi, nextAge) => multi *= nextAge)
cl(multiAges);

companies = [
    { name: "Company One", id: "1", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: "2", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: "3", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: "4", category: "RetAil", start: 1989, end: 2010 },
    { name: "Company Five", id: "5", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: "6", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: "7", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: "8", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: "9", category: " retail ", start: 1981, end: 1989 }
];

//[{compName : "Compsny One", duration : 22}]

let compNamesDur = companies.reduce((accu, comp) => {
    accu.push({
        compName : comp.name,
        duration : comp.end - comp.start
    });
    return accu
}, [])

cl(compNamesDur);
let totalAgesOfComp = companies.reduce((total, comp) => {
    return total += comp.end - comp.start
}, 0)

cl(totalAgesOfComp);