declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace rcon {
                /**
                 * Implementation of Source RCON protocol.
                 * https://developer.valvesoftware.com/wiki/Source_RCON_Protocol
                 * <p>
                 * Wrapper for RCONServer. Handles data.
                 * @author Tee7even
                 */
                // @ts-ignore
                class RCON extends java.lang.Object {
                    // @ts-ignore
                    constructor(server: cn.nukkit.Server, password: java.lang.String | string, address: java.lang.String | string, port: number /*int*/)
                    // @ts-ignore
                    public check(): void
                    // @ts-ignore
                    public close(): void
                }
            }
        }
    }
}
