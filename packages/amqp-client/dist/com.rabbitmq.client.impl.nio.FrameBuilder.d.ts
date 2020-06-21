declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace nio {
                    /**
                     * Class to create AMQP frames from a {@link ReadableByteChannel}.
                     * Supports partial frames: a frame can be read in several attempts
                     * from the {@link NioLoop}. This can happen when the channel won't
                     * read any more bytes in the middle of a frame building. The state
                     * of the outstanding frame is saved up, and the builder will
                     * start where it left off when the {@link NioLoop} comes back to
                     * this connection.
                     * This class is not thread safe.
                     * @since 4.4.0
                     */
                    // @ts-ignore
                    class FrameBuilder extends java.lang.Object {
                        // @ts-ignore
                        constructor(channel: java.nio.channels.ReadableByteChannel, buffer: java.nio.ByteBuffer)
                        // @ts-ignore
                        readonly channel: java.nio.channels.ReadableByteChannel
                        // @ts-ignore
                        readonly applicationBuffer: java.nio.ByteBuffer
                        /**
                         * Read a frame from the network.
                         * This method returns null f a frame could not have been fully built from
                         * the network. The client must then retry later (typically
                         * when the channel notifies it has something to read).
                         * @return a complete frame or null if a frame couldn't have been fully built
                         * @throws IOException
                         * @see Frame#readFrom(DataInputStream)
                         */
                        // @ts-ignore
                        public readFrame(): com.rabbitmq.client.impl.Frame
                        /**
                         * Tells whether there's something to read in the application buffer or not.
                         * Tries to read from the network if necessary.
                         * @return true if there's something to read in the application buffer
                         * @throws IOException
                         */
                        // @ts-ignore
                        somethingToRead(): boolean
                    }
                }
            }
        }
    }
}
