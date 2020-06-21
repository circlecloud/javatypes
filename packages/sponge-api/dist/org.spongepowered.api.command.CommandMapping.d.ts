declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                /**
                 * Provides information about a mapping between a command and its aliases.
                 * <p>Implementations are not required to implement a sane
                 * {@link Object#equals(Object)} but may choose to do so.</p>
                 */
                // @ts-ignore
                interface CommandMapping {
                    /**
                     * Gets the primary alias.
                     * @return The primary alias
                     */
                    // @ts-ignore
                    getPrimaryAlias(): string
                    /**
                     * Gets an immutable list of all aliases.
                     * <p>The returned list must contain at least one entry, of which one must
                     * be the one returned by {@link #getPrimaryAlias()}.</p>
                     * <p>There may be several versions of the same alias with different
                     * casing, although generally implementations should ignore the casing
                     * of aliases.</p>
                     * @return A set of aliases
                     */
                    // @ts-ignore
                    getAllAliases(): Array<java.lang.String | string>
                    /**
                     * Gets the callable.
                     * @return The callable
                     */
                    // @ts-ignore
                    getCallable(): org.spongepowered.api.command.CommandCallable
                }
            }
        }
    }
}
