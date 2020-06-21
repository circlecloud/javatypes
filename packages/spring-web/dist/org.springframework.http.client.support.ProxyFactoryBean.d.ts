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
                        public setType(type: java.net.Proxy.Type): void
                        /**
                         * Set the proxy host name.
                         */
                        // @ts-ignore
                        public setHostname(hostname: java.lang.String | string): void
                        /**
                         * Set the proxy port.
                         */
                        // @ts-ignore
                        public setPort(port: number /*int*/): void
                        // @ts-ignore
                        public afterPropertiesSet(): void
                        // @ts-ignore
                        public getObject(): java.net.Proxy
                        // @ts-ignore
                        public getObjectType(): java.lang.Class<any>
                        // @ts-ignore
                        public isSingleton(): boolean
                    }
                }
            }
        }
    }
}
