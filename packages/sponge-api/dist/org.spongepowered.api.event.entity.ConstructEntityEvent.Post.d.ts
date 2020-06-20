declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace ConstructEntityEvent {
                        /**
                         * Called after the construction of an {@link Entity}.
                         * <p>Note: This takes before spawning.</p>
                         */
                        // @ts-ignore
                        interface Post extends org.spongepowered.api.event.entity.ConstructEntityEvent, org.spongepowered.api.event.entity.TargetEntityEvent {
                        }
                    }
                }
            }
        }
    }
}
