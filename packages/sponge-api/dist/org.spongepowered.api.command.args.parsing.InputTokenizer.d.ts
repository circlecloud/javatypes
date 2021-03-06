declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace args {
                    namespace parsing {
                        // @ts-ignore
                        interface InputTokenizer {
                            /**
                             * Use an input string tokenizer that supports quoted arguments and
                             * character escapes.
                             * <p>Forcing lenient to true makes the following apply:</p>
                             * <ul>
                             * <li>Unclosed quotations are treated as a single string from the
                             * opening quotation to the end of the arguments rather than throwing
                             * an exception </li>
                             * </ul>
                             * @param forceLenient Whether the tokenizer is forced into lenient mode
                             * @return the appropriate tokenizer
                             */
                            // @ts-ignore
                            quotedStrings(forceLenient: boolean): org.spongepowered.api.command.args.parsing.InputTokenizer
                            /**
                             * Returns an input tokenizer that takes input strings and splits them by
                             * space.
                             * @return The appropriate tokenizer
                             */
                            // @ts-ignore
                            spaceSplitString(): org.spongepowered.api.command.args.parsing.InputTokenizer
                            /**
                             * Returns an input tokenizer that returns the input string as a single
                             * argument.
                             * @return The appropriate tokenizer
                             */
                            // @ts-ignore
                            rawInput(): org.spongepowered.api.command.args.parsing.InputTokenizer
                            /**
                             * Take the input string and split it as appropriate into argument tokens.
                             * @param arguments The provided arguments
                             * @param lenient Whether to parse leniently
                             * @return The tokenized strings. Empty list if error occurs
                             * @throws ArgumentParseException if an invalid input is provided
                             */
                            // @ts-ignore
                            tokenize(arguments: java.lang.String | string, lenient: boolean): Array<org.spongepowered.api.command.args.parsing.SingleArg>
                        }
                    }
                }
            }
        }
    }
}
