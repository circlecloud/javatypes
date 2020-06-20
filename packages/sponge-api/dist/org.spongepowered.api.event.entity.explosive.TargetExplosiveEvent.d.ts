declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace explosive {
                        /**
                         * Represents an event regarding an {@link Explosive}.
                         */
                        // @ts-ignore
                        interface TargetExplosiveEvent extends org.spongepowered.api.event.entity.TargetEntityEvent {
                            // @ts-ignore
                            getTargetEntity(): org.spongepowered.api.entity.explosive.Explosive
                        }
                    }
                }
            }
        }
    }
}
