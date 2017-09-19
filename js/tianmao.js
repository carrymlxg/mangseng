/*
* @Author: 梁飞
* @Date:   2017-09-18 16:30:53
* @Last Modified by:   梁飞
* @Last Modified time: 2017-09-19 18:54:27
*/
window.onload=function(){
	let banner = document.getElementsByClassName('banner')[0];
	let aside = document.getElementsByClassName('cedaohang');
	let u=aside[0].getElementsByTagName('ul');
	let lis =u[0].getElementsByTagName('li');
	let item = document.getElementsByClassName('item');
	let imglist= document.getElementsByClassName('img-list')[0];
	let imgli = imglist.getElementsByTagName('li')
	let bl = document.getElementsByClassName('btn-list')[0];
	let b = bl.getElementsByTagName('li');	
	let num = 0;
	//侧导航的选项卡
	for (let i = 0; i <lis.length; i++) {
		lis[i].onmouseover=function(){
			item[i].style.display = 'block';
		}
		lis[i].onmouseout=function(){
			item[i].style.display = 'none';
		}
	}
	//btn的移入效果
	for (let i = 0 ;i<b.length;i++){
		b[i].onmouseover =function(){	
			for(let j = 0;j<imgli.length;j++){
				imgli[j].style.display='none';
				b[j].style.background='rgba(255, 255, 255, 0.4)'
			}
			imgli[i].style.display='block';
			b[i].style.background='#ff0063';
			num=i;
		}
	}
	// let news = 0;
	// for (let i = 0 ;i<b.length;i++){
	// 	b[i].onmouseover =function(){	
	// 		imgli[news].style.display='none';
	// 		imgli[i].style.display='block';
	// 		news = i;
			
	// 	}
	// }
	//获取图片的ul li
	//获取按钮的ul li 
	//给图片以及按钮一个循环
	let  t =setInterval(move,3000);
	function move(){
		num++;
		if (num==imgli.length) {
			num=0
		}
		for(let i=0;i<imgli.length;i++){
			imgli[i].style.display='none';
			b[i].style.background='rgba(255, 255, 255, 0.4)'
		}
		imgli[num].style.display='block';
		b[num].style.background='#ff0063'
		
	}
	//当鼠标放入main时停止
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t =setInterval(move,3000);
	}
}