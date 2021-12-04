package GWGBot;

import net.dv8tion.jda.api.entities.Message;

public class Ping {

	public Ping(Message msg){
		
		long time = System.currentTimeMillis();

		msg.getChannel().sendMessage("Pong!").queue(response -> {
				response.editMessageFormat("Pong: %d ms", System.currentTimeMillis() - time).queue();
		});
		
	}

}