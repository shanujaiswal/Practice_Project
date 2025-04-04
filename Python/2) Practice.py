# Variable
# String
# Defining strings
mystring = "hello"
print(mystring)

# Using double quotes
mystring = "hello"
print(mystring)

# Handling apostrophes using double quotes
mystring = "Don't worry about apostrophes"
print(mystring)

name = "Shanu Jaiswal"
age = 23
location = 23.3
print(location)

# print sum
a = 22
b = 3
print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a % b)  # Remainder

# Type conversion
c = 2
d = 2.5
sum = c + d
print(sum)

# Type Casting
e = "3"
f = int(e)  # use float for converting in float
g = 5
print(f + g)

# Taking Input
name = input("Enter your name ")
age = input("Enter your age ")
marks = input("Enter your marks ")
print("Welcome my name is ", name, "i am ", age, "year old", "my total marks is", marks)


# Escape sequences
print("Hello\nWorld")  # New line
print("Path: C:\\Users\\John")  # Backslash escape
print("Unicode heart: \u2764")  # Unicode character
print(r"C:\Users\John")  # Raw string (ignores escape sequences)

# Multi-line string (useful for documentation or formatting)
print(
    """\
Usage: thingy [OPTIONS]
     -h                        Display this usage message
     -H hostname               Hostname to connect to
"""
)

word = "Python"
print(word[0])  # First character ('P')
print(word[5])  # Last character ('n')
print(word[-1])  # Last character using negative indexing ('n')
print(word[-2])  # Second last character ('o')
# String slicing
print(word[0:2])  # First two characters ('Py')
print(word[2:5])  # Characters from index 2 to 4 ('tho')
print(word[2 : len(word)])  # Prints the substring of 'word' starting from index 2 to the end
print(word[:2])  # First two characters ('Py')
print(word[4:])  # Characters from index 4 to end ('on')
print(word[-2:])  # Last two characters ('on')
print(word[-3:-1])  # Prints the substring of 'word' from the third-to-last character up to (but not including) the last character.

# String concatenation using slicing
print(word[:2] + word[2:])  # Entire word ('Python')
print(word[:4] + word[4:])  # Entire word ('Python')

# Modifying a string (strings are immutable, so we create a new one)
print("J" + word[1:])  # 'Python' → 'Jython'
print(word[:2] + "py")  # 'Python' → 'Pypy'

# String Length
s = "super califragilistice xpialidocious"
print(len(s))  # Count number of characters in the string

# String Case Operations
print(word.upper())  # Output: PYTHON
print(word.lower())  # Output: python
print(s.title())  # Output: Python
print(s.capitalize())  # Output: Python
print(word.index("o"))  # Output: 4 (as 'o' appears at index 4 in "Python")

# String Strip Operations
text = "   Hello Python   "
print(text.strip())  # Output: Hello Python
print(text.lstrip())  # Output: "Hello Python   "
print(text.rstrip())  # Output: "   Hello Python"

# String Find and Replace
message = "Hello World"
print(message.find("World"))  # Output: 6
print(message.replace("World", "Python"))  # Output: Hello Python

# String Splitting and Joining
sentence = "Python is fun"
words = sentence.split()  # Splits on spaces
print(words)  # Output: ['Python', 'is', 'fun']

joined_sentence = "-".join(words)
print(joined_sentence)  # Output: Python-is-fun

# Checking Substrings
print("Python" in sentence)  # Output: True
print("Java" in sentence)  # Output: False

# String Formatting
name = "Alice"
print(f"Hello, {name}!")  # Output: Hello, Alice!
print("Hello, {}!".format(name))  # Output: Hello, Alice!
print("Hello, %s!" % name)  # Output: Hello, Alice!

# Arithmetic operations
one = 1
two = 2
three = one + two
print(three)  # Output: 3

# String concatenation
hello = "hello"
world = "world"
helloworld = hello + " " + world  # 'hello' + ' ' + 'world'
print(helloworld)  # Output: "hello world"

