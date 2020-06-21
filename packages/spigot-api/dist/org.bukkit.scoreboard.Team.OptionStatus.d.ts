declare namespace org {
    namespace bukkit {
        namespace scoreboard {
            namespace Team {
                /**
                 * How an option may be applied to members of this team.
                 */
                // @ts-ignore
                class OptionStatus extends java.lang.Enum<org.bukkit.scoreboard.Team.OptionStatus> {
                    /**
                     * Apply this option to everyone.
                     */
                    // @ts-ignore
                    readonly ALWAYS: org.bukkit.scoreboard.Team.OptionStatus
                    /**
                     * Never apply this option.
                     */
                    // @ts-ignore
                    readonly NEVER: org.bukkit.scoreboard.Team.OptionStatus
                    /**
                     * Apply this option only for opposing teams.
                     */
                    // @ts-ignore
                    readonly FOR_OTHER_TEAMS: org.bukkit.scoreboard.Team.OptionStatus
                    /**
                     * Apply this option for only team members.
                     */
                    // @ts-ignore
                    readonly FOR_OWN_TEAM: org.bukkit.scoreboard.Team.OptionStatus
                    // @ts-ignore
                    values(): org.bukkit.scoreboard.Team.OptionStatus[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): org.bukkit.scoreboard.Team.OptionStatus
                }
            }
        }
    }
}
