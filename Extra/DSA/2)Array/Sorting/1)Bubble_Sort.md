## Bubble Sort

==> What is Bubble Sort

--> Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.
--> The pass through the list is repeated until the list is sorted. It gets its name because smaller elements "bubble" to the top of the list.

==> How Does It Work
Imagine you have an unsorted list of numbers: [5, 1, 4, 2, 8]

1. First Pass:
   --> (5, 1) → Swap → [1, 5, 4, 2, 8]
   --> (5, 4) → Swap → [1, 4, 5, 2, 8]
   --> (5, 2) → Swap → [1, 4, 2, 5, 8]
   --> (5, 8) → No swap
2. Second Pass:
   --> (1, 4) → No swap
   --> (4, 2) → Swap → [1, 2, 4, 5, 8]
   --> (4, 5) → No swap
3. Third Pass:
   --> No swaps needed → List is sorted
4. The algorithm stops when a complete pass is made without any swaps.

==> Algorithm Steps

1. Start with an unsorted array
2. Set a flag to track if any swaps occur
3. For each pair of adjacent elements:
   --> Compare the two elements
   --> If they are in the wrong order, swap them
   --> Set the swap flag to true
4. Repeat the process until a complete pass is made without any swaps
5. The array is now sorted

==> Time Complexity
Best Case: Array is already sorted → O(n) (only one pass needed).
Average Case: Randomly ordered array → O(n²).
Worst Case: Array is sorted in reverse order → O(n²).

![Time Complexity Analysis](image.png)

==> Space Complexity
Bubble Sort is an in-place sorting algorithm, meaning it requires only O(1) additional space (for temporary storage during swaps).

# Note :-

1. Bubble Sort is simple to understand and implement but inefficient for large datasets.
2. It's mainly used for educational purposes to introduce sorting algorithms.
3. In practice, more efficient algorithms like QuickSort or MergeSort are preferred.
