### Python

Python is a programming language, and its implementations involve both compilation and interpretation.
It is not an Integrated Development Environment (IDE).
Python is a case-sensitive language. It considers that uppercase and lowercase characters are different.
Difference between Python 2 and 3 is the print statement. In Python 2, the "print" statement is not a function, therefore it is invoked without parentheses.In Python 3, it is a function, and must be invoked with parentheses.

## Input in Python

Python 3.6 uses the input() method. Python 2.7 uses the raw_input() method.

1. input()--> default is always a str
2. int(input()) ---> value will be integer
3. float(input()) ---> value will be float

--> Python 2.7
username = raw_input("Enter username:")
print("Username is: " + username)

--> Python 3.6
username = input("Enter username:")
print("Username is: " + username)

## Comments

--> Comments starts with a #, and Python will ignore them:
--> Add a multiline string (triple quotes) in code, and place comment inside it:

## Variables and Types

--> Variable --> containers for storing data values --> Memory allocation
--> Every variable in Python is an object.
--> Python is completely "object oriented"
--> Do not need to declare variables before using them, or declare their type.
--> A variable can have a short name (like x and y) or a more descriptive name (age, carname, total_volume).

# Rules for Python variables:

--> A variable name must start with a letter or the underscore character
--> A variable name cannot start with a number
--> A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and \_ )
--> Variable names are case-sensitive (age, Age and AGE are three different variables)
--> A variable name cannot be any of the Python keywords.

# Legal variable names:

```python
myvar = "John"
my_var = "John"
_my_var = "John"
myVar = "John"
MYVAR = "John"
myvar2 = "John"
```

# Illegal variable names:

2myvar = "John"
my-var = "John"
my var = "John"

# Multi Words Variable Names

--> Variable names with more than one word can be difficult to read.There are several techniques can use to make them more readable:

1. Camel Case
   --> Each word, except the first, starts with a capital letter:
   myVariableName = "John"
2. Pascal Case
   --> Each word starts with a capital letter:
   MyVariableName = "John"
3. Snake Case
   --> Each word is separated by an underscore character:
   my_variable_name = "John"

# Variables - Assign Multiple Values

==> Many Values to Multiple Variables
--> correct syntax to assign values to multiple variables in one line
x,y,z = "Orange", "Banana", "Cherry"
==> One Value to Multiple Variables
--> The same value to multiple variables in one line:
--> correct syntax to add the value to 3 variables in one statement
x = y = z = "Hello World"
==> Unpack a Collection
--> If you have a collection of values in a list, tuple etc. Python allows to extract the values into variables. This is called unpacking.
==> Unpack a list:
```python
fruits = ["apple", "banana", "cherry"]
x, y, z = fruits
print(x)
print(y)
print(z)
```
