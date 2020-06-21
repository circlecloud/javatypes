declare namespace javax {
    namespace management {
        namespace loading {
            /**
             * Exposes the remote management interface of the MLet
             * MBean.
             * @since 1.5
             */
            // @ts-ignore
            interface MLetMBean {
                /**
                 * Loads a text file containing MLET tags that define the MBeans
                 * to be added to the MBean server. The location of the text file is
                 * specified by a URL. The text file is read using the UTF-8
                 * encoding. The MBeans specified in the MLET file will be
                 * instantiated and registered in the MBean server.
                 * @param url The URL of the text file to be loaded as String object.
                 * @return A set containing one entry per MLET tag in the m-let
                 *  text file loaded.  Each entry specifies either the
                 *  ObjectInstance for the created MBean, or a throwable object
                 *  (that is, an error or an exception) if the MBean could not be
                 *  created.
                 * @exception ServiceNotFoundException One of the following errors
                 *  has occurred: The m-let text file does not contain an MLET tag,
                 *  the m-let text file is not found, a mandatory attribute of the
                 *  MLET tag is not specified, the value of url is malformed.
                 */
                // @ts-ignore
                getMBeansFromURL(url: java.lang.String | string): Array<java.lang.Object | any>
                /**
                 * Loads a text file containing MLET tags that define the MBeans
                 * to be added to the MBean server. The location of the text file is
                 * specified by a URL. The text file is read using the UTF-8
                 * encoding. The MBeans specified in the MLET file will be
                 * instantiated and registered in the MBean server.
                 * @param url The URL of the text file to be loaded as URL object.
                 * @return A set containing one entry per MLET tag in the m-let
                 *  text file loaded.  Each entry specifies either the
                 *  ObjectInstance for the created MBean, or a throwable object
                 *  (that is, an error or an exception) if the MBean could not be
                 *  created.
                 * @exception ServiceNotFoundException One of the following errors
                 *  has occurred: The m-let text file does not contain an MLET tag,
                 *  the m-let text file is not found, a mandatory attribute of the
                 *  MLET tag is not specified, the value of url is null.
                 */
                // @ts-ignore
                getMBeansFromURL(url: java.net.URL): Array<java.lang.Object | any>
                /**
                 * Appends the specified URL to the list of URLs to search for classes and
                 * resources.
                 * @param url the URL to add.
                 */
                // @ts-ignore
                addURL(url: java.net.URL): void
                /**
                 * Appends the specified URL to the list of URLs to search for classes and
                 * resources.
                 * @param url the URL to add.
                 * @exception ServiceNotFoundException The specified URL is malformed.
                 */
                // @ts-ignore
                addURL(url: java.lang.String | string): void
                /**
                 * Returns the search path of URLs for loading classes and resources.
                 * This includes the original list of URLs specified to the constructor,
                 * along with any URLs subsequently appended by the addURL() method.
                 * @return the list of URLs.
                 */
                // @ts-ignore
                getURLs(): java.net.URL[]
                /**
                 * Finds the resource with the given name.
                 * A resource is some data (images, audio, text, etc) that can be accessed by class code in a way that is
                 * independent of the location of the code.
                 * The name of a resource is a "/"-separated path name that identifies the resource.
                 * @param name The resource name
                 * @return An URL for reading the resource, or null if the resource could not be found or the caller doesn't have adequate privileges to get the
                 *  resource.
                 */
                // @ts-ignore
                getResource(name: java.lang.String | string): java.net.URL
                /**
                 * Returns an input stream for reading the specified resource. The search order is described in the documentation for
                 * getResource(String).
                 * @param name  The resource name
                 * @return An input stream for reading the resource, or null if the resource could not be found
                 */
                // @ts-ignore
                getResourceAsStream(name: java.lang.String | string): java.io.InputStream
                /**
                 * Finds all the resources with the given name. A resource is some
                 * data (images, audio, text, etc) that can be accessed by class
                 * code in a way that is independent of the location of the code.
                 * The name of a resource is a "/"-separated path name that
                 * identifies the resource.
                 * @param name The  resource name.
                 * @return An enumeration of URL to the resource. If no resources
                 *  could be found, the enumeration will be empty. Resources that
                 *  cannot be accessed will not be in the enumeration.
                 * @exception IOException if an I/O exception occurs when
                 *  searching for resources.
                 */
                // @ts-ignore
                getResources(name: java.lang.String | string): java.util.Enumeration<java.net.URL>
                /**
                 * Gets the current directory used by the library loader for
                 * storing native libraries before they are loaded into memory.
                 * @return The current directory used by the library loader.
                 * @see #setLibraryDirectory
                 * @throws UnsupportedOperationException if this implementation
                 *  does not support storing native libraries in this way.
                 */
                // @ts-ignore
                getLibraryDirectory(): string
                /**
                 * Sets the directory used by the library loader for storing
                 * native libraries before they are loaded into memory.
                 * @param libdir The directory used by the library loader.
                 * @see #getLibraryDirectory
                 * @throws UnsupportedOperationException if this implementation
                 *  does not support storing native libraries in this way.
                 */
                // @ts-ignore
                setLibraryDirectory(libdir: java.lang.String | string): void
            }
        }
    }
}
