declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    // @ts-ignore
                    interface TargetWorldEvent extends org.spongepowered.api.event.Event {
                        /**
                         * Gets the target world of this {@link Event}.
                         * @return The target {#link World}
                         */
                        // @ts-ignore
                        getTargetWorld(): org.spongepowered.api.world.World
                    }
                }
            }
        }
    }
}
