declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                /**
                 * Used for events that require a tri-state {@link Result}.
                 */
                // @ts-ignore
                interface TristateResult {
                    /**
                     * Returns whether the
                     * {@link TristateResult.Result#ALLOW} can be
                     * used.
                     * @return Whether allow can be used
                     */
                    // @ts-ignore
                    hasAllowResult(): boolean
                    /**
                     * Returns the original {@link Result} of this event.
                     * @return The original result of this event
                     */
                    // @ts-ignore
                    getOriginalResult(): org.spongepowered.api.event.TristateResult.Result
                    /**
                     * Returns the {@link Result} of this event.
                     * @return The result of this event
                     */
                    // @ts-ignore
                    getResult(): org.spongepowered.api.event.TristateResult.Result
                    /**
                     * Sets the result value for this event.
                     * <p> Note: The functionality of setting the {@link Result} is defined on a
                     * per-event basis.</p>
                     * @param value The new result
                     * @throws IllegalStateException if
                     *      {#link TristateResult.Result#ALLOW} is
                     *      given, but {@link #hasAllowResult} is {@code false}
                     */
                    // @ts-ignore
                    setResult(value: org.spongepowered.api.event.TristateResult.Result): void
                }
            }
        }
    }
}
