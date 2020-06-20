declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace selector {
                    namespace ArgumentHolder {
                        /**
                         * Represents the holder of two objects with a minimal and maximal argument
                         * holder.
                         * @param <T> The type of the argument holder
                         */
                        // @ts-ignore
                        interface Limit<T extends org.spongepowered.api.text.selector.ArgumentHolder<?>> extends org.spongepowered.api.text.selector.ArgumentHolder<T> {
                            /**
                             * Returns the minimum object of this {@link ArgumentHolder.Limit}.
                             * @return The minimum object
                             */
                            // @ts-ignore
                            minimum(): T
                            /**
                             * Returns the maximum object of this {@link ArgumentHolder.Limit}.
                             * @return The maximum object
                             */
                            // @ts-ignore
                            maximum(): T
                        }
                    }
                }
            }
        }
    }
}
