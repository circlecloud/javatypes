declare namespace java {
    namespace nio {
        namespace channels {
            namespace Pipe {
                /**
                 * A channel representing the writable end of a {@link Pipe}.
                 * @since 1.4
                 */
                // @ts-ignore
                abstract class SinkChannel extends java.nio.channels.spi.AbstractSelectableChannel implements java.nio.channels.WritableByteChannel, java.nio.channels.GatheringByteChannel {
                    /**
                     * Initializes a new instance of this class.
                     * @param provider
                     *          The selector provider
                     */
                    // @ts-ignore
                    constructor(provider: java.nio.channels.spi.SelectorProvider)
                    /**
                     * Returns an operation set identifying this channel's supported
                     * operations.
                     * <p> Pipe-sink channels only support writing, so this method returns
                     * {@link SelectionKey#OP_WRITE}.  </p>
                     * @return The valid-operation set
                     */
                    // @ts-ignore
                    public validOps(): number /*int*/
                }
            }
        }
    }
}
