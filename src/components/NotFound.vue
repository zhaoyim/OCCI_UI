<template>
  <div class="notfound">
    <div class="error-page">
      <div class="error-page-container">
        <div class="error-page-main">
          <h3><strong>404</strong>{{ $t('notfound.title') }}</h3>
          <div class="error-page-actions">
            <div>
              <h4>{{ $t('notfound.reason') }}</h4>
              <ol>
                <li>{{ $t('notfound.reason1') }}</li>
                <li>{{ $t('notfound.reason2') }}</li>
                <li>{{ $t('notfound.reason3') }}</li>
              </ol>
            </div>
            <div>
              <h4>{{ $t('notfound.way') }}</h4>
              <a href="javascript:void(0)">{{ $t('notfound.wayhome') }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="scss" scoped>
.notfound {
  font: 14px/1.5 'Microsoft YaHei','微软雅黑',Helvetica,Sans-serif;
  margin: {
    top: 7%;
  };
  div,h3,h4,li,ol {
    margin: 0;
    padding: 0;
  };
  a {
    color:#428bca;
    text-decoration:none;
    &:hover {
      text-decoration:underline;
    };
  }
  .error-page {
    padding:80px 0 180px;
  };
  .error-page-container {
    position:relative;
    z-index:1;
  };
  .error-page-main {
    position:relative;
    background:#f9f9f9;
    margin:0 auto;
    width:600px;
    -ms-box-sizing:border-box;
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    box-sizing:border-box;
    padding:50px 60px 70px 60px;
    &:before {
      content:'';
      display:block;
      height:7px;
      position:absolute;
      top:-7px;
      width:100%;
      left:0;
    };
    h3 {
      font-size:24px;
      font-weight:400;
      border-bottom:1px solid #d0d0d0;
      strong {
        font-size:54px;
        font-weight:400;
        margin-right:20px;
      };
    };
    h4 {
      font-size:20px;
      font-weight:400;
      color:#333;
    };
  };
  .error-page-actions {
    font-size:0;
    z-index:100;
    div {
      font-size:14px;
      display:inline-block;
      padding:30px 0 0 10px;
      width:50%;
      -ms-box-sizing:border-box;
      -webkit-box-sizing:border-box;
      -moz-box-sizing:border-box;
      box-sizing:border-box;
      color:#838383;
      vertical-align: top;
    };
    ol {
      list-style:decimal;
      padding-left:20px;
    };
    li {
      line-height:2.5em
    };
    &:before {
      content:'';
      display:block;
      position:absolute;
      z-index:-1;
      bottom:17px;
      left:50px;
      width:200px;
      height:10px;
      -moz-box-shadow:4px 5px 31px 11px #999;
      -webkit-box-shadow:4px 5px 31px 11px #999;
      box-shadow:4px 5px 31px 11px #999;
      -moz-transform:rotate(-4deg);
      -webkit-transform:rotate(-4deg);
      -ms-transform:rotate(-4deg);
      -o-transform:rotate(-4deg);
      transform:rotate(-4deg);
    };
    &:after {
      content:'';
      display:block;
      position:absolute;
      z-index:-1;
      bottom:17px;
      right:50px;
      width:200px;
      height:10px;
      -moz-box-shadow:4px 5px 31px 11px #999;
      -webkit-box-shadow:4px 5px 31px 11px #999;
      box-shadow:4px 5px 31px 11px #999;
      -moz-transform:rotate(4deg);
      -webkit-transform:rotate(4deg);
      -ms-transform:rotate(4deg);
      -o-transform:rotate(4deg);
      transform:rotate(4deg);
    };
  };
}
</style>
