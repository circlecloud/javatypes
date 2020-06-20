declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace ConstructEntityEvent {
                        /**
                         * Called before the construction of an {@link Entity}. Usually, this will
                         * occur whenever an {@link Entity} is going to be instantiated. The only thing known
                         * for the event is the {@link EntityType}.
                         * <p>Note: This does not cover all Entity construction. A best effort is
                         * made to capture as many as we can.</p>
                         */
                        // @ts-ignore
                        interface Pre extends org.spongepowered.api.event.entity.ConstructEntityEvent, org.spongepowered.api.event.Cancellable {
                        }
                    }
                }
            }
        }
    }
}
