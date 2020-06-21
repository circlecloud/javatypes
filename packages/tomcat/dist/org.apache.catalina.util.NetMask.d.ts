declare namespace org {
    namespace apache {
        namespace catalina {
            namespace util {
                /**
                 * A class representing a CIDR netmask.
                 * <p>
                 * The constructor takes a string as an argument which represents a netmask, as
                 * per the CIDR notation -- whether this netmask be IPv4 or IPv6. It then
                 * extracts the network address (before the /) and the CIDR prefix (after the
                 * /), and tells through the #matches() method whether a candidate
                 * {@link InetAddress} object fits in the recorded range.
                 * </p>
                 * <p>
                 * As byte arrays as returned by <code>InetAddress.getByName()</code> are always
                 * in network byte order, finding a match is therefore as simple as testing
                 * whether the n first bits (where n is the CIDR) are the same in both byte
                 * arrays (the one of the network address and the one of the candidate address).
                 * We do that by first doing byte comparisons, then testing the last bits if any
                 * (that is, if the remainder of the integer division of the CIDR by 8 is not
                 * 0).
                 * </p>
                 * <p>
                 * As a bonus, if no '/' is found in the input, it is assumed that an exact
                 * address match is required.
                 * </p>
                 */
                // @ts-ignore
                class NetMask extends java.lang.Object {
                    /**
                     * Constructor
                     * @param input the CIDR netmask
                     * @throws IllegalArgumentException if the netmask is not correct (invalid
                     *              address specification, malformed CIDR prefix, etc)
                     */
                    // @ts-ignore
                    constructor(input: java.lang.String | string)
                    /**
                     * Test if a given address matches this netmask.
                     * @param addr The {#link java.net.InetAddress} to test
                     * @return true on match, false otherwise
                     */
                    // @ts-ignore
                    public matches(addr: java.net.InetAddress): boolean
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
