declare namespace java {
    namespace security {
        namespace cert {
            /**
             * Parameters used as input for the LDAP {@code CertStore} algorithm.
             * <p>
             * This class is used to provide necessary configuration parameters (server
             * name and port number) to implementations of the LDAP {@code CertStore}
             * algorithm.
             * <p>
             * <b>Concurrent Access</b>
             * <p>
             * Unless otherwise specified, the methods defined in this class are not
             * thread-safe. Multiple threads that need to access a single
             * object concurrently should synchronize amongst themselves and
             * provide the necessary locking. Multiple threads each manipulating
             * separate objects need not synchronize.
             * @since 1.4
             * @author Steve Hanna
             * @see CertStore
             */
            // @ts-ignore
            class LDAPCertStoreParameters extends java.lang.Object implements java.security.cert.CertStoreParameters {
                /**
                 * Creates an instance of {@code LDAPCertStoreParameters} with the
                 * specified parameter values.
                 * @param serverName the DNS name of the LDAP server
                 * @param port the port number of the LDAP server
                 * @exception NullPointerException if {#code serverName} is
                 *  {@code null}
                 */
                // @ts-ignore
                constructor(serverName: string, port: number /*int*/)
                /**
                 * Creates an instance of {@code LDAPCertStoreParameters} with the
                 * specified server name and a default port of 389.
                 * @param serverName the DNS name of the LDAP server
                 * @exception NullPointerException if {#code serverName} is
                 *  {@code null}
                 */
                // @ts-ignore
                constructor(serverName: string)
                /**
                 * Creates an instance of {@code LDAPCertStoreParameters} with the
                 * default parameter values (server name "localhost", port 389).
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the DNS name of the LDAP server.
                 * @return the name (not {#code null})
                 */
                // @ts-ignore
                getServerName(): java.lang.String
                /**
                 * Returns the port number of the LDAP server.
                 * @return the port number
                 */
                // @ts-ignore
                getPort(): int
                /**
                 * Returns a copy of this object. Changes to the copy will not affect
                 * the original and vice versa.
                 * <p>
                 * Note: this method currently performs a shallow copy of the object
                 * (simply calls {@code Object.clone()}). This may be changed in a
                 * future revision to perform a deep copy if new parameters are added
                 * that should not be shared.
                 * @return the copy
                 */
                // @ts-ignore
                clone(): java.lang.Object
                /**
                 * Returns a formatted string describing the parameters.
                 * @return a formatted string describing the parameters
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
