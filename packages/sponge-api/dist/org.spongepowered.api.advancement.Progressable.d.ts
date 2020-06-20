declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                /**
                 * Represents the status that is achieved or is in
                 * the process of being achieved.
                 */
                // @ts-ignore
                interface Progressable {
                    /**
                     * Gets whether this {@link Progressable} is achieved.
                     * @return Is achieved
                     */
                    // @ts-ignore
                    achieved(): boolean
                    /**
                     * Gets the time that the {@link Progressable} was
                     * achieved if present.
                     * @return The achieving time, if present
                     */
                    // @ts-ignore
                    get(): java.util.Optional<java.time.Instant>
                    /**
                     * Grants this {@link Progressable}, if achieved before
                     * that time will be returned.
                     * @return The achieving time
                     */
                    // @ts-ignore
                    grant(): java.time.Instant
                    /**
                     * Revokes the {@link Progressable} status. The time that the {@link Progressable}
                     * was achieved before will be returned if present.
                     * @return The previous achieving time, if present
                     */
                    // @ts-ignore
                    revoke(): java.util.Optional<java.time.Instant>
                }
            }
        }
    }
}
