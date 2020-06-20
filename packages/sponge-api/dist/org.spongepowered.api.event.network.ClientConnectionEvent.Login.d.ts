declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace network {
                    namespace ClientConnectionEvent {
                        /**
                         * Called after the client authenticates and attempts to login to the
                         * server.
                         * <p>Note: This event is fired after #Auth and is NOT async. Any changes
                         * required for the {@link Player}s {@link Transform} should be done during
                         * this event and NOT during #Join. </p>
                         * <p>If the registered {@link BanService} or {@link WhitelistService}
                         * indicates that a player should not be allowed to join (
                         * {@link GameProfile} or {@link InetAddress} has an ban, or is not on the
                         * whitelist), then this event will automatically cancelled by the
                         * implementation, with the proper message set through
                         * {@link MessageEvent#setMessage(TextRepresentable)}. No action on the part
                         * of the registered {@link BanService} or {@link WhitelistService} is
                         * required for this to occur.
                         * Plugins may uncancel the event to allow a client to join, regardless of
                         * its ban/whitelist status.</p>
                         */
                        // @ts-ignore
                        interface Login extends org.spongepowered.api.event.network.ClientConnectionEvent, org.spongepowered.api.event.message.MessageEvent, org.spongepowered.api.event.user.TargetUserEvent, org.spongepowered.api.event.Cancellable {
                            /**
                             * Gets the {@link RemoteConnection} representing the client connection.
                             * @return The remote connection
                             */
                            // @ts-ignore
                            getConnection(): org.spongepowered.api.network.RemoteConnection
                            /**
                             * Gets the profile of the client attempting to connect.
                             * @return The client's profile
                             */
                            // @ts-ignore
                            getProfile(): org.spongepowered.api.profile.GameProfile
                            /**
                             * Gets the transform that the {@link Player} came from.
                             * @return the previous transform
                             */
                            // @ts-ignore
                            getFromTransform(): org.spongepowered.api.entity.Transform<org.spongepowered.api.world.World>
                            /**
                             * Gets the new transform that the {@link Player} will change to.
                             * @return the new transform
                             */
                            // @ts-ignore
                            getToTransform(): org.spongepowered.api.entity.Transform<org.spongepowered.api.world.World>
                            /**
                             * Sets the new transform that the {@link Player} will change to.
                             * @param transform The new transform
                             */
                            // @ts-ignore
                            setToTransform(transform: org.spongepowered.api.entity.Transform<org.spongepowered.api.world.World>): void
                        }
                    }
                }
            }
        }
    }
}
