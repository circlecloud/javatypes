declare namespace io {
    namespace lumine {
        namespace utils {
            namespace network {
                namespace messaging {
                    namespace lilypad {
                        // @ts-ignore
                        class LilyPadImpl extends java.lang.Object implements io.lumine.utils.network.messaging.lilypad.LilyPad {
                            // @ts-ignore
                            constructor(plugin: io.lumine.utils.plugin.LuminePlugin)
                            // @ts-ignore
                            public onMessage(event: MessageEvent): void
                            // @ts-ignore
                            public redirectPlayer(serverId: java.lang.String | string, playerUsername: java.lang.String | string): void
                            // @ts-ignore
                            public getConnect(): Connect
                            // @ts-ignore
                            public getId(): string
                            // @ts-ignore
                            public getGroups(): Array<java.lang.String | string>
                            // @ts-ignore
                            public getChannel<T>(name: java.lang.String | string, type: object): io.lumine.utils.network.messaging.Channel<T>
                        }
                    }
                }
            }
        }
    }
}
