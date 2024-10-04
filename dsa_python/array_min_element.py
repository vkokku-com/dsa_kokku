def find_min_element(arr):
    min_element = arr[0]
    for i in range(1, len(arr)):
        if arr[i] < min_element:
            min_element = arr[i]
    return min_element

num_list = [7, 12, 9, 4, 11]
print(find_min_element(num_list))