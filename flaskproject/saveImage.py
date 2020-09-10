# -*- coding: utf-8 -*-
import pickle
from PCV.imagesearch import vocabulary
from PCV.tools.imtools import get_imlist
from PCV.imagesearch import imagesearch
import sift
import os

# 计算待搜索图片的特征和词汇 并放入数据库中

def add(file):

    targetImgSiftPath = file[:-3] + 'sift'
    sift.process_image(file, targetImgSiftPath)


    voc = vocabulary.Vocabulary('target')
    voc.train([targetImgSiftPath], 100, 10)
    print('vocabulary is:', voc.name, voc.nbr_words)
    locs, descr = sift.read_features_from_file(targetImgSiftPath)


    indx = imagesearch.Indexer('testImaAdd.db', voc)
    indx.add_to_index(file, descr)
    indx.db_commit()

    return voc
