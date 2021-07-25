package bot;

import com.sun.net.httpserver.HttpContext;
import java.net.InetSocketAddress;
import com.sun.net.httpserver.HttpServer;
import java.io.OutputStream;
import java.io.IOException;
import com.sun.net.httpserver.HttpExchange;

public class webpage{

    // There are no comments in this class becuase the code in this class is copied from internet, feel free to add comments if you know what each piece of code does
    public webpage() throws IOException{
        HttpServer server = HttpServer.create(new InetSocketAddress(8500), 0);
        HttpContext context = server.createContext("/");
        context.setHandler(webpage::handleRequest);
        server.start();
    }

    public static void handleRequest(HttpExchange exchange) throws IOException {
        String response = "Games With Gabe Bot";
        exchange.sendResponseHeaders(200, response.getBytes().length);//response code and length
        OutputStream os = exchange.getResponseBody();
        os.write(response.getBytes());
        os.close();
    }

}
