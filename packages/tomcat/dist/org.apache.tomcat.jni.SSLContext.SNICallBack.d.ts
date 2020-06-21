declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                namespace SSLContext {
                    /**
                     * Interface implemented by components that will receive the call back to
                     * select an OpenSSL SSLContext based on the host name requested by the
                     * client.
                     */
                    // @ts-ignore
                    interface SNICallBack {
                        /**
                         * This callback is made during the TLS handshake when the client uses
                         * the SNI extension to request a specific TLS host.
                         * @param sniHostName The host name requested by the client
                         * @return The Java representation of the pointer to the OpenSSL
                         *          SSLContext to use for the given host or zero if no SSLContext
                         *          could be identified
                         */
                        // @ts-ignore
                        getSslContext(sniHostName: java.lang.String | string): number /*long*/
                    }
                }
            }
        }
    }
}
