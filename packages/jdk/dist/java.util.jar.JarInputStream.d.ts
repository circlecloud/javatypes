declare namespace java {
    namespace util {
        namespace jar {
            /**
             * The <code>JarInputStream</code> class is used to read the contents of
             * a JAR file from any input stream. It extends the class
             * <code>java.util.zip.ZipInputStream</code> with support for reading
             * an optional <code>Manifest</code> entry. The <code>Manifest</code>
             * can be used to store meta-information about the JAR file and its entries.
             * @author David Connelly
             * @see Manifest
             * @see java.util.zip.ZipInputStream
             * @since 1.2
             */
            // @ts-ignore
            class JarInputStream extends java.util.zip.ZipInputStream {
                /**
                 * Creates a new <code>JarInputStream</code> and reads the optional
                 * manifest. If a manifest is present, also attempts to verify
                 * the signatures if the JarInputStream is signed.
                 * @param in the actual input stream
                 * @exception IOException if an I/O error has occurred
                 */
                // @ts-ignore
                constructor(input: java.io.InputStream)
                /**
                 * Creates a new <code>JarInputStream</code> and reads the optional
                 * manifest. If a manifest is present and verify is true, also attempts
                 * to verify the signatures if the JarInputStream is signed.
                 * @param in the actual input stream
                 * @param verify whether or not to verify the JarInputStream if
                 *  it is signed.
                 * @exception IOException if an I/O error has occurred
                 */
                // @ts-ignore
                constructor(input: java.io.InputStream, verify: boolean)
                /**
                 * Returns the <code>Manifest</code> for this JAR file, or
                 * <code>null</code> if none.
                 * @return the <code>Manifest</code> for this JAR file, or
                 *          <code>null</code> if none.
                 */
                // @ts-ignore
                public getManifest(): java.util.jar.Manifest
                /**
                 * Reads the next ZIP file entry and positions the stream at the
                 * beginning of the entry data. If verification has been enabled,
                 * any invalid signature detected while positioning the stream for
                 * the next entry will result in an exception.
                 * @exception ZipException if a ZIP file error has occurred
                 * @exception IOException if an I/O error has occurred
                 * @exception SecurityException if any of the jar file entries
                 *          are incorrectly signed.
                 */
                // @ts-ignore
                public getNextEntry(): java.util.zip.ZipEntry
                /**
                 * Reads the next JAR file entry and positions the stream at the
                 * beginning of the entry data. If verification has been enabled,
                 * any invalid signature detected while positioning the stream for
                 * the next entry will result in an exception.
                 * @return the next JAR file entry, or null if there are no more entries
                 * @exception ZipException if a ZIP file error has occurred
                 * @exception IOException if an I/O error has occurred
                 * @exception SecurityException if any of the jar file entries
                 *          are incorrectly signed.
                 */
                // @ts-ignore
                public getNextJarEntry(): java.util.jar.JarEntry
                /**
                 * Reads from the current JAR file entry into an array of bytes.
                 * If <code>len</code> is not zero, the method
                 * blocks until some input is available; otherwise, no
                 * bytes are read and <code>0</code> is returned.
                 * If verification has been enabled, any invalid signature
                 * on the current entry will be reported at some point before the
                 * end of the entry is reached.
                 * @param b the buffer into which the data is read
                 * @param off the start offset in the destination array <code>b</code>
                 * @param len the maximum number of bytes to read
                 * @return the actual number of bytes read, or -1 if the end of the
                 *          entry is reached
                 * @exception NullPointerException If <code>b</code> is <code>null</code>.
                 * @exception IndexOutOfBoundsException If <code>off</code> is negative,
                 *  <code>len</code> is negative, or <code>len</code> is greater than
                 *  <code>b.length - off</code>
                 * @exception ZipException if a ZIP file error has occurred
                 * @exception IOException if an I/O error has occurred
                 * @exception SecurityException if any of the jar file entries
                 *          are incorrectly signed.
                 */
                // @ts-ignore
                public read(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): number /*int*/
                /**
                 * Creates a new <code>JarEntry</code> (<code>ZipEntry</code>) for the
                 * specified JAR file entry name. The manifest attributes of
                 * the specified JAR file entry name will be copied to the new
                 * <CODE>JarEntry</CODE>.
                 * @param name the name of the JAR/ZIP file entry
                 * @return the <code>JarEntry</code> object just created
                 */
                // @ts-ignore
                createZipEntry(name: java.lang.String | string): java.util.zip.ZipEntry
            }
        }
    }
}
