declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Provider of the security context of the code running inside the bean factory.
                     * @author Costin Leau
                     * @since 3.0
                     */
                    // @ts-ignore
                    interface SecurityContextProvider {
                        /**
                         * Provides a security access control context relevant to a bean factory.
                         * @return bean factory security control context
                         */
                        // @ts-ignore
                        getAccessControlContext(): java.security.AccessControlContext
                    }
                }
            }
        }
    }
}
