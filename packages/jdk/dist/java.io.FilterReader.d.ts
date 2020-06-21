declare namespace java {
    namespace io {
        /**
         * Abstract class for reading filtered character streams.
         * The abstract class <code>FilterReader</code> itself
         * provides default methods that pass all requests to
         * the contained stream. Subclasses of <code>FilterReader</code>
         * should override some of these methods and may also provide
         * additional methods and fields.
         * @author Mark Reinhold
         * @since JDK1.1
         */
        // @ts-ignore
        abstract class FilterReader extends java.io.Reader {
            /**
             * Creates a new filtered reader.
             * @param in  a Reader object providing the underlying stream.
             * @throws NullPointerException if <code>in</code> is <code>null</code>
             */
            // @ts-ignore
            constructor(input: java.io.Reader)
            /**
             * The underlying character-input stream.
             */
            // @ts-ignore
            in: java.io.Reader
            /**
             * Reads a single character.
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            public read(): number /*int*/
            /**
             * Reads characters into a portion of an array.
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            public read(cbuf: string[], off: number /*int*/, len: number /*int*/): number /*int*/
            /**
             * Skips characters.
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            public skip(n: number /*long*/): number /*long*/
            /**
             * Tells whether this stream is ready to be read.
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            public ready(): boolean
            /**
             * Tells whether this stream supports the mark() operation.
             */
            // @ts-ignore
            public markSupported(): boolean
            /**
             * Marks the present position in the stream.
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            public mark(readAheadLimit: number /*int*/): void
            /**
             * Resets the stream.
             * @exception IOException  If an I/O error occurs
             */
            // @ts-ignore
            public reset(): void
            // @ts-ignore
            public close(): void
        }
    }
}
