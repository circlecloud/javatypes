declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        /**
                         * Handles when one or more {@link Item} or {@link ItemStack} are about to be
                         * "dropped" onto the ground. This will happen before they are physically
                         * dropped, let alone spawned.
                         */
                        // @ts-ignore
                        interface DropItemEvent extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                        }
                    }
                }
            }
        }
    }
}
