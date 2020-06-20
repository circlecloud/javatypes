declare namespace java {
    namespace net {
        /**
         * This class represents a Network Interface made up of a name,
         * and a list of IP addresses assigned to this interface.
         * It is used to identify the local interface on which a multicast group
         * is joined.
         * Interfaces are normally known by names such as "le0".
         * @since 1.4
         */
        // @ts-ignore
        class NetworkInterface extends java.lang.Object {
            /**
             * Get the name of this network interface.
             * @return the name of this network interface
             */
            // @ts-ignore
            getName(): java.lang.String
            /**
             * Convenience method to return an Enumeration with all or a
             * subset of the InetAddresses bound to this network interface.
             * <p>
             * If there is a security manager, its {@code checkConnect}
             * method is called for each InetAddress. Only InetAddresses where
             * the {@code checkConnect} doesn't throw a SecurityException
             * will be returned in the Enumeration. However, if the caller has the
             * {@link NetPermission}("getNetworkInformation") permission, then all
             * InetAddresses are returned.
             * @return an Enumeration object with all or a subset of the InetAddresses
             *  bound to this network interface
             */
            // @ts-ignore
            getInetAddresses(): java.util.Enumeration<java.net.InetAddress>
            /**
             * Get a List of all or a subset of the {@code InterfaceAddresses}
             * of this network interface.
             * <p>
             * If there is a security manager, its {@code checkConnect}
             * method is called with the InetAddress for each InterfaceAddress.
             * Only InterfaceAddresses where the {@code checkConnect} doesn't throw
             * a SecurityException will be returned in the List.
             * @return a {#code List} object with all or a subset of the
             *          InterfaceAddresss of this network interface
             * @since 1.6
             */
            // @ts-ignore
            getInterfaceAddresses(): java.util.List<java.net.InterfaceAddress>
            /**
             * Get an Enumeration with all the subinterfaces (also known as virtual
             * interfaces) attached to this network interface.
             * <p>
             * For instance eth0:1 will be a subinterface to eth0.
             * @return an Enumeration object with all of the subinterfaces
             *  of this network interface
             * @since 1.6
             */
            // @ts-ignore
            getSubInterfaces(): java.util.Enumeration<java.net.NetworkInterface>
            /**
             * Returns the parent NetworkInterface of this interface if this is
             * a subinterface, or {@code null} if it is a physical
             * (non virtual) interface or has no parent.
             * @return The {#code NetworkInterface} this interface is attached to.
             * @since 1.6
             */
            // @ts-ignore
            getParent(): java.net.NetworkInterface
            /**
             * Returns the index of this network interface. The index is an integer greater
             * or equal to zero, or {@code -1} for unknown. This is a system specific value
             * and interfaces with the same name can have different indexes on different
             * machines.
             * @return the index of this network interface or {#code -1} if the index is
             *          unknown
             * @see #getByIndex(int)
             * @since 1.7
             */
            // @ts-ignore
            getIndex(): int
            /**
             * Get the display name of this network interface.
             * A display name is a human readable String describing the network
             * device.
             * @return a non-empty string representing the display name of this network
             *          interface, or null if no display name is available.
             */
            // @ts-ignore
            getDisplayName(): java.lang.String
            /**
             * Searches for the network interface with the specified name.
             * @param name
             *           The name of the network interface.
             * @return A {#code NetworkInterface} with the specified name,
             *           or {@code null} if there is no network interface
             *           with the specified name.
             * @throws SocketException
             *           If an I/O error occurs.
             * @throws NullPointerException
             *           If the specified name is {#code null}.
             */
            // @ts-ignore
            getByName(name: string): java.net.NetworkInterface
            /**
             * Get a network interface given its index.
             * @param index an integer, the index of the interface
             * @return the NetworkInterface obtained from its index, or {#code null} if
             *          there is no interface with such an index on the system
             * @throws SocketException  if an I/O error occurs.
             * @throws IllegalArgumentException if index has a negative value
             * @see #getIndex()
             * @since 1.7
             */
            // @ts-ignore
            getByIndex(index: number /*int*/): java.net.NetworkInterface
            /**
             * Convenience method to search for a network interface that
             * has the specified Internet Protocol (IP) address bound to
             * it.
             * <p>
             * If the specified IP address is bound to multiple network
             * interfaces it is not defined which network interface is
             * returned.
             * @param addr
             *           The {#code InetAddress} to search with.
             * @return A {#code NetworkInterface}
             *           or {@code null} if there is no network interface
             *           with the specified IP address.
             * @throws SocketException
             *           If an I/O error occurs.
             * @throws NullPointerException
             *           If the specified address is {#code null}.
             */
            // @ts-ignore
            getByInetAddress(addr: java.net.InetAddress): java.net.NetworkInterface
            /**
             * Returns all the interfaces on this machine. The {@code Enumeration}
             * contains at least one element, possibly representing a loopback
             * interface that only supports communication between entities on
             * this machine.
             * NOTE: can use getNetworkInterfaces()+getInetAddresses()
             * to obtain all IP addresses for this node
             * @return an Enumeration of NetworkInterfaces found on this machine
             * @exception SocketException  if an I/O error occurs.
             */
            // @ts-ignore
            getNetworkInterfaces(): java.util.Enumeration<java.net.NetworkInterface>
            /**
             * Returns whether a network interface is up and running.
             * @return {#code true} if the interface is up and running.
             * @exception SocketException if an I/O error occurs.
             * @since 1.6
             */
            // @ts-ignore
            isUp(): boolean
            /**
             * Returns whether a network interface is a loopback interface.
             * @return {#code true} if the interface is a loopback interface.
             * @exception SocketException if an I/O error occurs.
             * @since 1.6
             */
            // @ts-ignore
            isLoopback(): boolean
            /**
             * Returns whether a network interface is a point to point interface.
             * A typical point to point interface would be a PPP connection through
             * a modem.
             * @return {#code true} if the interface is a point to point
             *           interface.
             * @exception SocketException if an I/O error occurs.
             * @since 1.6
             */
            // @ts-ignore
            isPointToPoint(): boolean
            /**
             * Returns whether a network interface supports multicasting or not.
             * @return {#code true} if the interface supports Multicasting.
             * @exception SocketException if an I/O error occurs.
             * @since 1.6
             */
            // @ts-ignore
            supportsMulticast(): boolean
            /**
             * Returns the hardware address (usually MAC) of the interface if it
             * has one and if it can be accessed given the current privileges.
             * If a security manager is set, then the caller must have
             * the permission {@link NetPermission}("getNetworkInformation").
             * @return a byte array containing the address, or {#code null} if
             *           the address doesn't exist, is not accessible or a security
             *           manager is set and the caller does not have the permission
             *           NetPermission("getNetworkInformation")
             * @exception SocketException if an I/O error occurs.
             * @since 1.6
             */
            // @ts-ignore
            getHardwareAddress(): byte[]
            /**
             * Returns the Maximum Transmission Unit (MTU) of this interface.
             * @return the value of the MTU for that interface.
             * @exception SocketException if an I/O error occurs.
             * @since 1.6
             */
            // @ts-ignore
            getMTU(): int
            /**
             * Returns whether this interface is a virtual interface (also called
             * subinterface).
             * Virtual interfaces are, on some systems, interfaces created as a child
             * of a physical interface and given different settings (like address or
             * MTU). Usually the name of the interface will the name of the parent
             * followed by a colon (:) and a number identifying the child since there
             * can be several virtual interfaces attached to a single physical
             * interface.
             * @return {#code true} if this interface is a virtual interface.
             * @since 1.6
             */
            // @ts-ignore
            isVirtual(): boolean
            /**
             * Compares this object against the specified object.
             * The result is {@code true} if and only if the argument is
             * not {@code null} and it represents the same NetworkInterface
             * as this object.
             * <p>
             * Two instances of {@code NetworkInterface} represent the same
             * NetworkInterface if both name and addrs are the same for both.
             * @param obj   the object to compare against.
             * @return {#code true} if the objects are the same;
             *           {@code false} otherwise.
             * @see java.net.InetAddress#getAddress()
             */
            // @ts-ignore
            equals(obj: any): boolean
            // @ts-ignore
            hashCode(): int
            // @ts-ignore
            toString(): java.lang.String
        }
    }
}
