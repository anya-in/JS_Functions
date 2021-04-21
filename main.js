const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

for(let i=0;i<companies.length;i++){
  console.log(companies[i]);
}
//forEach
companies.forEach(function(company){
 console.log(company);
});
ages.forEach(function(age){
console.log(age);
});

// filter

//get 21 and older
// let canDrink=[];
// for(let i=0;i<ages.length;i++){
//   if(ages[i]>=21){
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink =ages.filter(function(age){
//   if(age>=21){
//     return true;
//   }
// });

const canDrink =ages.filter(age => age >=21);
console.log(canDrink);

// get retail in companies

const retailCompanies = companies.filter(company=>company.category === 'Retail');
console.log(retailCompanies);

//map

//create array of company names
// const companyNames = companies.map(function(company){
//   return company.name;
// });
// console.log(companyNames);

// const testMap = companies.map(function(company){
//   return '${company.name} [${company.start} - ${company.end}]';
// });


const testMap = companies.map(company=>'${company.name} [${company.start} - ${company.end}]');
console.log(testMap);

const agesSquare = ages.map(age=>Math.sqrt(age));
console.log(agesSquare);

//sort
// const sortedCompanies = companies.sort(function (c1,c2){
//   if(c1.start > c2.start) {
//         return 1;
//        } else {
//         return -1;
//       }
// });

const sortedCompanies = companies.sort((c1,c2)=>(c1.start>c2.start)? 1:-1);
console.log(sortedCompanies);

// const sortedAges = ages.sort((a,b)=>(a>b)? 1 :-1)
const sortedAges = ages.sort((a,b)=>a-b);
console.log(sortedAges);

//reduce

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);
 
const ageSum = ages.reduce((total,age)=> total+age,0);

console.log(ageSum);

// const ageSum = ages.reduce((total, age) => total + age, 0);

// Get total years for all companies

// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start);
// }, 0);

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears);


//combine Methods

const combined = ages.map(age =>age*2)
.filter(age => age >=40)
.sort((a,b) =>a-b)
.reduce((a,b) =>a+b,0);
console.log(combined);
