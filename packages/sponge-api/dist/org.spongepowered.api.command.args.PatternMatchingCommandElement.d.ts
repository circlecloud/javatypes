declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace args {
                    /**
                     * Abstract command element that matches values based on pattern.
                     */
                    // @ts-ignore
                    abstract class PatternMatchingCommandElement extends org.spongepowered.api.command.args.CommandElement {
                        // @ts-ignore
                        constructor(key: org.spongepowered.api.text.Text)
                        // @ts-ignore
                        parseValue(source: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandArgs): any
                        // @ts-ignore
                        public complete(src: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandArgs, context: org.spongepowered.api.command.args.CommandContext): Array<java.lang.String | string>
                        /**
                         * Tests a string against a set of valid choices to see if it is a
                         * case-insensitive match.
                         * @param choices The choices available to match against
                         * @param potentialChoice The potential choice
                         * @return If matched, an {#link Optional} containing the matched value
                         */
                        // @ts-ignore
                        getExactMatch(choices: java.lang.Iterable<java.lang.String | string>, potentialChoice: java.lang.String | string): java.util.Optional<java.lang.Object | any>
                        /**
                         * Gets the available choices for this command source.
                         * @param source The source requesting choices
                         * @return the possible choices
                         */
                        // @ts-ignore
                        abstract getChoices(source: org.spongepowered.api.command.CommandSource): java.lang.Iterable<java.lang.String | string>
                        /**
                         * Gets the value for a given choice. For any result in
                         * {@link #getChoices(CommandSource)}, this must return a non-null value.
                         * Otherwise, an {@link IllegalArgumentException} may be throw.
                         * @param choice The specified choice
                         * @return the choice's value
                         * @throws IllegalArgumentException if the input string is not any return
                         *          value of {#link #getChoices(CommandSource)}
                         */
                        // @ts-ignore
                        abstract getValue(choice: java.lang.String | string): any
                    }
                }
            }
        }
    }
}
