declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * A representation of network addresses, i.e. host/port pairs,
             * with some utility functions for parsing address strings.
             */
            // @ts-ignore
            class Address extends java.lang.Object {
                /**
                 * Construct an address from a host name and port number.
                 * @param host the host name
                 * @param port the port number
                 */
                // @ts-ignore
                constructor(host: java.lang.String | string, port: number /*int*/)
                /**
                 * Construct an address from a host.
                 * @param host the host name
                 */
                // @ts-ignore
                constructor(host: java.lang.String | string)
                /**
                 * Get the host name
                 * @return the host name
                 */
                // @ts-ignore
                public getHost(): string
                /**
                 * Get the port number
                 * @return the port number
                 */
                // @ts-ignore
                public getPort(): number /*int*/
                /**
                 * Extracts hostname or IP address from a string containing a hostname, IP address,
                 * hostname:port pair or IP address:port pair.
                 * Note that IPv6 addresses must be quoted with square brackets, e.g. [2001:db8:85a3:8d3:1319:8a2e:370:7348].
                 * @param addressString the string to extract hostname from
                 * @return the hostname or IP address
                 */
                // @ts-ignore
                public static parseHost(addressString: java.lang.String | string): string
                // @ts-ignore
                public static parsePort(addressString: java.lang.String | string): number /*int*/
                // @ts-ignore
                public static isHostWithPort(addressString: java.lang.String | string): boolean
                /**
                 * Factory method: takes a formatted addressString string as construction parameter
                 * @param addressString an addressString of the form "host[:port]".
                 * @return an {#link Address} from the given data
                 */
                // @ts-ignore
                public static parseAddress(addressString: java.lang.String | string): com.rabbitmq.client.Address
                /**
                 * Array-based factory method: takes an array of formatted address strings as construction parameter
                 * @param addresses array of strings of form "host[:port],..."
                 * @return a list of {#link Address} values
                 */
                // @ts-ignore
                public static parseAddresses(addresses: java.lang.String | string): com.rabbitmq.client.Address[]
                // @ts-ignore
                public hashCode(): number /*int*/
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
