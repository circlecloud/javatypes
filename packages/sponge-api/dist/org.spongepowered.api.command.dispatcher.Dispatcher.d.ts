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
                        getCommands(): java.util.Set<? extends org.spongepowered.api.command.CommandMapping>
                        /**
                         * Gets a list of primary aliases.
                         * <p>The returned collection cannot be modified.</p>
                         * @return A list of aliases
                         */
                        // @ts-ignore
                        getPrimaryAliases(): java.util.Set<java.lang.String>
                        /**
                         * Gets a list of all the command aliases, which includes the primary alias.
                         * <p>A command may have more than one alias assigned to it. The returned
                         * collection cannot be modified.</p>
                         * @return A list of aliases
                         */
                        // @ts-ignore
                        getAliases(): java.util.Set<java.lang.String>
                        /**
                         * Gets the {@link CommandMapping} associated with an alias. Returns null if
                         * no command is named by the given alias.
                         * @param alias The alias
                         * @return The command mapping, if available
                         */
                        // @ts-ignore
                        get(alias: string): java.util.Optional<? extends org.spongepowered.api.command.CommandMapping>
                        /**
                         * Gets the {@link CommandMapping} associated with an alias in the context
                         * of a given {@link CommandSource}. Returns null if no command is named by
                         * the given alias.
                         * @param alias The alias to look up
                         * @param source The source this alias is being looked up for
                         * @return The command mapping, if available
                         */
                        // @ts-ignore
                        get(alias: string, source: org.spongepowered.api.command.CommandSource): java.util.Optional<? extends org.spongepowered.api.command.CommandMapping>
                        /**
                         * Gets all the {@link CommandMapping}s associated with an alias.
                         * @param alias The alias
                         * @return The command mappings associated with the alias
                         */
                        // @ts-ignore
                        getAll(alias: string): java.util.Set<? extends org.spongepowered.api.command.CommandMapping>
                        /**
                         * Gets all commands currently registered with this dispatcher. The returned
                         * value is immutable.
                         * @return a multimap from alias to mapping of every registered command
                         */
                        // @ts-ignore
                        getAll(): <any>
                        /**
                         * Returns whether the dispatcher contains a registered command for the
                         * given alias.
                         * @param alias The alias
                         * @return True if a registered command exists
                         */
                        // @ts-ignore
                        containsAlias(alias: string): boolean
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
