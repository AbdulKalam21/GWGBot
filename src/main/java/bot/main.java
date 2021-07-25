package bot;

import javax.security.auth.login.LoginException;
import net.dv8tion.jda.api.hooks.AnnotatedEventManager;
import net.dv8tion.jda.api.entities.Message;
import net.dv8tion.jda.api.hooks.SubscribeEvent;
import java.io.IOException;
import net.dv8tion.jda.api.events.message.MessageReceivedEvent;
import net.dv8tion.jda.api.JDABuilder;
import com.sun.net.httpserver.HttpContext;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;
import java.io.OutputStream;
import java.net.InetSocketAddress;

public class Main {

    public static void main(String[] args) throws IOException{
        try{
            JDABuilder.createDefault(Config.TOKEN).setEventManager(new AnnotatedEventManager()).addEventListeners(new Main()).build();
        }catch(LoginException e){

        }

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

    @SubscribeEvent
    public void PingPong(MessageReceivedEvent event){
        Message msg = event.getMessage();
        if(msg.getContentRaw().equals(Config.PREFIX + "Ping")) {
            msg.getChannel().sendMessage("Pong").queue();
        }
    }
}
