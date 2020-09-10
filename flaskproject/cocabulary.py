# -*- coding: utf-8 -*-
import pickle
from PCV.imagesearch import vocabulary
from PCV.tools.imtools import get_imlist
import sift

# 该文件生成训练集的词汇 并将结果保存在pkl

#获取图像列表
imlist = get_imlist('training/')
nbr_images = len(imlist)

#获取特征列表
featlist = [imlist[i][:-3]+'sift' for i in range(nbr_images)]

#提取文件夹下图像的sift特征
# for i in range(nbr_images):
#     sift.process_image(imlist[i], featlist[i])

#生成词汇
voc = vocabulary.Vocabulary('training')
voc.train(featlist, 100, 10)


# saving vocabulary
with open('training/vocabulary.pkl', 'wb') as f:
    pickle.dump(voc, f)
print ('vocabulary is:', voc.name, voc.nbr_words)
