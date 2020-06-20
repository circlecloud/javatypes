declare namespace java {
    namespace nio {
        namespace channels {
            namespace FileChannel {
                /**
                 * A typesafe enumeration for file-mapping modes.
                 * @since 1.4
                 * @see java.nio.channels.FileChannel#map
                 */
                // @ts-ignore
                class MapMode extends java.lang.Object {
                    /**
                     * Mode for a read-only mapping.
                     */
                    // @ts-ignore
                    readonly READ_ONLY: java.nio.channels.FileChannel.MapMode
                    /**
                     * Mode for a read/write mapping.
                     */
                    // @ts-ignore
                    readonly READ_WRITE: java.nio.channels.FileChannel.MapMode
                    /**
                     * Mode for a private (copy-on-write) mapping.
                     */
                    // @ts-ignore
                    readonly PRIVATE: java.nio.channels.FileChannel.MapMode
                    /**
                     * Returns a string describing this file-mapping mode.
                     * @return A descriptive string
                     */
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
