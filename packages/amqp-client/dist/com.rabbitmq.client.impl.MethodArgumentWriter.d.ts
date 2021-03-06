declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * Generates AMQP wire-protocol encoded arguments. Methods on this
                 * object are usually called from autogenerated code.
                 */
                // @ts-ignore
                class MethodArgumentWriter extends java.lang.Object {
                    /**
                     * Constructs a MethodArgumentWriter targeting the given DataOutputStream.
                     */
                    // @ts-ignore
                    constructor(out: com.rabbitmq.client.impl.ValueWriter)
                    /**
                     * Public API - encodes a short string argument.
                     */
                    // @ts-ignore
                    public writeShortstr(str: java.lang.String | string): void
                    /**
                     * Public API - encodes a long string argument from a LongString.
                     */
                    // @ts-ignore
                    public writeLongstr(str: com.rabbitmq.client.LongString): void
                    /**
                     * Public API - encodes a long string argument from a String.
                     */
                    // @ts-ignore
                    public writeLongstr(str: java.lang.String | string): void
                    /**
                     * Public API - encodes a short integer argument.
                     */
                    // @ts-ignore
                    public writeShort(s: number /*int*/): void
                    /**
                     * Public API - encodes an integer argument.
                     */
                    // @ts-ignore
                    public writeLong(l: number /*int*/): void
                    /**
                     * Public API - encodes a long integer argument.
                     */
                    // @ts-ignore
                    public writeLonglong(ll: number /*long*/): void
                    /**
                     * Public API - encodes a boolean/bit argument.
                     */
                    // @ts-ignore
                    public writeBit(b: boolean): void
                    /**
                     * Public API - encodes a table argument.
                     */
                    // @ts-ignore
                    public writeTable(table: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                    /**
                     * Public API - encodes an octet argument from an int.
                     */
                    // @ts-ignore
                    public writeOctet(octet: number /*int*/): void
                    /**
                     * Public API - encodes an octet argument from a byte.
                     */
                    // @ts-ignore
                    public writeOctet(octet: number /*byte*/): void
                    /**
                     * Public API - encodes a timestamp argument.
                     */
                    // @ts-ignore
                    public writeTimestamp(timestamp: java.util.Date): void
                    /**
                     * Public API - call this to ensure all accumulated argument
                     * values are correctly written to the output stream.
                     */
                    // @ts-ignore
                    public flush(): void
                }
            }
        }
    }
}
