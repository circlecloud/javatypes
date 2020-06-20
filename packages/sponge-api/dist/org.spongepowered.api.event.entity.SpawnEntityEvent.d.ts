declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    /**
                     * Raised when an {@link Entity} is spawned. This usually follows the chain of
                     * the various entity creation events: {@link ConstructEntityEvent.Pre},
                     * {@link ConstructEntityEvent.Post}, and finally {@link SpawnEntityEvent}.
                     * <p>Note: To determine the {@link Cause}, refer to package
                     * org.spongepowered.api.event.cause.entity.spawn.</p>
                     * <p>For players, this event is fired before they have fully
                     * joined the world. {@link ClientConnectionEvent} is the
                     * recommended event to interact with connecting players.</p>
                     */
                    // @ts-ignore
                    interface SpawnEntityEvent extends org.spongepowered.api.event.entity.AffectEntityEvent {
                    }
                }
            }
        }
    }
}
