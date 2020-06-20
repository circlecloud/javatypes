declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace network {
                    namespace ClientConnectionEvent {
                        /**
                         * Called when a {@link Player} joins the game {@link World} for the first
                         * time after initial connection.
                         * <p>The {@link SpawnEntityEvent} for the {@link Player} is fired after the
                         * #Login event. This event is fired after both.</p> </p>
                         */
                        // @ts-ignore
                        interface Join extends org.spongepowered.api.event.network.ClientConnectionEvent, org.spongepowered.api.event.entity.living.humanoid.player.TargetPlayerEvent, org.spongepowered.api.event.message.MessageChannelEvent {
                        }
                    }
                }
            }
        }
    }
}
