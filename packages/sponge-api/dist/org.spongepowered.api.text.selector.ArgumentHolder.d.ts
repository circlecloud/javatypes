declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace selector {
                    /**
                     * Represents a holder of {@link ArgumentHolder}s. This interface is extended by
                     * both Vector3 and Limit. It is also extended by {@link ArgumentType}, as any
                     * {@link ArgumentType} "holds" itself. This also allows for Limit to have more
                     * strict upper bound on its maximum and minimum to allow a
                     * {@code Limit<Vector3>} without allowing {@code Limit<Object>}.
                     * @param <T> The type for the value of this argument holder
                     * @see ArgumentType
                     * @see ArgumentTypes
                     */
                    // @ts-ignore
                    interface ArgumentHolder<T extends org.spongepowered.api.text.selector.ArgumentHolder<?>> {
                        /**
                         * Returns the size of the Set from {@link #getTypes()}.
                         * @return The size of the Set from {#link #getTypes()}
                         */
                        // @ts-ignore
                        getCount(): number /*int*/
                        /**
                         * Returns a set containing all the {@link ArgumentHolder}s this
                         * {@link ArgumentHolder} holds.
                         * @return A set containing all the {#link ArgumentHolder}s this
                         *          {@link ArgumentHolder} holds
                         */
                        // @ts-ignore
                        getTypes(): Array<T>
                    }
                }
            }
        }
    }
}
