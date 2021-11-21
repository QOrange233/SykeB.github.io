/**
 * Changed by specialwu on 2020/10/02
 */

$(document).ready(function(){
    $(".commentBlock header span").click(function(){
		/* 调取验证码获得数字赋值*/
		drawPic();
        $(".commentBlock .post").show();
    });
})
function trueFales() {
/*加载时图片无法显示得改成.png*/
	/* 获取到验证码的值 */
	var giveValue=document.getElementById("givevalue").value;
	/* 输入的值与验证码的值进行对比 */
	var inputValue=document.getElementById("checking").value;
	/* 内容 */
	var writeContent=document.getElementById("writeContent").value;
	/* 此段大概提供个思路，也可以把一些敏感词存到数据库，如果库中有则不能存储 */
	var guolv=new Array("SB","垃圾","神经","政治");
	var trueFale=0;
	for(var i=0; i<guolv.length;i++){
		/* 去除空格 */
		moveblack = writeContent.replace(/\s*/g,"");
		/* 去除逗号 */
		str = moveblack.replace(/，/g, "");
		if(str==guolv[i]){
			trueFale=1;
		}
		/* 此段希望每两个词为一组进行对比,以此过滤关键词*/
		/* 			for(var j=0;j<writeContent.length-2;j++){
                        var theEnd=writeContent.substring(j,j+2);
                        alert(theEnd)
                        if(str==guolv[i]){
                            trueFale=1;
                        }
                    } */
	}
	if(trueFale==1){
		alert("请勿涉及敏感信息");
		return false;
	}else if(writeContent==''){
		alert("内容不能为空");
		return false;
	}else{
		if(giveValue==inputValue){
			alert("提交中")
			var sNumber=Math.floor(Math.random()*6);  //0-5的随机数
			/* 去除前后空格再显示 */
			/* 去除空格 */
			moveblack = writeContent.replace(/\s*/g,"");
			/* 去除逗号 */
			str = moveblack.replace(/，/g, "");
			document.getElementById("writeContent1").value=str;

			var myDate=new Date();
			<!--提交后产生一个时间-->
			var currentDate=myDate.getFullYear()+"-"+parseInt(myDate.getMonth()+1)+"-"+myDate.getDate()+" "+myDate.getHours()+":"+myDate.getMinutes();
			document.getElementById("getTime").value=currentDate;
			document.getElementById("getScreenName").value=sNumber;
			if (sNumber==0){
				<!-- 图片自己定义，同样存在数据库的只是地址，相当于一个引用，实际图片还是存储在项目中-->document.getElementById("getPicture").value="/comment/images/tou01.png";
			}else if (sNumber==1){
				document.getElementById("getPicture").value="/comment/images/tou02.png";
			}else if (sNumber==2){
				document.getElementById("getPicture").value="/comment/images/tou03.png";
			}else if (sNumber==3){
				document.getElementById("getPicture").value="/comment/images/tou04.png";
			}else if (sNumber==4){
				document.getElementById("getPicture").value="/comment/images/tou05.png";
			}else {
				document.getElementById("getPicture").value="/comment/images/tou06.png";
			}
			return true;
		}else{
			alert("验证码错误");
			return false;
		}
	}
}
