declare namespace java {
    namespace net {
        /**
         * This class represents an Internet Protocol version 4 (IPv4) address.
         * Defined by <a href="http://www.ietf.org/rfc/rfc790.txt">
         * <i>RFC&nbsp;790: Assigned Numbers</i></a>,
         * <a href="http://www.ietf.org/rfc/rfc1918.txt">
         * <i>RFC&nbsp;1918: Address Allocation for Private Internets</i></a>,
         * and <a href="http://www.ietf.org/rfc/rfc2365.txt"><i>RFC&nbsp;2365:
         * Administratively Scoped IP Multicast</i></a>
         * <h3> <A NAME="format">Textual representation of IP addresses</a> </h3>
         * Textual representation of IPv4 address used as input to methods
         * takes one of the following forms:
         * <blockquote><table cellpadding=0 cellspacing=0 summary="layout">
         * <tr><td>{@code d.d.d.d}</td></tr>
         * <tr><td>{@code d.d.d}</td></tr>
         * <tr><td>{@code d.d}</td></tr>
         * <tr><td>{@code d}</td></tr>
         * </table></blockquote>
         * <p> When four parts are specified, each is interpreted as a byte of
         * data and assigned, from left to right, to the four bytes of an IPv4
         * address.
         * <p> When a three part address is specified, the last part is
         * interpreted as a 16-bit quantity and placed in the right most two
         * bytes of the network address. This makes the three part address
         * format convenient for specifying Class B net- work addresses as
         * 128.net.host.
         * <p> When a two part address is supplied, the last part is
         * interpreted as a 24-bit quantity and placed in the right most three
         * bytes of the network address. This makes the two part address
         * format convenient for specifying Class A network addresses as
         * net.host.
         * <p> When only one part is given, the value is stored directly in
         * the network address without any byte rearrangement.
         * <p> For methods that return a textual representation as output
         * value, the first form, i.e. a dotted-quad string, is used.
         * <h4> The Scope of a Multicast Address </h4>
         * Historically the IPv4 TTL field in the IP header has doubled as a
         * multicast scope field: a TTL of 0 means node-local, 1 means
         * link-local, up through 32 means site-local, up through 64 means
         * region-local, up through 128 means continent-local, and up through
         * 255 are global. However, the administrative scoping is preferred.
         * Please refer to <a href="http://www.ietf.org/rfc/rfc2365.txt">
         * <i>RFC&nbsp;2365: Administratively Scoped IP Multicast</i></a>
         * @since 1.4
         */
        // @ts-ignore
        class Inet4Address extends java.net.InetAddress {
            /**
             * Utility routine to check if the InetAddress is an
             * IP multicast address. IP multicast address is a Class D
             * address i.e first four bits of the address are 1110.
             * @return a {#code boolean} indicating if the InetAddress is
             *  an IP multicast address
             * @since JDK1.1
             */
            // @ts-ignore
            public isMulticastAddress(): boolean
            /**
             * Utility routine to check if the InetAddress in a wildcard address.
             * @return a {#code boolean} indicating if the Inetaddress is
             *          a wildcard address.
             * @since 1.4
             */
            // @ts-ignore
            public isAnyLocalAddress(): boolean
            /**
             * Utility routine to check if the InetAddress is a loopback address.
             * @return a {#code boolean} indicating if the InetAddress is
             *  a loopback address; or false otherwise.
             * @since 1.4
             */
            // @ts-ignore
            public isLoopbackAddress(): boolean
            /**
             * Utility routine to check if the InetAddress is an link local address.
             * @return a {#code boolean} indicating if the InetAddress is
             *  a link local address; or false if address is not a link local unicast address.
             * @since 1.4
             */
            // @ts-ignore
            public isLinkLocalAddress(): boolean
            /**
             * Utility routine to check if the InetAddress is a site local address.
             * @return a {#code boolean} indicating if the InetAddress is
             *  a site local address; or false if address is not a site local unicast address.
             * @since 1.4
             */
            // @ts-ignore
            public isSiteLocalAddress(): boolean
            /**
             * Utility routine to check if the multicast address has global scope.
             * @return a {#code boolean} indicating if the address has
             *          is a multicast address of global scope, false if it is not
             *          of global scope or it is not a multicast address
             * @since 1.4
             */
            // @ts-ignore
            public isMCGlobal(): boolean
            /**
             * Utility routine to check if the multicast address has node scope.
             * @return a {#code boolean} indicating if the address has
             *          is a multicast address of node-local scope, false if it is not
             *          of node-local scope or it is not a multicast address
             * @since 1.4
             */
            // @ts-ignore
            public isMCNodeLocal(): boolean
            /**
             * Utility routine to check if the multicast address has link scope.
             * @return a {#code boolean} indicating if the address has
             *          is a multicast address of link-local scope, false if it is not
             *          of link-local scope or it is not a multicast address
             * @since 1.4
             */
            // @ts-ignore
            public isMCLinkLocal(): boolean
            /**
             * Utility routine to check if the multicast address has site scope.
             * @return a {#code boolean} indicating if the address has
             *          is a multicast address of site-local scope, false if it is not
             *          of site-local scope or it is not a multicast address
             * @since 1.4
             */
            // @ts-ignore
            public isMCSiteLocal(): boolean
            /**
             * Utility routine to check if the multicast address has organization scope.
             * @return a {#code boolean} indicating if the address has
             *          is a multicast address of organization-local scope,
             *          false if it is not of organization-local scope
             *          or it is not a multicast address
             * @since 1.4
             */
            // @ts-ignore
            public isMCOrgLocal(): boolean
            /**
             * Returns the raw IP address of this {@code InetAddress}
             * object. The result is in network byte order: the highest order
             * byte of the address is in {@code getAddress()[0]}.
             * @return the raw IP address of this object.
             */
            // @ts-ignore
            public getAddress(): number /*byte*/[]
            /**
             * Returns the IP address string in textual presentation form.
             * @return the raw IP address in a string format.
             * @since JDK1.0.2
             */
            // @ts-ignore
            public getHostAddress(): string
            /**
             * Returns a hashcode for this IP address.
             * @return a hash code value for this IP address.
             */
            // @ts-ignore
            public hashCode(): number /*int*/
            /**
             * Compares this object against the specified object.
             * The result is {@code true} if and only if the argument is
             * not {@code null} and it represents the same IP address as
             * this object.
             * <p>
             * Two instances of {@code InetAddress} represent the same IP
             * address if the length of the byte arrays returned by
             * {@code getAddress} is the same for both, and each of the
             * array components is the same for the byte arrays.
             * @param obj   the object to compare against.
             * @return {#code true} if the objects are the same;
             *           {@code false} otherwise.
             * @see java.net.InetAddress#getAddress()
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
        }
    }
}
