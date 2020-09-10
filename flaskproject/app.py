from flask import Flask, render_template, request, redirect, url_for, jsonify
from werkzeug.utils import secure_filename
import os
import saveImage
import getImages
import pickle
from PCV.imagesearch import imagesearch
import sift


app = Flask(__name__, static_folder='training', static_url_path='/training')


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/upload', methods=['POST', 'GET'])
def upload():
    f = request.files['file']
    f.save(os.path.join('images', secure_filename(f.filename)))  # 注意：没有的文件夹一定要先创建，不然会提示没有该路径
    file = os.path.join('images', secure_filename(f.filename))
    targetImgSiftPath = file[:-3] + 'sift'
    sift.process_image(file, targetImgSiftPath)
    with open('training/vocabulary.pkl', 'rb') as f:
        voc = pickle.load(f)
    locs, descr = sift.read_features_from_file(targetImgSiftPath)


    # 显示搜索返回的图像数
    maxres = 25

    # 载入词汇
    src = imagesearch.Searcher('testImaAdd.db', voc)

    # 查询数据库，并获取前面的图像
    res = src.query2(descr)[:maxres]
    list = []
    for dist, ndx in res:
        list.append(src.get_filename(ndx))
    res = list

    return jsonify(res)


if __name__ == '__main__':
    app.run()
