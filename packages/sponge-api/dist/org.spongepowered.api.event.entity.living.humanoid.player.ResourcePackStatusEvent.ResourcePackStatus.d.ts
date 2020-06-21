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
                                        /**
                                         * The client is attempting to download the pack.
                                         */
                                        // @ts-ignore
                                        readonly ACCEPTED: org.spongepowered.api.event.entity.living.humanoid.player.ResourcePackStatusEvent.ResourcePackStatus
                                        /**
                                         * The client declined to download the pack.
                                         */
                                        // @ts-ignore
                                        readonly DECLINED: org.spongepowered.api.event.entity.living.humanoid.player.ResourcePackStatusEvent.ResourcePackStatus
                                        /**
                                         * The client failed to download the resource pack.
                                         * <p>In some client versions, such as 1.8.0, this may only be sent when
                                         * the resource pack URL does not end in <tt>.zip</tt>. Otherwise,
                                         * {@link #SUCCESSFULLY_LOADED} will be sent.</p>
                                         */
                                        // @ts-ignore
                                        readonly FAILED: org.spongepowered.api.event.entity.living.humanoid.player.ResourcePackStatusEvent.ResourcePackStatus
                                        /**
                                         * The pack URI was successfully loaded. This does not mean that pack
                                         * was loaded, as the vanilla client sends this even when encountering a
                                         * 404 or similar.
                                         */
                                        // @ts-ignore
                                        readonly SUCCESSFULLY_LOADED: org.spongepowered.api.event.entity.living.humanoid.player.ResourcePackStatusEvent.ResourcePackStatus
                                        // @ts-ignore
                                        values(): org.spongepowered.api.event.entity.living.humanoid.player.ResourcePackStatusEvent.ResourcePackStatus[]
                                        // @ts-ignore
                                        valueOf(name: java.lang.String | string): org.spongepowered.api.event.entity.living.humanoid.player.ResourcePackStatusEvent.ResourcePackStatus
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
