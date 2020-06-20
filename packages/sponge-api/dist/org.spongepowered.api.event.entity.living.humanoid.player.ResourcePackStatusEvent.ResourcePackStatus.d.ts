declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace living {
                        namespace humanoid {
                            namespace player {
                                namespace ResourcePackStatusEvent {
                                    /**
                                     * The different possible responses the client can have.
                                     */
                                    // @ts-ignore
                                    class ResourcePackStatus extends java.lang.Enum<org.spongepowered.api.event.entity.living.humanoid.player.ResourcePackStatusEvent.ResourcePackStatus> {
                                        // @ts-ignore
                                        values(): org.spongepowered.api.event.entity.living.humanoid.player.ResourcePackStatusEvent.ResourcePackStatus[]
                                        // @ts-ignore
                                        valueOf(name: string): org.spongepowered.api.event.entity.living.humanoid.player.ResourcePackStatusEvent.ResourcePackStatus
                                        /**
                                         * Gets if this status indicates that the pack was successfully set.
                                         * @return true if it was successful, false if it was not, and
                                         *          Optional.empty() if it cannot be determined at this time.
                                         */
                                        // @ts-ignore
                                        wasSuccessful(): java.util.Optional<java.lang.Boolean>
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
