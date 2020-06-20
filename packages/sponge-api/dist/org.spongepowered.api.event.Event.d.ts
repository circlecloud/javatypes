declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                /**
                 * An event called within Sponge.
                 * <p>This is a marker interface, which must be implemented by any event used
                 * with the Sponge event bus.</p>
                 */
                // @ts-ignore
                interface Event {
                    /**
                     * Gets the cause for the event.  The Cause of the event
                     * is an object which implements the Iterable interface.
                     * So, when investigating the Cause of the event a common
                     * idiom is to use operations (functions) on the result
                     * of getCause as follows:
                     * Use-case: Getting the Player (if any) responsible:
                     * {@code Optional<Player> optPlayer = event.getCause().first(Player.class);}
                     * @return The cause
                     */
                    // @ts-ignore
                    getCause(): org.spongepowered.api.event.cause.Cause
                    /**
                     * Gets the source of the event (the first object in the cause).
                     * @return The event source
                     */
                    // @ts-ignore
                    getSource(): java.lang.Object
                    /**
                     * Gets the context of the event.
                     * @return The event context
                     */
                    // @ts-ignore
                    getContext(): org.spongepowered.api.event.cause.EventContext
                }
            }
        }
    }
}
