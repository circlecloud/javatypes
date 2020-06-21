declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                namespace AnonymousQueue {
                    /**
                     * Generates names with the form {@code <prefix><base64url>} where
                     * 'prefix' is 'spring.gen-' by default
                     * (e.g. spring.gen-eIwaZAYgQv6LvwaDCfVTNQ);
                     * the 'base64url' String is generated from a UUID. The base64 alphabet
                     * is the "URL and Filename Safe Alphabet"; see RFC-4648. Trailing padding
                     * characters (@code =) are removed.
                     * @deprecated - use the {#link org.springframework.amqp.core.Base64UrlNamingStrategy}.
                     * @since 1.5.3
                     */
                    // @ts-ignore
                    class Base64UrlNamingStrategy extends java.lang.Object implements org.springframework.amqp.core.AnonymousQueue.NamingStrategy {
                        /**
                         * Construct an instance using the default prefix {@code spring.gen-}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Construct an instance using the supplied prefix.
                         * @param prefix The prefix.
                         */
                        // @ts-ignore
                        constructor(prefix: java.lang.String | string)
                        /**
                         * The default instance - using {@code spring.gen-} as the prefix.
                         */
                        // @ts-ignore
                        public static readonly DEFAULT: org.springframework.amqp.core.AnonymousQueue.Base64UrlNamingStrategy
                        // @ts-ignore
                        public generateName(): string
                    }
                }
            }
        }
    }
}
