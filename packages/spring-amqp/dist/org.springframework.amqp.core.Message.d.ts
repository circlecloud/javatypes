declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * The 0-8 and 0-9-1 AMQP specifications do not define an Message class or interface. Instead, when performing an
                 * operation such as basicPublish the content is passed as a byte-array argument and additional properties are passed in
                 * as separate arguments. Spring AMQP defines a Message class as part of a more general AMQP domain model
                 * representation. The purpose of the Message class is to simply encapsulate the body and properties within a single
                 * instance so that the rest of the AMQP API can in turn be simpler.
                 * @author Mark Pollack
                 * @author Mark Fisher
                 * @author Oleg Zhurakousky
                 * @author Dave Syer
                 * @author Gary Russell
                 * @author Alex Panchenko
                 * @author Artem Bilan
                 */
                // @ts-ignore
                class Message extends java.lang.Object implements java.io.Serializable {
                    // @ts-ignore
                    constructor(body: number /*byte*/[], messageProperties: org.springframework.amqp.core.MessageProperties)
                    /**
                     * Add patterns to the white list of permissable package/class name patterns for
                     * deserialization in {@link #toString()}.
                     * The patterns will be applied in order until a match is found.
                     * A class can be fully qualified or a wildcard '*' is allowed at the
                     * beginning or end of the class name.
                     * Examples: {@code com.foo.*}, {@code *.MyClass}.
                     * By default, only {@code java.util} and {@code java.lang} classes will be
                     * deserialized.
                     * @param patterns the patterns.
                     * @since 1.5.7
                     */
                    // @ts-ignore
                    public static addWhiteListPatterns(...patterns: java.lang.String[] | string[]): void
                    // @ts-ignore
                    public getBody(): number /*byte*/[]
                    // @ts-ignore
                    public getMessageProperties(): org.springframework.amqp.core.MessageProperties
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                }
            }
        }
    }
}
