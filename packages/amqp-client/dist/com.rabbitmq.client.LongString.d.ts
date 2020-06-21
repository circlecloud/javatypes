declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * An object providing access to a LongString.
             * This might be implemented to read directly from connection
             * socket, depending on the size of the content to be read -
             * long strings may contain up to 4Gb of content.
             */
            // @ts-ignore
            interface LongString {
                // @ts-ignore
                readonly MAX_LENGTH: number /*long*/
                /**
                 * @return the length of the string in bytes between 0 and MAX_LENGTH (inclusive)
                 */
                // @ts-ignore
                length(): number /*long*/
                /**
                 * Get the content stream.
                 * Repeated calls to this function return the same stream,
                 * which may not support rewind.
                 * @return An input stream that reads the content of the string
                 * @throws IOException if an error is encountered
                 */
                // @ts-ignore
                getStream(): java.io.DataInputStream
                /**
                 * Get the content as a byte array.  This need not be a copy. Updates to the
                 * returned array may change the value of the string.
                 * Repeated calls to this function may return the same array.
                 * This function will fail if this string's length is greater than {@link Integer#MAX_VALUE},
                 * throwing an {@link IllegalStateException}.
                 * @return the array of bytes containing the content of the {#link LongString}
                 */
                // @ts-ignore
                getBytes(): number /*byte*/[]
                /**
                 * Get the content as a String. Uses UTF-8 as encoding.
                 * @return he content of the {#link LongString} as a string
                 */
                // @ts-ignore
                toString(): string
            }
        }
    }
}
