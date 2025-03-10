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
--> \n → Newline (moves to the next line)
--> \t → Tab (adds a horizontal space)
--> \\ → Backslash (adds a literal \)
--> \' → Single quote (allows ' inside single-quoted strings)
--> \" → Double quote (allows " inside double-quoted strings)
--> \uXXXX → Unicode character (represents a Unicode symbol, e.g., \u2764 → ❤)
--> Raw Strings (r"" or R"" in Python)
Raw strings treat backslashes (\) as literal characters, useful for file paths and regex.can use raw strings by adding an r before the first quote:
--> Strings can be concatenated (glued together) with the + operator, and repeated with \*:
--> Two or more string literals (i.e. the ones enclosed between quotes) next to each other are automatically concatenated.-- works with two literals though, not with variables or expressions:
--> Strings can be indexed (subscripted), with the first character having index 0. There is no separate character type; a character is simply a string of size one:
--> Mixing operators between numbers and strings is not supported:

![Slicing ](image.png)
==> Numbers
--> Python supports two types of numbers - integers(whole numbers) and floating point numbers(decimals).
-->(It also supports complex numbers)

# List

