declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace selector {
                    /**
                     * Internal implementation factory: Use the methods in
                     * {@link Selector}, {@link Argument} and {@link ArgumentTypes} instead.
                     */
                    // @ts-ignore
                    interface SelectorFactory {
                        /**
                         * Creates a {@link Selector.Builder}.
                         * @return A new selector builder with the specified type
                         */
                        // @ts-ignore
                        createBuilder(): org.spongepowered.api.text.selector.Selector.Builder
                        /**
                         * Parses a {@link Selector} from the given selector string.
                         * @param selector The raw selector string
                         * @return A new selector containing the given selector data
                         */
                        // @ts-ignore
                        parseRawSelector(selector: string): org.spongepowered.api.text.selector.Selector
                        /**
                         * Creates a minimum and maximum {@link ArgumentType} filtering depending on
                         * the score of the specified objective.
                         * @param name The objective name to use
                         * @return The created argument type
                         */
                        // @ts-ignore
                        createScoreArgumentType(name: string): org.spongepowered.api.text.selector.ArgumentHolder.Limit<org.spongepowered.api.text.selector.ArgumentType<java.lang.Integer>>
                        /**
                         * Gets the {@link ArgumentType} with the provided name.
                         * @param name The name of the argument type
                         * @return The {#link ArgumentType} with the given name or Optional.empty()
                         *          if not found
                         */
                        // @ts-ignore
                        getArgumentType(name: string): java.util.Optional<org.spongepowered.api.text.selector.ArgumentType<?>>
                        /**
                         * Gets a {@link Collection} of all possible {@link ArgumentType}s.
                         * @return The list of all available {#link ArgumentType}s
                         */
                        // @ts-ignore
                        getArgumentTypes(): java.util.Collection<org.spongepowered.api.text.selector.ArgumentType<?>>
                        /**
                         * Creates a custom {@link ArgumentType} with the specified key.
                         * @param key The key to use for the argument
                         * @return The created argument type
                         */
                        // @ts-ignore
                        createArgumentType(key: string): org.spongepowered.api.text.selector.ArgumentType<java.lang.String>
                        /**
                         * Creates a custom {@link ArgumentType} with the specified key and value.
                         * @param key The key to use for the argument
                         * @param type The class of the argument's value type
                         * @param <T> The argument's value type
                         * @return The created argument type
                         */
                        // @ts-ignore
                        createArgumentType<T>(key: string, type: java.lang.Class<T>): org.spongepowered.api.text.selector.ArgumentType<T>
                        /**
                         * Creates a new {@link Argument} using the specified type and value.
                         * @param type The type of the argument
                         * @param value The value of the argument
                         * @param <T> The type of the argument value
                         * @return The created argument
                         */
                        // @ts-ignore
                        createArgument<T>(type: org.spongepowered.api.text.selector.ArgumentType<T>, value: T): org.spongepowered.api.text.selector.Argument<T>
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
                        createArgument<T>(type: org.spongepowered.api.text.selector.ArgumentType.Invertible<T>, value: T, inverted: boolean): org.spongepowered.api.text.selector.Argument.Invertible<T>
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
                        createArguments<T, V>(type: org.spongepowered.api.text.selector.ArgumentHolder<org.spongepowered.api.text.selector.ArgumentType<T>>, value: V): java.util.Set<org.spongepowered.api.text.selector.Argument<T>>
                        /**
                         * Parses an {@link Argument} from the given argument string.
                         * <p>In Vanilla, it should be formatted like {@code key=value}.</p>
                         * @param argument The argument string
                         * @return The parsed argument
                         * @throws IllegalArgumentException If the argument couldn't be parsed (e.g.
                         *          due to invalid format)
                         */
                        // @ts-ignore
                        parseArgument(argument: string): org.spongepowered.api.text.selector.Argument<?>
                        /**
                         * Fetch completions for a selector command argument.
                         * @param selector The partial selector
                         * @return Tab completions for the next part of the selector
                         */
                        // @ts-ignore
                        complete(selector: string): java.util.List<java.lang.String>
                    }
                }
            }
        }
    }
}
