declare namespace org {
    namespace bukkit {
        namespace boss {
            // @ts-ignore
            interface BossBar {
                /**
                 * Returns the title of this boss bar
                 * @return the title of the bar
                 */
                // @ts-ignore
                getTitle(): java.lang.String
                /**
                 * Sets the title of this boss bar
                 * @param title the title of the bar
                 */
                // @ts-ignore
                setTitle(title: string): void
                /**
                 * Returns the color of this boss bar
                 * @return the color of the bar
                 */
                // @ts-ignore
                getColor(): org.bukkit.boss.BarColor
                /**
                 * Sets the color of this boss bar.
                 * @param color the color of the bar
                 */
                // @ts-ignore
                setColor(color: org.bukkit.boss.BarColor): void
                /**
                 * Returns the style of this boss bar
                 * @return the style of the bar
                 */
                // @ts-ignore
                getStyle(): org.bukkit.boss.BarStyle
                /**
                 * Sets the bar style of this boss bar
                 * @param style the style of the bar
                 */
                // @ts-ignore
                setStyle(style: org.bukkit.boss.BarStyle): void
                /**
                 * Remove an existing flag on this boss bar
                 * @param flag the existing flag to remove
                 */
                // @ts-ignore
                removeFlag(flag: org.bukkit.boss.BarFlag): void
                /**
                 * Add an optional flag to this boss bar
                 * @param flag an optional flag to set on the boss bar
                 */
                // @ts-ignore
                addFlag(flag: org.bukkit.boss.BarFlag): void
                /**
                 * Returns whether this boss bar as the passed flag set
                 * @param flag the flag to check
                 * @return whether it has the flag
                 */
                // @ts-ignore
                hasFlag(flag: org.bukkit.boss.BarFlag): boolean
                /**
                 * Sets the progress of the bar. Values should be between 0.0 (empty) and
                 * 1.0 (full)
                 * @param progress the progress of the bar
                 */
                // @ts-ignore
                setProgress(progress: number /*double*/): void
                /**
                 * Returns the progress of the bar between 0.0 and 1.0
                 * @return the progress of the bar
                 */
                // @ts-ignore
                getProgress(): double
                /**
                 * Adds the player to this boss bar causing it to display on their screen.
                 * @param player the player to add
                 */
                // @ts-ignore
                addPlayer(player: org.bukkit.entity.Player): void
                /**
                 * Removes the player from this boss bar causing it to be removed from their
                 * screen.
                 * @param player the player to remove
                 */
                // @ts-ignore
                removePlayer(player: org.bukkit.entity.Player): void
                /**
                 * Removes all players from this boss bar
                 * @see #removePlayer(Player)
                 */
                // @ts-ignore
                removeAll(): void
                /**
                 * Returns all players viewing this boss bar
                 * @return a immutable list of players
                 */
                // @ts-ignore
                getPlayers(): java.util.List<org.bukkit.entity.Player>
                /**
                 * Set if the boss bar is displayed to attached players.
                 * @param visible visible status
                 */
                // @ts-ignore
                setVisible(visible: boolean): void
                /**
                 * Return if the boss bar is displayed to attached players.
                 * @return visible status
                 */
                // @ts-ignore
                isVisible(): boolean
                /**
                 * Shows the previously hidden boss bar to all attached players
                 * @deprecated {#link #setVisible(boolean)}
                 */
                // @ts-ignore
                show(): void
                /**
                 * Hides this boss bar from all attached players
                 * @deprecated {#link #setVisible(boolean)}
                 */
                // @ts-ignore
                hide(): void
            }
        }
    }
}
