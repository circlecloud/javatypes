declare namespace java {
    namespace nio {
        namespace channels {
            namespace Pipe {
                /**
                 * A channel representing the readable end of a {@link Pipe}.
                 * @since 1.4
                 */
                // @ts-ignore
                class SourceChannel extends java.nio.channels.spi.AbstractSelectableChannel implements java.nio.channels.ReadableByteChannel, java.nio.channels.ScatteringByteChannel {
                    /**
                     * Constructs a new instance of this class.
                     * @param provider
                     *          The selector provider
                     */
                    // @ts-ignore
                    constructor(provider: java.nio.channels.spi.SelectorProvider)
                    /**
                     * Returns an operation set identifying this channel's supported
                     * operations.
                     * <p> Pipe-source channels only support reading, so this method
                     * returns {@link SelectionKey#OP_READ}.  </p>
                     * @return The valid-operation set
                     */
                    // @ts-ignore
                    validOps(): int
                }
            }
        }
    }
}
