# Variable
#             String
# Defining strings
mystring = "hello"
print(mystring)

# Using double quotes
mystring = "hello"
print(mystring)

# Handling apostrophes using double quotes
mystring = "Don't worry about apostrophes"
print(mystring)

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
print(word[:2])  # First two characters ('Py')
print(word[4:])  # Characters from index 4 to end ('on')
print(word[-2:])  # Last two characters ('on')

# String concatenation using slicing
print(word[:2] + word[2:])  # Entire word ('Python')
print(word[:4] + word[4:])  # Entire word ('Python')

# Modifying a string (strings are immutable, so we create a new one)
print("J" + word[1:])  # 'Python' → 'Jython'
print(word[:2] + "py")  # 'Python' → 'Pypy'

s = "supercalifragilisticexpialidocious"
print(len(s))  # Count number of characters in the string

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
