# Exercise 1: Calculate the multiplication and sum of two numbers
# Given two integer numbers, write a Python code to return their product only if the product is equal to or lower than 1000. Otherwise, return their sum.

# Given 1:

# number1 = 20
# number2 = 30
# Expected Output:

# The result is 600
# Given 2:

# number1 = 40
# number2 = 30
# Expected Output:

# The result is 70

number1 = int(input("Enter your value: "))
number2 = int(input("Enter your value: "))
if number1 * number2 <= 1000:
    print(number1 * number2)
else:
    print (number1 + number2)