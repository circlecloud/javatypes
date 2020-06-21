declare namespace java {
    namespace util {
        namespace zip {
            /**
             * This class is used to read entries from a zip file.
             * <p> Unless otherwise noted, passing a <tt>null</tt> argument to a constructor
             * or method in this class will cause a {@link NullPointerException} to be
             * thrown.
             * @author David Connelly
             */
            // @ts-ignore
            class ZipFile extends java.lang.Object implements java.util.zip.ZipConstants, java.io.Closeable {
                /**
                 * Opens a zip file for reading.
                 * <p>First, if there is a security manager, its <code>checkRead</code>
                 * method is called with the <code>name</code> argument as its argument
                 * to ensure the read is allowed.
                 * <p>The UTF-8 {@link java.nio.charset.Charset charset} is used to
                 * decode the entry names and comments.
                 * @param name the name of the zip file
                 * @throws ZipException if a ZIP format error has occurred
                 * @throws IOException if an I/O error has occurred
                 * @throws SecurityException if a security manager exists and its
                 *          <code>checkRead</code> method doesn't allow read access to the file.
                 * @see SecurityManager#checkRead(java.lang.String)
                 */
                // @ts-ignore
                constructor(name: java.lang.String | string)
                /**
                 * Opens a new <code>ZipFile</code> to read from the specified
                 * <code>File</code> object in the specified mode.  The mode argument
                 * must be either <tt>OPEN_READ</tt> or <tt>OPEN_READ | OPEN_DELETE</tt>.
                 * <p>First, if there is a security manager, its <code>checkRead</code>
                 * method is called with the <code>name</code> argument as its argument to
                 * ensure the read is allowed.
                 * <p>The UTF-8 {@link java.nio.charset.Charset charset} is used to
                 * decode the entry names and comments
                 * @param file the ZIP file to be opened for reading
                 * @param mode the mode in which the file is to be opened
                 * @throws ZipException if a ZIP format error has occurred
                 * @throws IOException if an I/O error has occurred
                 * @throws SecurityException if a security manager exists and
                 *          its <code>checkRead</code> method
                 *          doesn't allow read access to the file,
                 *          or its <code>checkDelete</code> method doesn't allow deleting
                 *          the file when the <tt>OPEN_DELETE</tt> flag is set.
                 * @throws IllegalArgumentException if the <tt>mode</tt> argument is invalid
                 * @see SecurityManager#checkRead(java.lang.String)
                 * @since 1.3
                 */
                // @ts-ignore
                constructor(file: java.io.File, mode: number /*int*/)
                /**
                 * Opens a ZIP file for reading given the specified File object.
                 * <p>The UTF-8 {@link java.nio.charset.Charset charset} is used to
                 * decode the entry names and comments.
                 * @param file the ZIP file to be opened for reading
                 * @throws ZipException if a ZIP format error has occurred
                 * @throws IOException if an I/O error has occurred
                 */
                // @ts-ignore
                constructor(file: java.io.File)
                /**
                 * Opens a new <code>ZipFile</code> to read from the specified
                 * <code>File</code> object in the specified mode.  The mode argument
                 * must be either <tt>OPEN_READ</tt> or <tt>OPEN_READ | OPEN_DELETE</tt>.
                 * <p>First, if there is a security manager, its <code>checkRead</code>
                 * method is called with the <code>name</code> argument as its argument to
                 * ensure the read is allowed.
                 * @param file the ZIP file to be opened for reading
                 * @param mode the mode in which the file is to be opened
                 * @param charset
                 *         the {#linkplain java.nio.charset.Charset charset} to
                 *         be used to decode the ZIP entry name and comment that are not
                 *         encoded by using UTF-8 encoding (indicated by entry's general
                 *         purpose flag).
                 * @throws ZipException if a ZIP format error has occurred
                 * @throws IOException if an I/O error has occurred
                 * @throws SecurityException
                 *          if a security manager exists and its <code>checkRead</code>
                 *          method doesn't allow read access to the file,or its
                 *          <code>checkDelete</code> method doesn't allow deleting the
                 *          file when the <tt>OPEN_DELETE</tt> flag is set
                 * @throws IllegalArgumentException if the <tt>mode</tt> argument is invalid
                 * @see SecurityManager#checkRead(java.lang.String)
                 * @since 1.7
                 */
                // @ts-ignore
                constructor(file: java.io.File, mode: number /*int*/, charset: java.nio.charset.Charset)
                /**
                 * Opens a zip file for reading.
                 * <p>First, if there is a security manager, its <code>checkRead</code>
                 * method is called with the <code>name</code> argument as its argument
                 * to ensure the read is allowed.
                 * @param name the name of the zip file
                 * @param charset
                 *         the {#linkplain java.nio.charset.Charset charset} to
                 *         be used to decode the ZIP entry name and comment that are not
                 *         encoded by using UTF-8 encoding (indicated by entry's general
                 *         purpose flag).
                 * @throws ZipException if a ZIP format error has occurred
                 * @throws IOException if an I/O error has occurred
                 * @throws SecurityException
                 *          if a security manager exists and its <code>checkRead</code>
                 *          method doesn't allow read access to the file
                 * @see SecurityManager#checkRead(java.lang.String)
                 * @since 1.7
                 */
                // @ts-ignore
                constructor(name: java.lang.String | string, charset: java.nio.charset.Charset)
                /**
                 * Opens a ZIP file for reading given the specified File object.
                 * @param file the ZIP file to be opened for reading
                 * @param charset
                 *         The {#linkplain java.nio.charset.Charset charset} to be
                 *         used to decode the ZIP entry name and comment (ignored if
                 *         the <a href="package-summary.html#lang_encoding"> language
                 *         encoding bit</a> of the ZIP entry's general purpose bit
                 *         flag is set).
                 * @throws ZipException if a ZIP format error has occurred
                 * @throws IOException if an I/O error has occurred
                 * @since 1.7
                 */
                // @ts-ignore
                constructor(file: java.io.File, charset: java.nio.charset.Charset)
                /**
                 * Mode flag to open a zip file for reading.
                 */
                // @ts-ignore
                public static readonly OPEN_READ: number /*int*/
                /**
                 * Mode flag to open a zip file and mark it for deletion.  The file will be
                 * deleted some time between the moment that it is opened and the moment
                 * that it is closed, but its contents will remain accessible via the
                 * <tt>ZipFile</tt> object until either the close method is invoked or the
                 * virtual machine exits.
                 */
                // @ts-ignore
                public static readonly OPEN_DELETE: number /*int*/
                /**
                 * Returns the zip file comment, or null if none.
                 * @return the comment string for the zip file, or null if none
                 * @throws IllegalStateException if the zip file has been closed
                 * 
                 *  Since 1.7
                 */
                // @ts-ignore
                public getComment(): string
                /**
                 * Returns the zip file entry for the specified name, or null
                 * if not found.
                 * @param name the name of the entry
                 * @return the zip file entry, or null if not found
                 * @throws IllegalStateException if the zip file has been closed
                 */
                // @ts-ignore
                public getEntry(name: java.lang.String | string): java.util.zip.ZipEntry
                /**
                 * Returns an input stream for reading the contents of the specified
                 * zip file entry.
                 * <p> Closing this ZIP file will, in turn, close all input
                 * streams that have been returned by invocations of this method.
                 * @param entry the zip file entry
                 * @return the input stream for reading the contents of the specified
                 *  zip file entry.
                 * @throws ZipException if a ZIP format error has occurred
                 * @throws IOException if an I/O error has occurred
                 * @throws IllegalStateException if the zip file has been closed
                 */
                // @ts-ignore
                public getInputStream(entry: java.util.zip.ZipEntry): java.io.InputStream
                /**
                 * Returns the path name of the ZIP file.
                 * @return the path name of the ZIP file
                 */
                // @ts-ignore
                public getName(): string
                /**
                 * Returns an enumeration of the ZIP file entries.
                 * @return an enumeration of the ZIP file entries
                 * @throws IllegalStateException if the zip file has been closed
                 */
                // @ts-ignore
                public entries(): java.util.Enumeration<any>
                /**
                 * Return an ordered {@code Stream} over the ZIP file entries.
                 * Entries appear in the {@code Stream} in the order they appear in
                 * the central directory of the ZIP file.
                 * @return an ordered {#code Stream} of entries in this ZIP file
                 * @throws IllegalStateException if the zip file has been closed
                 * @since 1.8
                 */
                // @ts-ignore
                public stream(): java.util.stream.Stream<any>
                /**
                 * Returns the number of entries in the ZIP file.
                 * @return the number of entries in the ZIP file
                 * @throws IllegalStateException if the zip file has been closed
                 */
                // @ts-ignore
                public size(): number /*int*/
                /**
                 * Closes the ZIP file.
                 * <p> Closing this ZIP file will close all of the input streams
                 * previously returned by invocations of the {@link #getInputStream
                 * getInputStream} method.
                 * @throws IOException if an I/O error has occurred
                 */
                // @ts-ignore
                public close(): void
                /**
                 * Ensures that the system resources held by this ZipFile object are
                 * released when there are no more references to it.
                 * <p>
                 * Since the time when GC would invoke this method is undetermined,
                 * it is strongly recommended that applications invoke the <code>close</code>
                 * method as soon they have finished accessing this <code>ZipFile</code>.
                 * This will prevent holding up system resources for an undetermined
                 * length of time.
                 * @throws IOException if an I/O error has occurred
                 * @see java.util.zip.ZipFile#close()
                 */
                // @ts-ignore
                finalize(): void
            }
        }
    }
}
