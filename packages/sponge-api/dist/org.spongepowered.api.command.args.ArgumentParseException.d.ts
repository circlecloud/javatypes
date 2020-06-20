declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace args {
                    /**
                     * Exception thrown when an error occurs while parsing arguments.
                     */
                    // @ts-ignore
                    class ArgumentParseException extends org.spongepowered.api.command.CommandException {
                        /**
                         * Return a new {@link ArgumentParseException} with the given message, source and position.
                         * @param message The message to use for this exception
                         * @param source The source string being parsed
                         * @param position The current position in the source string
                         */
                        // @ts-ignore
                        constructor(message: org.spongepowered.api.text.Text, source: string, position: number /*int*/)
                        /**
                         * Return a new {@link ArgumentParseException} with the given message, cause, source and position.
                         * @param message The message to use for this exception
                         * @param cause The cause for this exception
                         * @param source The source string being parsed
                         * @param position The current position in the source string
                         */
                        // @ts-ignore
                        constructor(message: org.spongepowered.api.text.Text, cause: Error, source: string, position: number /*int*/)
                        // @ts-ignore
                        getText(): org.spongepowered.api.text.Text
                        /**
                         * Return a string pointing to the position of the arguments when this
                         * exception occurs.
                         * @return The appropriate position string
                         */
                        // @ts-ignore
                        getAnnotatedPosition(): java.lang.String
                        /**
                         * Gets the position of the last fetched argument in the provided source
                         * string.
                         * @return The source string to get position for
                         */
                        // @ts-ignore
                        getPosition(): int
                        /**
                         * Returns the source string arguments are being parsed from.
                         * @return The source string
                         */
                        // @ts-ignore
                        getSourceString(): java.lang.String
                    }
                }
            }
        }
    }
}
