declare namespace java {
    namespace util {
        namespace zip {
            /**
             * This class provides support for general purpose decompression using the
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
             * String inputString = "blahblahblah€€";
             * byte[] input = inputString.getBytes("UTF-8");
             * // Compress the bytes
             * byte[] output = new byte[100];
             * Deflater compresser = new Deflater();
             * compresser.setInput(input);
             * compresser.finish();
             * int compressedDataLength = compresser.deflate(output);
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
             * @see Deflater
             * @author David Connelly
             */
            // @ts-ignore
            class Inflater extends java.lang.Object {
                /**
                 * Creates a new decompressor. If the parameter 'nowrap' is true then
                 * the ZLIB header and checksum fields will not be used. This provides
                 * compatibility with the compression format used by both GZIP and PKZIP.
                 * <p>
                 * Note: When using the 'nowrap' option it is also necessary to provide
                 * an extra "dummy" byte as input. This is required by the ZLIB native
                 * library in order to support certain optimizations.
                 * @param nowrap if true then support GZIP compatible compression
                 */
                // @ts-ignore
                constructor(nowrap: boolean)
                /**
                 * Creates a new decompressor.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Sets input data for decompression. Should be called whenever
                 * needsInput() returns true indicating that more input data is
                 * required.
                 * @param b the input data bytes
                 * @param off the start offset of the input data
                 * @param len the length of the input data
                 * @see Inflater#needsInput
                 */
                // @ts-ignore
                public setInput(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                /**
                 * Sets input data for decompression. Should be called whenever
                 * needsInput() returns true indicating that more input data is
                 * required.
                 * @param b the input data bytes
                 * @see Inflater#needsInput
                 */
                // @ts-ignore
                public setInput(b: number /*byte*/[]): void
                /**
                 * Sets the preset dictionary to the given array of bytes. Should be
                 * called when inflate() returns 0 and needsDictionary() returns true
                 * indicating that a preset dictionary is required. The method getAdler()
                 * can be used to get the Adler-32 value of the dictionary needed.
                 * @param b the dictionary data bytes
                 * @param off the start offset of the data
                 * @param len the length of the data
                 * @see Inflater#needsDictionary
                 * @see Inflater#getAdler
                 */
                // @ts-ignore
                public setDictionary(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                /**
                 * Sets the preset dictionary to the given array of bytes. Should be
                 * called when inflate() returns 0 and needsDictionary() returns true
                 * indicating that a preset dictionary is required. The method getAdler()
                 * can be used to get the Adler-32 value of the dictionary needed.
                 * @param b the dictionary data bytes
                 * @see Inflater#needsDictionary
                 * @see Inflater#getAdler
                 */
                // @ts-ignore
                public setDictionary(b: number /*byte*/[]): void
                /**
                 * Returns the total number of bytes remaining in the input buffer.
                 * This can be used to find out what bytes still remain in the input
                 * buffer after decompression has finished.
                 * @return the total number of bytes remaining in the input buffer
                 */
                // @ts-ignore
                public getRemaining(): number /*int*/
                /**
                 * Returns true if no data remains in the input buffer. This can
                 * be used to determine if #setInput should be called in order
                 * to provide more input.
                 * @return true if no data remains in the input buffer
                 */
                // @ts-ignore
                public needsInput(): boolean
                /**
                 * Returns true if a preset dictionary is needed for decompression.
                 * @return true if a preset dictionary is needed for decompression
                 * @see Inflater#setDictionary
                 */
                // @ts-ignore
                public needsDictionary(): boolean
                /**
                 * Returns true if the end of the compressed data stream has been
                 * reached.
                 * @return true if the end of the compressed data stream has been
                 *  reached
                 */
                // @ts-ignore
                public finished(): boolean
                /**
                 * Uncompresses bytes into specified buffer. Returns actual number
                 * of bytes uncompressed. A return value of 0 indicates that
                 * needsInput() or needsDictionary() should be called in order to
                 * determine if more input data or a preset dictionary is required.
                 * In the latter case, getAdler() can be used to get the Adler-32
                 * value of the dictionary required.
                 * @param b the buffer for the uncompressed data
                 * @param off the start offset of the data
                 * @param len the maximum number of uncompressed bytes
                 * @return the actual number of uncompressed bytes
                 * @exception DataFormatException if the compressed data format is invalid
                 * @see Inflater#needsInput
                 * @see Inflater#needsDictionary
                 */
                // @ts-ignore
                public inflate(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): number /*int*/
                /**
                 * Uncompresses bytes into specified buffer. Returns actual number
                 * of bytes uncompressed. A return value of 0 indicates that
                 * needsInput() or needsDictionary() should be called in order to
                 * determine if more input data or a preset dictionary is required.
                 * In the latter case, getAdler() can be used to get the Adler-32
                 * value of the dictionary required.
                 * @param b the buffer for the uncompressed data
                 * @return the actual number of uncompressed bytes
                 * @exception DataFormatException if the compressed data format is invalid
                 * @see Inflater#needsInput
                 * @see Inflater#needsDictionary
                 */
                // @ts-ignore
                public inflate(b: number /*byte*/[]): number /*int*/
                /**
                 * Returns the ADLER-32 value of the uncompressed data.
                 * @return the ADLER-32 value of the uncompressed data
                 */
                // @ts-ignore
                public getAdler(): number /*int*/
                /**
                 * Returns the total number of compressed bytes input so far.
                 * <p>Since the number of bytes may be greater than
                 * Integer.MAX_VALUE, the {@link #getBytesRead()} method is now
                 * the preferred means of obtaining this information.</p>
                 * @return the total number of compressed bytes input so far
                 */
                // @ts-ignore
                public getTotalIn(): number /*int*/
                /**
                 * Returns the total number of compressed bytes input so far.
                 * @return the total (non-negative) number of compressed bytes input so far
                 * @since 1.5
                 */
                // @ts-ignore
                public getBytesRead(): number /*long*/
                /**
                 * Returns the total number of uncompressed bytes output so far.
                 * <p>Since the number of bytes may be greater than
                 * Integer.MAX_VALUE, the {@link #getBytesWritten()} method is now
                 * the preferred means of obtaining this information.</p>
                 * @return the total number of uncompressed bytes output so far
                 */
                // @ts-ignore
                public getTotalOut(): number /*int*/
                /**
                 * Returns the total number of uncompressed bytes output so far.
                 * @return the total (non-negative) number of uncompressed bytes output so far
                 * @since 1.5
                 */
                // @ts-ignore
                public getBytesWritten(): number /*long*/
                /**
                 * Resets inflater so that a new set of input data can be processed.
                 */
                // @ts-ignore
                public reset(): void
                /**
                 * Closes the decompressor and discards any unprocessed input.
                 * This method should be called when the decompressor is no longer
                 * being used, but will also be called automatically by the finalize()
                 * method. Once this method is called, the behavior of the Inflater
                 * object is undefined.
                 */
                // @ts-ignore
                public end(): void
                /**
                 * Closes the decompressor when garbage is collected.
                 */
                // @ts-ignore
                finalize(): void
            }
        }
    }
}
