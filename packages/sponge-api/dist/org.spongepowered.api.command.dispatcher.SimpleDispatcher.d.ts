declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace dispatcher {
                    /**
                     * A simple implementation of a {@link Dispatcher}.
                     */
                    // @ts-ignore
                    class SimpleDispatcher extends java.lang.Object implements org.spongepowered.api.command.dispatcher.Dispatcher {
                        /**
                         * Creates a basic new dispatcher.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Creates a new dispatcher with a specific disambiguator.
                         * @param disambiguatorFunc Function that returns the preferred command if
                         *      multiple exist for a given alias
                         */
                        // @ts-ignore
                        constructor(disambiguatorFunc: org.spongepowered.api.command.dispatcher.Disambiguator)
                        /**
                         * This is a disambiguator function that returns the first matching command.
                         */
                        // @ts-ignore
                        public static readonly FIRST_DISAMBIGUATOR: org.spongepowered.api.command.dispatcher.Disambiguator
                        /**
                         * Register a given command using the given list of aliases.
                         * <p>If there is a conflict with one of the aliases (i.e. that alias
                         * is already assigned to another command), then the alias will be skipped.
                         * It is possible for there to be no alias to be available out of
                         * the provided list of aliases, which would mean that the command would not
                         * be assigned to any aliases.</p>
                         * <p>The first non-conflicted alias becomes the "primary alias."</p>
                         * @param callable The command
                         * @param alias An array of aliases
                         * @return The registered command mapping, unless no aliases could be
                         *      registered
                         */
                        // @ts-ignore
                        public register(callable: org.spongepowered.api.command.CommandCallable, ...alias: java.lang.String[] | string[]): java.util.Optional<org.spongepowered.api.command.CommandMapping>
                        /**
                         * Register a given command using the given list of aliases.
                         * <p>If there is a conflict with one of the aliases (i.e. that alias
                         * is already assigned to another command), then the alias will be skipped.
                         * It is possible for there to be no alias to be available out of
                         * the provided list of aliases, which would mean that the command would not
                         * be assigned to any aliases.</p>
                         * <p>The first non-conflicted alias becomes the "primary alias."</p>
                         * @param callable The command
                         * @param aliases A list of aliases
                         * @return The registered command mapping, unless no aliases could be
                         *      registered
                         */
                        // @ts-ignore
                        public register(callable: org.spongepowered.api.command.CommandCallable, aliases: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): java.util.Optional<org.spongepowered.api.command.CommandMapping>
                        /**
                         * Register a given command using a given list of aliases.
                         * <p>The provided callback function will be called with a list of aliases
                         * that are not taken (from the list of aliases that were requested) and
                         * it should return a list of aliases to actually register. Aliases may be
                         * removed, and if no aliases remain, then the command will not be
                         * registered. It may be possible that no aliases are available, and thus
                         * the callback would receive an empty list. New aliases should not be added
                         * to the list in the callback as this may cause
                         * {@link IllegalArgumentException} to be thrown.</p>
                         * <p>The first non-conflicted alias becomes the "primary alias."</p>
                         * @param callable The command
                         * @param aliases A list of aliases
                         * @param callback The callback
                         * @return The registered command mapping, unless no aliases could
                         *      be registered
                         */
                        // @ts-ignore
                        public register(callable: org.spongepowered.api.command.CommandCallable, aliases: java.util.List<java.lang.String | string> | Array<java.lang.String | string>, callback: java.util.function$.Function<java.util.List<java.lang.String | string> | Array<java.lang.String | string>, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>): java.util.Optional<org.spongepowered.api.command.CommandMapping>
                        /**
                         * Remove a mapping identified by the given alias.
                         * @param alias The alias
                         * @return The previous mapping associated with the alias, if one was found
                         */
                        // @ts-ignore
                        public remove(alias: java.lang.String | string): Array<org.spongepowered.api.command.CommandMapping>
                        /**
                         * Remove all mappings identified by the given aliases.
                         * @param aliases A collection of aliases
                         * @return Whether any were found
                         */
                        // @ts-ignore
                        public removeAll(aliases: java.util.Collection<any> | Array<any>): boolean
                        /**
                         * Remove a command identified by the given mapping.
                         * @param mapping The mapping
                         * @return The previous mapping associated with the alias, if one was found
                         */
                        // @ts-ignore
                        public removeMapping(mapping: org.spongepowered.api.command.CommandMapping): java.util.Optional<org.spongepowered.api.command.CommandMapping>
                        /**
                         * Remove all mappings contained with the given collection.
                         * @param mappings The collection
                         * @return Whether the at least one command was removed
                         */
                        // @ts-ignore
                        public removeMappings(mappings: java.util.Collection<any> | Array<any>): boolean
                        // @ts-ignore
                        public getCommands(): Array<org.spongepowered.api.command.CommandMapping>
                        // @ts-ignore
                        public getPrimaryAliases(): Array<java.lang.String | string>
                        // @ts-ignore
                        public getAliases(): Array<java.lang.String | string>
                        // @ts-ignore
                        public get(alias: java.lang.String | string): java.util.Optional<org.spongepowered.api.command.CommandMapping>
                        // @ts-ignore
                        public get(alias: java.lang.String | string, source: org.spongepowered.api.command.CommandSource): java.util.Optional<org.spongepowered.api.command.CommandMapping>
                        // @ts-ignore
                        public containsAlias(alias: java.lang.String | string): boolean
                        // @ts-ignore
                        public containsMapping(mapping: org.spongepowered.api.command.CommandMapping): boolean
                        // @ts-ignore
                        public process(source: org.spongepowered.api.command.CommandSource, commandLine: java.lang.String | string): org.spongepowered.api.command.CommandResult
                        // @ts-ignore
                        public getSuggestions(src: org.spongepowered.api.command.CommandSource, arguments: java.lang.String | string, targetPosition: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>): Array<java.lang.String | string>
                        // @ts-ignore
                        public testPermission(source: org.spongepowered.api.command.CommandSource): boolean
                        // @ts-ignore
                        public getShortDescription(source: org.spongepowered.api.command.CommandSource): java.util.Optional<org.spongepowered.api.text.Text>
                        // @ts-ignore
                        public getHelp(source: org.spongepowered.api.command.CommandSource): java.util.Optional<org.spongepowered.api.text.Text>
                        /**
                         * Gets the number of registered aliases.
                         * @return The number of aliases
                         */
                        // @ts-ignore
                        public size(): number /*int*/
                        // @ts-ignore
                        public getUsage(source: org.spongepowered.api.command.CommandSource): org.spongepowered.api.text.Text
                        // @ts-ignore
                        public getAll(alias: java.lang.String | string): Array<org.spongepowered.api.command.CommandMapping>
                        // @ts-ignore
                        public getAll(): object
                    }
                }
            }
        }
    }
}
