declare namespace java {
    namespace util {
        namespace zip {
            /**
             * An interface representing a data checksum.
             * @author David Connelly
             */
            // @ts-ignore
            interface Checksum {
                /**
                 * Updates the current checksum with the specified byte.
                 * @param b the byte to update the checksum with
                 */
                // @ts-ignore
                update(b: number /*int*/): void
                /**
                 * Updates the current checksum with the specified array of bytes.
                 * @param b the byte array to update the checksum with
                 * @param off the start offset of the data
                 * @param len the number of bytes to use for the update
                 */
                // @ts-ignore
                update(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                /**
                 * Returns the current checksum value.
                 * @return the current checksum value
                 */
                // @ts-ignore
                getValue(): number /*long*/
                /**
                 * Resets the checksum to its initial value.
                 */
                // @ts-ignore
                reset(): void
            }
        }
    }
}
