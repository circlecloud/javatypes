declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace selector {
                    /**
                     * Represents the type of an {@link Argument}. This represents a single argument
                     * key in a {@link Selector}.
                     * @param <T> The type for the value of this argument type
                     * @see Selector
                     * @see Argument
                     * @see ArgumentTypes
                     */
                    // @ts-ignore
                    interface ArgumentType<T> extends org.spongepowered.api.text.selector.ArgumentHolder<org.spongepowered.api.text.selector.ArgumentType<T>> {
                        /**
                         * Returns the key associated with this {@link ArgumentType}.
                         * @return The key of this argument type
                         */
                        // @ts-ignore
                        getKey(): java.lang.String
                        /**
                         * Returns 1.
                         * @return 1
                         */
                        // @ts-ignore
                        getCount(): int
                        /**
                         * Returns a set containing this {@link ArgumentType}.
                         * @return A set containing this {#link ArgumentType}
                         */
                        // @ts-ignore
                        getTypes(): java.util.Set<org.spongepowered.api.text.selector.ArgumentType<T>>
                    }
                }
            }
        }
    }
}
