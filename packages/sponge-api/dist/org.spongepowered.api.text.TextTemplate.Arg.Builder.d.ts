declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace TextTemplate {
                    namespace Arg {
                        /**
                         * Represents a builder for {@link Arg}s.
                         */
                        // @ts-ignore
                        class Builder extends java.lang.Object {
                            /**
                             * Builds a new {@link Arg}. Note that it is not necessary to call
                             * this method when supplying an argument to a template. You may
                             * pass the builder to {@link TextTemplate#of(Object...)} directly.
                             * @return Newly created Arg
                             */
                            // @ts-ignore
                            public build(): org.spongepowered.api.text.TextTemplate.Arg
                            /**
                             * Sets whether the Arg should be optional (false by default).
                             * @param optional True if should be optional
                             * @return This builder
                             */
                            // @ts-ignore
                            public optional(optional: boolean): org.spongepowered.api.text.TextTemplate.Arg.Builder
                            /**
                             * Makes the Arg optional.
                             * @return This builder
                             */
                            // @ts-ignore
                            public optional(): org.spongepowered.api.text.TextTemplate.Arg.Builder
                            /**
                             * Sets the default value for the Argument. The argument must by
                             * optional in order for this value to be used.
                             * @param defaultValue Default value
                             * @return This builder
                             */
                            // @ts-ignore
                            public defaultValue(defaultValue: org.spongepowered.api.text.Text): org.spongepowered.api.text.TextTemplate.Arg.Builder
                            /**
                             * Sets the "base" format of the Arg. This acts as a default format
                             * when no formatting data is provided by the parameter.
                             * @param format Base format of Arg
                             * @return This builder
                             */
                            // @ts-ignore
                            public format(format: org.spongepowered.api.text.format.TextFormat): org.spongepowered.api.text.TextTemplate.Arg.Builder
                            /**
                             * Sets the "base" color of the Arg. This acts as a default color
                             * when no color data is provided by the parameter.
                             * @param color Base color of Arg
                             * @return This builder
                             */
                            // @ts-ignore
                            public color(color: org.spongepowered.api.text.format.TextColor): org.spongepowered.api.text.TextTemplate.Arg.Builder
                            /**
                             * Sets the "base" style of the Arg. This acts as a default style
                             * when no style data is provided by the parameter.
                             * @param style Base style of Arg
                             * @return This builder
                             */
                            // @ts-ignore
                            public style(style: org.spongepowered.api.text.format.TextStyle): org.spongepowered.api.text.TextTemplate.Arg.Builder
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
