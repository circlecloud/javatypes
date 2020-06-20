declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                namespace AnonymousQueue {
                    /**
                     * Generates names using {@link UUID#randomUUID()}.
                     * (e.g. "f20c818a-006b-4416-bf91-643590fedb0e").
                     * @author Gary Russell
                     * @deprecated - use the {#link org.springframework.amqp.core.UUIDNamingStrategy}.
                     * @since 2.0
                     */
                    // @ts-ignore
                    class UUIDNamingStrategy extends java.lang.Object implements org.springframework.amqp.core.AnonymousQueue.NamingStrategy {
                        // @ts-ignore
                        constructor()
                        /**
                         * The default instance.
                         */
                        // @ts-ignore
                        readonly DEFAULT: org.springframework.amqp.core.AnonymousQueue.UUIDNamingStrategy
                        // @ts-ignore
                        generateName(): java.lang.String
                    }
                }
            }
        }
    }
}
