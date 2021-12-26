declare namespace io {
    namespace lumine {
        namespace utils {
            namespace network {
                namespace messaging {
                    namespace bungee {
                        // @ts-ignore
                        class BungeeCordImpl extends java.lang.Object implements io.lumine.utils.network.messaging.bungee.BungeeCord {
                            // @ts-ignore
                            constructor(plugin: io.lumine.utils.plugin.LuminePlugin)
                            // @ts-ignore
                            public onPluginMessageReceived(channel: java.lang.String | string, player: Player, data: number /*byte*/[]): void
                            // @ts-ignore
                            public connect(player: Player, serverName: java.lang.String | string): void
                            // @ts-ignore
                            public connectOther(playerName: java.lang.String | string, serverName: java.lang.String | string): void
                            // @ts-ignore
                            public ip(player: Player): io.lumine.utils.promise.Promise<java.util.Map.Entry<java.lang.String | string, java.lang.Integer | number>>
                            // @ts-ignore
                            public playerCount(serverName: java.lang.String | string): io.lumine.utils.promise.Promise<java.lang.Integer | number>
                            // @ts-ignore
                            public playerList(serverName: java.lang.String | string): io.lumine.utils.promise.Promise<java.util.List<java.lang.String | string> | Array<java.lang.String | string>>
                            // @ts-ignore
                            public getServers(): io.lumine.utils.promise.Promise<java.util.List<java.lang.String | string> | Array<java.lang.String | string>>
                            // @ts-ignore
                            public message(playerName: java.lang.String | string, message: java.lang.String | string): void
                            // @ts-ignore
                            public getServer(): io.lumine.utils.promise.Promise<java.lang.String | string>
                            // @ts-ignore
                            public uuid(player: Player): io.lumine.utils.promise.Promise<java.util.UUID>
                            // @ts-ignore
                            public uuidOther(playerName: java.lang.String | string): io.lumine.utils.promise.Promise<java.util.UUID>
                            // @ts-ignore
                            public serverIp(serverName: java.lang.String | string): io.lumine.utils.promise.Promise<java.util.Map.Entry<java.lang.String | string, java.lang.Integer | number>>
                            // @ts-ignore
                            public kickPlayer(playerName: java.lang.String | string, reason: java.lang.String | string): void
                            // @ts-ignore
                            public forward(serverName: java.lang.String | string, channelName: java.lang.String | string, data: number /*byte*/[]): void
                            // @ts-ignore
                            public forward(serverName: java.lang.String | string, channelName: java.lang.String | string, data: ByteArrayDataOutput): void
                            // @ts-ignore
                            public forwardToPlayer(playerName: java.lang.String | string, channelName: java.lang.String | string, data: number /*byte*/[]): void
                            // @ts-ignore
                            public forwardToPlayer(playerName: java.lang.String | string, channelName: java.lang.String | string, data: ByteArrayDataOutput): void
                            // @ts-ignore
                            public registerForwardCallbackRaw(channelName: java.lang.String | string, callback: java.util.function$.Predicate<number /*byte*/[]>): void
                            // @ts-ignore
                            public registerForwardCallback(channelName: java.lang.String | string, callback: java.util.function$.Predicate<ByteArrayDataInput>): void
                        }
                    }
                }
            }
        }
    }
}
