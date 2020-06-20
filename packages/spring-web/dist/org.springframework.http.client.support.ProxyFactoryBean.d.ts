declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                namespace support {
                    /**
                     * {@link FactoryBean} that creates a {@link Proxy java.net.Proxy}.
                     * @author Arjen Poutsma
                     * @since 3.0.4
                     * @see FactoryBean
                     * @see Proxy
                     */
                    // @ts-ignore
                    class ProxyFactoryBean extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the proxy type.
                         * <p>Defaults to {@link java.net.Proxy.Type#HTTP}.
                         */
                        // @ts-ignore
                        setType(type: java.net.Proxy.Type): void
                        /**
                         * Set the proxy host name.
                         */
                        // @ts-ignore
                        setHostname(hostname: string): void
                        /**
                         * Set the proxy port.
                         */
                        // @ts-ignore
                        setPort(port: number /*int*/): void
                        // @ts-ignore
                        afterPropertiesSet(): void
                        // @ts-ignore
                        getObject(): java.net.Proxy
                        // @ts-ignore
                        getObjectType(): java.lang.Class<?>
                        // @ts-ignore
                        isSingleton(): boolean
                    }
                }
            }
        }
    }
}
