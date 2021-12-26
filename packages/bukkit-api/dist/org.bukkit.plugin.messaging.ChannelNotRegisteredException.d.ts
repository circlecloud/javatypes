declare namespace org {
    namespace bukkit {
        namespace plugin {
            namespace messaging {
                /**
                 * Thrown if a Plugin attempts to send a message on an unregistered channel.
                 */
                // @ts-ignore
                class ChannelNotRegisteredException extends java.lang.RuntimeException {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(channel: java.lang.String | string)
                }
            }
        }
    }
}
