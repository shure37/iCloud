<%@ page contentType="text/html; charset=gb2312" language="java" session="true" import="java.sql.*" errorPage="" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<META content="MSHTML 6.00.2600.0" name=GENERATOR/>
<title>EPCloud</title>
<!--Bootstrap-->
<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"/>
<!--custom css-->
<!--<link rel="stylesheet" type="text/css" href="css/login.css" />-->
<style>
body {
   margin: 0;
    padding: 0;
  background-color: #eee;
}
    #wrapper{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        border: 10px solid white;
    }
    #main{
        padding-top: 60px;
    }

    h1{
        font-family: "Trebuchet MS", Helvetica, sans-serif;
        font-size: 50px;
        text-align: center;
        color: rgb(64,131,215);
    }     
     h5{
        text-align: center;
        font-family: "Microsoft YaHei";
        font-weight: 100;
        color: rgb(52,73,94);
    }
    .btn{
        background-color: rgb(64,131,215);
    }

.form-signin {
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
    </style>

</head>

<body>

<%
try
{
   String pathValue=(String)request.getRequestURI();
   pathValue = pathValue.substring(0,pathValue.lastIndexOf("/"));
   pathValue = "http://"+request.getHeader("Host")+pathValue+"/../jhcxxt_cfg.properties";
   java.net.URL furl = new java.net.URL(pathValue);
   java.util.ResourceBundle rb = new java.util.PropertyResourceBundle(furl.openStream());

%>
<div id="wrapper">
<div id="main" class="container">
    <div id="header"></div>
	<div id="logo"></div>
	<div id="content">
	    <div id="content_left"></div>
	    <div id="login">
		<form name="form1" action="../mainframe.jsp" method="post" class="form-signin">

              <input type='hidden' name="Database1" value='<%=(new String(rb.getString("name1").getBytes("iso-8859-1"),"gb2312")).trim()%>' >
              
              <h1 class="form-signin-heading">EPCloud</h1>
                <h5>油气勘探开发云平台</h5>
                <br><br>
              	  
	         	<label class="sr-only">用户名</label>
	            <input type="text" id="inputEmail" class="form-control input" placeholder="用户名" name="name" required autofocus>
	            <label class="sr-only">密码</label>
	            <input type="password" id="inputPassword" class="form-control input" placeholder="密码" name="pwd" required>  
	                <br>
	            <button class="btn btn-lg btn-primary btn-block submit" type="submit" name="Submit" value="">登陆</button>
	            	
		</form>
		</div>
	</div>
	<div id="footer"></div>
</div></div>
<%
}
catch(Exception e2)
{
      %>
      <script language=javascript>
      <!--
          alert("<%=e2.getMessage()%>");
          location.replace("login.jsp" );
      //-->
      </script>
      <%
}
%>
</body>
</html>
