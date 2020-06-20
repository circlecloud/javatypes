declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace boss {
                /**
                 * Represents a boss bar controlled by a {@link Server}.
                 */
                // @ts-ignore
                interface ServerBossBar extends org.spongepowered.api.boss.BossBar {
                    /**
                     * Creates a new {@link Builder} to create {@link ServerBossBar}s.
                     * @return The new builder
                     */
                    // @ts-ignore
                    builder(): org.spongepowered.api.boss.ServerBossBar.Builder
                    // @ts-ignore
                    setName(name: org.spongepowered.api.text.Text): org.spongepowered.api.boss.ServerBossBar
                    // @ts-ignore
                    setPercent(percent: number /*float*/): org.spongepowered.api.boss.ServerBossBar
                    // @ts-ignore
                    setColor(color: org.spongepowered.api.boss.BossBarColor): org.spongepowered.api.boss.ServerBossBar
                    // @ts-ignore
                    setOverlay(overlay: org.spongepowered.api.boss.BossBarOverlay): org.spongepowered.api.boss.ServerBossBar
                    // @ts-ignore
                    setDarkenSky(darkenSky: boolean): org.spongepowered.api.boss.ServerBossBar
                    // @ts-ignore
                    setPlayEndBossMusic(playEndBossMusic: boolean): org.spongepowered.api.boss.ServerBossBar
                    // @ts-ignore
                    setCreateFog(createFog: boolean): org.spongepowered.api.boss.ServerBossBar
                    /**
                     * If this boss bar is visible.
                     * @return If this boss bar is visible
                     */
                    // @ts-ignore
                    isVisible(): boolean
                    /**
                     * Sets if this boss bar is visible.
                     * @param visible If this boss bar is visible
                     * @return This boss bar
                     */
                    // @ts-ignore
                    setVisible(visible: boolean): org.spongepowered.api.boss.ServerBossBar
                    /**
                     * Gets a collection of all players on this boss bar.
                     * @return A collection of all players on this boss bar
                     */
                    // @ts-ignore
                    getPlayers(): java.util.Collection<org.spongepowered.api.entity.living.player.Player>
                    /**
                     * Adds a player to this boss bar.
                     * @param player The player to add
                     * @return This boss bar
                     */
                    // @ts-ignore
                    addPlayer(player: org.spongepowered.api.entity.living.player.Player): org.spongepowered.api.boss.ServerBossBar
                    /**
                     * Adds a collection of players to this boss bar.
                     * @param players The players to add
                     * @return This boss bar
                     */
                    // @ts-ignore
                    addPlayers(players: Array<org.spongepowered.api.entity.living.player.Player>): org.spongepowered.api.boss.ServerBossBar
                    /**
                     * Removes a player from this boss bar.
                     * @param player The player to remove
                     * @return This boss bar
                     */
                    // @ts-ignore
                    removePlayer(player: org.spongepowered.api.entity.living.player.Player): org.spongepowered.api.boss.ServerBossBar
                    /**
                     * Removes a collection of players from this boss bar.
                     * @param players The players to remove
                     * @return This boss bar
                     */
                    // @ts-ignore
                    removePlayers(players: Array<org.spongepowered.api.entity.living.player.Player>): org.spongepowered.api.boss.ServerBossBar
                }
            }
        }
    }
}
