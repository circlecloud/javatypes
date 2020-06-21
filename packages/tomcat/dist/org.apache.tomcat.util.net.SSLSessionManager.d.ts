declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    /**
                     * Defines an interface used to manage SSL sessions. The manager operates on a
                     * single session.
                     */
                    // @ts-ignore
                    interface SSLSessionManager {
                        /**
                         * Invalidate the SSL session
                         */
                        // @ts-ignore
                        invalidateSession(): void
                    }
                }
            }
        }
    }
}
