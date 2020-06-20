declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace boss {
                namespace ServerBossBar {
                    /**
                     * Represents a builder class to create mutable {@link ServerBossBar}s.
                     * @see BossBar
                     * @see ServerBossBar
                     */
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.boss.ServerBossBar, org.spongepowered.api.boss.ServerBossBar.Builder> {
                        /**
                         * Sets the name of the boss bar.
                         * @param name The boss bar name
                         * @return This builder
                         */
                        // @ts-ignore
                        name(name: org.spongepowered.api.text.Text): org.spongepowered.api.boss.ServerBossBar.Builder
                        /**
                         * Sets the percent.
                         * <p>The percent must be between {@code 0.0} and {@code 1.0}.</p>
                         * @param percent The percent
                         * @return This builder
                         */
                        // @ts-ignore
                        percent(percent: number /*float*/): org.spongepowered.api.boss.ServerBossBar.Builder
                        /**
                         * Sets the color.
                         * @param color The color
                         * @return This builder
                         */
                        // @ts-ignore
                        color(color: org.spongepowered.api.boss.BossBarColor): org.spongepowered.api.boss.ServerBossBar.Builder
                        /**
                         * Sets the overlay.
                         * @param overlay The overlay
                         * @return This builder
                         */
                        // @ts-ignore
                        overlay(overlay: org.spongepowered.api.boss.BossBarOverlay): org.spongepowered.api.boss.ServerBossBar.Builder
                        /**
                         * Sets if the sky should darken.
                         * @param darkenSky If the sky should darken
                         * @return This builder
                         */
                        // @ts-ignore
                        darkenSky(darkenSky: boolean): org.spongepowered.api.boss.ServerBossBar.Builder
                        /**
                         * Sets if the end boss music should be played.
                         * @param playEndBossMusic If the end boss music should be played
                         * @return This builder
                         */
                        // @ts-ignore
                        playEndBossMusic(playEndBossMusic: boolean): org.spongepowered.api.boss.ServerBossBar.Builder
                        /**
                         * Sets if fog should be created.
                         * @param createFog If fog should be created
                         * @return This builder
                         */
                        // @ts-ignore
                        createFog(createFog: boolean): org.spongepowered.api.boss.ServerBossBar.Builder
                        /**
                         * Sets if the boss bar is visible.
                         * @param visible If this boss bar is visible
                         * @return This builder
                         */
                        // @ts-ignore
                        visible(visible: boolean): org.spongepowered.api.boss.ServerBossBar.Builder
                        /**
                         * Build the boss bar from the values in this builder.
                         * @return The boss bar
                         */
                        // @ts-ignore
                        build(): org.spongepowered.api.boss.ServerBossBar
                    }
                }
            }
        }
    }
}
