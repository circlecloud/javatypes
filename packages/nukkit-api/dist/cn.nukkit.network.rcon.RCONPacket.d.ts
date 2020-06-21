declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace rcon {
                /**
                 * A data structure representing an RCON packet.
                 * @author Tee7even
                 */
                // @ts-ignore
                class RCONPacket extends java.lang.Object {
                    // @ts-ignore
                    constructor(id: number /*int*/, type: number /*int*/, payload: number /*byte*/[])
                    // @ts-ignore
                    constructor(buffer: java.nio.ByteBuffer)
                    // @ts-ignore
                    public toBuffer(): java.nio.ByteBuffer
                    // @ts-ignore
                    public getId(): number /*int*/
                    // @ts-ignore
                    public getType(): number /*int*/
                    // @ts-ignore
                    public getPayload(): number /*byte*/[]
                }
            }
        }
    }
}
