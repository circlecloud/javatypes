declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace block {
                    namespace ChangeBlockEvent {
                        /**
                         * Called when {@link BlockState}s at {@link Location}s are
                         * being broke. This usually occurs, whenever a {@link BlockState} changes
                         * to {@link BlockTypes#AIR}
                         */
                        // @ts-ignore
                        interface Break extends org.spongepowered.api.event.block.ChangeBlockEvent {
                        }
                    }
                }
            }
        }
    }
}
