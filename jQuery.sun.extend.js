"use strict"

$.extend({
	//检测用户设备类型
	detectDeviceType: function(){
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
	    ? 'Mobile'
	    : 'Desktop';
	},
	//获取url中的参数
	getURLParameters: function(){

		return (window.location.href.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
		    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
		    {})
		
	},
	//文件下载
	download: function(src, name) {

		// 创建隐藏的可下载链接
		var eleLink = document.createElement('a');
		eleLink.download = name;
		eleLink.style.display = 'none';
		// // 字符内容转变成blob地址
		eleLink.href = src;
		// // 触发点击
		document.body.appendChild(eleLink);
		eleLink.click();	
		// // 然后移除
		document.body.removeChild(eleLink);
	
	}
})

$.fn.extend({
	//表单转object
	serializeObject: function(){

		return $(this).serializeArray().reduce(function(obj, curr){

			return Object.assign(obj, {
				[curr.name]: obj[curr.name]
					? ( Array.isArray(obj[curr.name]) ? [...obj[curr.name], curr.value ] : [obj[curr.name], curr.value] )
					: curr.value
			})

		}, {})

	}
})