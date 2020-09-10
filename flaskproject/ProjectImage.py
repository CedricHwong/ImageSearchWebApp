# -*- coding: utf-8 -*-
import pickle
from PCV.imagesearch import imagesearch
from PCV.localdescriptors import sift
import sqlite3
from PCV.tools.imtools import get_imlist

#获取图像列表
imlist = get_imlist('training/')
nbr_images = len(imlist)

#获取特征列表
featlist = [imlist[i][:-3]+'sift' for i in range(nbr_images)]

# load vocabulary
with open('training/vocabulary.pkl', 'rb') as f:
    voc = pickle.load(f)

# 创建索引
indx = imagesearch.Indexer('testImaAdd_training.db', voc)
indx.create_tables()

# go through all images, project features on vocabulary and insert
for i in range(nbr_images):
    locs,descr = sift.read_features_from_file(featlist[i])
    indx.add_to_index(imlist[i],descr)

# commit to database
indx.db_commit()
con = sqlite3.connect('testImaAdd_training.db')
print (con.execute('select count (filename) from imlist').fetchone())
print (con.execute('select * from imlist').fetchone())
