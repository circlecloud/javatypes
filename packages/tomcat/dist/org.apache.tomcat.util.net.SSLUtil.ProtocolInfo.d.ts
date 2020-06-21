declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace SSLUtil {
                        /**
                         * Optional interface that can be implemented by
                         * {@link javax.net.ssl.SSLEngine}s to indicate that they support ALPN and
                         * can provided the protocol agreed with the client.
                         */
                        // @ts-ignore
                        interface ProtocolInfo {
                            /**
                             * ALPN information.
                             * @return the protocol selected using ALPN
                             */
                            // @ts-ignore
                            getNegotiatedProtocol(): string
                        }
                    }
                }
            }
        }
    }
}
