declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace impl {
                    /**
                     * An abstract event that can be extended for any and all custom events as
                     * necessary.
                     */
                    // @ts-ignore
                    abstract class AbstractEvent extends java.lang.Object implements org.spongepowered.api.event.Event {
                        // @ts-ignore
                        constructor()
                        /**
                         * This field is automatically set by the event manager.
                         * It represents the {@link Order} of the event handler currently
                         * processing the event. When no handler is processing the event,
                         * it will be set to <code>null</code>
                         */
                        // @ts-ignore
                        public currentOrder: org.spongepowered.api.event.Order
                        /**
                         * Called once all fields have been set by the generated
                         * constructor in a subclass.
                         * <p>This method should be used
                         * to initialize any fields that depend on parameters
                         * passed to the constructor.</p>
                         */
                        // @ts-ignore
                        init(): void
                    }
                }
            }
        }
    }
}
