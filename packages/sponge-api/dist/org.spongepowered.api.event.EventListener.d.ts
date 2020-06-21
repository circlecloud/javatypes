declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                /**
                 * Represents a listener accepting {@link Event}s of a specified type.
                 * @param <T> The type of the event
                 */
                // @ts-ignore
                interface EventListener<T extends org.spongepowered.api.event.Event> {
                    /**
                     * Called when a {@link Event} registered to this listener is called.
                     * @param event The called event
                     * @throws Exception If an error occurs
                     */
                    // @ts-ignore
                    handle(event: T): void
                }
            }
        }
    }
}
