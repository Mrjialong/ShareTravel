// JavaScript Document
var gfun,gfpwd,gfchpwd,gfmail,gfphone;
	function timef(){
		var d=new Date()
		var weekday=new Array(7)
		weekday[0]="星期日";
		weekday[1]="星期一";
		weekday[2]="星期二";
		weekday[3]="星期三";
		weekday[4]="星期四";
		weekday[5]="星期五";
		weekday[6]="星期六";
		var x= weekday[d.getDay()];	
		var y=d.toLocaleString();
		document.getElementById("time").innerHTML=y+"&nbsp;"+x;	
		setTimeout("timef()",1000);
	}
	
	function userNamef(){
		var un=document.getElementById("userName").value;
		var x=un.length;
		
		if(2<=x &&x<=12){
			var str=/[a-zA-Z0-9\u4E00-\u9FA5]*/;//中文，英文，数字
			if (un.search(str)==0) {
				 document.getElementById("GFuserName").innerHTML="<font style='color:green; font-size:25px;'>✔</font>";
				 gfun=1;
			}
		}else{
			document.getElementById("GFuserName").innerHTML="<font style='color:red;'>请输入正确用户名</font>";
			gfun=0;
		}

	}
	
	function pwdf(){
		var pwd=document.getElementById("pwd").value;
		var x=pwd.length;
		if(x<=12 && x>=4){
			var str=/[^\u4E00-\u9FA5]*/;//非中文任意字符
			if (pwd.search(str)==0) {
				 document.getElementById("GFpwd").innerHTML="<font style='color:green; font-size:25px;'>✔</font>";
				 gfpwd=1;
			}
		}else{
			document.getElementById("GFpwd").innerHTML="<font style='color:red;'>请输入正确密码</font>";
			gfpwd=0;
		}
	}
	
	
	function cheakpwdf(pwd){
		if(document.getElementById("pwd").value==document.getElementById("cheakpwd").value){
			document.getElementById("GFcheakpwd").innerHTML="<font style='color:green; font-size:25px;'>✔</font>";
			gfchpwd=1;
		}else{
			document.getElementById("GFcheakpwd").innerHTML="<font style='color:red;'>密码验证失败</font>";
			gfchpwd=0;
		}
	}
	
	function telf(){
		var t=document.getElementById("tel").value;
		var str=/\d{11}/;
		if (t.search(str)==0){
			document.getElementById("GFtel").innerHTML="<font style='color:green; font-size:25px;'>✔</font>";
			gfphone=1;
		}else{
			document.getElementById("GFtel").innerHTML="<font style='color:red;'>请输入正确的手机号码</font>";
			gfphone=0;
		}
	}
	
	function mailf(){
		var m=document.getElementById("mail").value;
		var str=/[a-zA-Z_0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;//中文，英文，数字,下划线xxxxx@xx.xxx
		if (m.search(str)==0) {
			document.getElementById("GFmail").innerHTML="<font style='color:green; font-size:25px;'>✔</font>";
			gfmail=1;		
		}else {
			document.getElementById("GFmail").innerHTML="<font style='color:red;'>请输入正确邮箱地址确</font>";
			gfmail=0;
		} 	
	}
	
	var sex;
	function openwindowf(){
		var GFsex = document.getElementsByName("sex");
		if(GFsex[0].checked)
		 	 sex = GFsex[0].value;
		else
		 	sex = GFsex[1].value;
	
		var n=window.open('success.html', '注册成功', "height=400, width=500, top=100, left=300, toolbar=no, menubar=no, scrollbars=no, location=no, status=no");
		n.document.write("亲爱的驴友足迹用户【"+document.getElementById("userName").value+"】您的注册信息如下：<br/><br/>");
		n.document.write("密码: "+document.getElementById("pwd").value+"<br/>");
		n.document.write("性别: "+sex+"<br/>");
		n.document.write("邮箱: "+document.getElementById("mail").value+"<br/>");
		n.document.write("手机号码: "+document.getElementById("tel").value+"<br/>");
		n.document.write("家庭住址: "+document.getElementById("sheng").value+"省"+document.getElementById("shi").value+"市"+document.getElementById("qu").value+"区");	
	}
	
	
	
	function zhucef(){
		
		if(	gfun==1&&gfpwd==1&&gfchpwd==1&&gfmail==1&&gfphone==1)
		{
			openwindowf();	
		}
	}
	
	//定义了城市的二维数组，通过selectedIndex获得省份的下标值来得到相应的城市数组
     var city=[
		 ["青岛","烟台","济南"],
		 ["苏州","南京","南通"],
		 ["杭州","嘉兴","绍兴"],
     ];
	 var 山东=[
		 ["市南","市北","崂山"],
		 ["芝罘","莱山","福山"],
		 ["历下","长清","槐荫"],
     ];
	  
	  var 江苏=[
		 ["苏州1","苏州2","苏州3"],
		 ["南京1","南京2","南京3"],
		 ["南通1","南通2","南通3"],
     ];
	  
	  var 浙江=[
		 ["杭州1","杭州2","杭州3"],
		 ["嘉兴1","嘉兴2","嘉兴3"],
		 ["绍兴1","绍兴2","绍兴3"],
     ];

     function getCity(){
         var sltProvince=document.getElementById("sheng");
         var sltCity=document.getElementById("shi"); 
		       
         //得到对应省份的城市数组
         var provinceCity=city[sltProvince.selectedIndex - 1];
		 
         //清空城市下拉框，仅留提示选项
         sltCity.length=1;
		 
         //将城市数组中的值填充到城市下拉框中
         for(var i=0;i<provinceCity.length;i++){
			// new Option("文本","值",true,true)后面两个true分别表示默认被选中和有效!
             sltCity[i+1]=new Option(provinceCity[i],provinceCity[i]);
         }
		 
		 getqu (document.getElementById("shi").value);
     }
	 
	 function getqu(shi){
		 var s=document.getElementById("shi");
		 var q=document.getElementById("qu");
		 
		 if(document.getElementById("sheng").value=="山东")
			 var Cityqu=山东[s.selectedIndex - 1];
		else if(document.getElementById("sheng").value=="江苏")
			 var Cityqu=江苏[s.selectedIndex - 1]; 
		else if(document.getElementById("sheng").value=="浙江")
			 var Cityqu=浙江[s.selectedIndex - 1];
			 
		 q.length=1;
		 for(var i=0;i<Cityqu.length;i++){
			 q[i+1]=new Option(Cityqu[i],Cityqu[i]);
         } 
	 }