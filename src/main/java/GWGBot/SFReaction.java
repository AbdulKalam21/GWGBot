package GWGBot;

import net.dv8tion.jda.api.entities.Message;

public class SFReaction {
	
	public SFReaction(Message msg) {

		msg.addReaction("U+1F44D").queue();
		msg.addReaction("U+1F44E").queue();
		
	}

}
