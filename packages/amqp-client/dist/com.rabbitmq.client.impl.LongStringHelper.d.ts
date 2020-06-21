declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * Utility for working with {@link LongString}s.
                 */
                // @ts-ignore
                class LongStringHelper extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Converts a String to a LongString using UTF-8 encoding.
                     * @param string the string to wrap
                     * @return a LongString wrapping it
                     */
                    // @ts-ignore
                    public static asLongString(string: java.lang.String | string): com.rabbitmq.client.LongString
                    /**
                     * Converts a binary block to a LongString.
                     * @param bytes the data to wrap
                     * @return a LongString wrapping it
                     */
                    // @ts-ignore
                    public static asLongString(bytes: number /*byte*/[]): com.rabbitmq.client.LongString
                }
            }
        }
    }
}
