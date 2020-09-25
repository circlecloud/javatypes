declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace connection {
                    namespace ProxiedPlayer {
                        /**
                         * Represents the player's chat state.
                         */
                        // @ts-ignore
                        class ChatMode extends java.lang.Enum<net.md_5.bungee.api.connection.ProxiedPlayer.ChatMode> {
                            /**
                             * The player will see all chat.
                             */
                            // @ts-ignore
                            public static readonly SHOWN: net.md_5.bungee.api.connection.ProxiedPlayer.ChatMode
                            /**
                             * The player will only see everything except messages marked as chat.
                             */
                            // @ts-ignore
                            public static readonly COMMANDS_ONLY: net.md_5.bungee.api.connection.ProxiedPlayer.ChatMode
                            /**
                             * The chat is completely disabled, the player won't see anything.
                             */
                            // @ts-ignore
                            public static readonly HIDDEN: net.md_5.bungee.api.connection.ProxiedPlayer.ChatMode
                            // @ts-ignore
                            public static values(): net.md_5.bungee.api.connection.ProxiedPlayer.ChatMode[]
                            // @ts-ignore
                            public static valueOf(name: java.lang.String | string): net.md_5.bungee.api.connection.ProxiedPlayer.ChatMode
                        }
                    }
                }
            }
        }
    }
}
