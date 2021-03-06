declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * Generates an AMQP wire-protocol packet from a {@link ContentHeader}.
                 * Methods on this object are usually called from autogenerated code.
                 */
                // @ts-ignore
                class ContentHeaderPropertyWriter extends java.lang.Object {
                    /**
                     * Constructs a fresh ContentHeaderPropertyWriter.
                     */
                    // @ts-ignore
                    constructor(out: java.io.DataOutputStream)
                    // @ts-ignore
                    public writePresence(present: boolean): void
                    // @ts-ignore
                    public finishPresence(): void
                    // @ts-ignore
                    public writeShortstr(str: java.lang.String | string): void
                    // @ts-ignore
                    public writeLongstr(str: java.lang.String | string): void
                    // @ts-ignore
                    public writeLongstr(str: com.rabbitmq.client.LongString): void
                    // @ts-ignore
                    public writeShort(s: java.lang.Integer | number): void
                    // @ts-ignore
                    public writeLong(l: java.lang.Integer | number): void
                    // @ts-ignore
                    public writeLonglong(ll: java.lang.Long | number): void
                    // @ts-ignore
                    public writeTable(table: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                    // @ts-ignore
                    public writeOctet(octet: java.lang.Integer | number): void
                    // @ts-ignore
                    public writeOctet(octet: number /*int*/): void
                    // @ts-ignore
                    public writeTimestamp(timestamp: java.util.Date): void
                }
            }
        }
    }
}
