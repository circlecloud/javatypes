declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace selector {
                    namespace ArgumentHolder {
                        /**
                         * Represents the holder of three {@link ArgumentType}s {@code x}, {@code y}
                         * , and {@code z}.
                         * @param <V> The type of the vector
                         * @param <T> The type of the components of the vector
                         */
                        // @ts-ignore
                        interface Vector3<V, T> extends org.spongepowered.api.text.selector.ArgumentHolder<org.spongepowered.api.text.selector.ArgumentType<T>> {
                            /**
                             * Gets the {@link ArgumentType} for the x coordinate of this
                             * {@link ArgumentHolder.Vector3}.
                             * @return The x coordinate argument type
                             */
                            // @ts-ignore
                            x(): org.spongepowered.api.text.selector.ArgumentType<T>
                            /**
                             * Gets the {@link ArgumentType} for the y coordinate of this
                             * {@link ArgumentHolder.Vector3}.
                             * @return The y coordinate argument type
                             */
                            // @ts-ignore
                            y(): org.spongepowered.api.text.selector.ArgumentType<T>
                            /**
                             * Gets the {@link ArgumentType} for the z coordinate of this
                             * {@link ArgumentHolder.Vector3}.
                             * @return The z coordinate argument type
                             */
                            // @ts-ignore
                            z(): org.spongepowered.api.text.selector.ArgumentType<T>
                        }
                    }
                }
            }
        }
    }
}
