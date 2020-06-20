declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace selector {
                    namespace Selector {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.text.selector.Selector, org.spongepowered.api.text.selector.Selector.Builder> {
                            /**
                             * Sets the type of this selector.
                             * @param type The type to set
                             * @return This selector builder
                             */
                            // @ts-ignore
                            type(type: org.spongepowered.api.text.selector.SelectorType): org.spongepowered.api.text.selector.Selector.Builder
                            /**
                             * Adds some arguments to this selector.
                             * @param arguments The arguments to add
                             * @return This selector builder
                             */
                            // @ts-ignore
                            add(...arguments: org.spongepowered.api.text.selector.Argument[]): org.spongepowered.api.text.selector.Selector.Builder
                            /**
                             * Adds some arguments to this selector.
                             * @param arguments The arguments to add
                             * @return This selector builder
                             */
                            // @ts-ignore
                            add(arguments: java.lang.Iterable<org.spongepowered.api.text.selector.Argument<any>>): org.spongepowered.api.text.selector.Selector.Builder
                            /**
                             * Adds a new {@link Argument} with the specified {@link ArgumentType} and
                             * value to this selector.
                             * @param type The type of the argument
                             * @param value The value of the argument
                             * @param <T> The type of the argument value
                             * @return This selector builder
                             */
                            // @ts-ignore
                            add<T>(type: org.spongepowered.api.text.selector.ArgumentType<T>, value: T): org.spongepowered.api.text.selector.Selector.Builder
                            /**
                             * Removes the specified arguments, if they exist.
                             * @param arguments The arguments to remove
                             * @return This selector builder
                             */
                            // @ts-ignore
                            remove(...arguments: org.spongepowered.api.text.selector.Argument[]): org.spongepowered.api.text.selector.Selector.Builder
                            /**
                             * Removes the specified arguments, if they exist.
                             * @param arguments The arguments to remove
                             * @return This selector builder
                             */
                            // @ts-ignore
                            remove(arguments: java.lang.Iterable<org.spongepowered.api.text.selector.Argument<any>>): org.spongepowered.api.text.selector.Selector.Builder
                            /**
                             * Removes the arguments with the specified {@link ArgumentType}, if they
                             * exist.
                             * @param types The argument types
                             * @return This selector builder
                             */
                            // @ts-ignore
                            remove(...types: org.spongepowered.api.text.selector.ArgumentType[]): org.spongepowered.api.text.selector.Selector.Builder
                            /**
                             * Builds an immutable instance of the current state of this selector
                             * builder.
                             * @return An immutable {#link Selector} with the current properties of this
                             *          builder
                             */
                            // @ts-ignore
                            build(): org.spongepowered.api.text.selector.Selector
                        }
                    }
                }
            }
        }
    }
}
