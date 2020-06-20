declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Generates names using {@link UUID#randomUUID()}. (e.g.
                 * "f20c818a-006b-4416-bf91-643590fedb0e").
                 * @author Gary Russell
                 * @since 2.1
                 */
                // @ts-ignore
                class UUIDNamingStrategy extends java.lang.Object implements org.springframework.amqp.core.NamingStrategy {
                    // @ts-ignore
                    constructor()
                    /**
                     * The default instance.
                     */
                    // @ts-ignore
                    readonly DEFAULT: org.springframework.amqp.core.UUIDNamingStrategy
                    // @ts-ignore
                    generateName(): java.lang.String
                }
            }
        }
    }
}
