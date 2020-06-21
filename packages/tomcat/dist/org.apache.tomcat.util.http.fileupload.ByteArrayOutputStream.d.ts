declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        /**
                         * This class implements an output stream in which the data is
                         * written into a byte array. The buffer automatically grows as data
                         * is written to it.
                         * <p>
                         * The data can be retrieved using <code>toByteArray()</code> and
                         * <code>toString()</code>.
                         * <p>
                         * Closing a {@code ByteArrayOutputStream} has no effect. The methods in
                         * this class can be called after the stream has been closed without
                         * generating an {@code IOException}.
                         * <p>
                         * This is an alternative implementation of the {@link java.io.ByteArrayOutputStream}
                         * class. The original implementation only allocates 32 bytes at the beginning.
                         * As this class is designed for heavy duty it starts at 1024 bytes. In contrast
                         * to the original it doesn't reallocate the whole memory block but allocates
                         * additional buffers. This way no buffers need to be garbage collected and
                         * the contents don't have to be copied to the new buffer. This class is
                         * designed to behave exactly like the original. The only exception is the
                         * deprecated toString(int) method that has been ignored.
                         */
                        // @ts-ignore
                        class ByteArrayOutputStream extends java.io.OutputStream {
                            /**
                             * Creates a new byte array output stream. The buffer capacity is
                             * initially 1024 bytes, though its size increases if necessary.
                             */
                            // @ts-ignore
                            constructor()
                            /**
                             * Creates a new byte array output stream, with a buffer capacity of
                             * the specified size, in bytes.
                             * @param size  the initial size
                             * @throws IllegalArgumentException if size is negative
                             */
                            // @ts-ignore
                            constructor(size: number /*int*/)
                            /**
                             * Write the bytes to byte array.
                             * @param b the bytes to write
                             * @param off The start offset
                             * @param len The number of bytes to write
                             */
                            // @ts-ignore
                            public write(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                            /**
                             * Write a byte to byte array.
                             * @param b the byte to write
                             */
                            // @ts-ignore
                            public write(b: number /*int*/): void
                            /**
                             * Writes the entire contents of the specified input stream to this
                             * byte stream. Bytes from the input stream are read directly into the
                             * internal buffers of this streams.
                             * @param in the input stream to read from
                             * @return total number of bytes read from the input stream
                             *          (and written to this stream)
                             * @throws IOException if an I/O error occurs while reading the input stream
                             * @since 1.4
                             */
                            // @ts-ignore
                            public write(input: java.io.InputStream): number /*int*/
                            /**
                             * Closing a {@code ByteArrayOutputStream} has no effect. The methods in
                             * this class can be called after the stream has been closed without
                             * generating an {@code IOException}.
                             * @throws IOException never (this method should not declare this exception
                             *  but it has to now due to backwards compatibility)
                             */
                            // @ts-ignore
                            public close(): void
                            /**
                             * Writes the entire contents of this byte stream to the
                             * specified output stream.
                             * @param out  the output stream to write to
                             * @throws IOException if an I/O error occurs, such as if the stream is closed
                             * @see java.io.ByteArrayOutputStream#writeTo(OutputStream)
                             */
                            // @ts-ignore
                            public writeTo(out: java.io.OutputStream): void
                            /**
                             * Gets the current contents of this byte stream as a byte array.
                             * The result is independent of this stream.
                             * @return the current contents of this output stream, as a byte array
                             * @see java.io.ByteArrayOutputStream#toByteArray()
                             */
                            // @ts-ignore
                            public toByteArray(): number /*byte*/[]
                        }
                    }
                }
            }
        }
    }
}
