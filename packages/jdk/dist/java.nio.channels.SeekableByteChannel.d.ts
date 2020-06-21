declare namespace java {
    namespace nio {
        namespace channels {
            /**
             * A byte channel that maintains a current <i>position</i> and allows the
             * position to be changed.
             * <p> A seekable byte channel is connected to an entity, typically a file,
             * that contains a variable-length sequence of bytes that can be read and
             * written. The current position can be {@link #position() <i>queried</i>} and
             * {@link #position(long) <i>modified</i>}. The channel also provides access to
             * the current <i>size</i> of the entity to which the channel is connected. The
             * size increases when bytes are written beyond its current size; the size
             * decreases when it is {@link #truncate <i>truncated</i>}.
             * <p> The {@link #position(long) position} and {@link #truncate truncate} methods
             * which do not otherwise have a value to return are specified to return the
             * channel upon which they are invoked. This allows method invocations to be
             * chained. Implementations of this interface should specialize the return type
             * so that method invocations on the implementation class can be chained.
             * @since 1.7
             * @see java.nio.file.Files#newByteChannel
             */
            // @ts-ignore
            interface SeekableByteChannel extends java.nio.channels.ByteChannel {
                /**
                 * Reads a sequence of bytes from this channel into the given buffer.
                 * <p> Bytes are read starting at this channel's current position, and
                 * then the position is updated with the number of bytes actually read.
                 * Otherwise this method behaves exactly as specified in the {@link
                 * ReadableByteChannel} interface.
                 */
                // @ts-ignore
                read(dst: java.nio.ByteBuffer): number /*int*/
                /**
                 * Writes a sequence of bytes to this channel from the given buffer.
                 * <p> Bytes are written starting at this channel's current position, unless
                 * the channel is connected to an entity such as a file that is opened with
                 * the {@link java.nio.file.StandardOpenOption#APPEND APPEND} option, in
                 * which case the position is first advanced to the end. The entity to which
                 * the channel is connected is grown, if necessary, to accommodate the
                 * written bytes, and then the position is updated with the number of bytes
                 * actually written. Otherwise this method behaves exactly as specified by
                 * the {@link WritableByteChannel} interface.
                 */
                // @ts-ignore
                write(src: java.nio.ByteBuffer): number /*int*/
                /**
                 * Returns this channel's position.
                 * @return This channel's position,
                 *           a non-negative integer counting the number of bytes
                 *           from the beginning of the entity to the current position
                 * @throws ClosedChannelException
                 *           If this channel is closed
                 * @throws IOException
                 *           If some other I/O error occurs
                 */
                // @ts-ignore
                position(): number /*long*/
                /**
                 * Sets this channel's position.
                 * <p> Setting the position to a value that is greater than the current size
                 * is legal but does not change the size of the entity.  A later attempt to
                 * read bytes at such a position will immediately return an end-of-file
                 * indication.  A later attempt to write bytes at such a position will cause
                 * the entity to grow to accommodate the new bytes; the values of any bytes
                 * between the previous end-of-file and the newly-written bytes are
                 * unspecified.
                 * <p> Setting the channel's position is not recommended when connected to
                 * an entity, typically a file, that is opened with the {@link
                 * java.nio.file.StandardOpenOption#APPEND APPEND} option. When opened for
                 * append, the position is first advanced to the end before writing.
                 * @param newPosition
                 *          The new position, a non-negative integer counting
                 *          the number of bytes from the beginning of the entity
                 * @return This channel
                 * @throws ClosedChannelException
                 *           If this channel is closed
                 * @throws IllegalArgumentException
                 *           If the new position is negative
                 * @throws IOException
                 *           If some other I/O error occurs
                 */
                // @ts-ignore
                position(newPosition: number /*long*/): java.nio.channels.SeekableByteChannel
                /**
                 * Returns the current size of entity to which this channel is connected.
                 * @return The current size, measured in bytes
                 * @throws ClosedChannelException
                 *           If this channel is closed
                 * @throws IOException
                 *           If some other I/O error occurs
                 */
                // @ts-ignore
                size(): number /*long*/
                /**
                 * Truncates the entity, to which this channel is connected, to the given
                 * size.
                 * <p> If the given size is less than the current size then the entity is
                 * truncated, discarding any bytes beyond the new end. If the given size is
                 * greater than or equal to the current size then the entity is not modified.
                 * In either case, if the current position is greater than the given size
                 * then it is set to that size.
                 * <p> An implementation of this interface may prohibit truncation when
                 * connected to an entity, typically a file, opened with the {@link
                 * java.nio.file.StandardOpenOption#APPEND APPEND} option.
                 * @param size
                 *          The new size, a non-negative byte count
                 * @return This channel
                 * @throws NonWritableChannelException
                 *           If this channel was not opened for writing
                 * @throws ClosedChannelException
                 *           If this channel is closed
                 * @throws IllegalArgumentException
                 *           If the new size is negative
                 * @throws IOException
                 *           If some other I/O error occurs
                 */
                // @ts-ignore
                truncate(size: number /*long*/): java.nio.channels.SeekableByteChannel
            }
        }
    }
}
