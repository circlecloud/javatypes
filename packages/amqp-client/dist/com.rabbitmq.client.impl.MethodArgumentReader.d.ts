declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * Parses AMQP wire-protocol {@link Method} arguments from a
                 * DataInputStream. Methods on this object are usually called from
                 * generated code.
                 */
                // @ts-ignore
                class MethodArgumentReader extends java.lang.Object {
                    /**
                     * Construct a MethodArgumentReader from the given {@link ValueReader}.
                     */
                    // @ts-ignore
                    constructor(input: com.rabbitmq.client.impl.ValueReader)
                    /**
                     * Public API - reads a short string argument.
                     */
                    // @ts-ignore
                    public readShortstr(): string
                    /**
                     * Public API - reads a long string argument.
                     */
                    // @ts-ignore
                    public readLongstr(): com.rabbitmq.client.LongString
                    /**
                     * Public API - reads a short integer argument.
                     */
                    // @ts-ignore
                    public readShort(): number /*int*/
                    /**
                     * Public API - reads an integer argument.
                     */
                    // @ts-ignore
                    public readLong(): number /*int*/
                    /**
                     * Public API - reads a long integer argument.
                     */
                    // @ts-ignore
                    public readLonglong(): number /*long*/
                    /**
                     * Public API - reads a bit/boolean argument.
                     */
                    // @ts-ignore
                    public readBit(): boolean
                    /**
                     * Public API - reads a table argument.
                     */
                    // @ts-ignore
                    public readTable(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    /**
                     * Public API - reads an octet argument.
                     */
                    // @ts-ignore
                    public readOctet(): number /*int*/
                    /**
                     * Public API - reads an timestamp argument.
                     */
                    // @ts-ignore
                    public readTimestamp(): java.util.Date
                }
            }
        }
    }
}
