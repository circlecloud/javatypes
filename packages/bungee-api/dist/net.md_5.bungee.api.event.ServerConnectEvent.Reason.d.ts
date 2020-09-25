declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace event {
                    namespace ServerConnectEvent {
                        // @ts-ignore
                        class Reason extends java.lang.Enum<net.md_5.bungee.api.event.ServerConnectEvent.Reason> {
                            /**
                             * Redirection to lobby server due to being unable to connect to
                             * original server
                             */
                            // @ts-ignore
                            public static readonly LOBBY_FALLBACK: net.md_5.bungee.api.event.ServerConnectEvent.Reason
                            /**
                             * Execution of a command
                             */
                            // @ts-ignore
                            public static readonly COMMAND: net.md_5.bungee.api.event.ServerConnectEvent.Reason
                            /**
                             * Redirecting to another server when client loses connection to server
                             * due to an exception.
                             */
                            // @ts-ignore
                            public static readonly SERVER_DOWN_REDIRECT: net.md_5.bungee.api.event.ServerConnectEvent.Reason
                            /**
                             * Redirecting to another server when kicked from original server.
                             */
                            // @ts-ignore
                            public static readonly KICK_REDIRECT: net.md_5.bungee.api.event.ServerConnectEvent.Reason
                            /**
                             * Plugin message request.
                             */
                            // @ts-ignore
                            public static readonly PLUGIN_MESSAGE: net.md_5.bungee.api.event.ServerConnectEvent.Reason
                            /**
                             * Initial proxy connect.
                             */
                            // @ts-ignore
                            public static readonly JOIN_PROXY: net.md_5.bungee.api.event.ServerConnectEvent.Reason
                            /**
                             * Plugin initiated connect.
                             */
                            // @ts-ignore
                            public static readonly PLUGIN: net.md_5.bungee.api.event.ServerConnectEvent.Reason
                            /**
                             * Unknown cause.
                             */
                            // @ts-ignore
                            public static readonly UNKNOWN: net.md_5.bungee.api.event.ServerConnectEvent.Reason
                            // @ts-ignore
                            public static values(): net.md_5.bungee.api.event.ServerConnectEvent.Reason[]
                            // @ts-ignore
                            public static valueOf(name: java.lang.String | string): net.md_5.bungee.api.event.ServerConnectEvent.Reason
                        }
                    }
                }
            }
        }
    }
}
