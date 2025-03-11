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
--> Shallow Copy (copy()) → Copies references, not actual objects.
--> Deep Copy (deepcopy()) → Creates an independent copy.
Advanced List Concepts

--> List Slicing (list[start:stop:step])
--> Nested Lists (Lists inside lists)
--> Shallow vs. Deep Copy (copy() and deepcopy())
--> List vs. Tuple (Differences and when to use each)
--> Performance Considerations (Time complexity of list operations)
![List vs. Tuple](image-3.png)

# Basic Operators

# Arithmetic Operators

--> Arithmetic operators in Python are used to perform mathematical operations like addition, subtraction, multiplication, and more.
--> ![Arithmetic Operators](image-2.png)

# Using Operators with Strings in Python

1. String Concatenation (`+`)

--> The `+` operator is used to join two or more strings.
--> It does **not** add spaces automatically, so you must include them manually if needed.

2. String Repetition (`*`)

--> The `*` operator repeats a string multiple times.

3. Using Comparison Operators with Strings

--> Python allows using `==`, `!=`, `<`, `>`, `<=`, `>=` with strings.
--> Strings are compared lexicographically (alphabetical order based on ASCII values).

4. Membership Operators (`in`, `not in`)

--> The `in` operator checks if a substring exists within a string.
--> The `not in` operator checks if a substring does **not** exist in a string.

5. Using Logical Operators with Strings

--> Python treats non-empty strings as `True` and empty strings as `False`.
--> `and`, `or`, and `not` can be used with strings.

6. Using Assignment Operators with Strings

--> The `+=` operator appends a string to an existing string.
--> Equivalent to `string = string + new_value`.

# Using Operators with Lists in Python

1. Concatenation (`+`)

--> The `+` operator is used to combine two or more lists into a new list.
--> It **does not** modify the original lists but creates a new one.

2. Repetition (`*`)

--> The `*` operator repeats a list multiple times.

3. Membership Operators (`in`, `not in`)

--> The `in` operator checks if an element exists in a list.
--> The `not in` operator checks if an element does **not** exist in a list.

4. Comparison Operators (`==`, `!=`, `<`, `>`, `<=`, `>=`)

--> Lists are compared **element by element**.
--> The comparison is **lexicographical** (similar to string comparison based on ASCII values).

5. Assignment Operators (`+=`, `*=`)

--> The `+=` operator appends elements from another list to the existing list.
--> The `*=` operator repeats and updates the list in place.

6. Identity Operators (`is`, `is not`)

--> The `is` operator checks if two lists refer to the **same memory location**.
--> The `is not` operator checks if they refer to **different objects**.

7. Logical Operators (`and`, `or`, `not`)

--> `and` returns the second list if the first list is non-empty, otherwise returns the first list.
--> `or` returns the first non-empty list.
--> `not` returns `True` if the list is empty, otherwise `False`.

# String Formatting

1. Using `%` Operator (Old Style Formatting)
   --> The `%` operator is used like C-style string formatting.
   --> `%s` is used for strings, `%d` for integers, and `%f` for floating-point numbers, %.<number of digits>f - Floating point numbers with a fixed amount of digits to the right of the dot, %x/%X - Integers in hex representation (lowercase/uppercase)

2. Using `format()` Method (Modern Style)
   --> The `format()` method allows inserting variables inside curly `{}` braces.
   --> It supports positional and keyword arguments.

3. Using f-strings (Python 3.6+)
   --> Introduced in Python 3.6, f-strings are prefixed with `f` and allow embedding expressions directly inside `{}`.

4. Using Template Strings (`string.Template`)
   --> The `Template` class from the `string` module allows placeholder-based string formatting using `$`.

5. Formatting Numbers
   --> `{:.2f}` → Rounds to 2 decimal places.
   --> `{:,}` → Adds a thousands separator.
   --> `{:<10}` → Left-align, `{:>10}` → Right-align, `{:^10}` → Center-align.

6. Formatting Dates
   --> The `strftime()` method from the `datetime` module is used to format dates.

# Basic String Operations in Python

## 1. String Creation
- Strings can be created using **single (`'`), double (`"`)**, or **triple quotes (`''' """`)**.

## 2. String Concatenation
- Strings can be **combined** using the `+` operator.
- Example: `"Hello" + " World"` → `"Hello World"`

## 3. String Repetition
- Strings can be repeated using the `*` operator.
- Example: `"Hi" * 3` → `"HiHiHi"`

## 4. Accessing Characters
- Strings are **indexed** starting from `0`.
- Example: `"Python"[0]` → `'P'`, `"Python"[-1]` → `'n'`

## 5. String Slicing
- Extract a portion of a string using `[start:end]` notation.
- Example: `"Python"[0:3]` → `'Pyt'` (Characters from index 0 to 2)

## 6. String Length
- Use `len(string)` to find the length of a string.

## 7. String Case Operations
- `.upper()` → Converts string to uppercase.
- `.lower()` → Converts string to lowercase.
- `.title()` → Converts first letter of each word to uppercase.

## 8. String Strip Operations
- `.strip()` → Removes spaces from both ends.
- `.lstrip()` → Removes spaces from the left.
- `.rstrip()` → Removes spaces from the right.

## 9. String Find and Replace
- `.find(substring)` → Returns index of first occurrence.
- `.replace(old, new)` → Replaces occurrences of a substring.

## 10. String Splitting and Joining
- `.split(delimiter)` → Splits a string into a list.
- `.join(iterable)` → Joins elements of an iterable into a string.

## 11. Checking Substrings
- `"substring" in "string"` → Returns `True` or `False`.

## 12. String Formatting
- `f"Hello, {name}!"` (f-strings)
- `"Hello, {}!".format(name)`
- `"Hello, %s!" % name` (old-style)
