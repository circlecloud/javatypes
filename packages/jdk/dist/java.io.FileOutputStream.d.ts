declare namespace java {
    namespace io {
        /**
         * A file output stream is an output stream for writing data to a
         * <code>File</code> or to a <code>FileDescriptor</code>. Whether or not
         * a file is available or may be created depends upon the underlying
         * platform.  Some platforms, in particular, allow a file to be opened
         * for writing by only one <tt>FileOutputStream</tt> (or other
         * file-writing object) at a time.  In such situations the constructors in
         * this class will fail if the file involved is already open.
         * <p><code>FileOutputStream</code> is meant for writing streams of raw bytes
         * such as image data. For writing streams of characters, consider using
         * <code>FileWriter</code>.
         * @author Arthur van Hoff
         * @see java.io.File
         * @see java.io.FileDescriptor
         * @see java.io.FileInputStream
         * @see java.nio.file.Files#newOutputStream
         * @since JDK1.0
         */
        // @ts-ignore
        class FileOutputStream extends java.io.OutputStream {
            /**
             * Creates a file output stream to write to the file with the
             * specified name. A new <code>FileDescriptor</code> object is
             * created to represent this file connection.
             * <p>
             * First, if there is a security manager, its <code>checkWrite</code>
             * method is called with <code>name</code> as its argument.
             * <p>
             * If the file exists but is a directory rather than a regular file, does
             * not exist but cannot be created, or cannot be opened for any other
             * reason then a <code>FileNotFoundException</code> is thrown.
             * @param name   the system-dependent filename
             * @exception FileNotFoundException  if the file exists but is a directory
             *                    rather than a regular file, does not exist but cannot
             *                    be created, or cannot be opened for any other reason
             * @exception SecurityException  if a security manager exists and its
             *                <code>checkWrite</code> method denies write access
             *                to the file.
             * @see java.lang.SecurityManager#checkWrite(java.lang.String)
             */
            // @ts-ignore
            constructor(name: string)
            /**
             * Creates a file output stream to write to the file with the specified
             * name.  If the second argument is <code>true</code>, then
             * bytes will be written to the end of the file rather than the beginning.
             * A new <code>FileDescriptor</code> object is created to represent this
             * file connection.
             * <p>
             * First, if there is a security manager, its <code>checkWrite</code>
             * method is called with <code>name</code> as its argument.
             * <p>
             * If the file exists but is a directory rather than a regular file, does
             * not exist but cannot be created, or cannot be opened for any other
             * reason then a <code>FileNotFoundException</code> is thrown.
             * @param name        the system-dependent file name
             * @param append      if <code>true</code>, then bytes will be written
             *                    to the end of the file rather than the beginning
             * @exception FileNotFoundException  if the file exists but is a directory
             *                    rather than a regular file, does not exist but cannot
             *                    be created, or cannot be opened for any other reason.
             * @exception SecurityException  if a security manager exists and its
             *                <code>checkWrite</code> method denies write access
             *                to the file.
             * @see java.lang.SecurityManager#checkWrite(java.lang.String)
             * @since JDK1.1
             */
            // @ts-ignore
            constructor(name: string, append: boolean)
            /**
             * Creates a file output stream to write to the file represented by
             * the specified <code>File</code> object. A new
             * <code>FileDescriptor</code> object is created to represent this
             * file connection.
             * <p>
             * First, if there is a security manager, its <code>checkWrite</code>
             * method is called with the path represented by the <code>file</code>
             * argument as its argument.
             * <p>
             * If the file exists but is a directory rather than a regular file, does
             * not exist but cannot be created, or cannot be opened for any other
             * reason then a <code>FileNotFoundException</code> is thrown.
             * @param file               the file to be opened for writing.
             * @exception FileNotFoundException  if the file exists but is a directory
             *                    rather than a regular file, does not exist but cannot
             *                    be created, or cannot be opened for any other reason
             * @exception SecurityException  if a security manager exists and its
             *                <code>checkWrite</code> method denies write access
             *                to the file.
             * @see java.io.File#getPath()
             * @see java.lang.SecurityException
             * @see java.lang.SecurityManager#checkWrite(java.lang.String)
             */
            // @ts-ignore
            constructor(file: java.io.File)
            /**
             * Creates a file output stream to write to the file represented by
             * the specified <code>File</code> object. If the second argument is
             * <code>true</code>, then bytes will be written to the end of the file
             * rather than the beginning. A new <code>FileDescriptor</code> object is
             * created to represent this file connection.
             * <p>
             * First, if there is a security manager, its <code>checkWrite</code>
             * method is called with the path represented by the <code>file</code>
             * argument as its argument.
             * <p>
             * If the file exists but is a directory rather than a regular file, does
             * not exist but cannot be created, or cannot be opened for any other
             * reason then a <code>FileNotFoundException</code> is thrown.
             * @param file               the file to be opened for writing.
             * @param append      if <code>true</code>, then bytes will be written
             *                    to the end of the file rather than the beginning
             * @exception FileNotFoundException  if the file exists but is a directory
             *                    rather than a regular file, does not exist but cannot
             *                    be created, or cannot be opened for any other reason
             * @exception SecurityException  if a security manager exists and its
             *                <code>checkWrite</code> method denies write access
             *                to the file.
             * @see java.io.File#getPath()
             * @see java.lang.SecurityException
             * @see java.lang.SecurityManager#checkWrite(java.lang.String)
             * @since 1.4
             */
            // @ts-ignore
            constructor(file: java.io.File, append: boolean)
            /**
             * Creates a file output stream to write to the specified file
             * descriptor, which represents an existing connection to an actual
             * file in the file system.
             * <p>
             * First, if there is a security manager, its <code>checkWrite</code>
             * method is called with the file descriptor <code>fdObj</code>
             * argument as its argument.
             * <p>
             * If <code>fdObj</code> is null then a <code>NullPointerException</code>
             * is thrown.
             * <p>
             * This constructor does not throw an exception if <code>fdObj</code>
             * is {@link java.io.FileDescriptor#valid() invalid}.
             * However, if the methods are invoked on the resulting stream to attempt
             * I/O on the stream, an <code>IOException</code> is thrown.
             * @param fdObj   the file descriptor to be opened for writing
             * @exception SecurityException  if a security manager exists and its
             *                <code>checkWrite</code> method denies
             *                write access to the file descriptor
             * @see java.lang.SecurityManager#checkWrite(java.io.FileDescriptor)
             */
            // @ts-ignore
            constructor(fdObj: java.io.FileDescriptor)
            /**
             * Writes the specified byte to this file output stream. Implements
             * the <code>write</code> method of <code>OutputStream</code>.
             * @param b   the byte to be written.
             * @exception IOException  if an I/O error occurs.
             */
            // @ts-ignore
            write(b: number /*int*/): void
            /**
             * Writes <code>b.length</code> bytes from the specified byte array
             * to this file output stream.
             * @param b   the data.
             * @exception IOException  if an I/O error occurs.
             */
            // @ts-ignore
            write(b: number /*byte*/[]): void
            /**
             * Writes <code>len</code> bytes from the specified byte array
             * starting at offset <code>off</code> to this file output stream.
             * @param b     the data.
             * @param off   the start offset in the data.
             * @param len   the number of bytes to write.
             * @exception IOException  if an I/O error occurs.
             */
            // @ts-ignore
            write(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
            /**
             * Closes this file output stream and releases any system resources
             * associated with this stream. This file output stream may no longer
             * be used for writing bytes.
             * <p> If this stream has an associated channel then the channel is closed
             * as well.
             * @exception IOException  if an I/O error occurs.
             * @revised 1.4
             * @spec JSR-51
             */
            // @ts-ignore
            close(): void
            /**
             * Returns the file descriptor associated with this stream.
             * @return the <code>FileDescriptor</code> object that represents
             *           the connection to the file in the file system being used
             *           by this <code>FileOutputStream</code> object.
             * @exception IOException  if an I/O error occurs.
             * @see java.io.FileDescriptor
             */
            // @ts-ignore
            getFD(): java.io.FileDescriptor
            /**
             * Returns the unique {@link java.nio.channels.FileChannel FileChannel}
             * object associated with this file output stream.
             * <p> The initial {@link java.nio.channels.FileChannel#position()
             * position} of the returned channel will be equal to the
             * number of bytes written to the file so far unless this stream is in
             * append mode, in which case it will be equal to the size of the file.
             * Writing bytes to this stream will increment the channel's position
             * accordingly.  Changing the channel's position, either explicitly or by
             * writing, will change this stream's file position.
             * @return the file channel associated with this file output stream
             * @since 1.4
             * @spec JSR-51
             */
            // @ts-ignore
            getChannel(): java.nio.channels.FileChannel
            /**
             * Cleans up the connection to the file, and ensures that the
             * <code>close</code> method of this file output stream is
             * called when there are no more references to this stream.
             * @exception IOException  if an I/O error occurs.
             * @see java.io.FileInputStream#close()
             */
            // @ts-ignore
            finalize(): void
        }
    }
}
