declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace living {
                        namespace humanoid {
                            namespace player {
                                /**
                                 * Fired when A {@link Player} changes one or more of the following settings.
                                 * <ul>
                                 * <li>Locale</li>
                                 * <li>View distance</li>
                                 * <li>Chat visibility</li>
                                 * <li>Chat colors</li>
                                 * <li>Displayed skin parts</li>
                                 * </ul>
                                 * <p>The event is fired before the player object is updated so it is possible
                                 * to inspect the old settings.</p>
                                 */
                                // @ts-ignore
                                interface PlayerChangeClientSettingsEvent extends org.spongepowered.api.event.entity.living.humanoid.player.TargetPlayerEvent {
                                    /**
                                     * Gets the new locale of the player.
                                     * @return The locale
                                     */
                                    // @ts-ignore
                                    getLocale(): java.util.Locale
                                    /**
                                     * Gets the new view distance of the player. This value represents the
                                     * radius in unit chunks.
                                     * @return The view distance
                                     */
                                    // @ts-ignore
                                    getViewDistance(): int
                                    /**
                                     * Gets the new chat visibility setting of the player.
                                     * @return The chat visibility setting
                                     */
                                    // @ts-ignore
                                    getChatVisibility(): org.spongepowered.api.text.chat.ChatVisibility
                                    /**
                                     * Gets the new value for whether the player has colors enabled in chat.
                                     * @return True if colors are enabled in chat
                                     */
                                    // @ts-ignore
                                    isChatColorsEnabled(): boolean
                                    /**
                                     * Gets the new skin part's displayed.
                                     * @return The displayed skin parts
                                     */
                                    // @ts-ignore
                                    getDisplayedSkinParts(): java.util.Set<org.spongepowered.api.data.type.SkinPart>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
