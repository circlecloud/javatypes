declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace openssl {
                        /**
                         * OpenSSL specific {@link SSLSessionContext} implementation.
                         */
                        // @ts-ignore
                        class OpenSSLSessionContext extends java.lang.Object implements javax.net.ssl.SSLSessionContext {
                            // @ts-ignore
                            public getSession(bytes: number /*byte*/[]): javax.net.ssl.SSLSession
                            // @ts-ignore
                            public getIds(): java.util.Enumeration<number /*byte*/[]>
                            /**
                             * Sets the SSL session ticket keys of this context.
                             * @param keys The session ticket keys
                             */
                            // @ts-ignore
                            public setTicketKeys(keys: number /*byte*/[]): void
                            /**
                             * Enable or disable caching of SSL sessions.
                             * @param enabled {#code true} to enable caching, {@code false} to disable
                             */
                            // @ts-ignore
                            public setSessionCacheEnabled(enabled: boolean): void
                            /**
                             * @return {#code true} if caching of SSL sessions is enabled, {@code false}
                             *          otherwise.
                             */
                            // @ts-ignore
                            public isSessionCacheEnabled(): boolean
                            /**
                             * @return The statistics for this context.
                             */
                            // @ts-ignore
                            public stats(): org.apache.tomcat.util.net.openssl.OpenSSLSessionStats
                            // @ts-ignore
                            public setSessionTimeout(seconds: number /*int*/): void
                            // @ts-ignore
                            public getSessionTimeout(): number /*int*/
                            // @ts-ignore
                            public setSessionCacheSize(size: number /*int*/): void
                            // @ts-ignore
                            public getSessionCacheSize(): number /*int*/
                            /**
                             * Set the context within which session be reused (server side only)
                             * See <a href="http://www.openssl.org/docs/ssl/SSL_CTX_set_session_id_context.html">
                             * man SSL_CTX_set_session_id_context</a>
                             * @param sidCtx can be any kind of binary data, it is therefore possible to use e.g. the name
                             *                of the application and/or the hostname and/or service name
                             * @return {#code true} if success, {@code false} otherwise.
                             */
                            // @ts-ignore
                            public setSessionIdContext(sidCtx: number /*byte*/[]): boolean
                        }
                    }
                }
            }
        }
    }
}
