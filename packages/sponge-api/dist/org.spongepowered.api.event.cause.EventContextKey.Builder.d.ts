declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace EventContextKey {
                        // @ts-ignore
                        interface Builder<T> extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.event.cause.EventContextKey<T>, org.spongepowered.api.event.cause.EventContextKey.Builder<T>> {
                            // @ts-ignore
                            type(tClass: java.lang.Class<T>): org.spongepowered.api.event.cause.EventContextKey.Builder<T>
                            // @ts-ignore
                            id(id: java.lang.String | string): org.spongepowered.api.event.cause.EventContextKey.Builder<T>
                            // @ts-ignore
                            name(name: java.lang.String | string): org.spongepowered.api.event.cause.EventContextKey.Builder<T>
                            // @ts-ignore
                            build(): org.spongepowered.api.event.cause.EventContextKey<T>
                            // @ts-ignore
                            from(value: org.spongepowered.api.event.cause.EventContextKey<T>): org.spongepowered.api.event.cause.EventContextKey.Builder<T>
                            // @ts-ignore
                            reset(): org.spongepowered.api.event.cause.EventContextKey.Builder<T>
                        }
                    }
                }
            }
        }
    }
}
