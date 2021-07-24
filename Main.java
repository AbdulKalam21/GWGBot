import java.io.IOException;
import com.sun.net.httpserver.HttpContext;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import javax.security.auth.login.LoginException;

public class Main {
  public static void main(String[] args) throws IOException {
	HttpServer server = HttpServer.create(new InetSocketAddress(8500), 0);
	HttpContext context = server.createContext("/");
	context.setHandler(Main::handleRequest);
	server.start();
  }

  private static void handleRequest(HttpExchange exchange) throws IOException {
	String response = "Games With Gabe Bot";
	exchange.sendResponseHeaders(200, response.getBytes().length);//response code and length
	OutputStream os = exchange.getResponseBody();
	os.write(response.getBytes());
	os.close();
  }

}