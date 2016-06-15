package step_definitions;
//
//import java.sql.Connection;
//import java.sql.DriverManager;
//import java.sql.ResultSet;
//import java.sql.SQLException;
//import java.sql.Statement;
import java.sql.*;
public class dbConnector {
	
	public static void  main(String[] args) throws  ClassNotFoundException, SQLException {
        //Connection URL Syntax: "jdbc:mysql://ipaddress:portnumber/db_name"
        //String dbUrl = "jdbc:db2://10.2.71.130:50000/esi_db";
        String dbUrl = "jdbc:mysql://10.2.71.187:3306/push2play_int3";
        //Database Username
        String username = "resultrelay";

        //Database Password
        String password = "resultrelay";

        //Query to Execute
        String query = "select code from push2play_int3.verification_code order by created  desc limit 1;;";

        //Load mysql jdbc driver
       // Class.forName("com.ibm.db2.jcc.DB2Driver");
          Class.forName("com.mysql.jdbc.Driver");
        //Create Connection to DB
        Connection con = DriverManager.getConnection(dbUrl,username,password);

        //Create Statement Object
        Statement stmt = con.createStatement();

        // Execute the SQL Query. Store results in ResultSet
        ResultSet rs= stmt.executeQuery(query);



        // While Loop to iterate through all data and print results
      while (rs.next()){
            String code  = rs.getString(1);
            //String myAge = rs.getString(2);
           System. out.println(code);

        }




        // closing DB Connection
        con.close();
    }

}
