declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    /**
                     * <p>IPv6 utilities.
                     * <p>For the moment, it only contains function to canonicalize IPv6 address
                     * into RFC 5952 form.
                     */
                    // @ts-ignore
                    class IPv6Utils extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * <p>Convert IPv6 address into RFC 5952 form.
                         * E.g. 2001:db8:0:1:0:0:0:1 -&gt; 2001:db8:0:1::1</p>
                         * <p>Method is null safe, and if IPv4 address or host name is passed to the
                         * method it is returned without any processing.</p>
                         * <p>Method also supports IPv4 in IPv6 (e.g. 0:0:0:0:0:ffff:192.0.2.1 -&gt;
                         * ::ffff:192.0.2.1), and zone ID (e.g. fe80:0:0:0:f0f0:c0c0:1919:1234%4
                         * -&gt; fe80::f0f0:c0c0:1919:1234%4).</p>
                         * <p>The behaviour of this method is undefined if an invalid IPv6 address
                         * is passed in as input.</p>
                         * @param ipv6Address String representing valid IPv6 address.
                         * @return String representing IPv6 in canonical form.
                         * @throws IllegalArgumentException if IPv6 format is unacceptable.
                         */
                        // @ts-ignore
                        public static canonize(ipv6Address: java.lang.String | string): string
                    }
                }
            }
        }
    }
}
