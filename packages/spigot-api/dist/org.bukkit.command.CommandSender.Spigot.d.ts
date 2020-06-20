declare namespace org {
    namespace bukkit {
        namespace command {
            namespace CommandSender {
                // @ts-ignore
                class Spigot extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Sends this sender a chat component.
                     * @param component the components to send
                     */
                    // @ts-ignore
                    sendMessage(component: net.md_5.bungee.api.chat.BaseComponent): void
                    /**
                     * Sends an array of components as a single message to the sender.
                     * @param components the components to send
                     */
                    // @ts-ignore
                    sendMessage(...components: net.md_5.bungee.api.chat.BaseComponent[]): void
                }
            }
        }
    }
}
