declare namespace java {
    namespace net {
        /**
         * This class represents a proxy setting, typically a type (http, socks) and
         * a socket address.
         * A {@code Proxy} is an immutable object.
         * @see java.net.ProxySelector
         * @author Yingxian Wang
         * @author Jean-Christophe Collet
         * @since 1.5
         */
        // @ts-ignore
        class Proxy extends java.lang.Object {
            /**
             * Creates an entry representing a PROXY connection.
             * Certain combinations are illegal. For instance, for types Http, and
             * Socks, a SocketAddress <b>must</b> be provided.
             * <P>
             * Use the {@code Proxy.NO_PROXY} constant
             * for representing a direct connection.
             * @param type the {#code Type} of the proxy
             * @param sa the {#code SocketAddress} for that proxy
             * @throws IllegalArgumentException when the type and the address are
             *  incompatible
             */
            // @ts-ignore
            constructor(type: java.net.Proxy.Type, sa: java.net.SocketAddress)
            /**
             * A proxy setting that represents a {@code DIRECT} connection,
             * basically telling the protocol handler not to use any proxying.
             * Used, for instance, to create sockets bypassing any other global
             * proxy settings (like SOCKS):
             * <P>
             * {@code Socket s = new Socket(Proxy.NO_PROXY);}
             */
            // @ts-ignore
            public static readonly NO_PROXY: java.net.Proxy
            /**
             * Returns the proxy type.
             * @return a Type representing the proxy type
             */
            // @ts-ignore
            public type(): java.net.Proxy.Type
            /**
             * Returns the socket address of the proxy, or
             * {@code null} if its a direct connection.
             * @return a {#code SocketAddress} representing the socket end
             *          point of the proxy
             */
            // @ts-ignore
            public address(): java.net.SocketAddress
            /**
             * Constructs a string representation of this Proxy.
             * This String is constructed by calling toString() on its type
             * and concatenating " @ " and the toString() result from its address
             * if its type is not {@code DIRECT}.
             * @return a string representation of this object.
             */
            // @ts-ignore
            public toString(): string
            /**
             * Compares this object against the specified object.
             * The result is {@code true} if and only if the argument is
             * not {@code null} and it represents the same proxy as
             * this object.
             * <p>
             * Two instances of {@code Proxy} represent the same
             * address if both the SocketAddresses and type are equal.
             * @param obj   the object to compare against.
             * @return {#code true} if the objects are the same;
             *           {@code false} otherwise.
             * @see java.net.InetSocketAddress#equals(java.lang.Object)
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * Returns a hashcode for this Proxy.
             * @return a hash code value for this Proxy.
             */
            // @ts-ignore
            public hashCode(): number /*int*/
        }
    }
}
