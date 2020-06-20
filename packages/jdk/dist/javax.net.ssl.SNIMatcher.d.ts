declare namespace javax {
    namespace net {
        namespace ssl {
            /**
             * Instances of this class represent a matcher that performs match
             * operations on an {@link SNIServerName} instance.
             * <P>
             * Servers can use Server Name Indication (SNI) information to decide if
             * specific {@link SSLSocket} or {@link SSLEngine} instances should accept
             * a connection.  For example, when multiple "virtual" or "name-based"
             * servers are hosted on a single underlying network address, the server
             * application can use SNI information to determine whether this server is
             * the exact server that the client wants to access.  Instances of this
             * class can be used by a server to verify the acceptable server names of
             * a particular type, such as host names.
             * <P>
             * {@code SNIMatcher} objects are immutable.  Subclasses should not provide
             * methods that can change the state of an instance once it has been created.
             * @see SNIServerName
             * @see SNIHostName
             * @see SSLParameters#getSNIMatchers()
             * @see SSLParameters#setSNIMatchers(Collection)
             * @since 1.8
             */
            // @ts-ignore
            class SNIMatcher extends java.lang.Object {
                /**
                 * Creates an {@code SNIMatcher} using the specified server name type.
                 * @param type
                 *          the type of the server name that this matcher performs on
                 * @throws IllegalArgumentException if {#code type} is not in the range
                 *          of 0 to 255, inclusive.
                 */
                // @ts-ignore
                constructor(type: number /*int*/)
                /**
                 * Returns the server name type of this {@code SNIMatcher} object.
                 * @return the server name type of this {#code SNIMatcher} object.
                 * @see SNIServerName
                 */
                // @ts-ignore
                getType(): int
                /**
                 * Attempts to match the given {@link SNIServerName}.
                 * @param serverName
                 *          the {#link SNIServerName} instance on which this matcher
                 *          performs match operations
                 * @return {#code true} if, and only if, the matcher matches the
                 *          given {@code serverName}
                 * @throws NullPointerException if {#code serverName} is {@code null}
                 * @throws IllegalArgumentException if {#code serverName} is
                 *          not of the given server name type of this matcher
                 * @see SNIServerName
                 */
                // @ts-ignore
                abstract matches(serverName: javax.net.ssl.SNIServerName): boolean
            }
        }
    }
}
