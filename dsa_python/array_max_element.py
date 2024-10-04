def find_max_element(arr):
    max_element = arr[0]
    for i in range(1, len(arr)):
        if arr[i] > max_element:
            max_element = arr[i]
    return max_element

num_list = [7, 12, 9, 4, 11]
print(find_max_element(num_list))