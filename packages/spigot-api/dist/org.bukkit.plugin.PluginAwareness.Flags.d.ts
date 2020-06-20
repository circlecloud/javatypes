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
                    // @ts-ignore
                    values(): org.bukkit.plugin.PluginAwareness.Flags[]
                    // @ts-ignore
                    valueOf(name: string): org.bukkit.plugin.PluginAwareness.Flags
                }
            }
        }
    }
}
