declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace block {
                    namespace ChangeBlockEvent {
                        /**
                         * Called when a {@link BlockType} decides to "grow" either other
                         * blocks or itself or both. Usually considered to be plants or crops.
                         * Can use {@link EventContextKeys#GROWTH_ORIGIN} to determine the origin
                         * of what is doing the "growing".
                         */
                        // @ts-ignore
                        interface Grow extends org.spongepowered.api.event.block.ChangeBlockEvent {
                        }
                    }
                }
            }
        }
    }
}
