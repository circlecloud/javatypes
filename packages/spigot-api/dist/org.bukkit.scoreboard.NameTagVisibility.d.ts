declare namespace org {
    namespace bukkit {
        namespace scoreboard {
            /**
             * @deprecated replaced by {#link Team.OptionStatus}
             */
            // @ts-ignore
            class NameTagVisibility extends java.lang.Enum<org.bukkit.scoreboard.NameTagVisibility> {
                /**
                 * Always show the player's nametag.
                 */
                // @ts-ignore
                public static readonly ALWAYS: org.bukkit.scoreboard.NameTagVisibility
                /**
                 * Never show the player's nametag.
                 */
                // @ts-ignore
                public static readonly NEVER: org.bukkit.scoreboard.NameTagVisibility
                /**
                 * Show the player's nametag only to his own team members.
                 */
                // @ts-ignore
                public static readonly HIDE_FOR_OTHER_TEAMS: org.bukkit.scoreboard.NameTagVisibility
                /**
                 * Show the player's nametag only to members of other teams.
                 */
                // @ts-ignore
                public static readonly HIDE_FOR_OWN_TEAM: org.bukkit.scoreboard.NameTagVisibility
                // @ts-ignore
                public static values(): org.bukkit.scoreboard.NameTagVisibility[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): org.bukkit.scoreboard.NameTagVisibility
            }
        }
    }
}
