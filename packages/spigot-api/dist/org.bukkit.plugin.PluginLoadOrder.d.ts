declare namespace org {
    namespace bukkit {
        namespace plugin {
            /**
             * Represents the order in which a plugin should be initialized and enabled
             */
            // @ts-ignore
            class PluginLoadOrder extends java.lang.Enum<org.bukkit.plugin.PluginLoadOrder> {
                /**
                 * Indicates that the plugin will be loaded at startup
                 */
                // @ts-ignore
                public static readonly STARTUP: org.bukkit.plugin.PluginLoadOrder
                /**
                 * Indicates that the plugin will be loaded after the first/default world
                 * was created
                 */
                // @ts-ignore
                public static readonly POSTWORLD: org.bukkit.plugin.PluginLoadOrder
                // @ts-ignore
                public static values(): org.bukkit.plugin.PluginLoadOrder[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): org.bukkit.plugin.PluginLoadOrder
            }
        }
    }
}
