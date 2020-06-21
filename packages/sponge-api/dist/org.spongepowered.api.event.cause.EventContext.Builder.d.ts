declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace EventContext {
                        // @ts-ignore
                        class Builder extends java.lang.Object implements org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.event.cause.EventContext, org.spongepowered.api.event.cause.EventContext.Builder> {
                            /**
                             * Adds the given context key value pair to the context.
                             * @param key The key
                             * @param <T> The type of the value stored with the key
                             * @param value The value
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            public add<T>(key: org.spongepowered.api.event.cause.EventContextKey<T>, value: T): org.spongepowered.api.event.cause.EventContext.Builder
                            // @ts-ignore
                            public from(value: org.spongepowered.api.event.cause.EventContext): org.spongepowered.api.event.cause.EventContext.Builder
                            // @ts-ignore
                            public reset(): org.spongepowered.api.event.cause.EventContext.Builder
                            /**
                             * Creates a new {@link EventContext}.
                             * @return The EventContext
                             */
                            // @ts-ignore
                            public build(): org.spongepowered.api.event.cause.EventContext
                        }
                    }
                }
            }
        }
    }
}
