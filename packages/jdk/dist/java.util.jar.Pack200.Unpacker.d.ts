declare namespace java {
    namespace util {
        namespace jar {
            namespace Pack200 {
                /**
                 * The unpacker engine converts the packed stream to a JAR file.
                 * An instance of the engine can be obtained
                 * using {@link #newUnpacker}.
                 * <p>
                 * Every JAR file produced by this engine will include the string
                 * "<tt>PACK200</tt>" as a zip file comment.
                 * This allows a deployer to detect if a JAR archive was packed and unpacked.
                 * <p>
                 * Note: Unless otherwise noted, passing a <tt>null</tt> argument to a
                 * constructor or method in this class will cause a {@link NullPointerException}
                 * to be thrown.
                 * <p>
                 * This version of the unpacker is compatible with all previous versions.
                 * @since 1.5
                 */
                // @ts-ignore
                interface Unpacker {
                    /**
                     * The string "keep", a possible value for certain properties.
                     * @see #DEFLATE_HINT
                     */
                    // @ts-ignore
                    
                    /**
                     * The string "true", a possible value for certain properties.
                     * @see #DEFLATE_HINT
                     */
                    // @ts-ignore
                    
                    /**
                     * The string "false", a possible value for certain properties.
                     * @see #DEFLATE_HINT
                     */
                    // @ts-ignore
                    
                    /**
                     * Property indicating that the unpacker should
                     * ignore all transmitted values for DEFLATE_HINT,
                     * replacing them by the given value, {@link #TRUE} or {@link #FALSE}.
                     * The default value is the special string {@link #KEEP},
                     * which asks the unpacker to preserve all transmitted
                     * deflation hints.
                     */
                    // @ts-ignore
                    
                    /**
                     * The unpacker's progress as a percentage, as periodically
                     * updated by the unpacker.
                     * Values of 0 - 100 are normal, and -1 indicates a stall.
                     * Progress can be monitored by polling the value of this
                     * property.
                     * <p>
                     * At a minimum, the unpacker must set progress to 0
                     * at the beginning of a packing operation, and to 100
                     * at the end.
                     */
                    // @ts-ignore
                    
                    /**
                     * Get the set of this engine's properties. This set is
                     * a "live view", so that changing its
                     * contents immediately affects the Packer engine, and
                     * changes from the engine (such as progress indications)
                     * are immediately visible in the map.
                     * <p>The property map may contain pre-defined implementation
                     * specific and default properties.  Users are encouraged to
                     * read the information and fully understand the implications,
                     * before modifying pre-existing properties.
                     * <p>
                     * Implementation specific properties are prefixed with a
                     * package name associated with the implementor, beginning
                     * with <tt>com.</tt> or a similar prefix.
                     * All property names beginning with <tt>pack.</tt> and
                     * <tt>unpack.</tt> are reserved for use by this API.
                     * <p>
                     * Unknown properties may be ignored or rejected with an
                     * unspecified error, and invalid entries may cause an
                     * unspecified error to be thrown.
                     * @return A sorted association of option key strings to option values.
                     */
                    // @ts-ignore
                    properties(): java.util.SortedMap<java.lang.String, java.lang.String>
                    /**
                     * Read a Pack200 archive, and write the encoded JAR to
                     * a JarOutputStream.
                     * The entire contents of the input stream will be read.
                     * It may be more efficient to read the Pack200 archive
                     * to a file and pass the File object, using the alternate
                     * method described below.
                     * <p>
                     * Closes its input but not its output.  (The output can accumulate more elements.)
                     * @param in an InputStream.
                     * @param out a JarOutputStream.
                     * @exception IOException if an error is encountered.
                     */
                    // @ts-ignore
                    unpack(input: java.io.InputStream, out: java.util.jar.JarOutputStream): void
                    /**
                     * Read a Pack200 archive, and write the encoded JAR to
                     * a JarOutputStream.
                     * <p>
                     * Does not close its output.  (The output can accumulate more elements.)
                     * @param in a File.
                     * @param out a JarOutputStream.
                     * @exception IOException if an error is encountered.
                     */
                    // @ts-ignore
                    unpack(input: java.io.File, out: java.util.jar.JarOutputStream): void
                    /**
                     * Registers a listener for PropertyChange events on the properties map.
                     * This is typically used by applications to update a progress bar.
                     * <p> The default implementation of this method does nothing and has
                     * no side-effects.</p>
                     * <p><b>WARNING:</b> This method is omitted from the interface
                     * declaration in all subset Profiles of Java SE that do not include
                     * the {@code java.beans} package. </p>
                     * @see #properties
                     * @see #PROGRESS
                     * @param listener  An object to be invoked when a property is changed.
                     * @deprecated The dependency on {#code PropertyChangeListener} creates
                     *              a significant impediment to future modularization of the
                     *              Java platform. This method will be removed in a future
                     *              release.
                     *              Applications that need to monitor progress of the
                     *              unpacker can poll the value of the {@link #PROGRESS
                     *              PROGRESS} property instead.
                     */
                    // @ts-ignore
                    addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                    /**
                     * Remove a listener for PropertyChange events, added by
                     * the {@link #addPropertyChangeListener}.
                     * <p> The default implementation of this method does nothing and has
                     * no side-effects.</p>
                     * <p><b>WARNING:</b> This method is omitted from the interface
                     * declaration in all subset Profiles of Java SE that do not include
                     * the {@code java.beans} package. </p>
                     * @see #addPropertyChangeListener
                     * @param listener  The PropertyChange listener to be removed.
                     * @deprecated The dependency on {#code PropertyChangeListener} creates
                     *              a significant impediment to future modularization of the
                     *              Java platform. This method will be removed in a future
                     *              release.
                     */
                    // @ts-ignore
                    removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                }
            }
        }
    }
}
