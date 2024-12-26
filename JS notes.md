==> ALT + Shift + Down Button -- Duplicate the Current Line 
==> CTRL + Shift + J -- Open console in Browser (not for VS Code)
==> CTRL + / -- Comment 
==> ALT + UP Button or Down Button -- To move whole Line up and down 

==>i++
-->(Post-increment)
It is the post-increment operator. It increases the value of i by 1, but returns the original value of i before the increment.
--> If i = 5, i++ will first return 5 (the original value), and then increment i to 6.
==> 
==> ++i
--> It is the pre-increment operator. It increases the value of i by 1, but returns the incremented value.
--> If i = 5, ++i will first increment i to 6 and then return 6.

==> i--
-->It is the post-decrement operator. It decreases the value of i by 1, but returns the original value of i before the decrement.
--> If i = 5, i-- will first return 5 (the original value), and then decrement i to 4.

==> --i
-->This is the pre-decrement operator. It decreases the value of i by 1, but returns the decremented value.
--> If i = 5, --i will first decrement i to 4 and then return 4.

==> Primitive Data Types 
--> Created using ( )
--> number , string ,boolean ,null ,undefined ,symbol(introduced in ES6) ,bigint (introduced in ES11)
-->Primitive are saved in stack 

==> Array -- ordered Collection of items / elements 
--> Created using [ ]
--> Reference types Also known as objects 

==>Objects
--> Array are good but not sufficent for real world data 
--> objects store key value pairs 
--> objects don't have index

==> Primitive - 
--> 1, 2, 3, 4, "String", null, undefined
==> Array 
--> [1, 2, 3, 4, "String", null, undefined ]
==>Objects 
--> { }

==> Memory Layout:

---> Primitive (x and y):
--> x is in the stack with value 20.
--> y is in the stack with value 10.
--> x and y are independent copies.

---> Reference Type (obj1 and obj2):
--> obj1 and obj2 are in the stack, both holding the same reference to an object in the heap.
--> The object in the heap looks like { name: "Bob" }.
--> Both obj1 and obj2 point to the same object, so modifying the object through either reference affects both.
--> array , objects

![Differences in Memory Storage of Primitive and Reference](image-1.png)

-->To access string we use square bracket []

==> Switch Statement
--> evaluates a value against multiple cases and executes the code block of the matching case
-->  Provide break if you want to stop the execution and no further responses from code otherwise it will provide all the given cases 

==> While loop
--> Condition is checked before the loop body executes.
--> Use while when you don't know in advance how many times the loop will execute, and you want to repeat the loop as long as a condition remains true.
--> we declare variable before starting while 

==> for loop function 
--> for loop Condition is checked before the loop body executes, similar to while, but it has an initialization step, a condition, and an increment step all in one line
--> Use for when the number of iterations is known or easily determined before the loop starts (e.g., looping over a range or through an array).
--> if we declare variable inside starting   paranthesis then it will became local variable 
--> we can use var instead of let for making it from local to global 

==> do while 
--> Condition is checked after the loop body executes.
--> Use do-while when you want the loop to execute at least once before checking the condition (e.g., when a menu is presented to the user and you want to ensure the menu shows up at least once).
 
![Difference between for , while , do while loop ](image.png)

==> break 
--> it will stop after given condition satisfy 

==> continue 
--> continue the  output from starting to end except the desire result.

==> push and pop is faster than unshift & shift 
because push and pop have to create and dealt with last element whereas unshift & shift have to make changes in starting and deal with all other elements 


![Difference between for in and for of](image-2.png)



