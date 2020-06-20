declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Simple {@link SecurityContextProvider} implementation.
                     * @author Costin Leau
                     * @since 3.0
                     */
                    // @ts-ignore
                    class SimpleSecurityContextProvider extends java.lang.Object implements org.springframework.beans.factory.support.SecurityContextProvider {
                        /**
                         * Construct a new {@code SimpleSecurityContextProvider} instance.
                         * <p>The security context will be retrieved on each call from the current
                         * thread.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Construct a new {@code SimpleSecurityContextProvider} instance.
                         * <p>If the given control context is null, the security context will be
                         * retrieved on each call from the current thread.
                         * @param acc access control context (can be {#code null})
                         * @see AccessController#getContext()
                         */
                        // @ts-ignore
                        constructor(acc: java.security.AccessControlContext)
                        // @ts-ignore
                        getAccessControlContext(): java.security.AccessControlContext
                    }
                }
            }
        }
    }
}
