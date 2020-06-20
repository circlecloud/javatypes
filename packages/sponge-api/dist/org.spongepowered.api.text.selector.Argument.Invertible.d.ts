declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace selector {
                    namespace Argument {
                        /**
                         * Represents an {@link Argument} which can be inverted to select all
                         * targets not matching the filter.
                         * @param <T> The type of the value
                         * @see Argument
                         */
                        // @ts-ignore
                        interface Invertible<T> extends org.spongepowered.api.text.selector.Argument<T> {
                            /**
                             * Returns whether this {@link Argument} is inverted and will select all
                             * targets not matching the filter.
                             * @return Whether this argument is inverted
                             */
                            // @ts-ignore
                            isInverted(): boolean
                            /**
                             * Inverts this {@link Argument.Invertible} argument and returns the new
                             * {@link Argument}. The new argument will select all targets this
                             * argument didn't select.
                             * @return The inverted argument
                             */
                            // @ts-ignore
                            invert(): org.spongepowered.api.text.selector.Argument.Invertible<T>
                        }
                    }
                }
            }
        }
    }
}
