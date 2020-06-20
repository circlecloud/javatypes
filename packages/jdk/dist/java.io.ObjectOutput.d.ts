declare namespace java {
    namespace io {
        /**
         * ObjectOutput extends the DataOutput interface to include writing of objects.
         * DataOutput includes methods for output of primitive types, ObjectOutput
         * extends that interface to include objects, arrays, and Strings.
         * @author unascribed
         * @see java.io.InputStream
         * @see java.io.ObjectOutputStream
         * @see java.io.ObjectInputStream
         * @since JDK1.1
         */
        // @ts-ignore
        interface ObjectOutput extends java.io.DataOutput, java.lang.AutoCloseable {
            /**
             * Write an object to the underlying storage or stream.  The
             * class that implements this interface defines how the object is
             * written.
             * @param obj the object to be written
             * @exception IOException Any of the usual Input/Output related exceptions.
             */
            // @ts-ignore
            writeObject(obj: any): void
            /**
             * Writes a byte. This method will block until the byte is actually
             * written.
             * @param b the byte
             * @exception IOException If an I/O error has occurred.
             */
            // @ts-ignore
            write(b: number /*int*/): void
            /**
             * Writes an array of bytes. This method will block until the bytes
             * are actually written.
             * @param b the data to be written
             * @exception IOException If an I/O error has occurred.
             */
            // @ts-ignore
            write(b: number /*byte*/[]): void
            /**
             * Writes a sub array of bytes.
             * @param b the data to be written
             * @param off       the start offset in the data
             * @param len       the number of bytes that are written
             * @exception IOException If an I/O error has occurred.
             */
            // @ts-ignore
            write(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
            /**
             * Flushes the stream. This will write any buffered
             * output bytes.
             * @exception IOException If an I/O error has occurred.
             */
            // @ts-ignore
            flush(): void
            /**
             * Closes the stream. This method must be called
             * to release any resources associated with the
             * stream.
             * @exception IOException If an I/O error has occurred.
             */
            // @ts-ignore
            close(): void
        }
    }
}
