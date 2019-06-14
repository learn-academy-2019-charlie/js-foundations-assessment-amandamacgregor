# Javascript Foundations Assessments

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.

My answers-
Primitive: strings, numbers, arrays, booleans, null, undefined
Other: Objects and Classes

Google-
Seven data types that are primitives:
Boolean
Null
Undefined
Number
BigInt
String
Symbol (new in ECMAScript 6)
and Object

2. What's the difference between =, ==, and === in JavaScript?

My answers-
= is when you are 'setting' (assigning) a variable
== is a comparative action, 'does this equal that'
=== is a stronger comparative, 'does this equal that value AND type'

Google-
The identity (===) operator behaves identically to the equality (==) operator except no type conversion is done, and the types must be the same to be considered equal.

3. What is the difference between an array's index and length?

My answers-
Length of array is number of index(es). An index is the value at a point in the array.

Google-
The length property of an object which is an instance of type Array sets or returns the number of elements in that array

4. What are the three parts of a for loop?

My answers-
i=0 - this sets the beginning point of the loop
i <(or >) - this sets how long the loop will function for. For us, this has typically been the length of the word/array.
i++ (or--) - this increments (or decrements), essetially telling the loop in which direction to move.

Google-
Statement 1 is executed (one time) before the execution of the code block.
Statement 2 defines the condition for executing the code block.
Statement 3 is executed (every time) after the code block has been executed.

5. What is a function's declaration, argument, and call?

My answers-
declaration is when you establish the 'factory' or function. as in, myFunction = () =>
argument is the information you feed into the function to receive output.  as in, = (str) =>
to call the function, we've been logging the function and pointing to the argument we want.  as in, console.log(myFunction(str))

6. What are the three main steps in saving work to github?

My answers-
git add .
git commit -m""
git push

7. What is the terminal command to move directories?

My answers-
cd (change directories)

8. Do you have a suggestion for a Check In question?

9. What was your favorite topic this week?

React

10. What was your "A-ha!" moment this week?

The alumni panel was great; brought a lot of goals and hopes into reality.  Also realizing if I can't make the super-stretch goals, I'm still getting the concepts and don't need to panic.


### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()
```

My answer-**can we go over this?
"outside"?  The var text is a global variable, and the function is just telling it to print the variable as-is in that moment.

Google-
It's actually 'undefined'.  Anything 'undefined' is not something I understand, so I'll type what I have but I do NOT grasp this.
"Hoisting" means the variable is read as:
var text = 'outside';
function logIt(){
    var text;           // undefined but why? Why is an empty/undefined variable populating here?
    console.log(text);
    text = 'inside';
};
logIt();

This is a scope thing.  'outside' would just need to be declared within the function for this to work as expected.

2. What is JSON? How does it relate to javascript objects?

My answers- 
JavaScript Object Notation?  It's where a bunch of computer-readable data is stored for us to locate as needed.

Google-
JSON stands for JavaScript Object Notation

JSON is a lightweight format for storing and transporting data

JSON is often used when data is sent from a server to a web page

JSON is "self-describing" and easy to understand

3. Describe a closure, what is it good for and how do you recognize one?

My answers-**can we go over this?
No idea

Google-
A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain:
function showName (firstName, lastName) {
var nameIntro = "Your name is ";
    // this inner function has access to the outer function's variables, including the parameter
function makeFullName () {       
return nameIntro + firstName + " " + lastName; 
}

return makeFullName ();
}

showName ("Michael", "Jackson"); // Your name is Michael Jackson