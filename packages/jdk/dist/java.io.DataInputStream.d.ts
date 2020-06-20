declare namespace java {
    namespace io {
        /**
         * A data input stream lets an application read primitive Java data
         * types from an underlying input stream in a machine-independent
         * way. An application uses a data output stream to write data that
         * can later be read by a data input stream.
         * <p>
         * DataInputStream is not necessarily safe for multithreaded access.
         * Thread safety is optional and is the responsibility of users of
         * methods in this class.
         * @author Arthur van Hoff
         * @see java.io.DataOutputStream
         * @since JDK1.0
         */
        // @ts-ignore
        class DataInputStream extends java.io.FilterInputStream implements java.io.DataInput {
            /**
             * Creates a DataInputStream that uses the specified
             * underlying InputStream.
             * @param in   the specified input stream
             */
            // @ts-ignore
            constructor(input: java.io.InputStream)
            /**
             * Reads some number of bytes from the contained input stream and
             * stores them into the buffer array <code>b</code>. The number of
             * bytes actually read is returned as an integer. This method blocks
             * until input data is available, end of file is detected, or an
             * exception is thrown.
             * <p>If <code>b</code> is null, a <code>NullPointerException</code> is
             * thrown. If the length of <code>b</code> is zero, then no bytes are
             * read and <code>0</code> is returned; otherwise, there is an attempt
             * to read at least one byte. If no byte is available because the
             * stream is at end of file, the value <code>-1</code> is returned;
             * otherwise, at least one byte is read and stored into <code>b</code>.
             * <p>The first byte read is stored into element <code>b[0]</code>, the
             * next one into <code>b[1]</code>, and so on. The number of bytes read
             * is, at most, equal to the length of <code>b</code>. Let <code>k</code>
             * be the number of bytes actually read; these bytes will be stored in
             * elements <code>b[0]</code> through <code>b[k-1]</code>, leaving
             * elements <code>b[k]</code> through <code>b[b.length-1]</code>
             * unaffected.
             * <p>The <code>read(b)</code> method has the same effect as:
             * <blockquote><pre>
             * read(b, 0, b.length)
             * </pre></blockquote>
             * @param b   the buffer into which the data is read.
             * @return the total number of bytes read into the buffer, or
             *              <code>-1</code> if there is no more data because the end
             *              of the stream has been reached.
             * @exception IOException if the first byte cannot be read for any reason
             *  other than end of file, the stream has been closed and the underlying
             *  input stream does not support reading after close, or another I/O
             *  error occurs.
             * @see java.io.FilterInputStream#in
             * @see java.io.InputStream#read(byte[], int, int)
             */
            // @ts-ignore
            read(b: number /*byte*/[]): int
            /**
             * Reads up to <code>len</code> bytes of data from the contained
             * input stream into an array of bytes.  An attempt is made to read
             * as many as <code>len</code> bytes, but a smaller number may be read,
             * possibly zero. The number of bytes actually read is returned as an
             * integer.
             * <p> This method blocks until input data is available, end of file is
             * detected, or an exception is thrown.
             * <p> If <code>len</code> is zero, then no bytes are read and
             * <code>0</code> is returned; otherwise, there is an attempt to read at
             * least one byte. If no byte is available because the stream is at end of
             * file, the value <code>-1</code> is returned; otherwise, at least one
             * byte is read and stored into <code>b</code>.
             * <p> The first byte read is stored into element <code>b[off]</code>, the
             * next one into <code>b[off+1]</code>, and so on. The number of bytes read
             * is, at most, equal to <code>len</code>. Let <i>k</i> be the number of
             * bytes actually read; these bytes will be stored in elements
             * <code>b[off]</code> through <code>b[off+</code><i>k</i><code>-1]</code>,
             * leaving elements <code>b[off+</code><i>k</i><code>]</code> through
             * <code>b[off+len-1]</code> unaffected.
             * <p> In every case, elements <code>b[0]</code> through
             * <code>b[off]</code> and elements <code>b[off+len]</code> through
             * <code>b[b.length-1]</code> are unaffected.
             * @param b     the buffer into which the data is read.
             * @param off the start offset in the destination array <code>b</code>
             * @param len   the maximum number of bytes read.
             * @return the total number of bytes read into the buffer, or
             *              <code>-1</code> if there is no more data because the end
             *              of the stream has been reached.
             * @exception NullPointerException If <code>b</code> is <code>null</code>.
             * @exception IndexOutOfBoundsException If <code>off</code> is negative,
             *  <code>len</code> is negative, or <code>len</code> is greater than
             *  <code>b.length - off</code>
             * @exception IOException if the first byte cannot be read for any reason
             *  other than end of file, the stream has been closed and the underlying
             *  input stream does not support reading after close, or another I/O
             *  error occurs.
             * @see java.io.FilterInputStream#in
             * @see java.io.InputStream#read(byte[], int, int)
             */
            // @ts-ignore
            read(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): int
            /**
             * See the general contract of the <code>readFully</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes
             * for this operation are read from the contained
             * input stream.
             * @param b   the buffer into which the data is read.
             * @exception EOFException  if this input stream reaches the end before
             *              reading all the bytes.
             * @exception IOException   the stream has been closed and the contained
             *              input stream does not support reading after close, or
             *              another I/O error occurs.
             * @see java.io.FilterInputStream#in
             */
            // @ts-ignore
            readFully(b: number /*byte*/[]): void
            /**
             * See the general contract of the <code>readFully</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes
             * for this operation are read from the contained
             * input stream.
             * @param b     the buffer into which the data is read.
             * @param off   the start offset of the data.
             * @param len   the number of bytes to read.
             * @exception EOFException  if this input stream reaches the end before
             *                reading all the bytes.
             * @exception IOException   the stream has been closed and the contained
             *              input stream does not support reading after close, or
             *              another I/O error occurs.
             * @see java.io.FilterInputStream#in
             */
            // @ts-ignore
            readFully(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
            /**
             * See the general contract of the <code>skipBytes</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes for this operation are read from the contained
             * input stream.
             * @param n   the number of bytes to be skipped.
             * @return the actual number of bytes skipped.
             * @exception IOException  if the contained input stream does not support
             *              seek, or the stream has been closed and
             *              the contained input stream does not support
             *              reading after close, or another I/O error occurs.
             */
            // @ts-ignore
            skipBytes(n: number /*int*/): int
            /**
             * See the general contract of the <code>readBoolean</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes for this operation are read from the contained
             * input stream.
             * @return the <code>boolean</code> value read.
             * @exception EOFException  if this input stream has reached the end.
             * @exception IOException   the stream has been closed and the contained
             *              input stream does not support reading after close, or
             *              another I/O error occurs.
             * @see java.io.FilterInputStream#in
             */
            // @ts-ignore
            readBoolean(): boolean
            /**
             * See the general contract of the <code>readByte</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes
             * for this operation are read from the contained
             * input stream.
             * @return the next byte of this input stream as a signed 8-bit
             *              <code>byte</code>.
             * @exception EOFException  if this input stream has reached the end.
             * @exception IOException   the stream has been closed and the contained
             *              input stream does not support reading after close, or
             *              another I/O error occurs.
             * @see java.io.FilterInputStream#in
             */
            // @ts-ignore
            readByte(): byte
            /**
             * See the general contract of the <code>readUnsignedByte</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes
             * for this operation are read from the contained
             * input stream.
             * @return the next byte of this input stream, interpreted as an
             *              unsigned 8-bit number.
             * @exception EOFException  if this input stream has reached the end.
             * @exception IOException   the stream has been closed and the contained
             *              input stream does not support reading after close, or
             *              another I/O error occurs.
             * @see java.io.FilterInputStream#in
             */
            // @ts-ignore
            readUnsignedByte(): int
            /**
             * See the general contract of the <code>readShort</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes
             * for this operation are read from the contained
             * input stream.
             * @return the next two bytes of this input stream, interpreted as a
             *              signed 16-bit number.
             * @exception EOFException  if this input stream reaches the end before
             *                reading two bytes.
             * @exception IOException   the stream has been closed and the contained
             *              input stream does not support reading after close, or
             *              another I/O error occurs.
             * @see java.io.FilterInputStream#in
             */
            // @ts-ignore
            readShort(): short
            /**
             * See the general contract of the <code>readUnsignedShort</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes
             * for this operation are read from the contained
             * input stream.
             * @return the next two bytes of this input stream, interpreted as an
             *              unsigned 16-bit integer.
             * @exception EOFException  if this input stream reaches the end before
             *              reading two bytes.
             * @exception IOException   the stream has been closed and the contained
             *              input stream does not support reading after close, or
             *              another I/O error occurs.
             * @see java.io.FilterInputStream#in
             */
            // @ts-ignore
            readUnsignedShort(): int
            /**
             * See the general contract of the <code>readChar</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes
             * for this operation are read from the contained
             * input stream.
             * @return the next two bytes of this input stream, interpreted as a
             *              <code>char</code>.
             * @exception EOFException  if this input stream reaches the end before
             *                reading two bytes.
             * @exception IOException   the stream has been closed and the contained
             *              input stream does not support reading after close, or
             *              another I/O error occurs.
             * @see java.io.FilterInputStream#in
             */
            // @ts-ignore
            readChar(): char
            /**
             * See the general contract of the <code>readInt</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes
             * for this operation are read from the contained
             * input stream.
             * @return the next four bytes of this input stream, interpreted as an
             *              <code>int</code>.
             * @exception EOFException  if this input stream reaches the end before
             *                reading four bytes.
             * @exception IOException   the stream has been closed and the contained
             *              input stream does not support reading after close, or
             *              another I/O error occurs.
             * @see java.io.FilterInputStream#in
             */
            // @ts-ignore
            readInt(): int
            /**
             * See the general contract of the <code>readLong</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes
             * for this operation are read from the contained
             * input stream.
             * @return the next eight bytes of this input stream, interpreted as a
             *              <code>long</code>.
             * @exception EOFException  if this input stream reaches the end before
             *                reading eight bytes.
             * @exception IOException   the stream has been closed and the contained
             *              input stream does not support reading after close, or
             *              another I/O error occurs.
             * @see java.io.FilterInputStream#in
             */
            // @ts-ignore
            readLong(): long
            /**
             * See the general contract of the <code>readFloat</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes
             * for this operation are read from the contained
             * input stream.
             * @return the next four bytes of this input stream, interpreted as a
             *              <code>float</code>.
             * @exception EOFException  if this input stream reaches the end before
             *                reading four bytes.
             * @exception IOException   the stream has been closed and the contained
             *              input stream does not support reading after close, or
             *              another I/O error occurs.
             * @see java.io.DataInputStream#readInt()
             * @see java.lang.Float#intBitsToFloat(int)
             */
            // @ts-ignore
            readFloat(): float
            /**
             * See the general contract of the <code>readDouble</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes
             * for this operation are read from the contained
             * input stream.
             * @return the next eight bytes of this input stream, interpreted as a
             *              <code>double</code>.
             * @exception EOFException  if this input stream reaches the end before
             *                reading eight bytes.
             * @exception IOException   the stream has been closed and the contained
             *              input stream does not support reading after close, or
             *              another I/O error occurs.
             * @see java.io.DataInputStream#readLong()
             * @see java.lang.Double#longBitsToDouble(long)
             */
            // @ts-ignore
            readDouble(): double
            /**
             * See the general contract of the <code>readLine</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes
             * for this operation are read from the contained
             * input stream.
             * @deprecated This method does not properly convert bytes to characters.
             *  As of JDK&nbsp;1.1, the preferred way to read lines of text is via the
             *  <code>BufferedReader.readLine()</code> method.  Programs that use the
             *  <code>DataInputStream</code> class to read lines can be converted to use
             *  the <code>BufferedReader</code> class by replacing code of the form:
             *  <blockquote><pre>
             *      DataInputStream d =&nbsp;new&nbsp;DataInputStream(in);
             *  </pre></blockquote>
             *  with:
             *  <blockquote><pre>
             *      BufferedReader d
             *           =&nbsp;new&nbsp;BufferedReader(new&nbsp;InputStreamReader(in));
             *  </pre></blockquote>
             * @return the next line of text from this input stream.
             * @exception IOException  if an I/O error occurs.
             * @see java.io.BufferedReader#readLine()
             * @see java.io.FilterInputStream#in
             */
            // @ts-ignore
            readLine(): java.lang.String
            /**
             * See the general contract of the <code>readUTF</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes
             * for this operation are read from the contained
             * input stream.
             * @return a Unicode string.
             * @exception EOFException  if this input stream reaches the end before
             *                reading all the bytes.
             * @exception IOException   the stream has been closed and the contained
             *              input stream does not support reading after close, or
             *              another I/O error occurs.
             * @exception UTFDataFormatException if the bytes do not represent a valid
             *              modified UTF-8 encoding of a string.
             * @see java.io.DataInputStream#readUTF(java.io.DataInput)
             */
            // @ts-ignore
            readUTF(): java.lang.String
            /**
             * Reads from the
             * stream <code>in</code> a representation
             * of a Unicode  character string encoded in
             * <a href="DataInput.html#modified-utf-8">modified UTF-8</a> format;
             * this string of characters is then returned as a <code>String</code>.
             * The details of the modified UTF-8 representation
             * are  exactly the same as for the <code>readUTF</code>
             * method of <code>DataInput</code>.
             * @param in   a data input stream.
             * @return a Unicode string.
             * @exception EOFException            if the input stream reaches the end
             *                before all the bytes.
             * @exception IOException   the stream has been closed and the contained
             *              input stream does not support reading after close, or
             *              another I/O error occurs.
             * @exception UTFDataFormatException  if the bytes do not represent a
             *                valid modified UTF-8 encoding of a Unicode string.
             * @see java.io.DataInputStream#readUnsignedShort()
             */
            // @ts-ignore
            readUTF(input: java.io.DataInput): java.lang.String
        }
    }
}
