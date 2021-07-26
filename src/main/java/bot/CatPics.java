package bot;

import net.dv8tion.jda.api.events.message.MessageReceivedEvent;
import net.dv8tion.jda.api.hooks.SubscribeEvent;

import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;

public class CatPics {
    @SubscribeEvent
    public void cat(MessageReceivedEvent event)
    {
       /* https://api.thecatapi.com/v1/images/search */
        HttpURLConnection conn;
        try {
            URL url = new URL("https://api.thecatapi.com/v1/images/search");
            conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.connect();
            int responsecode = conn.getResponseCode();


            if (responsecode==200){
                String inline="";
                Scanner scanner = new Scanner(url.openStream());

                //Write all the JSON data into a string using a scanner
                while (scanner.hasNext()) {
                    inline += scanner.nextLine();
                }

                //Close the scanner
                scanner.close();
            /*
                //Using the JSON simple library parse the string into a json object
                JSONParser parse = new JSONParser();
                JSONObject data_obj = (JSONObject) parse.parse(inline);

                //Get the required object from the above created object
                JSONObject obj = (JSONObject) data_obj.get("Global");
            */
            }
        }
        catch (Exception e){

        }


    }
}
