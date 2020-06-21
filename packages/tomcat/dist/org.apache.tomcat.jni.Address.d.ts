declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * Address
                 * @author Mladen Turk
                 */
                // @ts-ignore
                class Address extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly APR_ANYADDR: java.lang.String | string
                    /**
                     * Fill the Sockaddr class from apr_sockaddr_t
                     * @param info Sockaddr class to fill
                     * @param sa Structure pointer
                     * @return <code>true</code> if the operation was successful
                     */
                    // @ts-ignore
                    public static fill(info: org.apache.tomcat.jni.Sockaddr, sa: number /*long*/): boolean
                    /**
                     * Create the Sockaddr object from apr_sockaddr_t
                     * @param sa Structure pointer
                     * @return the socket address
                     */
                    // @ts-ignore
                    public static getInfo(sa: number /*long*/): org.apache.tomcat.jni.Sockaddr
                    /**
                     * Create apr_sockaddr_t from hostname, address family, and port.
                     * @param hostname The hostname or numeric address string to resolve/parse, or
                     *                NULL to build an address that corresponds to 0.0.0.0 or ::
                     * @param family The address family to use, or APR_UNSPEC if the system should
                     *                decide.
                     * @param port The port number.
                     * @param flags Special processing flags:
                     *  <PRE>
                     *        APR_IPV4_ADDR_OK          first query for IPv4 addresses; only look
                     *                                  for IPv6 addresses if the first query failed;
                     *                                  only valid if family is APR_UNSPEC and hostname
                     *                                  isn't NULL; mutually exclusive with
                     *                                  APR_IPV6_ADDR_OK
                     *        APR_IPV6_ADDR_OK          first query for IPv6 addresses; only look
                     *                                  for IPv4 addresses if the first query failed;
                     *                                  only valid if family is APR_UNSPEC and hostname
                     *                                  isn't NULL and APR_HAVE_IPV6; mutually exclusive
                     *                                  with APR_IPV4_ADDR_OK
                     *  </PRE>
                     * @param p The pool for the apr_sockaddr_t and associated storage.
                     * @return The new apr_sockaddr_t.
                     * @throws Exception Operation failed
                     */
                    // @ts-ignore
                    public static info(hostname: java.lang.String | string, family: number /*int*/, port: number /*int*/, flags: number /*int*/, p: number /*long*/): number /*long*/
                    /**
                     * Look up the host name from an apr_sockaddr_t.
                     * @param sa The apr_sockaddr_t.
                     * @param flags Special processing flags.
                     * @return The hostname.
                     */
                    // @ts-ignore
                    public static getnameinfo(sa: number /*long*/, flags: number /*int*/): string
                    /**
                     * Return the IP address (in numeric address string format) in
                     * an APR socket address.  APR will allocate storage for the IP address
                     * string from the pool of the apr_sockaddr_t.
                     * @param sa The socket address to reference.
                     * @return The IP address.
                     */
                    // @ts-ignore
                    public static getip(sa: number /*long*/): string
                    /**
                     * Given an apr_sockaddr_t and a service name, set the port for the service
                     * @param sockaddr The apr_sockaddr_t that will have its port set
                     * @param servname The name of the service you wish to use
                     * @return APR status code.
                     */
                    // @ts-ignore
                    public static getservbyname(sockaddr: number /*long*/, servname: java.lang.String | string): number /*int*/
                    /**
                     * Return an apr_sockaddr_t from an apr_socket_t
                     * @param which Which interface do we want the apr_sockaddr_t for?
                     * @param sock The socket to use
                     * @return The returned apr_sockaddr_t.
                     * @throws Exception An error occurred
                     */
                    // @ts-ignore
                    public static get(which: number /*int*/, sock: number /*long*/): number /*long*/
                    /**
                     * See if the IP addresses in two APR socket addresses are
                     * equivalent.  Appropriate logic is present for comparing
                     * IPv4-mapped IPv6 addresses with IPv4 addresses.
                     * @param a One of the APR socket addresses.
                     * @param b The other APR socket address.
                     * @return <code>true</code> if the addresses are equal
                     */
                    // @ts-ignore
                    public static equal(a: number /*long*/, b: number /*long*/): boolean
                }
            }
        }
    }
}
