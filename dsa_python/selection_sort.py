def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_index = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]
    return arr


my_array = [64, 34, 25, 12, 22, 11, 90, 5]
print('Actual array is:', my_array)
print('Sorted array is:', selection_sort(my_array))
print('Sorted array is:', my_array)
