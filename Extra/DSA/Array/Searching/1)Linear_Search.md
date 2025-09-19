## Linear Seaarch

==> What is Linear Search

--> Linear Search is a simple method to find a particular value in a list.
--> It checks each element one by one from the start until it finds the target value.
--> If the value is found, it returns its position; otherwise, it says the value is not present.

==> How Does It Work
Imagine you have a list of numbers: [a, b, c, d, e] and you want to find the number c.

1. Start from the first number (a). Is a equal to c? No.
2. Move to the next number (b). Is b equal to c? No.
3. Move to the next number (c). Is c equal to c? Yes! Stop here. The position is 2 (or 3 if counting starts from 1).

If the number is not in the list (e.g., searching for n), the search ends without success.

==> Algorithm Steps

1. Start from the first element.
2. Compare the current element with the target value.
   If they match, return the position.
   If not, move to the next element.
3. Repeat until the end of the list.
4. If the element is not found, return "Not Found".

==> Time Complexity
Best Case:- Target is the first element → O(1)
Worst Case:- Target is last or not present → O(n) (checks all elements)
![Time Complexity Analysis ](image.png)

# Note :- Linear Search is easy to understand but can be slow for large lists compared to faster methods like Binary Search.

# Linear Search Implementation

==> JavaScript

```JavaScript
// Linear Search in JavaScript
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return index if found
    }
  }
  return -1; // Return -1 if not found
}

// Usage example
const numbers = [10, 20, 30, 40, 50];
const target = 30;
const result = linearSearch(numbers, target);

if (result !== -1) {
  console.log(`Element found at index: ${result}`);
} else {
  console.log("Element not found");
}
```

Python

```python
# Linear Search in Python
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i  # Return index if found
    return -1  # Return -1 if not found

# Usage example
numbers = [10, 20, 30, 40, 50]
target = 30
result = linear_search(numbers, target)

if result != -1:
    print(f"Element found at index: {result}")
else:
    print("Element not found")
```
