declare namespace org {
    namespace bukkit {
        namespace Server {
            // @ts-ignore
            class Spigot extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getConfig(): org.bukkit.configuration.file.YamlConfiguration
                /**
                 * Sends the component to the player
                 * @param component the components to send
                 */
                // @ts-ignore
                public broadcast(component: net.md_5.bungee.api.chat.BaseComponent): void
                /**
                 * Sends an array of components as a single message to the player
                 * @param components the components to send
                 */
                // @ts-ignore
                public broadcast(...components: net.md_5.bungee.api.chat.BaseComponent[]): void
                /**
                 * Restart the server. If the server administrator has not configured restarting, the server will stop.
                 */
                // @ts-ignore
                public restart(): void
            }
        }
    }
}
