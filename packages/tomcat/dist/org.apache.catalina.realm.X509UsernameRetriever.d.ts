declare namespace org {
    namespace apache {
        namespace catalina {
            namespace realm {
                /**
                 * Provides an interface for retrieving a user name from an X509Certificate.
                 */
                // @ts-ignore
                interface X509UsernameRetriever {
                    /**
                     * Gets a user name from an X509Certificate.
                     * @param cert The certificate containing the user name.
                     * @return An appropriate user name obtained from one or more fields
                     *          in the certificate.
                     */
                    // @ts-ignore
                    getUsername(cert: java.security.cert.X509Certificate): string
                }
            }
        }
    }
}
