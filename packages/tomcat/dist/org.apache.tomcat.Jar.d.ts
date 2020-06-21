declare namespace org {
    namespace apache {
        namespace tomcat {
            /**
             * Provides an abstraction for use by the various classes that need to scan
             * JARs. The classes provided by the JRE for accessing JARs
             * ({@link java.util.jar.JarFile} and {@link java.util.jar.JarInputStream}) have
             * significantly different performance characteristics depending on the form of
             * the URL used to access the JAR. For file based JAR {@link java.net.URL}s,
             * {@link java.util.jar.JarFile} is faster but for non-file based
             * {@link java.net.URL}s, {@link java.util.jar.JarFile} creates a copy of the
             * JAR in the temporary directory so {@link java.util.jar.JarInputStream} is
             * faster.
             */
            // @ts-ignore
            interface Jar extends java.lang.AutoCloseable {
                /**
                 * @return The URL for accessing the JAR file.
                 */
                // @ts-ignore
                getJarFileURL(): java.net.URL
                /**
                 * Obtain an {@link InputStream} for a given entry in a JAR. The caller is
                 * responsible for closing the stream.
                 * @param name  Entry to obtain an {#link InputStream} for
                 * @return An {#link InputStream} for the specified entry or null if
                 *               the entry does not exist
                 * @throws IOException if an I/O error occurs while processing the JAR file
                 */
                // @ts-ignore
                getInputStream(name: java.lang.String | string): java.io.InputStream
                /**
                 * Obtain the last modified time for the given resource in the JAR.
                 * @param name  Entry to obtain the modification time for
                 * @return The time (in the same format as
                 *          {#link System#currentTimeMillis()} that the resource was last
                 *          modified. Returns -1 if the entry does not exist
                 * @throws IOException if an I/O error occurs while processing the JAR file
                 */
                // @ts-ignore
                getLastModified(name: java.lang.String | string): number /*long*/
                /**
                 * Determine if the given resource in present in the JAR.
                 * @param name  Entry to look for
                 * @return {#code true} if the entry is present in the JAR, otherwise
                 *          {@code false}
                 * @throws IOException if an I/O error occurs while processing the JAR file
                 */
                // @ts-ignore
                exists(name: java.lang.String | string): boolean
                /**
                 * Close any resources associated with this JAR.
                 */
                // @ts-ignore
                close(): void
                /**
                 * Moves the internal pointer to the next entry in the JAR.
                 */
                // @ts-ignore
                nextEntry(): void
                /**
                 * Obtains the name of the current entry.
                 * @return The entry name
                 */
                // @ts-ignore
                getEntryName(): string
                /**
                 * Obtains the input stream for the current entry.
                 * @return The input stream
                 * @throws IOException  If the stream cannot be obtained
                 */
                // @ts-ignore
                getEntryInputStream(): java.io.InputStream
                /**
                 * Obtain, in String form, the URL for an entry in this JAR. Note that for
                 * JARs nested in WAR files, the Tomcat specific war:file:... form will not
                 * be used, rather the jar:jar:file:... form (that the JRE does not
                 * understand will be used). Note that this means that any code using these
                 * URLs will need to understand the jar:jar:file:... form and use the
                 * {@link org.apache.tomcat.util.scan.JarFactory} to ensure resources are
                 * accessed correctly.
                 * @param entry The entry to generate the URL for
                 * @return a URL for the specified entry in the JAR
                 */
                // @ts-ignore
                getURL(entry: java.lang.String | string): string
                /**
                 * Obtain the manifest for the JAR file.
                 * @return The manifest for this JAR file.
                 * @throws IOException If an I/O error occurs trying to obtain the manifest
                 */
                // @ts-ignore
                getManifest(): java.util.jar.Manifest
                /**
                 * Resets the internal pointer used to track JAR entries to the beginning of
                 * the JAR.
                 * @throws IOException  If the pointer cannot be reset
                 */
                // @ts-ignore
                reset(): void
            }
        }
    }
}
