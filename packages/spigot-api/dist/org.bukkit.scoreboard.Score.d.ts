declare namespace org {
    namespace bukkit {
        namespace scoreboard {
            /**
             * A score entry for an {@link #getEntry() entry} on an {@link
             * #getObjective() objective}. Changing this will not affect any other
             * objective or scoreboard.
             */
            // @ts-ignore
            interface Score {
                /**
                 * Gets the OfflinePlayer being tracked by this Score
                 * @return this Score's tracked player
                 * @deprecated Scoreboards can contain entries that aren't players
                 * @see #getEntry()
                 */
                // @ts-ignore
                getPlayer(): org.bukkit.OfflinePlayer
                /**
                 * Gets the entry being tracked by this Score
                 * @return this Score's tracked entry
                 */
                // @ts-ignore
                getEntry(): java.lang.String
                /**
                 * Gets the Objective being tracked by this Score
                 * @return this Score's tracked objective
                 */
                // @ts-ignore
                getObjective(): org.bukkit.scoreboard.Objective
                /**
                 * Gets the current score
                 * @return the current score
                 * @throws IllegalStateException if the associated objective has been
                 *      unregistered
                 */
                // @ts-ignore
                getScore(): int
                /**
                 * Sets the current score.
                 * @param score New score
                 * @throws IllegalStateException if the associated objective has been
                 *      unregistered
                 */
                // @ts-ignore
                setScore(score: number /*int*/): void
                /**
                 * Shows if this score has been set at any point in time.
                 * @return if this score has been set before
                 * @throws IllegalStateException if the associated objective has been
                 *      unregistered
                 */
                // @ts-ignore
                isScoreSet(): boolean
                /**
                 * Gets the scoreboard for the associated objective.
                 * @return the owning objective's scoreboard, or null if it has been
                 *      {#link Objective#unregister() unregistered}
                 */
                // @ts-ignore
                getScoreboard(): org.bukkit.scoreboard.Scoreboard
            }
        }
    }
}
