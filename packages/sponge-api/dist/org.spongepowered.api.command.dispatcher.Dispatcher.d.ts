declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace dispatcher {
                    /**
                     * Executes a command based on user input.
                     */
                    // @ts-ignore
                    interface Dispatcher extends org.spongepowered.api.command.CommandCallable {
                        /**
                         * Gets a list of commands. Each command, regardless of how many aliases it
                         * may have, will only appear once in the returned set.
                         * <p>The returned collection cannot be modified.</p>
                         * @return A list of registrations
                         */
                        // @ts-ignore
                        getCommands(): Array<any>
                        /**
                         * Gets a list of primary aliases.
                         * <p>The returned collection cannot be modified.</p>
                         * @return A list of aliases
                         */
                        // @ts-ignore
                        getPrimaryAliases(): Array<java.lang.String | string>
                        /**
                         * Gets a list of all the command aliases, which includes the primary alias.
                         * <p>A command may have more than one alias assigned to it. The returned
                         * collection cannot be modified.</p>
                         * @return A list of aliases
                         */
                        // @ts-ignore
                        getAliases(): Array<java.lang.String | string>
                        /**
                         * Gets the {@link CommandMapping} associated with an alias. Returns null if
                         * no command is named by the given alias.
                         * @param alias The alias
                         * @return The command mapping, if available
                         */
                        // @ts-ignore
                        get(alias: java.lang.String | string): java.util.Optional<any>
                        /**
                         * Gets the {@link CommandMapping} associated with an alias in the context
                         * of a given {@link CommandSource}. Returns null if no command is named by
                         * the given alias.
                         * @param alias The alias to look up
                         * @param source The source this alias is being looked up for
                         * @return The command mapping, if available
                         */
                        // @ts-ignore
                        get(alias: java.lang.String | string, source: org.spongepowered.api.command.CommandSource): java.util.Optional<any>
                        /**
                         * Gets all the {@link CommandMapping}s associated with an alias.
                         * @param alias The alias
                         * @return The command mappings associated with the alias
                         */
                        // @ts-ignore
                        getAll(alias: java.lang.String | string): Array<any>
                        /**
                         * Gets all commands currently registered with this dispatcher. The returned
                         * value is immutable.
                         * @return a multimap from alias to mapping of every registered command
                         */
                        // @ts-ignore
                        getAll(): object
                        /**
                         * Returns whether the dispatcher contains a registered command for the
                         * given alias.
                         * @param alias The alias
                         * @return True if a registered command exists
                         */
                        // @ts-ignore
                        containsAlias(alias: java.lang.String | string): boolean
                        /**
                         * Returns whether the dispatcher contains the given mapping.
                         * @param mapping The mapping
                         * @return True if a mapping exists
                         */
                        // @ts-ignore
                        containsMapping(mapping: org.spongepowered.api.command.CommandMapping): boolean
                    }
                }
            }
        }
    }
}
