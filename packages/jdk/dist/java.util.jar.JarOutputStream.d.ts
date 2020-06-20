declare namespace java {
    namespace util {
        namespace jar {
            /**
             * The <code>JarOutputStream</code> class is used to write the contents
             * of a JAR file to any output stream. It extends the class
             * <code>java.util.zip.ZipOutputStream</code> with support
             * for writing an optional <code>Manifest</code> entry. The
             * <code>Manifest</code> can be used to specify meta-information about
             * the JAR file and its entries.
             * @author David Connelly
             * @see Manifest
             * @see java.util.zip.ZipOutputStream
             * @since 1.2
             */
            // @ts-ignore
            class JarOutputStream extends java.util.zip.ZipOutputStream {
                /**
                 * Creates a new <code>JarOutputStream</code> with the specified
                 * <code>Manifest</code>. The manifest is written as the first
                 * entry to the output stream.
                 * @param out the actual output stream
                 * @param man the optional <code>Manifest</code>
                 * @exception IOException if an I/O error has occurred
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream, man: java.util.jar.Manifest)
                /**
                 * Creates a new <code>JarOutputStream</code> with no manifest.
                 * @param out the actual output stream
                 * @exception IOException if an I/O error has occurred
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream)
                /**
                 * Begins writing a new JAR file entry and positions the stream
                 * to the start of the entry data. This method will also close
                 * any previous entry. The default compression method will be
                 * used if no compression method was specified for the entry.
                 * The current time will be used if the entry has no set modification
                 * time.
                 * @param ze the ZIP/JAR entry to be written
                 * @exception ZipException if a ZIP error has occurred
                 * @exception IOException if an I/O error has occurred
                 */
                // @ts-ignore
                putNextEntry(ze: java.util.zip.ZipEntry): void
            }
        }
    }
}
