declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace player {
                        namespace tab {
                            namespace TabListEntry {
                                /**
                                 * Represents a builder class to create mutable {@link TabListEntry}s.
                                 * @see TabListEntry
                                 */
                                // @ts-ignore
                                interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.entity.living.player.tab.TabListEntry, org.spongepowered.api.entity.living.player.tab.TabListEntry.Builder> {
                                    /**
                                     * Sets the {@link TabList} this entry is owned by.
                                     * @param list The tab list
                                     * @return The builder
                                     */
                                    // @ts-ignore
                                    list(list: org.spongepowered.api.entity.living.player.tab.TabList): org.spongepowered.api.entity.living.player.tab.TabListEntry.Builder
                                    /**
                                     * Sets the profile for entries created by this builder.
                                     * @param profile The profile
                                     * @return The builder
                                     */
                                    // @ts-ignore
                                    profile(profile: org.spongepowered.api.profile.GameProfile): org.spongepowered.api.entity.living.player.tab.TabListEntry.Builder
                                    /**
                                     * Sets the display name for entries created by this builder.
                                     * @param displayName The display name
                                     * @return The builder
                                     * @see TabListEntry#setDisplayName(Text)
                                     */
                                    // @ts-ignore
                                    displayName(displayName: org.spongepowered.api.text.Text): org.spongepowered.api.entity.living.player.tab.TabListEntry.Builder
                                    /**
                                     * Sets the latency for entries created by this builder.
                                     * @param latency The latency, in milliseconds
                                     * @return The builder
                                     * @see TabListEntry#setLatency(int)
                                     */
                                    // @ts-ignore
                                    latency(latency: number /*int*/): org.spongepowered.api.entity.living.player.tab.TabListEntry.Builder
                                    /**
                                     * Sets the gamemode for entries created by this builder.
                                     * @param gameMode The gamemode
                                     * @return The builder
                                     * @see TabListEntry#setGameMode(GameMode)
                                     */
                                    // @ts-ignore
                                    gameMode(gameMode: org.spongepowered.api.entity.living.player.gamemode.GameMode): org.spongepowered.api.entity.living.player.tab.TabListEntry.Builder
                                    /**
                                     * Builds an entry based off the values of this builder.
                                     * @return The entry
                                     */
                                    // @ts-ignore
                                    build(): org.spongepowered.api.entity.living.player.tab.TabListEntry
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
