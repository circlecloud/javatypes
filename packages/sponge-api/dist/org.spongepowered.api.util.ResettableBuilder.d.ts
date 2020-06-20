declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                /**
                 * A common interface for all builder pattern types.
                 * @param <T> The type built by the builder
                 * @param <B> The child builder type
                 */
                // @ts-ignore
                interface ResettableBuilder<T, B extends org.spongepowered.api.util.ResettableBuilder<T, B>> {
                    /**
                     * Resets this builder to the values of the given built object.
                     * @param value The built object
                     * @return This builder, for chaining
                     */
                    // @ts-ignore
                    from(value: T): B
                    /**
                     * Resets this builder to a "default" state such that there is no
                     * remaining data to set. This is to be the presumed "default"
                     * state.
                     * @return This builder, for chaining
                     */
                    // @ts-ignore
                    reset(): B
                }
            }
        }
    }
}
