/* Problem 1 */
/* Skill: Git
You want to grow a new branch from any commit. Identify the code you will use to swtich to "HEAD-5" and create a branch named 'testbranch'
*/
//YOUR CODE HERE

/* Problem 2 */
/*Skill: React, API call  
You are creating an API that calls an application in ReactJS. The application allows the fetching of data from the following endpoint. 

API ENDPOINT: https://www.reddit.com/r/react.json

complete the code as per the given instructions:
*/


class APICaller extends React.Component{
  callApi(){
    const url = "https://www.reddit.com/r/react.json";
    //#1 Implement a fetch method with the given API ENDPOINT
    // YOUR CODE HERE 
    fetch(url)
    .then((result)=>{
      //#2 Return the result in json format
      //YOUR CODE HERE 
      return result.json();
    }).then((jsonData)=>{
      //#3 Print/log the jsonData in the console of the browser
      //YOUR CODE HERE 
      console.log(jsonData);
    })
  }
render(){
  return <div>
    <button 
  //#4 Implement an onCLick functionality to the button such that it calls the callApi() function when it is clicked. 
  // YOUR CODE HERE 
    onClick={this.callApi}
    >Call the API now.</button>
  </div>
}
}
React.render(
  //#5 Implement the APICaller component appropiately into the render method
  //YOUR CODE HERE 
  <APICaller />, document.getElementById('myapicaller')
)


/* Problem 3 */
/*Skill: recursion
Please write an explanation of recursive functions where your audience is a beginner learner with knowledge of basic JS functions.

Please write an example of a recursive function, and comment each line 
*/
/*EXPLANATION HERE (1 paragraph) */

function myRecursiveFunction(){
  //YOUR CODE WITH COMMENTS HERE
}


/* Problem 4 */
/* Skill: algorithms 
Please write an explanation for an introduction to sorting algorithms. 
Write an example of Bubble Sort and comment each line of your code 
with explanation
*/

/* Sorting algorithms intro explanation HERE (1-2 paragraphs) */

/*Bubble sort example HERE*/


/* Problem 5 */
/*Skill: Leetcode Algorithms
solve the following leetcode in JavaScript: 

https://leetcode.com/problems/house-robber/

and paste your solution here. Please comment each line of your code to explain it, and be prepared to explain in the follow up interview.
*/

/* Problem 6 */
/*Skill: Leetcode Algorithms
solve the following leetcode in JavaScript: 

https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/

and paste your solution here. Please comment each line of your code to explain it, and be prepared to explain in the follow up interview.
*/
var longestSubstring = function(s, k) {
    // split s into an array
    const sArray = s.split(""); // [a,b,a,b,b,c]

    // variable to hold letters that are okay to have in substring 
    let okLetters = []; // [a, b]

    // variable to hold the highest substring count
    let highestCount = 0;

    // variable to hold current substring count
    let currentCount = 0;

    // create a hashmap of all the letters and how many times they occur
    let hash = new Map();

    for (let i = 0; i < sArray.length; i++) {
        // if the letter is not in the hashmap, add it to the hashmap
        if (!hash.has(sArray[i])) {
            hash.set(sArray[i], 1)
        } else {
            // if it does exist in the hashmap then get the hash value and add one to it
            let currentValue = hash.get(sArray[i]) + 1;
            hash.set(sArray[i], currentValue)
        }

        // if the letter in the hash is greater than k, add it to the okLetter array
        if (hash.get(sArray[i]) >= k && !okLetters.includes(sArray[i])) {
            okLetters.push(sArray[i]);
        }
    }

    // loop through the array s, keeping count of the highest substring count and the current substring count
    for (let i = 0; i < sArray.length; i++) {
        if (okLetters.includes(sArray[i])) {
            currentCount = currentCount + 1;
            console.log("currentCount = "+ currentCount)
            if (currentCount >= highestCount) {
                highestCount = currentCount 
                console.log(highestCount)
            }
        } else {
            currentCount = 0; 
        }
    }

    // return highest substring length
    return(highestCount)
};
/*

/* Problem 7 */
/*Skill: SQL
Please fork and complete this SQL exercise: 
https://gist.github.com/harrisonmalone/e06ea120532e5cd323ef0b0b379fa4d6

LINK TO YOUR REPO HERE
*/

/* Problem 8 */
/*Skill: React
Explain state management and lifting state in React. Please include the difference between Redux and Context API. Your audience is a beginner learner with an understanding of React components, props and basic state. 

//Your explanation HERE
*/

/* Problem 9 */
/* 
Skill: Node/Express

How would you explain what Node and Express do to a beginner learner with no experience in server side programming?

Your explanation HERE (2 paragraphs)
*/

/* Problem 10 */
/*Skill: JavaScript Objects + Classes
Complete instructions in the cardGame.js file
*/