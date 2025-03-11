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
