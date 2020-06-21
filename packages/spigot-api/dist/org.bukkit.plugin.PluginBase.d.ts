declare namespace org {
    namespace bukkit {
        namespace plugin {
            /**
             * Represents a base {@link Plugin}
             * <p>
             * Extend this class if your plugin is not a {@link
             * org.bukkit.plugin.java.JavaPlugin}
             */
            // @ts-ignore
            abstract class PluginBase extends java.lang.Object implements org.bukkit.plugin.Plugin {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public hashCode(): number /*int*/
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                // @ts-ignore
                public getName(): string
            }
        }
    }
}
