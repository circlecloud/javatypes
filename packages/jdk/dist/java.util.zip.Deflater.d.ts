declare namespace java {
    namespace util {
        namespace zip {
            /**
             * This class provides support for general purpose compression using the
             * popular ZLIB compression library. The ZLIB compression library was
             * initially developed as part of the PNG graphics standard and is not
             * protected by patents. It is fully described in the specifications at
             * the <a href="package-summary.html#package_description">java.util.zip
             * package description</a>.
             * <p>The following code fragment demonstrates a trivial compression
             * and decompression of a string using <tt>Deflater</tt> and
             * <tt>Inflater</tt>.
             * <blockquote><pre>
             * try {
             * // Encode a String into bytes
             * String inputString = "blahblahblah";
             * byte[] input = inputString.getBytes("UTF-8");
             * // Compress the bytes
             * byte[] output = new byte[100];
             * Deflater compresser = new Deflater();
             * compresser.setInput(input);
             * compresser.finish();
             * int compressedDataLength = compresser.deflate(output);
             * compresser.end();
             * // Decompress the bytes
             * Inflater decompresser = new Inflater();
             * decompresser.setInput(output, 0, compressedDataLength);
             * byte[] result = new byte[100];
             * int resultLength = decompresser.inflate(result);
             * decompresser.end();
             * // Decode the bytes into a String
             * String outputString = new String(result, 0, resultLength, "UTF-8");
             * } catch(java.io.UnsupportedEncodingException ex) {
             * // handle
             * } catch (java.util.zip.DataFormatException ex) {
             * // handle
             * }
             * </pre></blockquote>
             * @see Inflater
             * @author David Connelly
             */
            // @ts-ignore
            class Deflater extends java.lang.Object {
                /**
                 * Creates a new compressor using the specified compression level.
                 * If 'nowrap' is true then the ZLIB header and checksum fields will
                 * not be used in order to support the compression format used in
                 * both GZIP and PKZIP.
                 * @param level the compression level (0-9)
                 * @param nowrap if true then use GZIP compatible compression
                 */
                // @ts-ignore
                constructor(level: number /*int*/, nowrap: boolean)
                /**
                 * Creates a new compressor using the specified compression level.
                 * Compressed data will be generated in ZLIB format.
                 * @param level the compression level (0-9)
                 */
                // @ts-ignore
                constructor(level: number /*int*/)
                /**
                 * Creates a new compressor with the default compression level.
                 * Compressed data will be generated in ZLIB format.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Compression method for the deflate algorithm (the only one currently
                 * supported).
                 */
                // @ts-ignore
                readonly DEFLATED: number /*int*/
                /**
                 * Compression level for no compression.
                 */
                // @ts-ignore
                readonly NO_COMPRESSION: number /*int*/
                /**
                 * Compression level for fastest compression.
                 */
                // @ts-ignore
                readonly BEST_SPEED: number /*int*/
                /**
                 * Compression level for best compression.
                 */
                // @ts-ignore
                readonly BEST_COMPRESSION: number /*int*/
                /**
                 * Default compression level.
                 */
                // @ts-ignore
                readonly DEFAULT_COMPRESSION: number /*int*/
                /**
                 * Compression strategy best used for data consisting mostly of small
                 * values with a somewhat random distribution. Forces more Huffman coding
                 * and less string matching.
                 */
                // @ts-ignore
                readonly FILTERED: number /*int*/
                /**
                 * Compression strategy for Huffman coding only.
                 */
                // @ts-ignore
                readonly HUFFMAN_ONLY: number /*int*/
                /**
                 * Default compression strategy.
                 */
                // @ts-ignore
                readonly DEFAULT_STRATEGY: number /*int*/
                /**
                 * Compression flush mode used to achieve best compression result.
                 * @see Deflater#deflate(byte[], int, int, int)
                 * @since 1.7
                 */
                // @ts-ignore
                readonly NO_FLUSH: number /*int*/
                /**
                 * Compression flush mode used to flush out all pending output; may
                 * degrade compression for some compression algorithms.
                 * @see Deflater#deflate(byte[], int, int, int)
                 * @since 1.7
                 */
                // @ts-ignore
                readonly SYNC_FLUSH: number /*int*/
                /**
                 * Compression flush mode used to flush out all pending output and
                 * reset the deflater. Using this mode too often can seriously degrade
                 * compression.
                 * @see Deflater#deflate(byte[], int, int, int)
                 * @since 1.7
                 */
                // @ts-ignore
                readonly FULL_FLUSH: number /*int*/
                /**
                 * Sets input data for compression. This should be called whenever
                 * needsInput() returns true indicating that more input data is required.
                 * @param b the input data bytes
                 * @param off the start offset of the data
                 * @param len the length of the data
                 * @see Deflater#needsInput
                 */
                // @ts-ignore
                setInput(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                /**
                 * Sets input data for compression. This should be called whenever
                 * needsInput() returns true indicating that more input data is required.
                 * @param b the input data bytes
                 * @see Deflater#needsInput
                 */
                // @ts-ignore
                setInput(b: number /*byte*/[]): void
                /**
                 * Sets preset dictionary for compression. A preset dictionary is used
                 * when the history buffer can be predetermined. When the data is later
                 * uncompressed with Inflater.inflate(), Inflater.getAdler() can be called
                 * in order to get the Adler-32 value of the dictionary required for
                 * decompression.
                 * @param b the dictionary data bytes
                 * @param off the start offset of the data
                 * @param len the length of the data
                 * @see Inflater#inflate
                 * @see Inflater#getAdler
                 */
                // @ts-ignore
                setDictionary(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                /**
                 * Sets preset dictionary for compression. A preset dictionary is used
                 * when the history buffer can be predetermined. When the data is later
                 * uncompressed with Inflater.inflate(), Inflater.getAdler() can be called
                 * in order to get the Adler-32 value of the dictionary required for
                 * decompression.
                 * @param b the dictionary data bytes
                 * @see Inflater#inflate
                 * @see Inflater#getAdler
                 */
                // @ts-ignore
                setDictionary(b: number /*byte*/[]): void
                /**
                 * Sets the compression strategy to the specified value.
                 * <p> If the compression strategy is changed, the next invocation
                 * of {@code deflate} will compress the input available so far with
                 * the old strategy (and may be flushed); the new strategy will take
                 * effect only after that invocation.
                 * @param strategy the new compression strategy
                 * @exception IllegalArgumentException if the compression strategy is
                 *                                      invalid
                 */
                // @ts-ignore
                setStrategy(strategy: number /*int*/): void
                /**
                 * Sets the compression level to the specified value.
                 * <p> If the compression level is changed, the next invocation
                 * of {@code deflate} will compress the input available so far
                 * with the old level (and may be flushed); the new level will
                 * take effect only after that invocation.
                 * @param level the new compression level (0-9)
                 * @exception IllegalArgumentException if the compression level is invalid
                 */
                // @ts-ignore
                setLevel(level: number /*int*/): void
                /**
                 * Returns true if the input data buffer is empty and setInput()
                 * should be called in order to provide more input.
                 * @return true if the input data buffer is empty and setInput()
                 *  should be called in order to provide more input
                 */
                // @ts-ignore
                needsInput(): boolean
                /**
                 * When called, indicates that compression should end with the current
                 * contents of the input buffer.
                 */
                // @ts-ignore
                finish(): void
                /**
                 * Returns true if the end of the compressed data output stream has
                 * been reached.
                 * @return true if the end of the compressed data output stream has
                 *  been reached
                 */
                // @ts-ignore
                finished(): boolean
                /**
                 * Compresses the input data and fills specified buffer with compressed
                 * data. Returns actual number of bytes of compressed data. A return value
                 * of 0 indicates that {@link #needsInput() needsInput} should be called
                 * in order to determine if more input data is required.
                 * <p>This method uses {@link #NO_FLUSH} as its compression flush mode.
                 * An invocation of this method of the form {@code deflater.deflate(b, off, len)}
                 * yields the same result as the invocation of
                 * {@code deflater.deflate(b, off, len, Deflater.NO_FLUSH)}.
                 * @param b the buffer for the compressed data
                 * @param off the start offset of the data
                 * @param len the maximum number of bytes of compressed data
                 * @return the actual number of bytes of compressed data written to the
                 *          output buffer
                 */
                // @ts-ignore
                deflate(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): int
                /**
                 * Compresses the input data and fills specified buffer with compressed
                 * data. Returns actual number of bytes of compressed data. A return value
                 * of 0 indicates that {@link #needsInput() needsInput} should be called
                 * in order to determine if more input data is required.
                 * <p>This method uses {@link #NO_FLUSH} as its compression flush mode.
                 * An invocation of this method of the form {@code deflater.deflate(b)}
                 * yields the same result as the invocation of
                 * {@code deflater.deflate(b, 0, b.length, Deflater.NO_FLUSH)}.
                 * @param b the buffer for the compressed data
                 * @return the actual number of bytes of compressed data written to the
                 *          output buffer
                 */
                // @ts-ignore
                deflate(b: number /*byte*/[]): int
                /**
                 * Compresses the input data and fills the specified buffer with compressed
                 * data. Returns actual number of bytes of data compressed.
                 * <p>Compression flush mode is one of the following three modes:
                 * <ul>
                 * <li>{@link #NO_FLUSH}: allows the deflater to decide how much data
                 * to accumulate, before producing output, in order to achieve the best
                 * compression (should be used in normal use scenario). A return value
                 * of 0 in this flush mode indicates that {@link #needsInput()} should
                 * be called in order to determine if more input data is required.
                 * <li>{@link #SYNC_FLUSH}: all pending output in the deflater is flushed,
                 * to the specified output buffer, so that an inflater that works on
                 * compressed data can get all input data available so far (In particular
                 * the {@link #needsInput()} returns {@code true} after this invocation
                 * if enough output space is provided). Flushing with {@link #SYNC_FLUSH}
                 * may degrade compression for some compression algorithms and so it
                 * should be used only when necessary.
                 * <li>{@link #FULL_FLUSH}: all pending output is flushed out as with
                 * {@link #SYNC_FLUSH}. The compression state is reset so that the inflater
                 * that works on the compressed output data can restart from this point
                 * if previous compressed data has been damaged or if random access is
                 * desired. Using {@link #FULL_FLUSH} too often can seriously degrade
                 * compression.
                 * </ul>
                 * <p>In the case of {@link #FULL_FLUSH} or {@link #SYNC_FLUSH}, if
                 * the return value is {@code len}, the space available in output
                 * buffer {@code b}, this method should be invoked again with the same
                 * {@code flush} parameter and more output space.
                 * @param b the buffer for the compressed data
                 * @param off the start offset of the data
                 * @param len the maximum number of bytes of compressed data
                 * @param flush the compression flush mode
                 * @return the actual number of bytes of compressed data written to
                 *          the output buffer
                 * @throws IllegalArgumentException if the flush mode is invalid
                 * @since 1.7
                 */
                // @ts-ignore
                deflate(b: number /*byte*/[], off: number /*int*/, len: number /*int*/, flush: number /*int*/): int
                /**
                 * Returns the ADLER-32 value of the uncompressed data.
                 * @return the ADLER-32 value of the uncompressed data
                 */
                // @ts-ignore
                getAdler(): int
                /**
                 * Returns the total number of uncompressed bytes input so far.
                 * <p>Since the number of bytes may be greater than
                 * Integer.MAX_VALUE, the {@link #getBytesRead()} method is now
                 * the preferred means of obtaining this information.</p>
                 * @return the total number of uncompressed bytes input so far
                 */
                // @ts-ignore
                getTotalIn(): int
                /**
                 * Returns the total number of uncompressed bytes input so far.
                 * @return the total (non-negative) number of uncompressed bytes input so far
                 * @since 1.5
                 */
                // @ts-ignore
                getBytesRead(): long
                /**
                 * Returns the total number of compressed bytes output so far.
                 * <p>Since the number of bytes may be greater than
                 * Integer.MAX_VALUE, the {@link #getBytesWritten()} method is now
                 * the preferred means of obtaining this information.</p>
                 * @return the total number of compressed bytes output so far
                 */
                // @ts-ignore
                getTotalOut(): int
                /**
                 * Returns the total number of compressed bytes output so far.
                 * @return the total (non-negative) number of compressed bytes output so far
                 * @since 1.5
                 */
                // @ts-ignore
                getBytesWritten(): long
                /**
                 * Resets deflater so that a new set of input data can be processed.
                 * Keeps current compression level and strategy settings.
                 */
                // @ts-ignore
                reset(): void
                /**
                 * Closes the compressor and discards any unprocessed input.
                 * This method should be called when the compressor is no longer
                 * being used, but will also be called automatically by the
                 * finalize() method. Once this method is called, the behavior
                 * of the Deflater object is undefined.
                 */
                // @ts-ignore
                end(): void
                /**
                 * Closes the compressor when garbage is collected.
                 */
                // @ts-ignore
                finalize(): void
            }
        }
    }
}