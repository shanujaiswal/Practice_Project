### DSA with Python

--> Data Structures is about how data can be stored in different structures.
--> Algorithms is about how to solve different problems, often by searching through and manipulating data structures.
--> DSA helps to find the best combination of Data Structures and Algorithms to create more efficient code.

# Data Structures

--> Data Structures are a way of storing and organizing data in a computer.
--> Python has built-in support for several data structures, such as lists, dictionaries, and sets.
--> Other data structures can be implemented using Python classes and objects, such as linked lists, stacks, queues, trees, and graphs.

1. Lists and Arrays
2. Stacks
3. Queues
4. Linked Lists
5. Hash Tables
6. Trees
   --> Binary Trees
   --> Binary Search Trees
   --> AVL Trees
7. Graphs

# Algorithms

--> Algorithms are a way of working with data in a computer and solving problems like sorting, searching, etc.

1. Linear Search
2. Binary Search
3. Bubble Sort
4. Selection Sort
5. Insertion Sort
6. Quick Sort
7. Counting Sort
8. Radix Sort
9. Merge Sort

==> Why Learn DSA with Python
--> Python has a clean readable syntax
--> DSA allows you to improve problem-solving skills
--> DSA and Python helps you write more efficient code
--> DSA gives you a better understanding of memory storage
--> DSA helps you handle complex programming challenges
--> Python is widely used in Data Science and Machine Learning

## Python Lists and Arrays

--> In Python, lists are the built-in data structure that serves as a dynamic array.
--> Lists are ordered, mutable, and can contain elements of different types.

# Lists

--> A list is a built-in data structure in Python, used to store multiple elements.
--> Lists are used by many algorithms.

==> Creating Lists
--> Lists are created using square brackets []:

```python
# Empty list
x = []

# List with initial values
y = [1, 2, 3, 4, 5]

# List with mixed types
z = [1, "hello", 3.14, True]
```

==> List Methods
--> Python lists come with several built-in algorithms (called methods), to perform common operations like appending, sorting, and more.

```python
x = [9, 12, 7, 4, 11]

# Add element:
x.append(8)

# Sort list ascending:
x.sort()
```

# Create Algorithms

Sometimes we want to perform actions that are not built into Python.Then we can create our own algorithms.

==> Example
Create an algorithm to find the lowest value in a list:

```python
my_array = [7, 12, 9, 4, 11, 8]
minVal = my_array[0]

for i in my_array:
  if i < minVal:
    minVal = i

print('Lowest value:', minVal)
```

--> The algorithm above is very simple, and fast enough for small data sets, but if the data is big enough, any algorithm will take time to run.
--> This is where optimization comes in.
--> Optimization is an important part of algorithm development, and of course, an important part of DSA programming.
--> In the example above, the time the algorithm needs to run is proportional, or linear, to the size of the data set. It is because the algorithm must visit every array element one time to find the lowest value. The loop must run 5 times since there are 5 values in the array. And if the array had 1000 values, the loop would have to run 1000 times.

