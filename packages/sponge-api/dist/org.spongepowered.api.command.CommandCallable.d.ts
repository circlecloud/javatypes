declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                /**
                 * A low-level interface for commands that can be executed. For almost all use
                 * cases, higher-level tools should be used instead, like {@link CommandSpec}.
                 * <p>Implementations are not required to implement a sane
                 * {@link Object#equals(Object)} but really should.</p>
                 */
                // @ts-ignore
                interface CommandCallable {
                    /**
                     * Execute the command based on input arguments.
                     * <p>The implementing class must perform the necessary permission
                     * checks.</p>
                     * @param source The caller of the command
                     * @param arguments The raw arguments for this command
                     * @return The result of a command being processed
                     * @throws CommandException Thrown on a command error
                     */
                    // @ts-ignore
                    process(source: org.spongepowered.api.command.CommandSource, arguments: java.lang.String | string): org.spongepowered.api.command.CommandResult
                    /**
                     * Gets a list of suggestions based on input.
                     * <p>If a suggestion is chosen by the user, it will replace the last
                     * word.</p>
                     * @param source The command source
                     * @param arguments The arguments entered up to this point
                     * @param targetPosition The position the source is looking at when
                     *      performing tab completion
                     * @return A list of suggestions
                     * @throws CommandException Thrown if there was a parsing error
                     */
                    // @ts-ignore
                    getSuggestions(source: org.spongepowered.api.command.CommandSource, arguments: java.lang.String | string, targetPosition: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>): Array<java.lang.String | string>
                    /**
                     * Test whether this command can probably be executed by the given source.
                     * <p>If implementations are unsure if the command can be executed by
                     * the source, {@code true} should be returned. Return values of this method
                     * may be used to determine whether this command is listed in command
                     * listings.</p>
                     * @param source The caller of the command
                     * @return Whether permission is (probably) granted
                     */
                    // @ts-ignore
                    testPermission(source: org.spongepowered.api.command.CommandSource): boolean
                    /**
                     * Gets a short one-line description of this command.
                     * <p>The help system may display the description in the command list.</p>
                     * @param source The source of the help request
                     * @return A description
                     */
                    // @ts-ignore
                    getShortDescription(source: org.spongepowered.api.command.CommandSource): java.util.Optional<org.spongepowered.api.text.Text>
                    /**
                     * Gets a longer formatted help message about this command.
                     * <p>It is recommended to use the default text color and style. Sections
                     * with text actions (e.g. hyperlinks) should be underlined.</p>
                     * <p>Multi-line messages can be created by separating the lines with
                     * {@code \n}.</p>
                     * <p>The help system may display this message when a source requests
                     * detailed information about a command.</p>
                     * @param source The source of the help request
                     * @return A help text
                     */
                    // @ts-ignore
                    getHelp(source: org.spongepowered.api.command.CommandSource): java.util.Optional<org.spongepowered.api.text.Text>
                    /**
                     * Gets the usage string of this command.
                     * <p>A usage string may look like
                     * {@code [-w &lt;world&gt;] &lt;var1&gt; &lt;var2&gt;}.</p>
                     * <p>The string must not contain the command alias.</p>
                     * @param source The source of the help request
                     * @return A usage string
                     */
                    // @ts-ignore
                    getUsage(source: org.spongepowered.api.command.CommandSource): org.spongepowered.api.text.Text
                }
            }
        }
    }
}
