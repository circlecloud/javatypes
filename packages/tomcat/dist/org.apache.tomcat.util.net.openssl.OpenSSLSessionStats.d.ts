declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace openssl {
                        /**
                         * Stats exposed by an OpenSSL session context.
                         * @see <a href="https://www.openssl.org/docs/ssl/SSL_CTX_sess_number.html"><code>SSL_CTX_sess_number</code></a>
                         */
                        // @ts-ignore
                        class OpenSSLSessionStats extends java.lang.Object {
                            /**
                             * @return The current number of sessions in the internal session cache.
                             */
                            // @ts-ignore
                            public number(): number /*long*/
                            /**
                             * @return The number of started SSL/TLS handshakes in client mode.
                             */
                            // @ts-ignore
                            public connect(): number /*long*/
                            /**
                             * @return The number of successfully established SSL/TLS sessions in client mode.
                             */
                            // @ts-ignore
                            public connectGood(): number /*long*/
                            /**
                             * @return The number of start renegotiations in client mode.
                             */
                            // @ts-ignore
                            public connectRenegotiate(): number /*long*/
                            /**
                             * @return The number of started SSL/TLS handshakes in server mode.
                             */
                            // @ts-ignore
                            public accept(): number /*long*/
                            /**
                             * @return The number of successfully established SSL/TLS sessions in server mode.
                             */
                            // @ts-ignore
                            public acceptGood(): number /*long*/
                            /**
                             * @return The number of start renegotiations in server mode.
                             */
                            // @ts-ignore
                            public acceptRenegotiate(): number /*long*/
                            /**
                             * @return The number of successfully reused sessions. In client mode, a
                             *          session set with {#code SSL_set_session} successfully reused is
                             *          counted as a hit. In server mode, a session successfully
                             *          retrieved from internal or external cache is counted as a hit.
                             */
                            // @ts-ignore
                            public hits(): number /*long*/
                            /**
                             * @return The number of successfully retrieved sessions from the external
                             *          session cache in server mode.
                             */
                            // @ts-ignore
                            public cbHits(): number /*long*/
                            /**
                             * @return The number of sessions proposed by clients that were not found in
                             *          the internal session cache in server mode.
                             */
                            // @ts-ignore
                            public misses(): number /*long*/
                            /**
                             * @return The number of sessions proposed by clients and either found in
                             *          the internal or external session cache in server mode, but that
                             *          were invalid due to timeout. These sessions are not included in
                             *          the {#link #hits()} count.
                             */
                            // @ts-ignore
                            public timeouts(): number /*long*/
                            /**
                             * @return The number of sessions that were removed because the maximum
                             *          session cache size was exceeded.
                             */
                            // @ts-ignore
                            public cacheFull(): number /*long*/
                        }
                    }
                }
            }
        }
    }
}
