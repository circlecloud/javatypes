declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace living {
                        namespace humanoid {
                            namespace player {
                                /**
                                 * Called when a {@link Player} notifies the server of the status of a resource pack
                                 * change request.
                                 */
                                // @ts-ignore
                                interface ResourcePackStatusEvent extends org.spongepowered.api.event.Event {
                                    /**
                                     * Get the player for this event.
                                     * @return The player
                                     */
                                    // @ts-ignore
                                    getPlayer(): org.spongepowered.api.entity.living.player.Player
                                    /**
                                     * Gets the pack that this status corresponds to.
                                     * @return The pack that this status corresponds to.
                                     */
                                    // @ts-ignore
                                    getPack(): org.spongepowered.api.resourcepack.ResourcePack
                                    /**
                                     * Gets the status of the sent pack.
                                     * @return The status of the sent pack.
                                     */
                                    // @ts-ignore
                                    getStatus(): org.spongepowered.api.event.entity.living.humanoid.player.ResourcePackStatusEvent.ResourcePackStatus
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
