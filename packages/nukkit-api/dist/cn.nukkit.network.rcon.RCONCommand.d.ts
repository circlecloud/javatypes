declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace rcon {
                /**
                 * A data structure to hold sender, request ID and command itself.
                 * @author Tee7even
                 */
                // @ts-ignore
                class RCONCommand extends java.lang.Object {
                    // @ts-ignore
                    constructor(sender: java.nio.channels.SocketChannel, id: number /*int*/, command: java.lang.String | string)
                    // @ts-ignore
                    public getSender(): java.nio.channels.SocketChannel
                    // @ts-ignore
                    public getId(): number /*int*/
                    // @ts-ignore
                    public getCommand(): string
                }
            }
        }
    }
}
