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
                        empty(): org.spongepowered.api.event.cause.EventContext
                        /**
                         * Creates a new {@link EventContext} from the given map of entries.
                         * @param entries The context entries
                         * @return The new EventContext
                         */
                        // @ts-ignore
                        of(entries: java.util.Map<org.spongepowered.api.event.cause.EventContextKey<any>, java.lang.Object>): org.spongepowered.api.event.cause.EventContext
                        /**
                         * Creates a new builder for creating an {@link EventContext}.
                         * @return The new builder
                         */
                        // @ts-ignore
                        builder(): org.spongepowered.api.event.cause.EventContext.Builder
                        /**
                         * Gets the value corresponding to the given key from the context.
                         * @param key The key
                         * @param <T> The type of the value stored with the key
                         * @return The context value, if found
                         */
                        // @ts-ignore
                        get<T>(key: org.spongepowered.api.event.cause.EventContextKey<T>): java.util.Optional<T>
                        /**
                         * Gets the value corresponding to the given key from the context.
                         * <p>If the key is not available, {@link NoSuchElementException} will be
                         * thrown.</p>
                         * @param key The key
                         * @param <T> The type of the value stored with the key
                         * @return The context value, if found
                         */
                        // @ts-ignore
                        require<T>(key: org.spongepowered.api.event.cause.EventContextKey<T>): T
                        /**
                         * Gets whether the provided {@link EventContextKey} is included in this
                         * context.
                         * @param key The context key to check
                         * @return True if the key is used and there is an entry for it
                         */
                        // @ts-ignore
                        containsKey(key: org.spongepowered.api.event.cause.EventContextKey<any>): boolean
                        /**
                         * Gets all {@link EventContextKey}s present in this context.
                         * @return All present keys
                         */
                        // @ts-ignore
                        keySet(): java.util.Set<org.spongepowered.api.event.cause.EventContextKey<?>>
                        /**
                         * Gets this event context as a {@link Map} of EventContextKeys to Objects.
                         * @return A map view of this context
                         */
                        // @ts-ignore
                        asMap(): java.util.Map<org.spongepowered.api.event.cause.EventContextKey<?>, java.lang.Object>
                        // @ts-ignore
                        equals(object: any): boolean
                        // @ts-ignore
                        hashCode(): int
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
