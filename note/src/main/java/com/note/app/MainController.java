package com.note.app;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


/**
 * Handles requests for the application home page.
 */
@Controller
public class MainController {
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model, HttpServletRequest request) {
		
		Connection clsDB = null;
		PreparedStatement clsPS = null;
		ResultSet clsRS = null;
		
		ArrayList<HashMap<String, String>> mapList = new ArrayList<HashMap<String,String>>();
		
		try
		{
			Class.forName( "com.mysql.cj.jdbc.Driver" );
			clsDB = (Connection) DriverManager.getConnection( "jdbc:mysql://localhost:3306/world?characterEncoding=UTF-8&serverTimezone=UTC", "son", "tlqwkrk0" );
			clsPS = (PreparedStatement) clsDB.prepareStatement( "SELECT text, dt_insert FROM note_board WHERE user_id = ?");
			clsPS.setString(1, getIp(request));
			clsRS = clsPS.executeQuery();

			while( clsRS.next() )
			{
				HashMap<String, String> map = new HashMap<String, String>();
				map.put("text", clsRS.getString(1));
				map.put("date", clsRS.getString(2));
				
				mapList.add(map);
			}
	  	}
	  	catch( Exception e )
	  	{
	  		
	  	}
		
		//DB 커넥션 닫기
		if( clsRS != null )
		{
			try{ clsRS.close(); }catch( Exception e ){ }
		}
	  
		if( clsPS != null )
		{
			try{ clsPS.close(); }catch( Exception e ){ }
		}
	  
		if( clsDB != null )
		{
			try{ clsDB.close(); }catch( Exception e ){ }
		}

		model.addAttribute("mapList", mapList);
		
		return "main/main";
	}
	
	@RequestMapping(value = "/insertNote", method = RequestMethod.POST)
	public String insertNote(String id, String text, HttpServletRequest request) {
		
		Connection clsDB = null;
		PreparedStatement clsPS = null;
		
		try
		{
			Class.forName( "com.mysql.cj.jdbc.Driver" );
			clsDB = (Connection) DriverManager.getConnection( "jdbc:mysql://localhost:3306/world?characterEncoding=UTF-8&serverTimezone=UTC", "son", "tlqwkrk0" );
			clsPS = (PreparedStatement) clsDB.prepareStatement( "INSERT INTO note_board (user_id, text, dt_insert) VALUE(?, ?, DATE_FORMAT(NOW(), '%m-%d'))");
			clsPS.setString(1, getIp(request));
			clsPS.setString(2, text);
			clsPS.executeUpdate();
		}
		catch( Exception e )
		{
			
		}
		
		if( clsPS != null )
		{
			try{ clsPS.close(); }catch( Exception e ){ }
		}
		
		if( clsDB != null )
		{
			try{ clsDB.close(); }catch( Exception e ){ }
		}
		
		return "main/main";
	}
	
	//ID 대신 IP 가져오기
	private String getIp(HttpServletRequest request)
	{
		String ip = request.getHeader("X-Forwarded-For");

		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip))
		{ 
		    ip = request.getHeader("Proxy-Client-IP"); 
		} 
		
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip))
		{ 
		    ip = request.getHeader("WL-Proxy-Client-IP"); 
		} 
		
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip))
		{ 
		    ip = request.getHeader("HTTP_CLIENT_IP"); 
		} 
		
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip))
		{ 
		    ip = request.getHeader("HTTP_X_FORWARDED_FOR"); 
		} 
		
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip))
		{ 
		    ip = request.getRemoteAddr(); 
		}
		
		return ip;
	}
	
}
