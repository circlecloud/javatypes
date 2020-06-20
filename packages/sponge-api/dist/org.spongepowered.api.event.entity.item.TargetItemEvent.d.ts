declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace item {
                        /**
                         * Base event for all events with a {@link Item} as the source.
                         */
                        // @ts-ignore
                        interface TargetItemEvent extends org.spongepowered.api.event.entity.TargetEntityEvent {
                            // @ts-ignore
                            getTargetEntity(): org.spongepowered.api.entity.Item
                        }
                    }
                }
            }
        }
    }
}
