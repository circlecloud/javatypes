declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Generates names with the form {@code <prefix><base64url>} where 'prefix' is
                 * 'spring.gen-' by default (e.g. spring.gen-eIwaZAYgQv6LvwaDCfVTNQ); the 'base64url'
                 * String is generated from a UUID. The base64 alphabet is the "URL and Filename Safe
                 * Alphabet"; see RFC-4648. Trailing padding characters (@code =) are removed.
                 * @author Gary Russell
                 * @since 2.1
                 */
                // @ts-ignore
                class Base64UrlNamingStrategy extends java.lang.Object implements org.springframework.amqp.core.NamingStrategy {
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
                    constructor(prefix: string)
                    /**
                     * The default instance - using {@code spring.gen-} as the prefix.
                     */
                    // @ts-ignore
                    readonly DEFAULT: org.springframework.amqp.core.Base64UrlNamingStrategy
                    // @ts-ignore
                    generateName(): java.lang.String
                }
            }
        }
    }
}
