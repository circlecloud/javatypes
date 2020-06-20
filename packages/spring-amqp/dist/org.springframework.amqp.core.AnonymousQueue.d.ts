declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Represents an anonymous, non-durable, exclusive, auto-delete queue. The name has the
                 * form 'spring.gen-&lt;base64UUID&gt;' by default, but it can be modified by providing a
                 * {@link NamingStrategy}. Two naming strategies {@link Base64UrlNamingStrategy} and
                 * {@link UUIDNamingStrategy} are provided but you can implement your own. Names should be
                 * unique.
                 * @author Dave Syer
                 * @author Gary Russell
                 */
                // @ts-ignore
                class AnonymousQueue extends org.springframework.amqp.core.Queue {
                    /**
                     * Construct a queue with a Base64-based name.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Construct a queue with a Base64-based name with the supplied arguments.
                     * @param arguments the arguments.
                     */
                    // @ts-ignore
                    constructor(arguments: java.util.Map<java.lang.String, java.lang.Object>)
                    /**
                     * Construct a queue with a name provided by the supplied naming strategy.
                     * @param namingStrategy the naming strategy.
                     * @deprecated in favor of {#link #AnonymousQueue(NamingStrategy)}.
                     * @since 1.5.3
                     */
                    // @ts-ignore
                    constructor(namingStrategy: org.springframework.amqp.core.AnonymousQueue.NamingStrategy)
                    /**
                     * Construct a queue with a name provided by the supplied naming strategy with the
                     * supplied arguments.
                     * @param namingStrategy the naming strategy.
                     * @param arguments the arguments.
                     * @deprecated in favor of {#link #AnonymousQueue(NamingStrategy, Map)}.
                     * @since 1.5.3
                     */
                    // @ts-ignore
                    constructor(namingStrategy: org.springframework.amqp.core.AnonymousQueue.NamingStrategy, arguments: java.util.Map<java.lang.String, java.lang.Object>)
                    /**
                     * Construct a queue with a name provided by the supplied naming strategy.
                     * @param namingStrategy the naming strategy.
                     * @since 2.1
                     */
                    // @ts-ignore
                    constructor(namingStrategy: org.springframework.amqp.core.NamingStrategy)
                    /**
                     * Construct a queue with a name provided by the supplied naming strategy with the
                     * supplied arguments.
                     * @param namingStrategy the naming strategy.
                     * @param arguments the arguments.
                     * @since 2.1
                     */
                    // @ts-ignore
                    constructor(namingStrategy: org.springframework.amqp.core.NamingStrategy, arguments: java.util.Map<java.lang.String, java.lang.Object>)
                }
            }
        }
    }
}
