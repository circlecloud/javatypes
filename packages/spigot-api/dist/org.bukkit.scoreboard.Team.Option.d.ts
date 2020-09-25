declare namespace org {
    namespace bukkit {
        namespace scoreboard {
            namespace Team {
                /**
                 * Represents an option which may be applied to this team.
                 */
                // @ts-ignore
                class Option extends java.lang.Enum<org.bukkit.scoreboard.Team.Option> {
                    /**
                     * How to display the name tags of players on this team.
                     */
                    // @ts-ignore
                    public static readonly NAME_TAG_VISIBILITY: org.bukkit.scoreboard.Team.Option
                    /**
                     * How to display the death messages for players on this team.
                     */
                    // @ts-ignore
                    public static readonly DEATH_MESSAGE_VISIBILITY: org.bukkit.scoreboard.Team.Option
                    /**
                     * How players of this team collide with others.
                     */
                    // @ts-ignore
                    public static readonly COLLISION_RULE: org.bukkit.scoreboard.Team.Option
                    // @ts-ignore
                    public static values(): org.bukkit.scoreboard.Team.Option[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): org.bukkit.scoreboard.Team.Option
                }
            }
        }
    }
}
