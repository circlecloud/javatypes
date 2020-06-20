declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                /**
                 * A command dispatcher watches for commands (such as those said in chat)
                 * and dispatches them to the correct command handler.
                 */
                // @ts-ignore
                interface CommandManager extends org.spongepowered.api.command.dispatcher.Dispatcher {
                    /**
                     * Register a given command using the given list of aliases.
                     * <p>If there is a conflict with one of the aliases (i.e. that alias
                     * is already assigned to another command), then the alias will be skipped.
                     * It is possible for there to be no alias to be available out of
                     * the provided list of aliases, which would mean that the command would not
                     * be assigned to any aliases.</p>
                     * <p>The first non-conflicted alias becomes the "primary alias."</p>
                     * @param plugin A plugin instance
                     * @param callable The command
                     * @param alias An array of aliases
                     * @return The registered command mapping, unless no aliases could be
                     *      registered
                     * @throws IllegalArgumentException Thrown if {#code plugin} is not a
                     *      plugin instance
                     */
                    // @ts-ignore
                    register(plugin: any, callable: org.spongepowered.api.command.CommandCallable, ...alias: string[]): java.util.Optional<org.spongepowered.api.command.CommandMapping>
                    /**
                     * Register a given command using the given list of aliases.
                     * <p>If there is a conflict with one of the aliases (i.e. that alias
                     * is already assigned to another command), then the alias will be skipped.
                     * It is possible for there to be no alias to be available out of
                     * the provided list of aliases, which would mean that the command would
                     * not be assigned to any aliases.</p>
                     * <p>The first non-conflicted alias becomes the "primary alias."</p>
                     * @param plugin A plugin instance
                     * @param callable The command
                     * @param aliases A list of aliases
                     * @return The registered command mapping, unless no aliases could be
                     *      registered
                     * @throws IllegalArgumentException Thrown if {#code plugin} is not a
                     *      plugin instance
                     */
                    // @ts-ignore
                    register(plugin: any, callable: org.spongepowered.api.command.CommandCallable, aliases: Array<java.lang.String>): java.util.Optional<org.spongepowered.api.command.CommandMapping>
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
                     * @param plugin A plugin instance
                     * @param callable The command
                     * @param aliases A list of aliases
                     * @param callback The callback
                     * @return The registered command mapping, unless no aliases could be
                     *      registered
                     * @throws IllegalArgumentException Thrown if new conflicting aliases are
                     *      added in the callback
                     * @throws IllegalArgumentException Thrown if {#code plugin} is not a
                     *      plugin instance
                     */
                    // @ts-ignore
                    register(plugin: any, callable: org.spongepowered.api.command.CommandCallable, aliases: Array<java.lang.String>, callback: java.util.function.Function<java.util.List<java.lang.String>, java.util.List<java.lang.String>> | java.util.function$.Function<java.util.List<java.lang.String>, java.util.List<java.lang.String>>): java.util.Optional<org.spongepowered.api.command.CommandMapping>
                    /**
                     * Remove a command identified by the given mapping.
                     * @param mapping The mapping
                     * @return The previous mapping associated with the alias, if one was found
                     */
                    // @ts-ignore
                    removeMapping(mapping: org.spongepowered.api.command.CommandMapping): java.util.Optional<org.spongepowered.api.command.CommandMapping>
                    /**
                     * Gets a set of plugin containers that have commands registered.
                     * @return A set of plugin containers
                     */
                    // @ts-ignore
                    getPluginContainers(): java.util.Set<org.spongepowered.api.plugin.PluginContainer>
                    /**
                     * Gets a set of commands owned by the given plugin instance.
                     * @param instance The plugin instance
                     * @return A set of mappings
                     */
                    // @ts-ignore
                    getOwnedBy(instance: any): java.util.Set<org.spongepowered.api.command.CommandMapping>
                    /**
                     * Gets the owner of a CommandMapping, if any is present.
                     * @param mapping The mapping to get an owner for
                     * @return The owner, if present.
                     */
                    // @ts-ignore
                    getOwner(mapping: org.spongepowered.api.command.CommandMapping): java.util.Optional<org.spongepowered.api.plugin.PluginContainer>
                    /**
                     * Gets the number of registered aliases.
                     * @return The number of aliases
                     */
                    // @ts-ignore
                    size(): int
                    /**
                     * Execute the command based on input arguments.
                     * <p>The implementing class must perform the necessary permission
                     * checks.</p>
                     * @param source The caller of the command
                     * @param arguments The raw arguments for this command
                     * @return The result of a command being processed
                     */
                    // @ts-ignore
                    process(source: org.spongepowered.api.command.CommandSource, arguments: string): org.spongepowered.api.command.CommandResult
                    /**
                     * Gets a list of suggestions based on input.
                     * <p>If a suggestion is chosen by the user, it will replace the last
                     * word.</p>
                     * @param source The command source
                     * @param arguments The arguments entered up to this point
                     * @return A list of suggestions
                     */
                    // @ts-ignore
                    getSuggestions(source: org.spongepowered.api.command.CommandSource, arguments: string, targetPosition: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>): java.util.List<java.lang.String>
                }
            }
        }
    }
}
