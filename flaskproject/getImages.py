# -*- coding: utf-8 -*-
import pickle
from PCV.imagesearch import imagesearch


def get(voc, imname):

    # 显示搜索返回的图像数
    maxres = 25

    # 载入词汇
    src = imagesearch.Searcher('testImaAdd.db', voc)

    # 查询数据库，并获取前面的图像
    res = src.query(imname)[:maxres]
    list = []
    for dist, ndx in res:
        list.append(src.get_filename(ndx))

    return list
