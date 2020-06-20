declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                /**
                 * Extended interface for a resource that supports writing to it.
                 * Provides an {@link #getOutputStream() OutputStream accessor}.
                 * @author Juergen Hoeller
                 * @since 3.1
                 * @see java.io.OutputStream
                 */
                // @ts-ignore
                interface WritableResource extends org.springframework.core.io.Resource {
                    /**
                     * Indicate whether the contents of this resource can be written
                     * via {@link #getOutputStream()}.
                     * <p>Will be {@code true} for typical resource descriptors;
                     * note that actual content writing may still fail when attempted.
                     * However, a value of {@code false} is a definitive indication
                     * that the resource content cannot be modified.
                     * @see #getOutputStream()
                     * @see #isReadable()
                     */
                    // @ts-ignore
                    isWritable(): boolean
                    /**
                     * Return an {@link OutputStream} for the underlying resource,
                     * allowing to (over-)write its content.
                     * @throws IOException if the stream could not be opened
                     * @see #getInputStream()
                     */
                    // @ts-ignore
                    getOutputStream(): java.io.OutputStream
                    /**
                     * Return a {@link WritableByteChannel}.
                     * <p>It is expected that each call creates a <i>fresh</i> channel.
                     * <p>The default implementation returns {@link Channels#newChannel(OutputStream)}
                     * with the result of {@link #getOutputStream()}.
                     * @return the byte channel for the underlying resource (must not be {#code null})
                     * @throws java.io.FileNotFoundException if the underlying resource doesn't exist
                     * @throws IOException if the content channel could not be opened
                     * @since 5.0
                     * @see #getOutputStream()
                     */
                    // @ts-ignore
                    writableChannel(): java.nio.channels.WritableByteChannel
                }
            }
        }
    }
}
