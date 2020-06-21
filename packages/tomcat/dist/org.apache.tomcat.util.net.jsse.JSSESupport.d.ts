declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace jsse {
                        /**
                         * JSSESupport
                         * Concrete implementation class for JSSE
                         * Support classes.
                         * This will only work with JDK 1.2 and up since it
                         * depends on JDK 1.2's certificate support
                         * @author EKR
                         * @author Craig R. McClanahan
                         *    Parts cribbed from JSSECertCompat
                         *    Parts cribbed from CertificatesValve
                         */
                        // @ts-ignore
                        class JSSESupport extends java.lang.Object implements org.apache.tomcat.util.net.SSLSupport, org.apache.tomcat.util.net.SSLSessionManager {
                            // @ts-ignore
                            constructor(session: javax.net.ssl.SSLSession)
                            // @ts-ignore
                            public getCipherSuite(): string
                            // @ts-ignore
                            public getPeerCertificateChain(): java.security.cert.X509Certificate[]
                            /**
                             * {@inheritDoc}
                             * <p>
                             * This returns the effective bits for the current cipher suite.
                             */
                            // @ts-ignore
                            public getKeySize(): number
                            // @ts-ignore
                            public getSessionId(): string
                            // @ts-ignore
                            public setSession(session: javax.net.ssl.SSLSession): void
                            /**
                             * Invalidate the session this support object is associated with.
                             */
                            // @ts-ignore
                            public invalidateSession(): void
                            // @ts-ignore
                            public getProtocol(): string
                        }
                    }
                }
            }
        }
    }
}
