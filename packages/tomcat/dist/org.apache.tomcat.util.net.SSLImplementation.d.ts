declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    /**
                     * Provides a factory and base implementation for the Tomcat specific mechanism
                     * that allows alternative SSL/TLS implementations to be used without requiring
                     * the implementation of a full JSSE provider.
                     */
                    // @ts-ignore
                    abstract class SSLImplementation extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Obtain an instance (not a singleton) of the implementation with the given
                         * class name.
                         * @param className The class name of the required implementation or null to
                         *                   use the default (currently {#link JSSEImplementation}.
                         * @return An instance of the required implementation
                         * @throws ClassNotFoundException If an instance of the requested class
                         *          cannot be created
                         */
                        // @ts-ignore
                        public static getInstance(className: java.lang.String | string): org.apache.tomcat.util.net.SSLImplementation
                        // @ts-ignore
                        public abstract getSSLSupport(session: javax.net.ssl.SSLSession): org.apache.tomcat.util.net.SSLSupport
                        // @ts-ignore
                        public abstract getSSLUtil(certificate: org.apache.tomcat.util.net.SSLHostConfigCertificate): org.apache.tomcat.util.net.SSLUtil
                        // @ts-ignore
                        public abstract isAlpnSupported(): boolean
                    }
                }
            }
        }
    }
}
