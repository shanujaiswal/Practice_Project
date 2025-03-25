## Sum of two number
# a = int(input("Enter Number 1:"))
# b = int(input("Enter Number 2:"))
# sum = a+b
# print(sum)

## Area of a square
# a = int(input("Enter the side:"))
# area = a**2
# print(area)

## Average oftwo floating number
# a = float(input("Enter Number 1:"))
# b = float(input("Enter Number 2:"))
# average =((a+b)/2)
# print(average)

## Greater smaller
# a = int(input("Enter Number 1:"))
# b = int(input("Enter Number 2:"))
# print (a>=b)

## Input user's first name and print its length
# a =input("Enter your first name:")
# print(len(a))

## The occurrence of $ in a sting
# a = "hy $ , i am $ symbol reperesent $ 99.04"
# print(a.count("$"))

## Odd or even
# num = int(input("enter the number:"))
# if(num % 2 == 0):
#     print("Even")
# else:
#     print("Odd")

## Greatest of 3  numbers
# code -1
# a = int(input("Enter Number1:"))
# b = int(input("Enter Number2:"))
# c = int(input("Enter Number3:"))
# if (a>=b) and (a>=c):
#     print(a)
# elif(b>=a) and (b>=c):
#     print(b)
# else:
#     print(c)

## code -2
# a = int(input("Enter Number 1: "))
#     b = int(input("Enter Number 2: "))
#     c = int(input("Enter Number 3: "))

#     greatest = max(a, b, c)  # Using max() for cleaner code
#     print(f"The greatest number is: {greatest}")

# except ValueError:
#     print("Invalid input! Please enter integer values only.")

## Number is multiple of  7 or not
# a  = float(input("Enter the number: "))
# if(a % 7 == 0):
#     print("number is multiple of 7 ")
# else:
#     print("number is not divisible by 7")

## To add outputs in list
# case 1
# movies = [ ]
# movies.append(input("Please provide a movie which you like:"))
# movies.append(input("Please provide a movie which you like:"))
# movies.append(input("Please provide a movie which you like:"))
# print(movies)

# case 2
# movies = []  # Use a meaningful variable name
# for i in range(3):
#     movie = input(f"Enter your favorite movie ({i+1}/3): ")
#     movies.append(movie)
# print("Your favorite movies are:", movies)

# Check if a list contain a palindrome of elements
# Contain a palindrome of elements (print(list[::-1]))--> to reverse the given string
# list = [1,2,3,4,2,1]
# if(list[::-1]==list):
#     print ("it is Palindrome")
# else:
#     print("It is not Palindrome")

# Count the  number with A grade in the tuple
# a = ("C","D","A","A","B","B","A",)
# print(a.count("A"))

# storethe value and sort from "A" to "D"
# a = ["C","D","A","A","B","B","A"]
# a.sort()
# print(a)

# Store the key and value in empty dict
# python_dict ={}
# python_dict["Table"] = "a piece of furniture","list of facts &figures"
# python_dict["Cat"] = "a small animal"
# print(python_dict)

#  To Get the length of the set
# Subjects = {
#     "python","java","C++","C++","python","javascript","java","python","java","C++","C"

# }
# print(Subjects)
# print(len(Subjects))

# enter marks of 3 subjects from theuser and store them in dict
# Dict = {}
# subject1 = input("Enter the first subject: ")
# marks1 = int(input(f"Enter marks for {subject1}: "))
# Dict[subject1] = marks1

# subject2 = input("Enter the second subject: ")
# marks2 = int(input(f"Enter marks for {subject2}: "))
# Dict[subject2] = marks2

# subject3 = input("Enter the third subject: ")
# marks3 = int(input(f"Enter marks for {subject3}: "))
# Dict[subject3] = marks3

# Store Same value  - ex:- 9 and 9.0
# i) By making one value as string
# Seprate_Value1 = {9, "9.0"}
# print(Seprate_Value1)

# ii)  By making them as tuple
# values = {("float", 9.0), ("int", 9)}

# print number  1 to 100
# i = 1
# while i<= 100:        #stopping condition
#     print(i)
#     i += 1

# print number from 100 to 1
# i = 100
# while i>=1:
#     print(i)
#     i -= 1


# Multiplication table of n
# n = int(input("Enter the number of which you want table "))

# i = 1
# while i <= 10:
#     print(f"{n}*{i} = ", n * i )
#     i+= 1

# Print the element of the  following list using loop
# n = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
# i = 0
# while i < len(n):
#     print(n[i])
#     i += 1F

# print(n)

# Finding a number in tuple
# n = (1, 4, 9, 16, 25, 36, 49, 64, 81, 100)

# i = 0
# while i < len(n):
#     if n[i] == 49:
#         print("Number is found at", i)
#     i += 1

# print elements of the following list using a loop
# a = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# for num in a:
#    print (num)

# number x in tuple using loop
# a = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
# x = int(input("The number you want is : "))
# for num in a:
#     if num == x:
#         print ("The number  is found")
#     else :
#         print("the number is not found ")

# Printing numbers from 1 to 100
# Using while()
# i = 0
# while i <= 100 :
#     print (i)
#     i += 1

# Using Range()
# for i in range(1, 100):
#     print(i)

# Print number from 100 to 1
#  Using while loop()
# i = 100
# while i >= 1:
#     print (i)
#     i -= 1

#  Using For range()
# for i in range (100, 0, -1):
#     print(i)

# Multiplication table of a number
# using while()
# n = int(input("The number you want for multiplication = "))
# i = 1
# while i <= 10:
#     print(f"{n} * {i} =",n*i)
#     i += 1

# using For range()
# n = int(input("The number you want for multiplication = "))
# for i in range(1,11,1):
#         print(f"{n} * {i} =",n*i)


#  Sum of first n number
# Show sum at last step
# n = int(input("Upto the given number find the sum "))
# sum = 0
# i = 1
# while i <= n :
#   sum += i
#   i += 1
# print(sum)       # Show sum at last step

# Show sum at each step
# n = int(input("Upto the given number find the sum "))
# sum = 0
# i = 1
# while i <= n :
#    sum += i
#    print(sum)        # Show sum at each step
#    i += 1

# Factorial of first n number  using while loop
# Show fact at last step
# n = int(input("Upto the given number find the fact "))
# fact = 1
# i = 1
# while i <= n :
#    fact *= i
#    i += 1
#    print(fact)        # Show fact at last step

# Show fact at each step
# n = int(input("Upto the given number find the fact "))
# fact = 1
# i = 1
# while i <= n :
#    fact *= i
#    print(fact)        # Show fact at each step
#    i += 1

# Factorial of first n number  using for loop
# Factorial of first n number

# n = int(input("Upto the given number find the fact "))
# fact = 1
# for i in range (1,n+1):
#     fact *= i
#     print(fact)
