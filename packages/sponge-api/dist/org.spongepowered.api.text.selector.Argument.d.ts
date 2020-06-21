declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace selector {
                    /**
                     * Represents the argument of a {@link Selector selector}. An Argument is one or
                     * more key-to-value mappings ({@code key=value}) with the key represented by an
                     * {@link ArgumentType}.
                     * @param <T> The type of the value
                     */
                    // @ts-ignore
                    interface Argument<T> {
                        /**
                         * Creates a new {@link Argument} using the specified type and value.
                         * <p>If the type is invertible, the {@link Argument} will not be
                         * inverted.</p>
                         * @param type The type of the argument
                         * @param value The value of the argument
                         * @param <T> The type of the argument value
                         * @return The created argument
                         */
                        // @ts-ignore
                        create<T>(type: org.spongepowered.api.text.selector.ArgumentType<T>, value: T): org.spongepowered.api.text.selector.Argument<T>
                        /**
                         * Creates a new {@link Argument.Invertible} using the specified type and
                         * value. The created {@link Argument} will be inverted based on the given
                         * parameter.
                         * @param type The type of the invertible argument
                         * @param value The value of the invertible argument
                         * @param inverted {#code true} if the argument should be inverted
                         * @param <T> The type of the argument value
                         * @return The created invertible argument
                         */
                        // @ts-ignore
                        create<T>(type: org.spongepowered.api.text.selector.ArgumentType.Invertible<T>, value: T, inverted: boolean): org.spongepowered.api.text.selector.Argument.Invertible<T>
                        /**
                         * Creates a new set of {@link Argument}s using the specified type and
                         * value.
                         * @param type The type of the arguments
                         * @param value The value of the arguments
                         * @param <T> The type of the arguments' joined value
                         * @param <V> The type of the arguments' sub-values
                         * @return The created argument
                         */
                        // @ts-ignore
                        createSet<T, V>(type: org.spongepowered.api.text.selector.ArgumentHolder<any>, value: V): Array<org.spongepowered.api.text.selector.Argument<T>>
                        /**
                         * Parses an {@link Argument} from the given argument string.
                         * <p>In Vanilla, it should be formatted like {@code key=value}.</p>
                         * @param argument The argument string
                         * @return The parsed argument
                         * @throws IllegalArgumentException If the argument couldn't be parsed (e.g.
                         *          due to invalid format)
                         */
                        // @ts-ignore
                        parse(argument: java.lang.String | string): org.spongepowered.api.text.selector.Argument<any>
                        /**
                         * Returns the type of this {@link Argument}.
                         * @return The type of this argument
                         */
                        // @ts-ignore
                        getType(): org.spongepowered.api.text.selector.ArgumentType<T>
                        /**
                         * Returns the value of this {@link Argument}.
                         * @return The value of this argument
                         */
                        // @ts-ignore
                        getValue(): T
                        /**
                         * Converts this {@link Argument} to a valid argument string.
                         * @return The plain argument string
                         */
                        // @ts-ignore
                        toPlain(): string
                    }
                }
            }
        }
    }
}