# Multiple Variable Assignment
a, b = 3, 4  # Assigning multiple variables in one line
print(a, b)  # Output: 3 4

# This will cause an error because you can't add numbers and strings together
# one = 1
# two = 2
# hello = "hello"
# print(one + two + hello)  # Error: Type mismatch

# Integer & Floating-Point Numbers
# Integer assignment
myint = 7
print(myint)  # Output: 7

# Float assignment
myfloat = 7.0
print(myfloat)  # Output: 7.0

# Explicit float conversion
myfloat = float(7)
print(myfloat)  # Output: 7.0


# Lists
# Creating an empty list
mylist = []

# Adding elements using append()
mylist.append(1)
mylist.append(2)
mylist.append(3)

# Accessing elements by index
print(mylist[0])  # Output: 1
print(mylist[1])  # Output: 2
print(mylist[2])  # Output: 3

# Looping through a list
for x in mylist:
    print(x)  # Prints 1, 2, 3


# Accessing an index that does not exist raises an error
# Uncommenting the following line will cause an IndexError
# mylist = [1, 2, 3]
# print(mylist[10])  # IndexError: list index out of range

# Arithmetic Operators
# Addition
a = 10
b = 5
print("Addition:", a + b)  # Output: 15

# Subtraction
print("Subtraction:", a - b)  # Output: 5

# Multiplication
print("Multiplication:", a * b)  # Output: 50

# Division (Returns float)
print("Division:", a / b)  # Output: 2.0

