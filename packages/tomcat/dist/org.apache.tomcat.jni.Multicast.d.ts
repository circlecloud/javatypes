declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * Multicast
                 * @author Mladen Turk
                 */
                // @ts-ignore
                class Multicast extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Join a Multicast Group
                     * @param sock The socket to join a multicast group
                     * @param join The address of the multicast group to join
                     * @param iface Address of the interface to use.  If NULL is passed, the
                     *               default multicast interface will be used. (OS Dependent)
                     * @param source Source Address to accept transmissions from (non-NULL
                     *                implies Source-Specific Multicast)
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static join(sock: number /*long*/, join: number /*long*/, iface: number /*long*/, source: number /*long*/): number /*int*/
                    /**
                     * Leave a Multicast Group.  All arguments must be the same as
                     * apr_mcast_join.
                     * @param sock The socket to leave a multicast group
                     * @param addr The address of the multicast group to leave
                     * @param iface Address of the interface to use.  If NULL is passed, the
                     *               default multicast interface will be used. (OS Dependent)
                     * @param source Source Address to accept transmissions from (non-NULL
                     *                implies Source-Specific Multicast)
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static leave(sock: number /*long*/, addr: number /*long*/, iface: number /*long*/, source: number /*long*/): number /*int*/
                    /**
                     * Set the Multicast Time to Live (ttl) for a multicast transmission.
                     * @param sock The socket to set the multicast ttl
                     * @param ttl Time to live to Assign. 0-255, default=1
                     *  <br><b>Remark :</b> If the TTL is 0, packets will only be seen
                     *  by sockets on the local machine,
                     *  and only when multicast loopback is enabled.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static hops(sock: number /*long*/, ttl: number /*int*/): number /*int*/
                    /**
                     * Toggle IP Multicast Loopback
                     * @param sock The socket to set multicast loopback
                     * @param opt false=disable, true=enable
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static loopback(sock: number /*long*/, opt: boolean): number /*int*/
                    /**
                     * Set the Interface to be used for outgoing Multicast Transmissions.
                     * @param sock The socket to set the multicast interface on
                     * @param iface Address of the interface to use for Multicast
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static ointerface(sock: number /*long*/, iface: number /*long*/): number /*int*/
                }
            }
        }
    }
}
