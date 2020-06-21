declare namespace org {
    namespace bukkit {
        namespace scoreboard {
            /**
             * A scoreboard
             */
            // @ts-ignore
            interface Scoreboard {
                /**
                 * Registers an Objective on this Scoreboard
                 * @param name Name of the Objective
                 * @param criteria Criteria for the Objective
                 * @return The registered Objective
                 * @throws IllegalArgumentException if name is null
                 * @throws IllegalArgumentException if name is longer than 16
                 *      characters.
                 * @throws IllegalArgumentException if criteria is null
                 * @throws IllegalArgumentException if an objective by that name already
                 *      exists
                 * @deprecated a displayName should be explicitly specified
                 */
                // @ts-ignore
                registerNewObjective(name: java.lang.String | string, criteria: java.lang.String | string): org.bukkit.scoreboard.Objective
                /**
                 * Registers an Objective on this Scoreboard
                 * @param name Name of the Objective
                 * @param criteria Criteria for the Objective
                 * @param displayName Name displayed to players for the Objective.
                 * @return The registered Objective
                 * @throws IllegalArgumentException if name is null
                 * @throws IllegalArgumentException if name is longer than 16
                 *      characters.
                 * @throws IllegalArgumentException if criteria is null
                 * @throws IllegalArgumentException if displayName is null
                 * @throws IllegalArgumentException if displayName is longer than 128
                 *      characters.
                 * @throws IllegalArgumentException if an objective by that name already
                 *      exists
                 */
                // @ts-ignore
                registerNewObjective(name: java.lang.String | string, criteria: java.lang.String | string, displayName: java.lang.String | string): org.bukkit.scoreboard.Objective
                /**
                 * Registers an Objective on this Scoreboard
                 * @param name Name of the Objective
                 * @param criteria Criteria for the Objective
                 * @param displayName Name displayed to players for the Objective.
                 * @param renderType Manner of rendering the Objective
                 * @return The registered Objective
                 * @throws IllegalArgumentException if name is null
                 * @throws IllegalArgumentException if name is longer than 16
                 *      characters.
                 * @throws IllegalArgumentException if criteria is null
                 * @throws IllegalArgumentException if displayName is null
                 * @throws IllegalArgumentException if displayName is longer than 128
                 *      characters.
                 * @throws IllegalArgumentException if renderType is null
                 * @throws IllegalArgumentException if an objective by that name already
                 *      exists
                 */
                // @ts-ignore
                registerNewObjective(name: java.lang.String | string, criteria: java.lang.String | string, displayName: java.lang.String | string, renderType: org.bukkit.scoreboard.RenderType): org.bukkit.scoreboard.Objective
                /**
                 * Gets an Objective on this Scoreboard by name
                 * @param name Name of the Objective
                 * @return the Objective or null if it does not exist
                 * @throws IllegalArgumentException if name is null
                 */
                // @ts-ignore
                getObjective(name: java.lang.String | string): org.bukkit.scoreboard.Objective
                /**
                 * Gets all Objectives of a Criteria on the Scoreboard
                 * @param criteria Criteria to search by
                 * @return an immutable set of Objectives using the specified Criteria
                 * @throws IllegalArgumentException if criteria is null
                 */
                // @ts-ignore
                getObjectivesByCriteria(criteria: java.lang.String | string): Array<org.bukkit.scoreboard.Objective>
                /**
                 * Gets all Objectives on this Scoreboard
                 * @return An immutable set of all Objectives on this Scoreboard
                 */
                // @ts-ignore
                getObjectives(): Array<org.bukkit.scoreboard.Objective>
                /**
                 * Gets the Objective currently displayed in a DisplaySlot on this
                 * Scoreboard
                 * @param slot The DisplaySlot
                 * @return the Objective currently displayed or null if nothing is
                 *      displayed in that DisplaySlot
                 * @throws IllegalArgumentException if slot is null
                 */
                // @ts-ignore
                getObjective(slot: org.bukkit.scoreboard.DisplaySlot): org.bukkit.scoreboard.Objective
                /**
                 * Gets all scores for a player on this Scoreboard
                 * @param player the player whose scores are being retrieved
                 * @return immutable set of all scores tracked for the player
                 * @throws IllegalArgumentException if player is null
                 * @deprecated Scoreboards can contain entries that aren't players
                 * @see #getScores(String)
                 */
                // @ts-ignore
                getScores(player: org.bukkit.OfflinePlayer): Array<org.bukkit.scoreboard.Score>
                /**
                 * Gets all scores for an entry on this Scoreboard
                 * @param entry the entry whose scores are being retrieved
                 * @return immutable set of all scores tracked for the entry
                 * @throws IllegalArgumentException if entry is null
                 */
                // @ts-ignore
                getScores(entry: java.lang.String | string): Array<org.bukkit.scoreboard.Score>
                /**
                 * Removes all scores for a player on this Scoreboard
                 * @param player the player to drop all current scores for
                 * @throws IllegalArgumentException if player is null
                 * @deprecated Scoreboards can contain entries that aren't players
                 * @see #resetScores(String)
                 */
                // @ts-ignore
                resetScores(player: org.bukkit.OfflinePlayer): void
                /**
                 * Removes all scores for an entry on this Scoreboard
                 * @param entry the entry to drop all current scores for
                 * @throws IllegalArgumentException if entry is null
                 */
                // @ts-ignore
                resetScores(entry: java.lang.String | string): void
                /**
                 * Gets a player's Team on this Scoreboard
                 * @param player the player to search for
                 * @return the player's Team or null if the player is not on a team
                 * @throws IllegalArgumentException if player is null
                 * @deprecated Scoreboards can contain entries that aren't players
                 * @see #getEntryTeam(String)
                 */
                // @ts-ignore
                getPlayerTeam(player: org.bukkit.OfflinePlayer): org.bukkit.scoreboard.Team
                /**
                 * Gets a entries Team on this Scoreboard
                 * @param entry the entry to search for
                 * @return the entries Team or null if the entry is not on a team
                 * @throws IllegalArgumentException if entry is null
                 */
                // @ts-ignore
                getEntryTeam(entry: java.lang.String | string): org.bukkit.scoreboard.Team
                /**
                 * Gets a Team by name on this Scoreboard
                 * @param teamName Team name
                 * @return the matching Team or null if no matches
                 * @throws IllegalArgumentException if teamName is null
                 */
                // @ts-ignore
                getTeam(teamName: java.lang.String | string): org.bukkit.scoreboard.Team
                /**
                 * Gets all teams on this Scoreboard
                 * @return an immutable set of Teams
                 */
                // @ts-ignore
                getTeams(): Array<org.bukkit.scoreboard.Team>
                /**
                 * Registers a Team on this Scoreboard
                 * @param name Team name
                 * @return registered Team
                 * @throws IllegalArgumentException if name is null
                 * @throws IllegalArgumentException if team by that name already exists
                 */
                // @ts-ignore
                registerNewTeam(name: java.lang.String | string): org.bukkit.scoreboard.Team
                /**
                 * Gets all players tracked by this Scoreboard
                 * @return immutable set of all tracked players
                 * @deprecated Scoreboards can contain entries that aren't players
                 * @see #getEntries()
                 */
                // @ts-ignore
                getPlayers(): Array<org.bukkit.OfflinePlayer>
                /**
                 * Gets all entries tracked by this Scoreboard
                 * @return immutable set of all tracked entries
                 */
                // @ts-ignore
                getEntries(): Array<java.lang.String | string>
                /**
                 * Clears any objective in the specified slot.
                 * @param slot the slot to remove objectives
                 * @throws IllegalArgumentException if slot is null
                 */
                // @ts-ignore
                clearSlot(slot: org.bukkit.scoreboard.DisplaySlot): void
            }
        }
    }
}
