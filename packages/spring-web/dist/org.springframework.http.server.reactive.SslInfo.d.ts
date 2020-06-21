declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                namespace reactive {
                    /**
                     * A holder for SSL session information.
                     * @author Rossen Stoyanchev
                     * @since 5.0.2
                     */
                    // @ts-ignore
                    interface SslInfo {
                        /**
                         * Return the SSL session id, if any.
                         */
                        // @ts-ignore
                        getSessionId(): string
                        /**
                         * Return SSL certificates associated with the request, if any.
                         */
                        // @ts-ignore
                        getPeerCertificates(): java.security.cert.X509Certificate[]
                    }
                }
            }
        }
    }
}
