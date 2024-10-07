def bubble_sort(arr):
    n = len(arr)
    for i in range(n-1):
        for j in range(n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

my_array = [64, 34, 25, 12, 22, 11, 90, 5]
print('Actual array is:', my_array)
print('Sorted array is:', bubble_sort(my_array))
print('Sorted array is:', my_array)