declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * Helper class to generate AMQP wire-protocol encoded values.
                 */
                // @ts-ignore
                class ValueWriter extends java.lang.Object {
                    // @ts-ignore
                    constructor(out: java.io.DataOutputStream)
                    /**
                     * Public API - encodes a short string.
                     */
                    // @ts-ignore
                    public writeShortstr(str: java.lang.String | string): void
                    /**
                     * Public API - encodes a long string from a LongString.
                     */
                    // @ts-ignore
                    public writeLongstr(str: com.rabbitmq.client.LongString): void
                    /**
                     * Public API - encodes a long string from a String.
                     */
                    // @ts-ignore
                    public writeLongstr(str: java.lang.String | string): void
                    /**
                     * Public API - encodes a short integer.
                     */
                    // @ts-ignore
                    public writeShort(s: number /*int*/): void
                    /**
                     * Public API - encodes an integer.
                     */
                    // @ts-ignore
                    public writeLong(l: number /*int*/): void
                    /**
                     * Public API - encodes a long integer.
                     */
                    // @ts-ignore
                    public writeLonglong(ll: number /*long*/): void
                    /**
                     * Public API - encodes a table.
                     */
                    // @ts-ignore
                    public writeTable(table: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                    // @ts-ignore
                    public writeFieldValue(value: java.lang.Object | any): void
                    // @ts-ignore
                    public writeArray(value: java.util.List<any> | Array<any>): void
                    // @ts-ignore
                    public writeArray(value: java.lang.Object[] | any[]): void
                    /**
                     * Public API - encodes an octet from an int.
                     */
                    // @ts-ignore
                    public writeOctet(octet: number /*int*/): void
                    /**
                     * Public API - encodes an octet from a byte.
                     */
                    // @ts-ignore
                    public writeOctet(octet: number /*byte*/): void
                    /**
                     * Public API - encodes a timestamp.
                     */
                    // @ts-ignore
                    public writeTimestamp(timestamp: java.util.Date): void
                    /**
                     * Public API - call this to ensure all accumulated
                     * values are correctly written to the output stream.
                     */
                    // @ts-ignore
                    public flush(): void
                }
            }
        }
    }
}
