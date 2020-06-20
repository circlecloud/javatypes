declare namespace java {
    namespace nio {
        namespace channels {
            /**
             * A pair of channels that implements a unidirectional pipe.
             * <p> A pipe consists of a pair of channels: A writable {@link
             * Pipe.SinkChannel sink} channel and a readable {@link Pipe.SourceChannel source}
             * channel.  Once some bytes are written to the sink channel they can be read
             * from source channel in exactlyAthe order in which they were written.
             * <p> Whether or not a thread writing bytes to a pipe will block until another
             * thread reads those bytes, or some previously-written bytes, from the pipe is
             * system-dependent and therefore unspecified.  Many pipe implementations will
             * buffer up to a certain number of bytes between the sink and source channels,
             * but such buffering should not be assumed.  </p>
             * @author Mark Reinhold
             * @author JSR-51 Expert Group
             * @since 1.4
             */
            // @ts-ignore
            class Pipe extends java.lang.Object {
                /**
                 * Initializes a new instance of this class.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns this pipe's source channel.
                 * @return This pipe's source channel
                 */
                // @ts-ignore
                abstract source(): java.nio.channels.Pipe.SourceChannel
                /**
                 * Returns this pipe's sink channel.
                 * @return This pipe's sink channel
                 */
                // @ts-ignore
                abstract sink(): java.nio.channels.Pipe.SinkChannel
                /**
                 * Opens a pipe.
                 * <p> The new pipe is created by invoking the {@link
                 * java.nio.channels.spi.SelectorProvider#openPipe openPipe} method of the
                 * system-wide default {@link java.nio.channels.spi.SelectorProvider}
                 * object.  </p>
                 * @return A new pipe
                 * @throws IOException
                 *           If an I/O error occurs
                 */
                // @ts-ignore
                open(): java.nio.channels.Pipe
            }
        }
    }
}
