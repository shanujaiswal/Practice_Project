# Python

--> Python is a very simple language, and has a very straightforward syntax.
--> Python is a popular programming language.
--> Python can be used on a server to create web applications.
--> There are two major Python versions, Python 2 and Python 3. Python 2 and 3 are quite different
-->one difference between Python 2 and 3 is the print statement. In Python 2, the "print" statement is not a function, and therefore it is invoked without parentheses. However, in Python 3, it is a function, and must be invoked with parentheses.

# Indentation

--> Python uses indentation for blocks, instead of curly braces. Both tabs and spaces are supported, but the standard indentation requires standard Python code to use four spaces.

# Variables and Types

--> Python is completely "object oriented", and not "statically typed". You do not need to declare variables before using them, or declare their type.
--> Every variable in Python is an object.

# Strings

--> Strings are defined either with a single quote or a double quotes.
--> Triple-Quoted Strings -- For multi-line strings or embedded quotes.
--> The difference between the two is that using double quotes makes it easy to include apostrophes (whereas these would terminate the string if using single quotes)
![Escape Characters](image-1.png)
--> Raw Strings (r"" or R"" in Python)
Raw strings treat backslashes (\) as literal characters, useful for file paths and regex.can use raw strings by adding an r before the first quote:
--> Strings can be concatenated (glued together) with the + operator, and repeated with \*:
--> Two or more string literals (i.e. the ones enclosed between quotes) next to each other are automatically concatenated.-- works with two literals though, not with variables or expressions:
--> Strings can be indexed (subscripted), with the first character having index 0. There is no separate character type; a character is simply a string of size one:
--> Mixing operators between numbers and strings is not supported:

![Slicing ](image.png)

# Numbers

--> Python supports two types of numbers - integers(whole numbers) and floating point numbers(decimals).
-->(It also supports complex numbers)

# List

--> Lists are very similar to arrays.
--> They can contain any type of variable, and they can contain as many variables as you wish
--> A built-in data structure that allows you to store multiple items in a single variable. Lists are ordered, mutable (changeable), and allow duplicate values.

\\ Creating a List
--> can create a list using square brackets []
\\ Accessing Elements
--> Use indexing (starting from 0) to access elements:
\\ Modifying Lists
\\ Adding Elements
--> append() → Adds an element at the end.
--> insert(index, item) → Inserts an element at a specific index.
\\ Removing Elements
--> remove(value) → Removes the first occurrence of a value.
--> pop(index) → Removes and returns an element at a specific index (default: last).
--> clear() → Removes all elements.

\\ Looping Through a List
--> for fruit in fruits:
print(fruit)
\\ List Operations
--> Concatenation: new_list = list1 + list2
--> Repetition: list3 = list1 \* 2
--> Check if an item exists: "apple" in fruits

\\ Sorting and Reversing
--> fruits.sort() # Sorts the list in ascending order
--> fruits.reverse() # Reverses the list

--> List Methods (append(), extend(), sort(), etc.)
--> List Slicing (list[start:stop:step])
--> Nested Lists (Lists inside lists)
--> Shallow vs. Deep Copy (copy() and deepcopy())
--> List vs. Tuple (Differences and when to use each)
--> Performance Considerations (Time complexity of list operations)
