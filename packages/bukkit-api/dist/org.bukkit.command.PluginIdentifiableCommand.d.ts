declare namespace org {
    namespace bukkit {
        namespace command {
            /**
             * This interface is used by the help system to group commands into
             * sub-indexes based on the {@link Plugin} they are a part of. Custom command
             * implementations will need to implement this interface to have a sub-index
             * automatically generated on the plugin's behalf.
             */
            // @ts-ignore
            interface PluginIdentifiableCommand {
                /**
                 * Gets the owner of this PluginIdentifiableCommand.
                 * @return Plugin that owns this PluginIdentifiableCommand.
                 */
                // @ts-ignore
                getPlugin(): org.bukkit.plugin.Plugin
            }
        }
    }
}
