declare namespace java {
    namespace nio {
        namespace channels {
            /**
             * A token representing the membership of an Internet Protocol (IP) multicast
             * group.
             * <p> A membership key may represent a membership to receive all datagrams sent
             * to the group, or it may be <em>source-specific</em>, meaning that it
             * represents a membership that receives only datagrams from a specific source
             * address. Whether or not a membership key is source-specific may be determined
             * by invoking its {@link #sourceAddress() sourceAddress} method.
             * <p> A membership key is valid upon creation and remains valid until the
             * membership is dropped by invoking the {@link #drop() drop} method, or
             * the channel is closed. The validity of the membership key may be tested
             * by invoking its {@link #isValid() isValid} method.
             * <p> Where a membership key is not source-specific and the underlying operation
             * system supports source filtering, then the {@link #block block} and {@link
             * #unblock unblock} methods can be used to block or unblock multicast datagrams
             * from particular source addresses.
             * @see MulticastChannel
             * @since 1.7
             */
            // @ts-ignore
            abstract class MembershipKey extends java.lang.Object {
                /**
                 * Initializes a new instance of this class.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Tells whether or not this membership is valid.
                 * <p> A multicast group membership is valid upon creation and remains
                 * valid until the membership is dropped by invoking the {@link #drop() drop}
                 * method, or the channel is closed.
                 * @return {#code true} if this membership key is valid, {@code false}
                 *           otherwise
                 */
                // @ts-ignore
                public abstract isValid(): boolean
                /**
                 * Drop membership.
                 * <p> If the membership key represents a membership to receive all datagrams
                 * then the membership is dropped and the channel will no longer receive any
                 * datagrams sent to the group. If the membership key is source-specific
                 * then the channel will no longer receive datagrams sent to the group from
                 * that source address.
                 * <p> After membership is dropped it may still be possible to receive
                 * datagrams sent to the group. This can arise when datagrams are waiting to
                 * be received in the socket's receive buffer. After membership is dropped
                 * then the channel may {@link MulticastChannel#join join} the group again
                 * in which case a new membership key is returned.
                 * <p> Upon return, this membership object will be {@link #isValid() invalid}.
                 * If the multicast group membership is already invalid then invoking this
                 * method has no effect. Once a multicast group membership is invalid,
                 * it remains invalid forever.
                 */
                // @ts-ignore
                public abstract drop(): void
                /**
                 * Block multicast datagrams from the given source address.
                 * <p> If this membership key is not source-specific, and the underlying
                 * operating system supports source filtering, then this method blocks
                 * multicast datagrams from the given source address. If the given source
                 * address is already blocked then this method has no effect.
                 * After a source address is blocked it may still be possible to receive
                 * datagrams from that source. This can arise when datagrams are waiting to
                 * be received in the socket's receive buffer.
                 * @param source
                 *           The source address to block
                 * @return This membership key
                 * @throws IllegalArgumentException
                 *           If the {#code source} parameter is not a unicast address or
                 *           is not the same address type as the multicast group
                 * @throws IllegalStateException
                 *           If this membership key is source-specific or is no longer valid
                 * @throws UnsupportedOperationException
                 *           If the underlying operating system does not support source
                 *           filtering
                 * @throws IOException
                 *           If an I/O error occurs
                 */
                // @ts-ignore
                public abstract block(source: java.net.InetAddress): java.nio.channels.MembershipKey
                /**
                 * Unblock multicast datagrams from the given source address that was
                 * previously blocked using the {@link #block(InetAddress) block} method.
                 * @param source
                 *           The source address to unblock
                 * @return This membership key
                 * @throws IllegalStateException
                 *           If the given source address is not currently blocked or the
                 *           membership key is no longer valid
                 */
                // @ts-ignore
                public abstract unblock(source: java.net.InetAddress): java.nio.channels.MembershipKey
                /**
                 * Returns the channel for which this membership key was created. This
                 * method will continue to return the channel even after the membership
                 * becomes {@link #isValid invalid}.
                 * @return the channel
                 */
                // @ts-ignore
                public abstract channel(): java.nio.channels.MulticastChannel
                /**
                 * Returns the multicast group for which this membership key was created.
                 * This method will continue to return the group even after the membership
                 * becomes {@link #isValid invalid}.
                 * @return the multicast group
                 */
                // @ts-ignore
                public abstract group(): java.net.InetAddress
                /**
                 * Returns the network interface for which this membership key was created.
                 * This method will continue to return the network interface even after the
                 * membership becomes {@link #isValid invalid}.
                 * @return the network interface
                 */
                // @ts-ignore
                public abstract networkInterface(): java.net.NetworkInterface
                /**
                 * Returns the source address if this membership key is source-specific,
                 * or {@code null} if this membership is not source-specific.
                 * @return The source address if this membership key is source-specific,
                 *           otherwise {#code null}
                 */
                // @ts-ignore
                public abstract sourceAddress(): java.net.InetAddress
            }
        }
    }
}
