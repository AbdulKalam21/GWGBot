package GWGBot;

import net.dv8tion.jda.api.EmbedBuilder;
import net.dv8tion.jda.api.entities.Member;
import net.dv8tion.jda.api.entities.TextChannel;

public class Welcome {
	
	public Welcome(TextChannel welcomeChannel, Member member) {
		EmbedBuilder welcomeMessage = new EmbedBuilder();
		welcomeMessage.setDescription("Welcome to " + welcomeChannel.getGuild().getName() + " `" + member.getUser().getName() + "`" + "\n\n");
		welcomeMessage.appendDescription("- Read the rules <#" + Constants.RULES_CHANNEL_ID + ">" + "\n");
		welcomeMessage.appendDescription("- Introduce yourself <#" + Constants.INTRODUCTION_CHANNEL_ID + ">" + "\n");
		welcomeMessage.appendDescription("- Get some roles <#" + Constants.SELF_ROLES_CHANNEL_ID + ">" + "\n");
		//welcomeMessage.setTimestamp(member.getTimeJoined());
		welcomeMessage.setThumbnail(member.getEffectiveAvatarUrl());
		//welcomeMessage.setImage(user.getEffectiveAvatarUrl());
		welcomeChannel.sendMessageEmbeds(welcomeMessage.build()).queue();
	}
	
}
