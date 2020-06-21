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
                    readonly NAME_TAG_VISIBILITY: org.bukkit.scoreboard.Team.Option
                    /**
                     * How to display the death messages for players on this team.
                     */
                    // @ts-ignore
                    readonly DEATH_MESSAGE_VISIBILITY: org.bukkit.scoreboard.Team.Option
                    /**
                     * How players of this team collide with others.
                     */
                    // @ts-ignore
                    readonly COLLISION_RULE: org.bukkit.scoreboard.Team.Option
                    // @ts-ignore
                    values(): org.bukkit.scoreboard.Team.Option[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): org.bukkit.scoreboard.Team.Option
                }
            }
        }
    }
}
