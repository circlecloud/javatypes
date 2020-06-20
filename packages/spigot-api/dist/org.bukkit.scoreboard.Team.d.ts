declare namespace org {
    namespace bukkit {
        namespace scoreboard {
            /**
             * A team on a scoreboard that has a common display theme and other
             * properties. This team is only relevant to the display of the associated
             * {@link #getScoreboard() scoreboard}.
             */
            // @ts-ignore
            interface Team {
                /**
                 * Gets the name of this Team
                 * @return Objective name
                 * @throws IllegalStateException if this team has been unregistered
                 */
                // @ts-ignore
                getName(): java.lang.String
                /**
                 * Gets the name displayed to entries for this team
                 * @return Team display name
                 * @throws IllegalStateException if this team has been unregistered
                 */
                // @ts-ignore
                getDisplayName(): java.lang.String
                /**
                 * Sets the name displayed to entries for this team
                 * @param displayName New display name
                 * @throws IllegalArgumentException if displayName is longer than 128
                 *      characters.
                 * @throws IllegalStateException if this team has been unregistered
                 */
                // @ts-ignore
                setDisplayName(displayName: string): void
                /**
                 * Gets the prefix prepended to the display of entries on this team.
                 * @return Team prefix
                 * @throws IllegalStateException if this team has been unregistered
                 */
                // @ts-ignore
                getPrefix(): java.lang.String
                /**
                 * Sets the prefix prepended to the display of entries on this team.
                 * @param prefix New prefix
                 * @throws IllegalArgumentException if prefix is null
                 * @throws IllegalArgumentException if prefix is longer than 64
                 *      characters
                 * @throws IllegalStateException if this team has been unregistered
                 */
                // @ts-ignore
                setPrefix(prefix: string): void
                /**
                 * Gets the suffix appended to the display of entries on this team.
                 * @return the team's current suffix
                 * @throws IllegalStateException if this team has been unregistered
                 */
                // @ts-ignore
                getSuffix(): java.lang.String
                /**
                 * Sets the suffix appended to the display of entries on this team.
                 * @param suffix the new suffix for this team.
                 * @throws IllegalArgumentException if suffix is null
                 * @throws IllegalArgumentException if suffix is longer than 64
                 *      characters
                 * @throws IllegalStateException if this team has been unregistered
                 */
                // @ts-ignore
                setSuffix(suffix: string): void
                /**
                 * Gets the color of the team.
                 * <br>
                 * This only sets the team outline, other occurrences of colors such as in
                 * names are handled by prefixes / suffixes.
                 * @return team color, defaults to {#link ChatColor#RESET}
                 * @throws IllegalStateException if this team has been unregistered
                 */
                // @ts-ignore
                getColor(): org.bukkit.ChatColor
                /**
                 * Sets the color of the team.
                 * <br>
                 * This only sets the team outline, other occurrences of colors such as in
                 * names are handled by prefixes / suffixes.
                 * @param color new color, must be non-null. Use {#link ChatColor#RESET} for
                 *  no color
                 */
                // @ts-ignore
                setColor(color: org.bukkit.ChatColor): void
                /**
                 * Gets the team friendly fire state
                 * @return true if friendly fire is enabled
                 * @throws IllegalStateException if this team has been unregistered
                 */
                // @ts-ignore
                allowFriendlyFire(): boolean
                /**
                 * Sets the team friendly fire state
                 * @param enabled true if friendly fire is to be allowed
                 * @throws IllegalStateException if this team has been unregistered
                 */
                // @ts-ignore
                setAllowFriendlyFire(enabled: boolean): void
                /**
                 * Gets the team's ability to see {@link PotionEffectType#INVISIBILITY
                 * invisible} teammates.
                 * @return true if team members can see invisible members
                 * @throws IllegalStateException if this team has been unregistered
                 */
                // @ts-ignore
                canSeeFriendlyInvisibles(): boolean
                /**
                 * Sets the team's ability to see {@link PotionEffectType#INVISIBILITY
                 * invisible} teammates.
                 * @param enabled true if invisible teammates are to be visible
                 * @throws IllegalStateException if this team has been unregistered
                 */
                // @ts-ignore
                setCanSeeFriendlyInvisibles(enabled: boolean): void
                /**
                 * Gets the team's ability to see name tags
                 * @return the current name tag visibility for the team
                 * @throws IllegalArgumentException if this team has been unregistered
                 * @deprecated see {#link #getOption(org.bukkit.scoreboard.Team.Option)}
                 */
                // @ts-ignore
                getNameTagVisibility(): org.bukkit.scoreboard.NameTagVisibility
                /**
                 * Set's the team's ability to see name tags
                 * @param visibility The nameTagVisibility to set
                 * @throws IllegalArgumentException if this team has been unregistered
                 * @deprecated see
                 *  {#link #setOption(org.bukkit.scoreboard.Team.Option, org.bukkit.scoreboard.Team.OptionStatus)}
                 */
                // @ts-ignore
                setNameTagVisibility(visibility: org.bukkit.scoreboard.NameTagVisibility): void
                /**
                 * Gets the Set of players on the team
                 * @return players on the team
                 * @throws IllegalStateException if this team has been unregistered\
                 * @deprecated Teams can contain entries that aren't players
                 * @see #getEntries()
                 */
                // @ts-ignore
                getPlayers(): java.util.Set<org.bukkit.OfflinePlayer>
                /**
                 * Gets the Set of entries on the team
                 * @return entries on the team
                 * @throws IllegalStateException if this entries has been unregistered\
                 */
                // @ts-ignore
                getEntries(): java.util.Set<java.lang.String>
                /**
                 * Gets the size of the team
                 * @return number of entries on the team
                 * @throws IllegalStateException if this team has been unregistered
                 */
                // @ts-ignore
                getSize(): int
                /**
                 * Gets the Scoreboard to which this team is attached
                 * @return Owning scoreboard, or null if this team has been {#link
                 *      #unregister() unregistered}
                 */
                // @ts-ignore
                getScoreboard(): org.bukkit.scoreboard.Scoreboard
                /**
                 * This puts the specified player onto this team for the scoreboard.
                 * <p>
                 * This will remove the player from any other team on the scoreboard.
                 * @param player the player to add
                 * @throws IllegalArgumentException if player is null
                 * @throws IllegalStateException if this team has been unregistered
                 * @deprecated Teams can contain entries that aren't players
                 * @see #addEntry(String)
                 */
                // @ts-ignore
                addPlayer(player: org.bukkit.OfflinePlayer): void
                /**
                 * This puts the specified entry onto this team for the scoreboard.
                 * <p>
                 * This will remove the entry from any other team on the scoreboard.
                 * @param entry the entry to add
                 * @throws IllegalArgumentException if entry is null
                 * @throws IllegalStateException if this team has been unregistered
                 */
                // @ts-ignore
                addEntry(entry: string): void
                /**
                 * Removes the player from this team.
                 * @param player the player to remove
                 * @return if the player was on this team
                 * @throws IllegalArgumentException if player is null
                 * @throws IllegalStateException if this team has been unregistered
                 * @deprecated Teams can contain entries that aren't players
                 * @see #removeEntry(String)
                 */
                // @ts-ignore
                removePlayer(player: org.bukkit.OfflinePlayer): boolean
                /**
                 * Removes the entry from this team.
                 * @param entry the entry to remove
                 * @return if the entry was a part of this team
                 * @throws IllegalArgumentException if entry is null
                 * @throws IllegalStateException if this team has been unregistered
                 */
                // @ts-ignore
                removeEntry(entry: string): boolean
                /**
                 * Unregisters this team from the Scoreboard
                 * @throws IllegalStateException if this team has been unregistered
                 */
                // @ts-ignore
                unregister(): void
                /**
                 * Checks to see if the specified player is a member of this team.
                 * @param player the player to search for
                 * @return true if the player is a member of this team
                 * @throws IllegalArgumentException if player is null
                 * @throws IllegalStateException if this team has been unregistered
                 * @deprecated Teams can contain entries that aren't players
                 * @see #hasEntry(String)
                 */
                // @ts-ignore
                hasPlayer(player: org.bukkit.OfflinePlayer): boolean
                /**
                 * Checks to see if the specified entry is a member of this team.
                 * @param entry the entry to search for
                 * @return true if the entry is a member of this team
                 * @throws IllegalArgumentException if entry is null
                 * @throws IllegalStateException if this team has been unregistered
                 */
                // @ts-ignore
                hasEntry(entry: string): boolean
                /**
                 * Get an option for this team
                 * @param option the option to get
                 * @return the option status
                 * @throws IllegalStateException if this team has been unregistered
                 */
                // @ts-ignore
                getOption(option: org.bukkit.scoreboard.Team.Option): org.bukkit.scoreboard.Team.OptionStatus
                /**
                 * Set an option for this team
                 * @param option the option to set
                 * @param status the new option status
                 * @throws IllegalStateException if this team has been unregistered
                 */
                // @ts-ignore
                setOption(option: org.bukkit.scoreboard.Team.Option, status: org.bukkit.scoreboard.Team.OptionStatus): void
            }
        }
    }
}
