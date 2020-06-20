declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    /**
                     * A key for values in the {@link EventContext}.
                     * @param <T> The type of the value stored with this key
                     */
                    // @ts-ignore
                    interface EventContextKey<T> extends org.spongepowered.api.CatalogType {
                        /**
                         * Creates a builder to be used for creating a new {@link EventContextKey}.
                         * @param clazz The class the key will allow access to
                         * @param <T> The type of the value stored with this key
                         * @return The constructed builder
                         */
                        // @ts-ignore
                        builder<T>(clazz: java.lang.Class<T>): org.spongepowered.api.event.cause.EventContextKey.Builder<T>
                        /**
                         * Gets the allowed type for the value of this key.
                         * @return The allowed type
                         */
                        // @ts-ignore
                        getAllowedType(): java.lang.Class<T>
                    }
                }
            }
        }
    }
}
