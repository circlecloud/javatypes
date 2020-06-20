declare namespace org {
    namespace bukkit {
        namespace help {
            /**
             * The HelpMap tracks all help topics registered in a Bukkit server. When the
             * server starts up or is reloaded, help is processed and topics are added in
             * the following order:
             * <ol>
             * <li>General topics are loaded from the help.yml
             * <li>Plugins load and optionally call {@code addTopic()}
             * <li>Registered plugin commands are processed by {@link HelpTopicFactory}
             * objects to create topics
             * <li>Topic contents are amended as directed in help.yml
             * </ol>
             */
            // @ts-ignore
            interface HelpMap {
                /**
                 * Returns a help topic for a given topic name.
                 * @param topicName The help topic name to look up.
                 * @return A {#link HelpTopic} object matching the topic name or null if
                 *      none can be found.
                 */
                // @ts-ignore
                getHelpTopic(topicName: string): org.bukkit.help.HelpTopic
                /**
                 * Returns a collection of all the registered help topics.
                 * @return All the registered help topics.
                 */
                // @ts-ignore
                getHelpTopics(): java.util.Collection<org.bukkit.help.HelpTopic>
                /**
                 * Adds a topic to the server's help index.
                 * @param topic The new help topic to add.
                 */
                // @ts-ignore
                addTopic(topic: org.bukkit.help.HelpTopic): void
                /**
                 * Clears out the contents of the help index. Normally called during
                 * server reload.
                 */
                // @ts-ignore
                clear(): void
                /**
                 * Associates a {@link HelpTopicFactory} object with given command base
                 * class. Plugins typically call this method during {@code onLoad()}. Once
                 * registered, the custom HelpTopicFactory will be used to create a custom
                 * {@link HelpTopic} for all commands deriving from the {@code
                 * commandClass} base class, or all commands deriving from {@link
                 * org.bukkit.command.PluginCommand} who's executor derives from {@code
                 * commandClass} base class.
                 * @param commandClass The class for which the custom HelpTopicFactory
                 *      applies. Must derive from either {#link org.bukkit.command.Command}
                 *      or {@link org.bukkit.command.CommandExecutor}.
                 * @param factory The {#link HelpTopicFactory} implementation to associate
                 *      with the {@code commandClass}.
                 * @throws IllegalArgumentException Thrown if {#code commandClass} does
                 *      not derive from a legal base class.
                 */
                // @ts-ignore
                registerHelpTopicFactory(commandClass: java.lang.Class<any>, factory: org.bukkit.help.HelpTopicFactory<any>): void
                /**
                 * Gets the list of plugins the server administrator has chosen to exclude
                 * from the help index. Plugin authors who choose to directly extend
                 * {@link org.bukkit.command.Command} instead of {@link
                 * org.bukkit.command.PluginCommand} will need to check this collection in
                 * their {@link HelpTopicFactory} implementations to ensure they meet the
                 * server administrator's expectations.
                 * @return A list of plugins that should be excluded from the help index.
                 */
                // @ts-ignore
                getIgnoredPlugins(): java.util.List<java.lang.String>
            }
        }
    }
}
