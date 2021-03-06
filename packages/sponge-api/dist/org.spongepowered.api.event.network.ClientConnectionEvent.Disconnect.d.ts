declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace network {
                    namespace ClientConnectionEvent {
                        /**
                         * Called when a {@link Player} disconnects from the game.
                         */
                        // @ts-ignore
                        interface Disconnect extends org.spongepowered.api.event.network.ClientConnectionEvent, org.spongepowered.api.event.entity.living.humanoid.player.TargetPlayerEvent, org.spongepowered.api.event.message.MessageChannelEvent {
                        }
                    }
                }
            }
        }
    }
}
