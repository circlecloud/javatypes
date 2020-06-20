declare namespace java {
    namespace io {
        /**
         * Abstract class for writing filtered character streams.
         * The abstract class <code>FilterWriter</code> itself
         * provides default methods that pass all requests to the
         * contained stream. Subclasses of <code>FilterWriter</code>
         * should override some of these methods and may also
         * provide additional methods and fields.
         * @author Mark Reinhold
         * @since JDK1.1
         */
        // @ts-ignore
        class FilterWriter extends java.io.Writer {
            /**
             * Create a new filtered writer.
             * @param out  a Writer object to provide the underlying stream.
             * @throws NullPointerException if <code>out</code> is <code>null</code>
             */
            // @ts-ignore
            constructor(out: java.io.Writer)
            /**
             * The underlying character-output stream.
             */
            // @ts-ignore
            out: java.io.Writer
            /**
             * Writes a single character.
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            write(c: number /*int*/): void
            /**
             * Writes a portion of an array of characters.
             * @param cbuf  Buffer of characters to be written
             * @param off   Offset from which to start reading characters
             * @param len   Number of characters to be written
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            write(cbuf: string[], off: number /*int*/, len: number /*int*/): void
            /**
             * Writes a portion of a string.
             * @param str  String to be written
             * @param off  Offset from which to start reading characters
             * @param len  Number of characters to be written
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            write(str: string, off: number /*int*/, len: number /*int*/): void
            /**
             * Flushes the stream.
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            flush(): void
            // @ts-ignore
            close(): void
        }
    }
}
