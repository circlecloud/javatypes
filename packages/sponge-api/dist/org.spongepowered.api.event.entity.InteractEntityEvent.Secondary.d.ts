declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace InteractEntityEvent {
                        /**
                         * An event where the targeted entity is being interacted with the client's
                         * "secondary" button.
                         * <p>This is usually right-click.</p>
                         */
                        // @ts-ignore
                        interface Secondary extends org.spongepowered.api.event.entity.InteractEntityEvent, org.spongepowered.api.event.entity.living.humanoid.HandInteractEvent {
                        }
                    }
                }
            }
        }
    }
}
