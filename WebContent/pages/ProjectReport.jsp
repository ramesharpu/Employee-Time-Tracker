<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%--     <%@page import="java.sql.*"%> --%>
<%@page import="java.*"%>
<%@ include file="main.jsp"%>
<%@page import = "java.io.IOException"%>
<%@page import = "java.sql.Connection"%>
<%@page import = "java.sql.DriverManager"%>
<%@page import = "java.sql.ResultSet"%>
<%@page import = "java.sql.Statement"%>
<%
Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
Connection con=DriverManager.getConnection("jdbc:sqlserver://RAMESH-PC\\SQLSERVER;databaseName=db_emp_timetracker","dbuser","password");
Statement st=con.createStatement();
ResultSet rs = st.executeQuery("select * from tb_project");
  List <String>li = new ArrayList<String>();
  while(rs.next())
  {
      li.add(rs.getString("project_name"));
  }
  con.close();
  

  String[] userList = new String[li.size()];
  li.toArray(userList);
%>
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css">
  <script src="//code.jquery.com/jquery-1.9.1.js"></script>
  <script src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
  <link rel="stylesheet" href="/resources/demos/style.css">
  
<link href="/employeeTimeTrackerSystem/media/css/style.css"
	rel="stylesheet" type="text/css" />
<script type="text/javascript"
	src="/employeeTimeTrackerSystem/media/css/jquery.js"></script>
	<script type="text/javascript"
	src="/employeeTimeTrackerSystem/media/css/jquery-ui.js"></script>
<script>
$(function() {
    var availableTags = [<% for (int i = 0; i < li.size(); i++) { %>"<%= li.get(i) %>"<%= i + 1 < li.size() ? ",":"" %><% } %>];
    $( "#project_name" ).autocomplete({
      source: availableTags
    });
  });
</script>
</head>
<body>
	<p>
		<br />
	</p>
	<div class="ui-widget">
	<div class="formDiv">
		<form method="post"
			action="/employeeTimeTrackerSystem/pages/ProjectReportDisplay.jsp">
			<table class="editUsertableProperty">
				<tbody>
				<tr></tr>
					<tr>
						<td align="center">Project Name</td>
						<td colspan="2"><input class="textBoxStyle" id="project_name"
							name="project_name" type="text" placeholder="Enter the project name"
							tabindex="1" /></td>
					</tr>
					<tr>
						<td style="width: 119px" class="style3">&nbsp;</td>
						<td style="width: 141px" class="style1"><input class="button"
							name="Submit" type="submit" value="Get Report"
							tabindex="10" /></td>
				</tbody>
			</table>
		</form>
	</div>
	</div>
</body>
</html>



<%-- <%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ include file="main.jsp"%>
<!DOCTYPE html>
<html>
<head>
<link href="/employeeTimeTrackerSystem/media/css/style.css"
	rel="stylesheet" type="text/css" />
<script type="text/javascript"
	src="/employeeTimeTrackerSystem/media/css/jquery.js"></script>
	<script type="text/javascript"
	src="/employeeTimeTrackerSystem/media/css/jquery-ui.js"></script>
<script>
jQuery(function(){
$("#edit_user_id").autocomplete("/employeeTimeTrackerSystem/pages/UserList.jsp");
});
</script>
</head>
<body>
	<p>
		<br />
	</p>
	<div class="formDiv">
		<form method="post"
			action="/employeeTimeTrackerSystem/pages/ProjectReportDisplay.jsp">
			<table class="editUsertableProperty">
				<tbody>
				<tr></tr>
					<tr>
						<td align="center">User Id</td>
						<td colspan="2"><input class="textBoxStyle" id="project_name"
							name="project_name" type="text" placeholder="Enter the project Name"
							tabindex="1" /></td>
					</tr>
					<tr>
						<td style="width: 119px" class="style3">&nbsp;</td>
						<td style="width: 141px" class="style1"><input class="button"
							name="Submit" type="submit" value="Get Report"
							tabindex="10" /></td>
				</tbody>
			</table>
		</form>
	</div>
</body>
</html> --%>