declare namespace io {
    namespace lumine {
        namespace utils {
            namespace network {
                namespace messaging {
                    namespace bungee {
                        // @ts-ignore
                        interface BungeeCord {
                            // @ts-ignore
                            readonly ALL_SERVERS: java.lang.String | string
                            // @ts-ignore
                            readonly ONLINE_SERVERS: java.lang.String | string
                            // @ts-ignore
                            connect(p0: Player, p1: java.lang.String | string): void
                            // @ts-ignore
                            connectOther(p0: java.lang.String | string, p1: java.lang.String | string): void
                            // @ts-ignore
                            ip(p0: Player): io.lumine.utils.promise.Promise<java.util.Map.Entry<java.lang.String | string, java.lang.Integer | number>>
                            // @ts-ignore
                            playerCount(p0: java.lang.String | string): io.lumine.utils.promise.Promise<java.lang.Integer | number>
                            // @ts-ignore
                            playerList(p0: java.lang.String | string): io.lumine.utils.promise.Promise<java.util.List<java.lang.String | string> | Array<java.lang.String | string>>
                            // @ts-ignore
                            getServers(): io.lumine.utils.promise.Promise<java.util.List<java.lang.String | string> | Array<java.lang.String | string>>
                            // @ts-ignore
                            message(p0: java.lang.String | string, p1: java.lang.String | string): void
                            // @ts-ignore
                            getServer(): io.lumine.utils.promise.Promise<java.lang.String | string>
                            // @ts-ignore
                            uuid(p0: Player): io.lumine.utils.promise.Promise<java.util.UUID>
                            // @ts-ignore
                            uuidOther(p0: java.lang.String | string): io.lumine.utils.promise.Promise<java.util.UUID>
                            // @ts-ignore
                            serverIp(p0: java.lang.String | string): io.lumine.utils.promise.Promise<java.util.Map.Entry<java.lang.String | string, java.lang.Integer | number>>
                            // @ts-ignore
                            kickPlayer(p0: java.lang.String | string, p1: java.lang.String | string): void
                            // @ts-ignore
                            forward(p0: java.lang.String | string, p1: java.lang.String | string, p2: number /*byte*/[]): void
                            // @ts-ignore
                            forward(p0: java.lang.String | string, p1: java.lang.String | string, p2: ByteArrayDataOutput): void
                            // @ts-ignore
                            forwardToPlayer(p0: java.lang.String | string, p1: java.lang.String | string, p2: number /*byte*/[]): void
                            // @ts-ignore
                            forwardToPlayer(p0: java.lang.String | string, p1: java.lang.String | string, p2: ByteArrayDataOutput): void
                            // @ts-ignore
                            registerForwardCallbackRaw(p0: java.lang.String | string, p1: java.util.function$.Predicate<number /*byte*/[]>): void
                            // @ts-ignore
                            registerForwardCallback(p0: java.lang.String | string, p1: java.util.function$.Predicate<ByteArrayDataInput>): void
                        }
                    }
                }
            }
        }
    }
}
