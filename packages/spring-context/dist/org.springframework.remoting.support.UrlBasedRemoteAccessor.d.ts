declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace support {
                /**
                 * Abstract base class for classes that access remote services via URLs.
                 * Provides a "serviceUrl" bean property, which is considered as required.
                 * @author Juergen Hoeller
                 * @since 15.12.2003
                 */
                // @ts-ignore
                class UrlBasedRemoteAccessor extends org.springframework.remoting.support.RemoteAccessor {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the URL of this remote accessor's target service.
                     * The URL must be compatible with the rules of the particular remoting provider.
                     */
                    // @ts-ignore
                    setServiceUrl(serviceUrl: string): void
                    /**
                     * Return the URL of this remote accessor's target service.
                     */
                    // @ts-ignore
                    getServiceUrl(): java.lang.String
                    // @ts-ignore
                    afterPropertiesSet(): void
                }
            }
        }
    }
}
