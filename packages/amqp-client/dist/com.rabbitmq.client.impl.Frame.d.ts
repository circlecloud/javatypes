declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * Represents an AMQP wire-protocol frame, with frame type, channel number, and payload bytes.
                 * TODO: make state private
                 */
                // @ts-ignore
                class Frame extends java.lang.Object {
                    /**
                     * Constructs a frame for output with a type and a channel number and a
                     * fresh accumulator waiting for payload.
                     */
                    // @ts-ignore
                    constructor(type: number /*int*/, channel: number /*int*/)
                    /**
                     * Constructs a frame for input with a type, a channel number and a
                     * payload byte array.
                     */
                    // @ts-ignore
                    constructor(type: number /*int*/, channel: number /*int*/, payload: number /*byte*/[])
                    /**
                     * Frame type code
                     */
                    // @ts-ignore
                    public readonly type: number /*int*/
                    /**
                     * Frame channel number, 0-65535
                     */
                    // @ts-ignore
                    public readonly channel: number /*int*/
                    // @ts-ignore
                    public static fromBodyFragment(channelNumber: number /*int*/, body: number /*byte*/[], offset: number /*int*/, length: number /*int*/): com.rabbitmq.client.impl.Frame
                    /**
                     * Protected API - Factory method to instantiate a Frame by reading an
                     * AMQP-wire-protocol frame from the given input stream.
                     * @return a new Frame if we read a frame successfully, otherwise null
                     */
                    // @ts-ignore
                    public static readFrom(jis: java.io.DataInputStream): com.rabbitmq.client.impl.Frame
                    /**
                     * Private API - A protocol version mismatch is detected by checking the
                     * three next bytes if a frame type of (int)'A' is read from an input
                     * stream. If the next three bytes are 'M', 'Q' and 'P', then it's
                     * likely the broker is trying to tell us we are speaking the wrong AMQP
                     * protocol version.
                     * @throws MalformedFrameException
                     *                  if an AMQP protocol version mismatch is detected
                     * @throws MalformedFrameException
                     *                  if a corrupt AMQP protocol identifier is read
                     */
                    // @ts-ignore
                    public static protocolVersionMismatch(jis: java.io.DataInputStream): void
                    /**
                     * Public API - writes this Frame to the given DataOutputStream
                     */
                    // @ts-ignore
                    public writeTo(os: java.io.DataOutputStream): void
                    // @ts-ignore
                    public size(): number /*int*/
                    /**
                     * Public API - retrieves the frame payload
                     */
                    // @ts-ignore
                    public getPayload(): number /*byte*/[]
                    /**
                     * Public API - retrieves a new DataInputStream streaming over the payload
                     */
                    // @ts-ignore
                    public getInputStream(): java.io.DataInputStream
                    /**
                     * Public API - retrieves a fresh DataOutputStream streaming into the accumulator
                     */
                    // @ts-ignore
                    public getOutputStream(): java.io.DataOutputStream
                    // @ts-ignore
                    public toString(): string
                    /**
                     * Computes the AMQP wire-protocol length of protocol-encoded table entries.
                     */
                    // @ts-ignore
                    public static tableSize(table: java.util.Map<java.lang.String | string, java.lang.Object | any>): number /*long*/
                    /**
                     * Computes the AMQP 0-9-1 wire-protocol length of an encoded field-array of type List
                     */
                    // @ts-ignore
                    public static arraySize(values: java.util.List<any> | Array<any>): number /*long*/
                    /**
                     * Computes the AMQP wire-protocol length of an encoded field-array of type Object[]
                     */
                    // @ts-ignore
                    public static arraySize(values: java.lang.Object[] | any[]): number /*long*/
                }
            }
        }
    }
}