# Floor Division (Rounds down to the nearest integer)
print("Floor Division:", a // 3)  # Output: 3

# Modulus (Remainder of division)
print("Modulus:", a % 3)  # Output: 1

# Exponentiation (Power)
print("Exponentiation:", a**2)  # Output: 100
print("cubed:", a**3)

# 1. String Concatenation
str1 = "Hello"
str2 = "World"
result = str1 + " " + str2  # Adding space manually
print(result)  # Output: Hello World

# 2. String Repetition
text = "Python "
print(text * 3)  # Output: Python Python Python

# 3. Using Comparison Operators with Strings
print("apple" == "apple")  # True
print("apple" != "banana")  # True
print("apple" < "banana")  # True (compares lexicographically)
print("car" > "bus")  # True ('c' comes after 'b' in ASCII)

# 4. Membership Operators
sentence = "Python is fun"
print("Python" in sentence)  # True
print("Java" in sentence)  # False
print("fun" not in sentence)  # False

# 5. Using Logical Operators with Strings
print(bool("Hello"))  # True (non-empty string)
print(bool(""))  # False (empty string)
print("Hello" and "World")  # Output: World
print("" or "Python")  # Output: Python
print(not "Hello")  # Output: False

# 6. Using Assignment Operators with Strings
message = "Hello"
message += " World"  # Equivalent to message = message + " World"
print(message)  # Output: Hello World

# 1. List Concatenation (+)
list1 = [1, 2, 3]
list2 = [4, 5, 6]
result = list1 + list2
print(result)  # Output: [1, 2, 3, 4, 5, 6]

# 2. List Repetition (*)
numbers = [1, 2, 3]
print(numbers * 3)  # Output: [1, 2, 3, 1, 2, 3, 1, 2, 3]

# 3. Membership Operators (in, not in)
fruits = ["apple", "banana", "cherry"]
print("banana" in fruits)  # Output: True
print("grape" not in fruits)  # Output: True

# 4. Comparison Operators
listA = [1, 2, 3]
listB = [1, 2, 3]
listC = [1, 2, 4]

print(listA == listB)  # True (same elements)
print(listA != listC)  # True (different elements)
print(listA < listC)  # True (compares elements lexicographically)

# 5. Assignment Operators
nums = [1, 2, 3]
nums += [4, 5]  # Equivalent to nums = nums + [4, 5]
print(nums)  # Output: [1, 2, 3, 4, 5]

nums *= 2  # Equivalent to nums = nums * 2
print(nums)  # Output: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

# 6. Identity Operators (is, is not)
x = [1, 2, 3]
y = [1, 2, 3]
z = x

print(x is y)  # Output: False (Different objects in memory)
print(x is z)  # Output: True (Same memory reference)
print(x is not y)  # Output: True

# 7. Logical Operators
list1 = [1, 2, 3]
list2 = []

print(list1 and list2)  # Output: [] (empty list)
print(list1 or list2)  # Output: [1, 2, 3] (first non-empty list)
print(not list1)  # Output: False (list is not empty)
print(not list2)  # Output: True (list is empty)

# 1. Using % Operator (Old Style)
name = "Alice"
age = 25
print("Hello, my name is %s and I am %d years old." % (name, age))

# 2. Using format() Method
print("Hello, my name is {} and I am {} years old.".format(name, age))
print("I have {1} apples and {0} oranges.".format(5, 10))  # Positional arguments
print("Name: {n}, Age: {a}".format(n=name, a=age))  # Keyword arguments

# 3. Using f-strings (Python 3.6+)
print(f"Hello, my name is {name} and I am {age} years old.")
x, y = 10, 20
print(f"Sum of {x} and {y} is {x + y}")

# 4. Using Template Strings
from string import Template

t = Template("Hello, my name is $name and I am $age years old.")
print(t.substitute(name="Bob", age=30))

# 5. Formatting Numbers
pi = 3.14159
print(f"Pi rounded to 2 decimal places: {pi:.2f}")  # Output: 3.14
print(f"Number with commas: {1000000:,}")  # Output: 1,000,000
print(f"Left align: {'Hello':<10}, Right align: {'Hello':>10}, Center: {'Hello':^10}")

# 6. Formatting Dates
from datetime import datetime

now = datetime.now()
print(f"Current Date and Time: {now:%Y-%m-%d %H:%M:%S}")  # Output: 2025-03-11 14:30:15

# Variable Assignment vs. Comparison
x = 10  # Assignment
y = 20
print(x == y)  # False (Comparison)
print(x != y)  # True

# Boolean Operators
x = 5
y = 10
print(x > 2 and y < 15)  # True
print(x > 10 or y < 15)  # True
print(not (x > 2))  # False

# The "in" Operator
fruits = ["apple", "banana", "cherry"]
print("banana" in fruits)  # True
print("grape" in fruits)  # False

# Indentation in Python
x = 10
if x > 5:
    print("x is greater than 5")  # Indented block

# Truthy and Falsy Values
print(bool(0))  # False
print(bool([]))  # False
print(bool("Hi"))  # True

# The "is" Operator
x = [1, 2, 3]
y = [1, 2, 3]
z = x
print(x == y)  # True (Values are equal)
print(x is y)  # False (Different memory locations)
print(x is z)  # True (Same object)

# Example of a for loop
for num in range(1, 6):
    print(num)

# Example of a while loop
count = 1
while count <= 5:
    print(count)
    count += 1

# Using break in a for loop
for num in range(1, 6):
    if num == 3:
        break  # Stops the loop at 3
    print(num)

# Using continue in a for loop
for num in range(1, 6):
    if num == 3:
        continue  # Skips printing 3
    print(num)

# Using else with a for loop
for num in range(1, 6):
    if num == 3:
        break
    print(num)
else:
    print("Loop completed")

# Looping through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Looping through a string
for char in "Python":
    print(char)

# Looping through a dictionary
person = {"name": "Alice", "age": 25}
for key, value in person.items():
    print(key, ":", value)

# Updating dictionary

student = {"name": "rahul kumar", "subjects": {"phy": 97, "chem": 98, "math": 95}}

new_dict = {"city": "delhi", "age": 20}  # Added value for "age"

student.update(new_dict)  # Updates student dictionary

print(student)


# Looping through while loop
