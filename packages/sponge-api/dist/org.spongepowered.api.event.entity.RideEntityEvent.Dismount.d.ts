declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace RideEntityEvent {
                        /**
                         * Raised when an {@link Entity} is being dismounted.
                         */
                        // @ts-ignore
                        interface Dismount extends org.spongepowered.api.event.entity.RideEntityEvent {
                            /**
                             * Gets the {@link DismountType} when entity is dismounted.
                             * @return The dismount type
                             * @deprecated Use {#link EventContextKeys#DISMOUNT_TYPE} instead
                             */
                            // @ts-ignore
                            getDismountType(): org.spongepowered.api.event.cause.entity.dismount.DismountType
                        }
                    }
                }
            }
        }
    }
}
