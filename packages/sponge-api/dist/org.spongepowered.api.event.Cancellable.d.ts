declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                /**
                 * Represents an event that can be cancelled.
                 */
                // @ts-ignore
                interface Cancellable {
                    /**
                     * Gets if the {@link Event} has been cancelled.
                     * @return Is this event cancelled
                     */
                    // @ts-ignore
                    isCancelled(): boolean
                    /**
                     * Sets the cancelled state of the {@link Event}.
                     * @param cancel The new cancelled state
                     */
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                }
            }
        }
    }
}
