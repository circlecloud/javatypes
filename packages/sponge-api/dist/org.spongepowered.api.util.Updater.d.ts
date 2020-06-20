declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                /**
                 * An updater that will take a {@code type} and update it
                 * across different versions. Whether this is applicable to
                 * serialization or object management is not required.
                 * @param <C> The type of object being updated
                 */
                // @ts-ignore
                interface Updater<C> {
                    /**
                     * Gets the numerical {@code version} that this {@link Updater}
                     * can accept.
                     * @return The numerical input version
                     */
                    // @ts-ignore
                    getInputVersion(): int
                    /**
                     * The outputted {@code version} that this {@link Updater} will
                     * output to. Note that it is possible multiple updaters are able to
                     * cross between different versions.
                     * @return The numerical output version
                     */
                    // @ts-ignore
                    getOutputVersion(): int
                    /**
                     * Attempts to update the content of {@code C} as long as the content
                     * version itself has been abided by.
                     * @param content The content to update
                     * @return The updated content
                     */
                    // @ts-ignore
                    update(content: C): C
                }
            }
        }
    }
}
