declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                /**
                 * All {@link Event}s that want to one generic
                 * type should implement this interface.
                 * @param <T> The generic type
                 */
                // @ts-ignore
                interface GenericEvent<T> extends org.spongepowered.api.event.Event {
                    /**
                     * Gets the generic {@link TypeToken} used
                     * by this {@link Event}.
                     * @return The type token
                     */
                    // @ts-ignore
                    getGenericType(): object
                }
            }
        }
    }
}
