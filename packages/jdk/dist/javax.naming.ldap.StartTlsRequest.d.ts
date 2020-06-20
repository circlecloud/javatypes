declare namespace javax {
    namespace naming {
        namespace ldap {
            /**
             * This class implements the LDAPv3 Extended Request for StartTLS as
             * defined in
             * <a href="http://www.ietf.org/rfc/rfc2830.txt">Lightweight Directory
             * Access Protocol (v3): Extension for Transport Layer Security</a>
             * The object identifier for StartTLS is 1.3.6.1.4.1.1466.20037
             * and no extended request value is defined.
             * <p>
             * <tt>StartTlsRequest</tt>/<tt>StartTlsResponse</tt> are used to establish
             * a TLS connection over the existing LDAP connection associated with
             * the JNDI context on which <tt>extendedOperation()</tt> is invoked.
             * Typically, a JNDI program uses these classes as follows.
             * <blockquote><pre>
             * import javax.naming.ldap.*;
             * // Open an LDAP association
             * LdapContext ctx = new InitialLdapContext();
             * // Perform a StartTLS extended operation
             * StartTlsResponse tls =
             * (StartTlsResponse) ctx.extendedOperation(new StartTlsRequest());
             * // Open a TLS connection (over the existing LDAP association) and get details
             * // of the negotiated TLS session: cipher suite, peer certificate, etc.
             * SSLSession session = tls.negotiate();
             * // ... use ctx to perform protected LDAP operations
             * // Close the TLS connection (revert back to the underlying LDAP association)
             * tls.close();
             * // ... use ctx to perform unprotected LDAP operations
             * // Close the LDAP association
             * ctx.close;
             * </pre></blockquote>
             * @since 1.4
             * @see StartTlsResponse
             * @author Vincent Ryan
             */
            // @ts-ignore
            class StartTlsRequest extends java.lang.Object implements javax.naming.ldap.ExtendedRequest {
                /**
                 * Constructs a StartTLS extended request.
                 */
                // @ts-ignore
                constructor()
                /**
                 * The StartTLS extended request's assigned object identifier
                 * is 1.3.6.1.4.1.1466.20037.
                 */
                // @ts-ignore
                readonly OID: string
                /**
                 * Retrieves the StartTLS request's object identifier string.
                 * @return The object identifier string, "1.3.6.1.4.1.1466.20037".
                 */
                // @ts-ignore
                getID(): java.lang.String
                /**
                 * Retrieves the StartTLS request's ASN.1 BER encoded value.
                 * Since the request has no defined value, null is always
                 * returned.
                 * @return The null value.
                 */
                // @ts-ignore
                getEncodedValue(): byte[]
                /**
                 * Creates an extended response object that corresponds to the
                 * LDAP StartTLS extended request.
                 * <p>
                 * The result must be a concrete subclass of StartTlsResponse
                 * and must have a public zero-argument constructor.
                 * <p>
                 * This method locates the implementation class by locating
                 * configuration files that have the name:
                 * <blockquote><tt>
                 * META-INF/services/javax.naming.ldap.StartTlsResponse
                 * </tt></blockquote>
                 * The configuration files and their corresponding implementation classes must
                 * be accessible to the calling thread's context class loader.
                 * <p>
                 * Each configuration file should contain a list of fully-qualified class
                 * names, one per line.  Space and tab characters surrounding each name, as
                 * well as blank lines, are ignored.  The comment character is <tt>'#'</tt>
                 * (<tt>0x23</tt>); on each line all characters following the first comment
                 * character are ignored.  The file must be encoded in UTF-8.
                 * <p>
                 * This method will return an instance of the first implementation
                 * class that it is able to load and instantiate successfully from
                 * the list of class names collected from the configuration files.
                 * This method uses the calling thread's context classloader to find the
                 * configuration files and to load the implementation class.
                 * <p>
                 * If no class can be found in this way, this method will use
                 * an implementation-specific way to locate an implementation.
                 * If none is found, a NamingException is thrown.
                 * @param id         The object identifier of the extended response.
                 *                    Its value must be "1.3.6.1.4.1.1466.20037" or null.
                 *                    Both values are equivalent.
                 * @param berValue   The possibly null ASN.1 BER encoded value of the
                 *                    extended response. This is the raw BER bytes
                 *                    including the tag and length of the response value.
                 *                    It does not include the response OID.
                 *                    Its value is ignored because a Start TLS response
                 *                    is not expected to contain any response value.
                 * @param offset     The starting position in berValue of the bytes to use.
                 *                    Its value is ignored because a Start TLS response
                 *                    is not expected to contain any response value.
                 * @param length     The number of bytes in berValue to use.
                 *                    Its value is ignored because a Start TLS response
                 *                    is not expected to contain any response value.
                 * @return The StartTLS extended response object.
                 * @exception NamingException If a naming exception was encountered
                 *                    while creating the StartTLS extended response object.
                 */
                // @ts-ignore
                createExtendedResponse(id: string, berValue: number /*byte*/[], offset: number /*int*/, length: number /*int*/): javax.naming.ldap.ExtendedResponse
            }
        }
    }
}
