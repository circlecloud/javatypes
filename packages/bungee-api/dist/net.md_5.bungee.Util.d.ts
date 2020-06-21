declare namespace net {
    namespace md_5 {
        namespace bungee {
            /**
             * Series of utility classes to perform various operations.
             */
            // @ts-ignore
            class Util extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static readonly DEFAULT_PORT: number /*int*/
                /**
                 * Method to transform human readable addresses into usable address objects.
                 * @param hostline in the format of 'host:port'
                 * @return the constructed hostname + port.
                 */
                // @ts-ignore
                public static getAddr(hostline: java.lang.String | string): java.net.InetSocketAddress
                /**
                 * Formats an integer as a hex value.
                 * @param i the integer to format
                 * @return the hex representation of the integer
                 */
                // @ts-ignore
                public static hex(i: number /*int*/): string
                /**
                 * Constructs a pretty one line version of a {@link Throwable}. Useful for
                 * debugging.
                 * @param t the {#link Throwable} to format.
                 * @return a string representing information about the {#link Throwable}
                 */
                // @ts-ignore
                public static exception(t: java.lang.Throwable | Error): string
                // @ts-ignore
                public static csv(objects: java.lang.Iterable<any>): string
                // @ts-ignore
                public static format(objects: java.lang.Iterable<any>, separators: java.lang.String | string): string
                /**
                 * Converts a String to a UUID
                 * @param uuid The string to be converted
                 * @return The result
                 */
                // @ts-ignore
                public static getUUID(uuid: java.lang.String | string): java.util.UUID
            }
        }
    }
}
