# Variable
# String
mystring = "hello"
print(mystring)
mystring = "hello"
print(mystring)
mystring = "Don't worry about apostrophes"
print(mystring)
print("Hello\nWorld")  # Output: Hello (new line) World
print("Path: C:\\Users\\John")  # Output: Path: C:\Users\John
print("Unicode heart: \u2764")  # Output: Unicode heart: ❤
print(r"C:\Users\John")  # Output: C:\Users\John
print(
    """\
Usage: thingy [OPTIONS]
     -h                        Display this usage message
     -H hostname               Hostname to connect to
"""
)

word = "Python"
print(word[0])  # character in position 0
print(word[5])  # character in position 5
print(word[-1])  # last character
print(word[-2])  # second-last character
print(word[0:2])  # characters from position 0 (included) to 2 (excluded)
print(word[2:5])  # characters from position 2 (included) to 5 (excluded)
print(word[:2])  # character from the beginning to position 2 (excluded)
print(word[4:])  # characters from position 4 (included) to the end
print(word[-2:])  # characters from the second-last (included) to the end
print(word[:2] + word[2:])
print(word[:4] + word[4:])
print("J" + word[1:])
print(word[:2] + "py")
s = "supercalifragilisticexpialidocious"
print(len(s))
# Simple operators can be executed on numbers and strings:
one = 1
two = 2
three = one + two
print(three)

hello = "hello"
world = "world"
helloworld = hello + " " + world
print(helloworld)
# Assignments can be done on more than one variable "simultaneously" on the same line like this
a, b = 3, 4
print(a, b)
# This will not work!
# one = 1
# two = 2
# hello = "hello"
# print(one + two + hello)


# Integer
myint = 7
print(myint)

# Floating Number
myfloat = 7.0
print(myfloat)
myfloat = float(7)
print(myfloat)
