declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace boss {
                /**
                 * Represents a boss bar.
                 */
                // @ts-ignore
                interface BossBar extends org.spongepowered.api.util.Identifiable {
                    /**
                     * Gets the name of this boss bar.
                     * @return The boss bar name
                     */
                    // @ts-ignore
                    getName(): org.spongepowered.api.text.Text
                    /**
                     * Sets the name of this boss bar.
                     * @param name The boss bar name
                     * @return This boss bar
                     */
                    // @ts-ignore
                    setName(name: org.spongepowered.api.text.Text): org.spongepowered.api.boss.BossBar
                    /**
                     * Gets the percent.
                     * @return The percent
                     */
                    // @ts-ignore
                    getPercent(): number /*float*/
                    /**
                     * Sets the percent.
                     * <p>The percent must be between {@code 0.0} and {@code 1.0}.</p>
                     * @param percent The percent
                     * @return This boss bar
                     */
                    // @ts-ignore
                    setPercent(percent: number /*float*/): org.spongepowered.api.boss.BossBar
                    /**
                     * Gets the color.
                     * @return The color of the boss bar
                     */
                    // @ts-ignore
                    getColor(): org.spongepowered.api.boss.BossBarColor
                    /**
                     * Sets the color.
                     * @param color The color of the boss bar
                     * @return This boss bar
                     */
                    // @ts-ignore
                    setColor(color: org.spongepowered.api.boss.BossBarColor): org.spongepowered.api.boss.BossBar
                    /**
                     * Gets the overlay.
                     * @return The overlay
                     */
                    // @ts-ignore
                    getOverlay(): org.spongepowered.api.boss.BossBarOverlay
                    /**
                     * Sets the overlay.
                     * @param overlay The overlay
                     * @return This boss bar
                     */
                    // @ts-ignore
                    setOverlay(overlay: org.spongepowered.api.boss.BossBarOverlay): org.spongepowered.api.boss.BossBar
                    /**
                     * If the sky should darken.
                     * @return If the sky should darken
                     */
                    // @ts-ignore
                    shouldDarkenSky(): boolean
                    /**
                     * Sets if the sky should darken.
                     * @param darkenSky If the sky should darken
                     * @return This boss bar
                     */
                    // @ts-ignore
                    setDarkenSky(darkenSky: boolean): org.spongepowered.api.boss.BossBar
                    /**
                     * If the end boss music should be played.
                     * @return If the end boss music should be played
                     */
                    // @ts-ignore
                    shouldPlayEndBossMusic(): boolean
                    /**
                     * Sets if the end boss music should be played.
                     * @param playEndBossMusic If the end boss music should be played
                     * @return This boss bar
                     */
                    // @ts-ignore
                    setPlayEndBossMusic(playEndBossMusic: boolean): org.spongepowered.api.boss.BossBar
                    /**
                     * If fog should be created.
                     * @return If fog should be created
                     */
                    // @ts-ignore
                    shouldCreateFog(): boolean
                    /**
                     * Sets if fog should be created.
                     * @param createFog If fog should be created
                     * @return This boss bar
                     */
                    // @ts-ignore
                    setCreateFog(createFog: boolean): org.spongepowered.api.boss.BossBar
                }
            }
        }
    }
}
