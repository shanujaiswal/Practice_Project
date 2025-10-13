# Decorator Practice Questions (10)


# Create a decorator that counts how many times a function has been called.

# Write a decorator that logs the arguments passed to the function.

# Make a decorator that converts the return value of a function to uppercase (assuming the function returns a string).

# Write a decorator that measures the time a function takes to execute.

# Create a decorator that only allows a function to run if a global variable enabled is True.

# Write a decorator that caches the results of a function for previously seen inputs.

# Create a decorator that retries a function up to 3 times if it raises an exception.

# Write a decorator that modifies a function to print its name before running.

# Write a decorator that adds 10 to the integer returned by any function.

# OOP Basic Practice Questions (10)

# Create a Car class with attributes: make, model, and year. Instantiate an object.

# Add a method to the Car class that returns a string description of the car.

# Create a class Person with attributes name and age. Write a method that returns if the person is an adult (age >= 18).

# Create a Rectangle class with width and height. Write a method to calculate its area.

# Write a class BankAccount with methods to deposit, withdraw, and check the balance.

# Create a class Employee with attributes name and salary. Write a method to give a raise by a percentage.

# Write a class Student with attributes name and grades (list of numbers). Write a method to calculate the average grade.

# Create a Book class with attributes: title, author, pages. Write a method to display book info.

# Write a class Animal with a method make_sound() that prints "Some sound". Create a subclass Dog that overrides make_sound() to print "Bark".

# Create a class Circle with attribute radius. Write a method to calculate the circumference.

# Mixed Decorators + OOP Practice Questions (10)

# Write a class with a method that prints "Hello". Decorate the method to print "Start" before and "End" after calling it.

# Create a decorator that can be applied to any method of a class to print the method's name before execution.

# Write a class Counter with a method increment() decorated to count how many times it's called.

# Make a class Logger with a method log(message). Decorate log so that it timestamps the message before printing.

# Create a class Calculator with methods add, subtract. Decorate these methods to log their arguments and results.

# Write a decorator that prevents a method from running if an attribute enabled on the instance is False.

# Create a class with a method that returns a string. Decorate the method to convert its output to lowercase.

# Write a class RetryHandler with a method that raises an exception randomly. Decorate it to retry up to 2 times.

# Create a class with multiple methods. Use a decorator to time all methods' execution.

# Write a class Person with a method greet(name). Decorate the method to capitalize the name argument before printing.

# Decorator

# 1. Write a simple decorator that prints "Before function" before calling a function and "After function" after it.


def function(func):
    def my_inner():
        print("Before function")
        result = func()
        print(result)
        print("After function")

    return my_inner


@function
def myfunction():
    return "Hello All"


myfunction()
