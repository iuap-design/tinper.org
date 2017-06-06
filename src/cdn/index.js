var CDN = {
    init: function() {
        this.initHtml();
        // this.initModal();
        // this.selectChange();

    },
    /**
     * [initHtml description]
     * @return {[type]} [description]
     */
    initHtml: function() {
        var _this = this;
        var timestamp = Date.parse(new Date());
        timestamp = timestamp / 1000
        var url = 'http://design.yonyoucloud.com/static/cdnconfig/index.json?v=' + timestamp;
        $.ajax({
            type: 'get',
            dataType: 'json',
            url: url,
            success: function(data) {
                var data = data.prod;
                var htmlStr = '';
                $.each(data, function(index, val) {
                    htmlStr += ' <li class="content-item">' +
                        '<img src="' + val.image + '" alt="" class="con-item-img">' +
                        '<div class="con-item-detail">' +
                        '<h2 class="item-title">' + val.name + '</h2>' +
                        '<p class="item-desc"> ' + val.desc + '</p>' +
                        '<span class="item-address-btn" target="_blank">浏览资源 »</span>' +
                        '</div></li>'
                });
                $('#content').append(htmlStr);
                //图片加载失败
                $("img.con-item-img").one("error", function(e) {
                    $(this).attr("src", "http://iuap-design-cdn.oss-cn-beijing.aliyuncs.com/static/cdnconfig/dafault.png");
                });
                //初始化modal
                _this.initModal();
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        });
    },
    /**
     * [initModal description]
     * @return {[type]} [description]
     */
    initModal: function() {
        var _this = this;
        u.compMgr.apply({
            el: 'body'
        });
        $('.item-address-btn').on('click', function() {
            window.md = u.dialog({
                id: 'testDialg',
                content: "#dialog_content",
                hasCloseMenu: true
            });
            var msgTitle = $(this).siblings('.item-title').html().trim();
            $('#testDialg').find('.u-msg-title').html(msgTitle);
            //根据不同的msgTitle初始化select
            _this.initSelect(msgTitle);
        });
        $('.u-msg-cancel').on('click', function() {
            md.close();
        });
    },
    /**
     * [initSelect description]
     * @return {[type]} [description]
     */
    initSelect: function(title) {
        var _this = this;
        /*时间戳*/
        var timestamp = Date.parse(new Date());
        timestamp = timestamp / 1000;
        //清空版本号以及资源下载链接
        $('select#version').html('');
        $('#resources .download-con').html('');

        //渲染select以及download
        var selectStr = '';
        var downloadStr = '';
        var msgTitle = title;
        var url = 'http://design.yonyoucloud.com/static/cdnconfig/' + msgTitle + '/index.json?v=' + timestamp;
        $.ajax({
            type: 'get',
            dataType: 'json',
            url: url,
            success: function(data) {
                console.log(data);
                //特殊的
                if (msgTitle == 'moy') {
                    msgTitle = 'uui';
                }
                //渲染select
                $.each(data.version, function(index, val) {
                    selectStr += '<option value="' + val + ' ">' + val + '</option>'

                });
                //渲染资源download
                var selectData = data.version[0];
                //版本号在download中,重写
                if (selectData in data.download) {
                    downloadStr = _this.getDownloadStr(data.download[selectData], msgTitle, selectData);

                } else {
                    downloadStr = _this.getDownloadStr(data.url, msgTitle, selectData);
                }

                $('select#version').append(selectStr);
                if (downloadStr == '') {
                    downloadStr = "没有资源";
                };
                $('#resources .download-con').append(downloadStr);
                _this.selectChange(data.url, data.download, msgTitle);
                _this.copyLink();
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        });
    },
    /**
     * [getDownloadStr description]获取资源下载
     * @return {[type]} [description]
     */
    getDownloadStr: function(data, title, curVersion) {
        var data = data;
        var msgTitle = title;
        var selectData = curVersion;
        var downloadStr = '';
        $.each(data, function(index, val) {
            downloadStr += '<div class="input-group" style="padding: 2px 0">' +
                '<input type="text" readonly="readonly" class="form-control"style="background: white"' +
                ' value="http://design.yonyoucloud.com/static/' + msgTitle + '/' + selectData + val + '">' +
                '<span class="input-group-addon" style="cursor: pointer" data-clipboard-target="url-1">' + 'Copy' +
                '</span></div>'
        });
        return downloadStr;
    },
    /**
     * [copyLink description]复制链接
     * @return {[type]} [description]
     */
    copyLink: function() {
        $('#resources .input-group-addon').on('click', function() {
            var Url = $(this).siblings('input').get(0);
            Url.select(); // 选择对象
            document.execCommand("Copy"); // 执行浏览器复制命令
            console.log('已经复制粘贴完毕');

        })
    },
    /**
     * [selectChange description]select的值改变时候
     * @return {[type]} [description]
     */
    selectChange: function(url, download, title) {
        var urlData = url;
        var downloadData = download;
        var msgTitle = title;
        var _this = this;

        $("#version").off("change").on("change",function() {
            $('#resources .download-con').html('');
            var downloadStr = '';
            var curVal = $(this).val().trim();
            // console.log(data);

            //版本号在download中
            if (curVal in downloadData) {
                downloadStr = _this.getDownloadStr(downloadData[curVal], msgTitle, curVal)
            } else {
                downloadStr = _this.getDownloadStr(urlData, msgTitle, curVal);
            }
            if (downloadStr == '') {
                downloadStr = "没有资源";
            }
            $('#resources .download-con').append(downloadStr);
            _this.copyLink();
        });
    }

}
CDN.init();
