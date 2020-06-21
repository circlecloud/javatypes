declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace rcon {
                /**
                 * Thread that performs all RCON network work. A server.
                 * @author Tee7even
                 */
                // @ts-ignore
                class RCONServer extends java.lang.Thread {
                    // @ts-ignore
                    constructor(address: java.lang.String | string, port: number /*int*/, password: java.lang.String | string)
                    // @ts-ignore
                    public receive(): cn.nukkit.network.rcon.RCONCommand
                    // @ts-ignore
                    public respond(channel: java.nio.channels.SocketChannel, id: number /*int*/, response: java.lang.String | string): void
                    // @ts-ignore
                    public close(): void
                    // @ts-ignore
                    public run(): void
                }
            }
        }
    }
}
