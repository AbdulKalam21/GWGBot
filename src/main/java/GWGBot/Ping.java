package GWGBot;

import net.dv8tion.jda.api.events.interaction.SlashCommandEvent;

public class Ping {

	public Ping(SlashCommandEvent event){
		
		long time = System.currentTimeMillis();
		
		event.reply("pong").flatMap(v -> 
					event.getHook().editOriginalFormat("Pong: %d ms", System.currentTimeMillis() - time)
				).queue();		
		
	}

}