<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>일기장</title>
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<script src="http://code.jquery.com/jquery-1.12.3.min.js"></script>
<script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
<script src="/resources/js/jquery.modal.min.js"></script>
<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
<link href="/resources//css/jquery.modal.css" type="text/css" rel="stylesheet" />
</head>
<body>
	<div data-role="page" >
		<div data-role="header" data-theme='b'>
			<a href="https://blog.naver.com/thsdmlrbs0" data-icon="home">홈</a><h1>기록은 기억을 지배</h1>
		</div>
		<div data-role="content" data-theme='c'>
			<c:forEach items="${mapList}" var="vo">
				<p>${vo.text}<span style="float:right;">${vo.date}</span></p>
			</c:forEach>
			<!-- <a href="index.html" style="height:10px; width:10px" data-role="button" data-icon="delete" data-iconpos="notext" data-theme="b" data-inline="true"></a> -->
			<p id="pTag">
			</p>
			<input type="text" name="note" id="note" value=""  />
			<a href="javascript: insertNote();" data-role="button">등록</a>
        </div>
        <div data-role="footer" data-theme='b'>
        	<h1>ⓒ S Bros Corp.</h1>
        </div>
        </div>
	</div><!--page1-->
</body>
<script type="text/javascript">

//등록
function insertNote()
{
	$.ajax({
		url: '/insertNote',
		type : "POST",
		data: {
			id: 'SON',
			text: $("#note").val()
		},
		success:function(){
			modal({
		        type: 'info',
		        title: '알림',
		        autoclose: true,
		        text: '등록 되었습니다.'
		    });
						
			$('#pTag').append('<p>'+$("#note").val()+'<span style="float:right;">'+new Date().toISOString().slice(5,10)+'</span></p>');
			$("#note").val('');
		}
	});
}
</script>
</html>