declare namespace org {
    namespace bukkit {
        namespace plugin {
            /**
             * The PluginLogger class is a modified {@link Logger} that prepends all
             * logging calls with the name of the plugin doing the logging. The API for
             * PluginLogger is exactly the same as {@link Logger}.
             * @see Logger
             */
            // @ts-ignore
            class PluginLogger extends java.util.logging.Logger {
                /**
                 * Creates a new PluginLogger that extracts the name from a plugin.
                 * @param context A reference to the plugin
                 */
                // @ts-ignore
                constructor(context: org.bukkit.plugin.Plugin)
                // @ts-ignore
                log(logRecord: java.util.logging.LogRecord): void
            }
        }
    }
}
