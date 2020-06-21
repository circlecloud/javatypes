declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        namespace disk {
                            /**
                             * <p>The default {@link org.apache.tomcat.util.http.fileupload.FileItemFactory}
                             * implementation. This implementation creates
                             * {@link org.apache.tomcat.util.http.fileupload.FileItem} instances which keep
                             * their
                             * content either in memory, for smaller items, or in a temporary file on disk,
                             * for larger items. The size threshold, above which content will be stored on
                             * disk, is configurable, as is the directory in which temporary files will be
                             * created.</p>
                             * <p>If not otherwise configured, the default configuration values are as
                             * follows:</p>
                             * <ul>
                             * <li>Size threshold is 10KB.</li>
                             * <li>Repository is the system default temp directory, as returned by
                             * <code>System.getProperty("java.io.tmpdir")</code>.</li>
                             * </ul>
                             * <p>
                             * <b>NOTE</b>: Files are created in the system default temp directory with
                             * predictable names. This means that a local attacker with write access to that
                             * directory can perform a TOUTOC attack to replace any uploaded file with a
                             * file of the attackers choice. The implications of this will depend on how the
                             * uploaded file is used but could be significant. When using this
                             * implementation in an environment with local, untrusted users,
                             * {@link #setRepository(File)} MUST be used to configure a repository location
                             * that is not publicly writable. In a Servlet container the location identified
                             * by the ServletContext attribute <code>javax.servlet.context.tempdir</code>
                             * may be used.
                             * </p>
                             * <p>Temporary files, which are created for file items, should be
                             * deleted later on.</p>
                             * @since FileUpload 1.1
                             */
                            // @ts-ignore
                            class DiskFileItemFactory extends java.lang.Object implements org.apache.tomcat.util.http.fileupload.FileItemFactory {
                                /**
                                 * Constructs an unconfigured instance of this class. The resulting factory
                                 * may be configured by calling the appropriate setter methods.
                                 */
                                // @ts-ignore
                                constructor()
                                /**
                                 * Constructs a preconfigured instance of this class.
                                 * @param sizeThreshold The threshold, in bytes, below which items will be
                                 *                       retained in memory and above which they will be
                                 *                       stored as a file.
                                 * @param repository    The data repository, which is the directory in
                                 *                       which files will be created, should the item size
                                 *                       exceed the threshold.
                                 */
                                // @ts-ignore
                                constructor(sizeThreshold: number /*int*/, repository: java.io.File)
                                /**
                                 * The default threshold above which uploads will be stored on disk.
                                 */
                                // @ts-ignore
                                public static readonly DEFAULT_SIZE_THRESHOLD: number /*int*/
                                /**
                                 * Returns the directory used to temporarily store files that are larger
                                 * than the configured size threshold.
                                 * @return The directory in which temporary files will be located.
                                 * @see #setRepository(java.io.File)
                                 */
                                // @ts-ignore
                                public getRepository(): java.io.File
                                /**
                                 * Sets the directory used to temporarily store files that are larger
                                 * than the configured size threshold.
                                 * @param repository The directory in which temporary files will be located.
                                 * @see #getRepository()
                                 */
                                // @ts-ignore
                                public setRepository(repository: java.io.File): void
                                /**
                                 * Returns the size threshold beyond which files are written directly to
                                 * disk. The default value is 10240 bytes.
                                 * @return The size threshold, in bytes.
                                 * @see #setSizeThreshold(int)
                                 */
                                // @ts-ignore
                                public getSizeThreshold(): number /*int*/
                                /**
                                 * Sets the size threshold beyond which files are written directly to disk.
                                 * @param sizeThreshold The size threshold, in bytes.
                                 * @see #getSizeThreshold()
                                 */
                                // @ts-ignore
                                public setSizeThreshold(sizeThreshold: number /*int*/): void
                                /**
                                 * Create a new {@link DiskFileItem}
                                 * instance from the supplied parameters and the local factory
                                 * configuration.
                                 * @param fieldName   The name of the form field.
                                 * @param contentType The content type of the form field.
                                 * @param isFormField <code>true</code> if this is a plain form field;
                                 *                     <code>false</code> otherwise.
                                 * @param fileName    The name of the uploaded file, if any, as supplied
                                 *                     by the browser or other client.
                                 * @return The newly created file item.
                                 */
                                // @ts-ignore
                                public createItem(fieldName: java.lang.String | string, contentType: java.lang.String | string, isFormField: boolean, fileName: java.lang.String | string): org.apache.tomcat.util.http.fileupload.FileItem
                                /**
                                 * Returns the default charset for use when no explicit charset
                                 * parameter is provided by the sender.
                                 * @return the default charset
                                 */
                                // @ts-ignore
                                public getDefaultCharset(): string
                                /**
                                 * Sets the default charset for use when no explicit charset
                                 * parameter is provided by the sender.
                                 * @param pCharset the default charset
                                 */
                                // @ts-ignore
                                public setDefaultCharset(pCharset: java.lang.String | string): void
                            }
                        }
                    }
                }
            }
        }
    }
}
