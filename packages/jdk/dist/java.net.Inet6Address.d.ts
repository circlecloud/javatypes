declare namespace java {
    namespace net {
        /**
         * This class represents an Internet Protocol version 6 (IPv6) address.
         * Defined by <a href="http://www.ietf.org/rfc/rfc2373.txt">
         * <i>RFC&nbsp;2373: IP Version 6 Addressing Architecture</i></a>.
         * <h3> <A NAME="format">Textual representation of IP addresses</a> </h3>
         * Textual representation of IPv6 address used as input to methods
         * takes one of the following forms:
         * <ol>
         * <li><p> <A NAME="lform">The preferred form</a> is x:x:x:x:x:x:x:x,
         * where the 'x's are
         * the hexadecimal values of the eight 16-bit pieces of the
         * address. This is the full form.  For example,
         * <blockquote><table cellpadding=0 cellspacing=0 summary="layout">
         * <tr><td>{@code 1080:0:0:0:8:800:200C:417A}<td></tr>
         * </table></blockquote>
         * <p> Note that it is not necessary to write the leading zeros in
         * an individual field. However, there must be at least one numeral
         * in every field, except as described below.</li>
         * <li><p> Due to some methods of allocating certain styles of IPv6
         * addresses, it will be common for addresses to contain long
         * strings of zero bits. In order to make writing addresses
         * containing zero bits easier, a special syntax is available to
         * compress the zeros. The use of "::" indicates multiple groups
         * of 16-bits of zeros. The "::" can only appear once in an address.
         * The "::" can also be used to compress the leading and/or trailing
         * zeros in an address. For example,
         * <blockquote><table cellpadding=0 cellspacing=0 summary="layout">
         * <tr><td>{@code 1080::8:800:200C:417A}<td></tr>
         * </table></blockquote>
         * <li><p> An alternative form that is sometimes more convenient
         * when dealing with a mixed environment of IPv4 and IPv6 nodes is
         * x:x:x:x:x:x:d.d.d.d, where the 'x's are the hexadecimal values
         * of the six high-order 16-bit pieces of the address, and the 'd's
         * are the decimal values of the four low-order 8-bit pieces of the
         * standard IPv4 representation address, for example,
         * <blockquote><table cellpadding=0 cellspacing=0 summary="layout">
         * <tr><td>{@code ::FFFF:129.144.52.38}<td></tr>
         * <tr><td>{@code ::129.144.52.38}<td></tr>
         * </table></blockquote>
         * <p> where "::FFFF:d.d.d.d" and "::d.d.d.d" are, respectively, the
         * general forms of an IPv4-mapped IPv6 address and an
         * IPv4-compatible IPv6 address. Note that the IPv4 portion must be
         * in the "d.d.d.d" form. The following forms are invalid:
         * <blockquote><table cellpadding=0 cellspacing=0 summary="layout">
         * <tr><td>{@code ::FFFF:d.d.d}<td></tr>
         * <tr><td>{@code ::FFFF:d.d}<td></tr>
         * <tr><td>{@code ::d.d.d}<td></tr>
         * <tr><td>{@code ::d.d}<td></tr>
         * </table></blockquote>
         * <p> The following form:
         * <blockquote><table cellpadding=0 cellspacing=0 summary="layout">
         * <tr><td>{@code ::FFFF:d}<td></tr>
         * </table></blockquote>
         * <p> is valid, however it is an unconventional representation of
         * the IPv4-compatible IPv6 address,
         * <blockquote><table cellpadding=0 cellspacing=0 summary="layout">
         * <tr><td>{@code ::255.255.0.d}<td></tr>
         * </table></blockquote>
         * <p> while "::d" corresponds to the general IPv6 address
         * "0:0:0:0:0:0:0:d".</li>
         * </ol>
         * <p> For methods that return a textual representation as output
         * value, the full form is used. Inet6Address will return the full
         * form because it is unambiguous when used in combination with other
         * textual data.
         * <h4> Special IPv6 address </h4>
         * <blockquote>
         * <table cellspacing=2 summary="Description of IPv4-mapped address">
         * <tr><th valign=top><i>IPv4-mapped address</i></th>
         * <td>Of the form::ffff:w.x.y.z, this IPv6 address is used to
         * represent an IPv4 address. It allows the native program to
         * use the same address data structure and also the same
         * socket when communicating with both IPv4 and IPv6 nodes.
         * <p>In InetAddress and Inet6Address, it is used for internal
         * representation; it has no functional role. Java will never
         * return an IPv4-mapped address.  These classes can take an
         * IPv4-mapped address as input, both in byte array and text
         * representation. However, it will be converted into an IPv4
         * address.</td></tr>
         * </table></blockquote>
         * <h4><A NAME="scoped">Textual representation of IPv6 scoped addresses</a></h4>
         * <p> The textual representation of IPv6 addresses as described above can be
         * extended to specify IPv6 scoped addresses. This extension to the basic
         * addressing architecture is described in [draft-ietf-ipngwg-scoping-arch-04.txt].
         * <p> Because link-local and site-local addresses are non-global, it is possible
         * that different hosts may have the same destination address and may be
         * reachable through different interfaces on the same originating system. In
         * this case, the originating system is said to be connected to multiple zones
         * of the same scope. In order to disambiguate which is the intended destination
         * zone, it is possible to append a zone identifier (or <i>scope_id</i>) to an
         * IPv6 address.
         * <p> The general format for specifying the <i>scope_id</i> is the following:
         * <blockquote><i>IPv6-address</i>%<i>scope_id</i></blockquote>
         * <p> The IPv6-address is a literal IPv6 address as described above.
         * The <i>scope_id</i> refers to an interface on the local system, and it can be
         * specified in two ways.
         * <ol><li><i>As a numeric identifier.</i> This must be a positive integer
         * that identifies the particular interface and scope as understood by the
         * system. Usually, the numeric values can be determined through administration
         * tools on the system. Each interface may have multiple values, one for each
         * scope. If the scope is unspecified, then the default value used is zero.</li>
         * <li><i>As a string.</i> This must be the exact string that is returned by
         * {@link java.net.NetworkInterface#getName()} for the particular interface in
         * question. When an Inet6Address is created in this way, the numeric scope-id
         * is determined at the time the object is created by querying the relevant
         * NetworkInterface.</li></ol>
         * <p> Note also, that the numeric <i>scope_id</i> can be retrieved from
         * Inet6Address instances returned from the NetworkInterface class. This can be
         * used to find out the current scope ids configured on the system.
         * @since 1.4
         */
        // @ts-ignore
        class Inet6Address extends java.net.InetAddress {
            /**
             * Create an Inet6Address in the exact manner of {@link
             * InetAddress#getByAddress(String,byte[])} except that the IPv6 scope_id is
             * set to the value corresponding to the given interface for the address
             * type specified in {@code addr}. The call will fail with an
             * UnknownHostException if the given interface does not have a numeric
             * scope_id assigned for the given address type (eg. link-local or site-local).
             * See <a href="Inet6Address.html#scoped">here</a> for a description of IPv6
             * scoped addresses.
             * @param host the specified host
             * @param addr the raw IP address in network byte order
             * @param nif an interface this address must be associated with.
             * @return an Inet6Address object created from the raw IP address.
             * @throws UnknownHostException
             *           if IP address is of illegal length, or if the interface does not
             *           have a numeric scope_id assigned for the given address type.
             * @since 1.5
             */
            // @ts-ignore
            getByAddress(host: string, addr: number /*byte*/[], nif: java.net.NetworkInterface): java.net.Inet6Address
            /**
             * Create an Inet6Address in the exact manner of {@link
             * InetAddress#getByAddress(String,byte[])} except that the IPv6 scope_id is
             * set to the given numeric value. The scope_id is not checked to determine
             * if it corresponds to any interface on the system.
             * See <a href="Inet6Address.html#scoped">here</a> for a description of IPv6
             * scoped addresses.
             * @param host the specified host
             * @param addr the raw IP address in network byte order
             * @param scope_id the numeric scope_id for the address.
             * @return an Inet6Address object created from the raw IP address.
             * @throws UnknownHostException  if IP address is of illegal length.
             * @since 1.5
             */
            // @ts-ignore
            getByAddress(host: string, addr: number /*byte*/[], scope_id: number /*int*/): java.net.Inet6Address
            /**
             * Utility routine to check if the InetAddress is an IP multicast
             * address. 11111111 at the start of the address identifies the
             * address as being a multicast address.
             * @return a {#code boolean} indicating if the InetAddress is an IP
             *          multicast address
             * @since JDK1.1
             */
            // @ts-ignore
            isMulticastAddress(): boolean
            /**
             * Utility routine to check if the InetAddress in a wildcard address.
             * @return a {#code boolean} indicating if the Inetaddress is
             *          a wildcard address.
             * @since 1.4
             */
            // @ts-ignore
            isAnyLocalAddress(): boolean
            /**
             * Utility routine to check if the InetAddress is a loopback address.
             * @return a {#code boolean} indicating if the InetAddress is a loopback
             *          address; or false otherwise.
             * @since 1.4
             */
            // @ts-ignore
            isLoopbackAddress(): boolean
            /**
             * Utility routine to check if the InetAddress is an link local address.
             * @return a {#code boolean} indicating if the InetAddress is a link local
             *          address; or false if address is not a link local unicast address.
             * @since 1.4
             */
            // @ts-ignore
            isLinkLocalAddress(): boolean
            /**
             * Utility routine to check if the InetAddress is a site local address.
             * @return a {#code boolean} indicating if the InetAddress is a site local
             *          address; or false if address is not a site local unicast address.
             * @since 1.4
             */
            // @ts-ignore
            isSiteLocalAddress(): boolean
            /**
             * Utility routine to check if the multicast address has global scope.
             * @return a {#code boolean} indicating if the address has is a multicast
             *          address of global scope, false if it is not of global scope or
             *          it is not a multicast address
             * @since 1.4
             */
            // @ts-ignore
            isMCGlobal(): boolean
            /**
             * Utility routine to check if the multicast address has node scope.
             * @return a {#code boolean} indicating if the address has is a multicast
             *          address of node-local scope, false if it is not of node-local
             *          scope or it is not a multicast address
             * @since 1.4
             */
            // @ts-ignore
            isMCNodeLocal(): boolean
            /**
             * Utility routine to check if the multicast address has link scope.
             * @return a {#code boolean} indicating if the address has is a multicast
             *          address of link-local scope, false if it is not of link-local
             *          scope or it is not a multicast address
             * @since 1.4
             */
            // @ts-ignore
            isMCLinkLocal(): boolean
            /**
             * Utility routine to check if the multicast address has site scope.
             * @return a {#code boolean} indicating if the address has is a multicast
             *          address of site-local scope, false if it is not  of site-local
             *          scope or it is not a multicast address
             * @since 1.4
             */
            // @ts-ignore
            isMCSiteLocal(): boolean
            /**
             * Utility routine to check if the multicast address has organization scope.
             * @return a {#code boolean} indicating if the address has is a multicast
             *          address of organization-local scope, false if it is not of
             *          organization-local scope or it is not a multicast address
             * @since 1.4
             */
            // @ts-ignore
            isMCOrgLocal(): boolean
            /**
             * Returns the raw IP address of this {@code InetAddress} object. The result
             * is in network byte order: the highest order byte of the address is in
             * {@code getAddress()[0]}.
             * @return the raw IP address of this object.
             */
            // @ts-ignore
            getAddress(): byte[]
            /**
             * Returns the numeric scopeId, if this instance is associated with
             * an interface. If no scoped_id is set, the returned value is zero.
             * @return the scopeId, or zero if not set.
             * @since 1.5
             */
            // @ts-ignore
            getScopeId(): int
            /**
             * Returns the scoped interface, if this instance was created with
             * with a scoped interface.
             * @return the scoped interface, or null if not set.
             * @since 1.5
             */
            // @ts-ignore
            getScopedInterface(): java.net.NetworkInterface
            /**
             * Returns the IP address string in textual presentation. If the instance
             * was created specifying a scope identifier then the scope id is appended
             * to the IP address preceded by a "%" (per-cent) character. This can be
             * either a numeric value or a string, depending on which was used to create
             * the instance.
             * @return the raw IP address in a string format.
             */
            // @ts-ignore
            getHostAddress(): java.lang.String
            /**
             * Returns a hashcode for this IP address.
             * @return a hash code value for this IP address.
             */
            // @ts-ignore
            hashCode(): int
            /**
             * Compares this object against the specified object. The result is {@code
             * true} if and only if the argument is not {@code null} and it represents
             * the same IP address as this object.
             * <p> Two instances of {@code InetAddress} represent the same IP address
             * if the length of the byte arrays returned by {@code getAddress} is the
             * same for both, and each of the array components is the same for the byte
             * arrays.
             * @param obj   the object to compare against.
             * @return {#code true} if the objects are the same; {@code false} otherwise.
             * @see java.net.InetAddress#getAddress()
             */
            // @ts-ignore
            equals(obj: any): boolean
            /**
             * Utility routine to check if the InetAddress is an
             * IPv4 compatible IPv6 address.
             * @return a {#code boolean} indicating if the InetAddress is an IPv4
             *          compatible IPv6 address; or false if address is IPv4 address.
             * @since 1.4
             */
            // @ts-ignore
            isIPv4CompatibleAddress(): boolean
        }
    }
}
