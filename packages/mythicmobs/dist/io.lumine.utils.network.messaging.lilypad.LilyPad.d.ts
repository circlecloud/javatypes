declare namespace io {
    namespace lumine {
        namespace utils {
            namespace network {
                namespace messaging {
                    namespace lilypad {
                        // @ts-ignore
                        interface LilyPad extends io.lumine.utils.network.messaging.Messenger, io.lumine.utils.network.messaging.InstanceData {
                            // @ts-ignore
                            getConnect(): Connect
                            // @ts-ignore
                            redirectPlayer(p0: java.lang.String | string, p1: java.lang.String | string): void
                            // @ts-ignore
                            redirectPlayer(serverId: java.lang.String | string, player: Player): void
                        }
                    }
                }
            }
        }
    }
}
