declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    /**
                     * Provides context for an event outside of the direct chain of causes present
                     * in the event's {@link Cause}.
                     */
                    // @ts-ignore
                    class EventContext extends java.lang.Object {
                        /**
                         * Gets an empty context.
                         * @return The empty context
                         */
                        // @ts-ignore
                        public static empty(): org.spongepowered.api.event.cause.EventContext
                        /**
                         * Creates a new {@link EventContext} from the given map of entries.
                         * @param entries The context entries
                         * @return The new EventContext
                         */
                        // @ts-ignore
                        public static of(entries: java.util.Map<org.spongepowered.api.event.cause.EventContextKey<any>, java.lang.Object | any>): org.spongepowered.api.event.cause.EventContext
                        /**
                         * Creates a new builder for creating an {@link EventContext}.
                         * @return The new builder
                         */
                        // @ts-ignore
                        public static builder(): org.spongepowered.api.event.cause.EventContext.Builder
                        /**
                         * Gets the value corresponding to the given key from the context.
                         * @param key The key
                         * @param <T> The type of the value stored with the key
                         * @return The context value, if found
                         */
                        // @ts-ignore
                        public get<T>(key: org.spongepowered.api.event.cause.EventContextKey<T>): java.util.Optional<T>
                        /**
                         * Gets the value corresponding to the given key from the context.
                         * <p>If the key is not available, {@link NoSuchElementException} will be
                         * thrown.</p>
                         * @param key The key
                         * @param <T> The type of the value stored with the key
                         * @return The context value, if found
                         */
                        // @ts-ignore
                        public require<T>(key: org.spongepowered.api.event.cause.EventContextKey<T>): T
                        /**
                         * Gets whether the provided {@link EventContextKey} is included in this
                         * context.
                         * @param key The context key to check
                         * @return True if the key is used and there is an entry for it
                         */
                        // @ts-ignore
                        public containsKey(key: org.spongepowered.api.event.cause.EventContextKey<any>): boolean
                        /**
                         * Gets all {@link EventContextKey}s present in this context.
                         * @return All present keys
                         */
                        // @ts-ignore
                        public keySet(): Array<org.spongepowered.api.event.cause.EventContextKey<any>>
                        /**
                         * Gets this event context as a {@link Map} of EventContextKeys to Objects.
                         * @return A map view of this context
                         */
                        // @ts-ignore
                        public asMap(): java.util.Map<org.spongepowered.api.event.cause.EventContextKey<any>, java.lang.Object | any>
                        // @ts-ignore
                        public equals(object: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
