declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace network {
                    /**
                     * Represents an event fired during the login process.
                     * <p>Together with {@link SpawnEntityEvent}, these events represent the
                     * progression of a {@link Player} from first authenticating, to being fully
                     * loaded in the world.</p>
                     * <p>The events are fired in the following order:</p>
                     * <p>#Auth -> #Login -> {@link SpawnEntityEvent} -> #Join</p>
                     * <p>{@link SpawnEntityEvent} is still fired for players, for consistency.
                     * However, the player is not at a well-defined state at that point. It's
                     * recommended to use the event's subinterfaces to interact with the player
                     * at well-defined moments during the connection process.</p>
                     */
                    // @ts-ignore
                    interface ClientConnectionEvent extends org.spongepowered.api.event.Event {
                    }
                }
            }
        }
    }
}
