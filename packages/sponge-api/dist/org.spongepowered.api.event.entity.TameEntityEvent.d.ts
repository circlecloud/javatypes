declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    /**
                     * Called when an {@link Entity} is tamed.
                     */
                    // @ts-ignore
                    interface TameEntityEvent extends org.spongepowered.api.event.entity.TargetEntityEvent, org.spongepowered.api.event.Cancellable {
                        /**
                         * Old cause name.
                         * @deprecated Use
                         *              {#link org.spongepowered.api.event.cause.EventContextKeys#USED_ITEM}
                         */
                        // @ts-ignore
                        readonly USED_ITEM: java.lang.String | string
                    }
                }
            }
        }
    }
}
