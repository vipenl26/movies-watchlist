import cv2
from copy import copy

img = cv2.imread("wave.png",cv2.IMREAD_UNCHANGED)


st = set()
for i in range(len(img)):
	for j in range(len(img[i])):
		temp = copy(img[i][j])
		img[i][j][2]=temp[0]
		img[i][j][0]=temp[2]-27
		img[i][j][1]=temp[1]+29
		print(img[i][j])


cv2.imwrite("png_yellow.png",img)
