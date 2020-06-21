declare namespace org {
    namespace bukkit {
        namespace plugin {
            namespace PluginAwareness {
                /**
                 * Each entry here represents a particular plugin's awareness. These can
                 * be checked by using {@link PluginDescriptionFile#getAwareness()}.{@link
                 * Set#contains(Object) contains(flag)}.
                 */
                // @ts-ignore
                class Flags extends java.lang.Enum<org.bukkit.plugin.PluginAwareness.Flags> implements org.bukkit.plugin.PluginAwareness {
                    /**
                     * This specifies that all (text) resources stored in a plugin's jar
                     * use UTF-8 encoding.
                     * @deprecated all plugins are now assumed to be UTF-8 aware.
                     */
                    // @ts-ignore
                    readonly UTF8: org.bukkit.plugin.PluginAwareness.Flags
                    // @ts-ignore
                    values(): org.bukkit.plugin.PluginAwareness.Flags[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): org.bukkit.plugin.PluginAwareness.Flags
                }
            }
        }
    }
}
