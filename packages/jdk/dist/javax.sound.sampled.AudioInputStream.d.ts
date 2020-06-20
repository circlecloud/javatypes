declare namespace javax {
    namespace sound {
        namespace sampled {
            /**
             * An audio input stream is an input stream with a specified audio format and
             * length.  The length is expressed in sample frames, not bytes.
             * Several methods are provided for reading a certain number of bytes from
             * the stream, or an unspecified number of bytes.
             * The audio input stream keeps track  of the last byte that was read.
             * You can skip over an arbitrary number of bytes to get to a later position
             * for reading. An audio input stream may support marks.  When you set a mark,
             * the current position is remembered so that you can return to it later.
             * <p>
             * The <code>AudioSystem</code> class includes many methods that manipulate
             * <code>AudioInputStream</code> objects.
             * For example, the methods let you:
             * <ul>
             * <li> obtain an
             * audio input stream from an external audio file, stream, or URL
             * <li> write an external file from an audio input stream
             * <li> convert an audio input stream to a different audio format
             * </ul>
             * @author David Rivas
             * @author Kara Kytle
             * @author Florian Bomers
             * @see AudioSystem
             * @see Clip#open(AudioInputStream) Clip.open(AudioInputStream)
             * @since 1.3
             */
            // @ts-ignore
            class AudioInputStream extends java.io.InputStream {
                /**
                 * Constructs an audio input stream that has the requested format and length in sample frames,
                 * using audio data from the specified input stream.
                 * @param stream the stream on which this <code>AudioInputStream</code>
                 *  object is based
                 * @param format the format of this stream's audio data
                 * @param length the length in sample frames of the data in this stream
                 */
                // @ts-ignore
                constructor(stream: java.io.InputStream, format: javax.sound.sampled.AudioFormat, length: number /*long*/)
                /**
                 * Constructs an audio input stream that reads its data from the target
                 * data line indicated.  The format of the stream is the same as that of
                 * the target data line, and the length is AudioSystem#NOT_SPECIFIED.
                 * @param line the target data line from which this stream obtains its data.
                 * @see AudioSystem#NOT_SPECIFIED
                 */
                // @ts-ignore
                constructor(line: javax.sound.sampled.TargetDataLine)
                /**
                 * The format of the audio data contained in the stream.
                 */
                // @ts-ignore
                format: javax.sound.sampled.AudioFormat
                /**
                 * This stream's length, in sample frames.
                 */
                // @ts-ignore
                frameLength: number /*long*/
                /**
                 * The size of each frame, in bytes.
                 */
                // @ts-ignore
                frameSize: number /*int*/
                /**
                 * The current position in this stream, in sample frames (zero-based).
                 */
                // @ts-ignore
                framePos: number /*long*/
                /**
                 * Obtains the audio format of the sound data in this audio input stream.
                 * @return an audio format object describing this stream's format
                 */
                // @ts-ignore
                getFormat(): javax.sound.sampled.AudioFormat
                /**
                 * Obtains the length of the stream, expressed in sample frames rather than bytes.
                 * @return the length in sample frames
                 */
                // @ts-ignore
                getFrameLength(): long
                /**
                 * Reads the next byte of data from the audio input stream.  The audio input
                 * stream's frame size must be one byte, or an <code>IOException</code>
                 * will be thrown.
                 * @return the next byte of data, or -1 if the end of the stream is reached
                 * @throws IOException if an input or output error occurs
                 * @see #read(byte[], int, int)
                 * @see #read(byte[])
                 * @see #available
                 *  <p>
                 */
                // @ts-ignore
                read(): int
                /**
                 * Reads some number of bytes from the audio input stream and stores them into
                 * the buffer array <code>b</code>. The number of bytes actually read is
                 * returned as an integer. This method blocks until input data is
                 * available, the end of the stream is detected, or an exception is thrown.
                 * <p>This method will always read an integral number of frames.
                 * If the length of the array is not an integral number
                 * of frames, a maximum of <code>b.length - (b.length % frameSize)
                 * </code> bytes will be read.
                 * @param b the buffer into which the data is read
                 * @return the total number of bytes read into the buffer, or -1 if there
                 *  is no more data because the end of the stream has been reached
                 * @throws IOException if an input or output error occurs
                 * @see #read(byte[], int, int)
                 * @see #read()
                 * @see #available
                 */
                // @ts-ignore
                read(b: number /*byte*/[]): int
                /**
                 * Reads up to a specified maximum number of bytes of data from the audio
                 * stream, putting them into the given byte array.
                 * <p>This method will always read an integral number of frames.
                 * If <code>len</code> does not specify an integral number
                 * of frames, a maximum of <code>len - (len % frameSize)
                 * </code> bytes will be read.
                 * @param b the buffer into which the data is read
                 * @param off the offset, from the beginning of array <code>b</code>, at which
                 *  the data will be written
                 * @param len the maximum number of bytes to read
                 * @return the total number of bytes read into the buffer, or -1 if there
                 *  is no more data because the end of the stream has been reached
                 * @throws IOException if an input or output error occurs
                 * @see #read(byte[])
                 * @see #read()
                 * @see #skip
                 * @see #available
                 */
                // @ts-ignore
                read(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): int
                /**
                 * Skips over and discards a specified number of bytes from this
                 * audio input stream.
                 * @param n the requested number of bytes to be skipped
                 * @return the actual number of bytes skipped
                 * @throws IOException if an input or output error occurs
                 * @see #read
                 * @see #available
                 */
                // @ts-ignore
                skip(n: number /*long*/): long
                /**
                 * Returns the maximum number of bytes that can be read (or skipped over) from this
                 * audio input stream without blocking.  This limit applies only to the next invocation of
                 * a <code>read</code> or <code>skip</code> method for this audio input stream; the limit
                 * can vary each time these methods are invoked.
                 * Depending on the underlying stream,an IOException may be thrown if this
                 * stream is closed.
                 * @return the number of bytes that can be read from this audio input stream without blocking
                 * @throws IOException if an input or output error occurs
                 * @see #read(byte[], int, int)
                 * @see #read(byte[])
                 * @see #read()
                 * @see #skip
                 */
                // @ts-ignore
                available(): int
                /**
                 * Closes this audio input stream and releases any system resources associated
                 * with the stream.
                 * @throws IOException if an input or output error occurs
                 */
                // @ts-ignore
                close(): void
                /**
                 * Marks the current position in this audio input stream.
                 * @param readlimit the maximum number of bytes that can be read before
                 *  the mark position becomes invalid.
                 * @see #reset
                 * @see #markSupported
                 */
                // @ts-ignore
                mark(readlimit: number /*int*/): void
                /**
                 * Repositions this audio input stream to the position it had at the time its
                 * <code>mark</code> method was last invoked.
                 * @throws IOException if an input or output error occurs.
                 * @see #mark
                 * @see #markSupported
                 */
                // @ts-ignore
                reset(): void
                /**
                 * Tests whether this audio input stream supports the <code>mark</code> and
                 * <code>reset</code> methods.
                 * @return <code>true</code> if this stream supports the <code>mark</code>
                 *  and <code>reset</code> methods; <code>false</code> otherwise
                 * @see #mark
                 * @see #reset
                 */
                // @ts-ignore
                markSupported(): boolean
            }
        }
    }
}
