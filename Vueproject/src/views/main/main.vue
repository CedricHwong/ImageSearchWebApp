<template>
  <div class="base">
    <div class="main">
      <div class="upload-area">
        <div class="title">Upload Image:</div>
        <div class="upload-box">
          <el-upload
              class="avatar-uploader"
              action="/api/upload"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </div>
      <div class="result-area">
        <div class="title">Result:</div>
        <div class="result-box">
          <img class="img" v-for="(item,index) in images" :key="index" :src="'/api'+item" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.base {
  padding: 30px;
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;

  .main {
    height: 100%;

    .title {
      font-size: 16px;
      color: #252525;
      line-height: 14px;
      margin-top: 54px;
      margin-bottom: 40px;
    }

    .upload-area {
      .upload-box {

      }
    }

    .result-area {
      margin-top: 50px;
      margin-bottom: 30px;
      padding: 0 30px 30px 30px;
      border: 1px dashed #D9D9D9;
      border-radius: 6px;

      .result-box {
        width: 600px;

        .img {
          margin: 10px;
          width: 100px;
          height: 100px;
        }
      }
    }
  }
}
</style>

<script>

export default {
  data() {
    return {
      imageUrl: '',
      images:[]
    };
  },
  computed: {},
  created() {
  },
  methods: {
    handleAvatarSuccess(res, file) {
      // console.log(res, file, window.URL.createObjectURL(file.raw));
      // this.imageUrl = window.URL.createObjectURL(file.raw)
      this.images = [...res]
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrl = reader.result;
      }
      reader.readAsDataURL(file);
      return isLt2M;
    },
  }
};
</script>
