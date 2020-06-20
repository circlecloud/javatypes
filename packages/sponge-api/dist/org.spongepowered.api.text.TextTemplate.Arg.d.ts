declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace TextTemplate {
                    /**
                     * Represents a variable element within a TextTemplate. Arguments are
                     * replaced by parameters in {@link #apply(Map)}.
                     */
                    // @ts-ignore
                    class Arg extends java.lang.Object implements org.spongepowered.api.text.TextRepresentable {
                        /**
                         * Returns the name of this argument to be matched with incoming
                         * parameters.
                         * @return Argument name
                         */
                        // @ts-ignore
                        getName(): java.lang.String
                        /**
                         * Returns true if this Arg is optional. If a parameter is missing for
                         * a non-optional Arg, a {@link TextTemplateArgumentException} will be
                         * thrown.
                         * @return True if optional
                         */
                        // @ts-ignore
                        isOptional(): boolean
                        /**
                         * Returns the default value to use if the Arg {@link #isOptional()}
                         * and no parameter is supplied.
                         * @return Default value
                         */
                        // @ts-ignore
                        getDefaultValue(): java.util.Optional<org.spongepowered.api.text.Text>
                        /**
                         * Returns the base format to be applied to this Arg.
                         * @return Base format
                         */
                        // @ts-ignore
                        getFormat(): org.spongepowered.api.text.format.TextFormat
                        /**
                         * Returns the beginning string of the Arg's container.
                         * @return Open string
                         */
                        // @ts-ignore
                        getOpenArgString(): java.lang.String
                        /**
                         * Returns the end string of the Arg's container.
                         * @return Close string
                         */
                        // @ts-ignore
                        getCloseArgString(): java.lang.String
                        // @ts-ignore
                        toText(): org.spongepowered.api.text.Text
                        // @ts-ignore
                        toString(): java.lang.String
                        // @ts-ignore
                        hashCode(): int
                        // @ts-ignore
                        equals(obj: any): boolean
                    }
                }
            }
        }
    }
}
