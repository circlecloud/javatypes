declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * Helper class to read AMQP wire-protocol encoded values.
                 */
                // @ts-ignore
                class ValueReader extends java.lang.Object {
                    /**
                     * Construct a MethodArgumentReader streaming over the given DataInputStream.
                     */
                    // @ts-ignore
                    constructor(input: java.io.DataInputStream)
                    /**
                     * Public API - reads a short string.
                     */
                    // @ts-ignore
                    public readShortstr(): string
                    /**
                     * Public API - reads a long string.
                     */
                    // @ts-ignore
                    public readLongstr(): com.rabbitmq.client.LongString
                    /**
                     * Public API - reads a short integer.
                     */
                    // @ts-ignore
                    public readShort(): number /*int*/
                    /**
                     * Public API - reads an integer.
                     */
                    // @ts-ignore
                    public readLong(): number /*int*/
                    /**
                     * Public API - reads a long integer.
                     */
                    // @ts-ignore
                    public readLonglong(): number /*long*/
                    /**
                     * Public API - reads a table.
                     */
                    // @ts-ignore
                    public readTable(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    /**
                     * Public API - reads an octet.
                     */
                    // @ts-ignore
                    public readOctet(): number /*int*/
                    /**
                     * Public API - reads an timestamp.
                     */
                    // @ts-ignore
                    public readTimestamp(): java.util.Date
                }
            }
        }
    }
}
