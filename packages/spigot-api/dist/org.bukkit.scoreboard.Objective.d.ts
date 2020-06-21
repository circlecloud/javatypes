declare namespace org {
    namespace bukkit {
        namespace scoreboard {
            /**
             * An objective on a scoreboard that can show scores specific to entries. This
             * objective is only relevant to the display of the associated {@link
             * #getScoreboard() scoreboard}.
             */
            // @ts-ignore
            interface Objective {
                /**
                 * Gets the name of this Objective
                 * @return this objective's name
                 * @throws IllegalStateException if this objective has been unregistered
                 */
                // @ts-ignore
                getName(): string
                /**
                 * Gets the name displayed to players for this objective
                 * @return this objective's display name
                 * @throws IllegalStateException if this objective has been unregistered
                 */
                // @ts-ignore
                getDisplayName(): string
                /**
                 * Sets the name displayed to players for this objective.
                 * @param displayName Display name to set
                 * @throws IllegalStateException if this objective has been unregistered
                 * @throws IllegalArgumentException if displayName is null
                 * @throws IllegalArgumentException if displayName is longer than 128
                 *      characters.
                 */
                // @ts-ignore
                setDisplayName(displayName: java.lang.String | string): void
                /**
                 * Gets the criteria this objective tracks.
                 * @return this objective's criteria
                 * @throws IllegalStateException if this objective has been unregistered
                 */
                // @ts-ignore
                getCriteria(): string
                /**
                 * Gets if the objective's scores can be modified directly by a plugin.
                 * @return true if scores are modifiable
                 * @throws IllegalStateException if this objective has been unregistered
                 * @see Criterias#HEALTH
                 */
                // @ts-ignore
                isModifiable(): boolean
                /**
                 * Gets the scoreboard to which this objective is attached.
                 * @return Owning scoreboard, or null if it has been {#link #unregister()
                 *      unregistered}
                 */
                // @ts-ignore
                getScoreboard(): org.bukkit.scoreboard.Scoreboard
                /**
                 * Unregisters this objective from the {@link Scoreboard scoreboard.}
                 * @throws IllegalStateException if this objective has been unregistered
                 */
                // @ts-ignore
                unregister(): void
                /**
                 * Sets this objective to display on the specified slot for the
                 * scoreboard, removing it from any other display slot.
                 * @param slot display slot to change, or null to not display
                 * @throws IllegalStateException if this objective has been unregistered
                 */
                // @ts-ignore
                setDisplaySlot(slot: org.bukkit.scoreboard.DisplaySlot): void
                /**
                 * Gets the display slot this objective is displayed at.
                 * @return the display slot for this objective, or null if not displayed
                 * @throws IllegalStateException if this objective has been unregistered
                 */
                // @ts-ignore
                getDisplaySlot(): org.bukkit.scoreboard.DisplaySlot
                /**
                 * Sets manner in which this objective will be rendered.
                 * @param renderType new render type
                 * @throws IllegalStateException if this objective has been unregistered
                 */
                // @ts-ignore
                setRenderType(renderType: org.bukkit.scoreboard.RenderType): void
                /**
                 * Sets manner in which this objective will be rendered.
                 * @return the render type
                 * @throws IllegalStateException if this objective has been unregistered
                 */
                // @ts-ignore
                getRenderType(): org.bukkit.scoreboard.RenderType
                /**
                 * Gets a player's Score for an Objective on this Scoreboard
                 * @param player Player for the Score
                 * @return Score tracking the Objective and player specified
                 * @throws IllegalArgumentException if player is null
                 * @throws IllegalStateException if this objective has been unregistered
                 * @deprecated Scoreboards can contain entries that aren't players
                 * @see #getScore(String)
                 */
                // @ts-ignore
                getScore(player: org.bukkit.OfflinePlayer): org.bukkit.scoreboard.Score
                /**
                 * Gets an entry's Score for an Objective on this Scoreboard.
                 * @param entry Entry for the Score
                 * @return Score tracking the Objective and entry specified
                 * @throws IllegalArgumentException if entry is null
                 * @throws IllegalStateException if this objective has been unregistered
                 * @throws IllegalArgumentException if entry is longer than 40 characters.
                 */
                // @ts-ignore
                getScore(entry: java.lang.String | string): org.bukkit.scoreboard.Score
            }
        }
    }
}
