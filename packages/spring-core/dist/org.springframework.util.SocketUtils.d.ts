declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Simple utility methods for working with network sockets &mdash; for example,
             * for finding available ports on {@code localhost}.
             * <p>Within this class, a TCP port refers to a port for a {@link ServerSocket};
             * whereas, a UDP port refers to a port for a {@link DatagramSocket}.
             * @author Sam Brannen
             * @author Ben Hale
             * @author Arjen Poutsma
             * @author Gunnar Hillert
             * @author Gary Russell
             * @since 4.0
             */
            // @ts-ignore
            class SocketUtils extends java.lang.Object {
                /**
                 * Although {@code SocketUtils} consists solely of static utility methods,
                 * this constructor is intentionally {@code public}.
                 * <h4>Rationale</h4>
                 * <p>Static methods from this class may be invoked from within XML
                 * configuration files using the Spring Expression Language (SpEL) and the
                 * following syntax.
                 * <pre><code>&lt;bean id="bean1" ... p:port="#{T(org.springframework.util.SocketUtils).findAvailableTcpPort(12000)}" /&gt;</code></pre>
                 * If this constructor were {@code private}, you would be required to supply
                 * the fully qualified class name to SpEL's {@code T()} function for each usage.
                 * Thus, the fact that this constructor is {@code public} allows you to reduce
                 * boilerplate configuration with SpEL as can be seen in the following example.
                 * <pre><code>&lt;bean id="socketUtils" class="org.springframework.util.SocketUtils" /&gt;
                 * &lt;bean id="bean1" ... p:port="#{socketUtils.findAvailableTcpPort(12000)}" /&gt;
                 * &lt;bean id="bean2" ... p:port="#{socketUtils.findAvailableTcpPort(30000)}" /&gt;</code></pre>
                 */
                // @ts-ignore
                constructor()
                /**
                 * The default minimum value for port ranges used when finding an available
                 * socket port.
                 */
                // @ts-ignore
                public static readonly PORT_RANGE_MIN: number /*int*/
                /**
                 * The default maximum value for port ranges used when finding an available
                 * socket port.
                 */
                // @ts-ignore
                public static readonly PORT_RANGE_MAX: number /*int*/
                /**
                 * Find an available TCP port randomly selected from the range
                 * [{@value #PORT_RANGE_MIN}, {@value #PORT_RANGE_MAX}].
                 * @return an available TCP port number
                 * @throws IllegalStateException if no available port could be found
                 */
                // @ts-ignore
                public static findAvailableTcpPort(): number /*int*/
                /**
                 * Find an available TCP port randomly selected from the range
                 * [{@code minPort}, {@value #PORT_RANGE_MAX}].
                 * @param minPort the minimum port number
                 * @return an available TCP port number
                 * @throws IllegalStateException if no available port could be found
                 */
                // @ts-ignore
                public static findAvailableTcpPort(minPort: number /*int*/): number /*int*/
                /**
                 * Find an available TCP port randomly selected from the range
                 * [{@code minPort}, {@code maxPort}].
                 * @param minPort the minimum port number
                 * @param maxPort the maximum port number
                 * @return an available TCP port number
                 * @throws IllegalStateException if no available port could be found
                 */
                // @ts-ignore
                public static findAvailableTcpPort(minPort: number /*int*/, maxPort: number /*int*/): number /*int*/
                /**
                 * Find the requested number of available TCP ports, each randomly selected
                 * from the range [{@value #PORT_RANGE_MIN}, {@value #PORT_RANGE_MAX}].
                 * @param numRequested the number of available ports to find
                 * @return a sorted set of available TCP port numbers
                 * @throws IllegalStateException if the requested number of available ports could not be found
                 */
                // @ts-ignore
                public static findAvailableTcpPorts(numRequested: number /*int*/): java.util.SortedSet<java.lang.Integer | number>
                /**
                 * Find the requested number of available TCP ports, each randomly selected
                 * from the range [{@code minPort}, {@code maxPort}].
                 * @param numRequested the number of available ports to find
                 * @param minPort the minimum port number
                 * @param maxPort the maximum port number
                 * @return a sorted set of available TCP port numbers
                 * @throws IllegalStateException if the requested number of available ports could not be found
                 */
                // @ts-ignore
                public static findAvailableTcpPorts(numRequested: number /*int*/, minPort: number /*int*/, maxPort: number /*int*/): java.util.SortedSet<java.lang.Integer | number>
                /**
                 * Find an available UDP port randomly selected from the range
                 * [{@value #PORT_RANGE_MIN}, {@value #PORT_RANGE_MAX}].
                 * @return an available UDP port number
                 * @throws IllegalStateException if no available port could be found
                 */
                // @ts-ignore
                public static findAvailableUdpPort(): number /*int*/
                /**
                 * Find an available UDP port randomly selected from the range
                 * [{@code minPort}, {@value #PORT_RANGE_MAX}].
                 * @param minPort the minimum port number
                 * @return an available UDP port number
                 * @throws IllegalStateException if no available port could be found
                 */
                // @ts-ignore
                public static findAvailableUdpPort(minPort: number /*int*/): number /*int*/
                /**
                 * Find an available UDP port randomly selected from the range
                 * [{@code minPort}, {@code maxPort}].
                 * @param minPort the minimum port number
                 * @param maxPort the maximum port number
                 * @return an available UDP port number
                 * @throws IllegalStateException if no available port could be found
                 */
                // @ts-ignore
                public static findAvailableUdpPort(minPort: number /*int*/, maxPort: number /*int*/): number /*int*/
                /**
                 * Find the requested number of available UDP ports, each randomly selected
                 * from the range [{@value #PORT_RANGE_MIN}, {@value #PORT_RANGE_MAX}].
                 * @param numRequested the number of available ports to find
                 * @return a sorted set of available UDP port numbers
                 * @throws IllegalStateException if the requested number of available ports could not be found
                 */
                // @ts-ignore
                public static findAvailableUdpPorts(numRequested: number /*int*/): java.util.SortedSet<java.lang.Integer | number>
                /**
                 * Find the requested number of available UDP ports, each randomly selected
                 * from the range [{@code minPort}, {@code maxPort}].
                 * @param numRequested the number of available ports to find
                 * @param minPort the minimum port number
                 * @param maxPort the maximum port number
                 * @return a sorted set of available UDP port numbers
                 * @throws IllegalStateException if the requested number of available ports could not be found
                 */
                // @ts-ignore
                public static findAvailableUdpPorts(numRequested: number /*int*/, minPort: number /*int*/, maxPort: number /*int*/): java.util.SortedSet<java.lang.Integer | number>
            }
        }
    }
}
