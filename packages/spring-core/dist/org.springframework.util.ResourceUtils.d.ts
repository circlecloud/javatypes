declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Utility methods for resolving resource locations to files in the
             * file system. Mainly for internal use within the framework.
             * <p>Consider using Spring's Resource abstraction in the core package
             * for handling all kinds of file resources in a uniform manner.
             * {@link org.springframework.core.io.ResourceLoader}'s {@code getResource()}
             * method can resolve any location to a {@link org.springframework.core.io.Resource}
             * object, which in turn allows one to obtain a {@code java.io.File} in the
             * file system through its {@code getFile()} method.
             * @author Juergen Hoeller
             * @since 1.1.5
             * @see org.springframework.core.io.Resource
             * @see org.springframework.core.io.ClassPathResource
             * @see org.springframework.core.io.FileSystemResource
             * @see org.springframework.core.io.UrlResource
             * @see org.springframework.core.io.ResourceLoader
             */
            // @ts-ignore
            abstract class ResourceUtils extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Pseudo URL prefix for loading from the class path: "classpath:".
                 */
                // @ts-ignore
                public static readonly CLASSPATH_URL_PREFIX: java.lang.String | string
                /**
                 * URL prefix for loading from the file system: "file:".
                 */
                // @ts-ignore
                public static readonly FILE_URL_PREFIX: java.lang.String | string
                /**
                 * URL prefix for loading from a jar file: "jar:".
                 */
                // @ts-ignore
                public static readonly JAR_URL_PREFIX: java.lang.String | string
                /**
                 * URL prefix for loading from a war file on Tomcat: "war:".
                 */
                // @ts-ignore
                public static readonly WAR_URL_PREFIX: java.lang.String | string
                /**
                 * URL protocol for a file in the file system: "file".
                 */
                // @ts-ignore
                public static readonly URL_PROTOCOL_FILE: java.lang.String | string
                /**
                 * URL protocol for an entry from a jar file: "jar".
                 */
                // @ts-ignore
                public static readonly URL_PROTOCOL_JAR: java.lang.String | string
                /**
                 * URL protocol for an entry from a war file: "war".
                 */
                // @ts-ignore
                public static readonly URL_PROTOCOL_WAR: java.lang.String | string
                /**
                 * URL protocol for an entry from a zip file: "zip".
                 */
                // @ts-ignore
                public static readonly URL_PROTOCOL_ZIP: java.lang.String | string
                /**
                 * URL protocol for an entry from a WebSphere jar file: "wsjar".
                 */
                // @ts-ignore
                public static readonly URL_PROTOCOL_WSJAR: java.lang.String | string
                /**
                 * URL protocol for an entry from a JBoss jar file: "vfszip".
                 */
                // @ts-ignore
                public static readonly URL_PROTOCOL_VFSZIP: java.lang.String | string
                /**
                 * URL protocol for a JBoss file system resource: "vfsfile".
                 */
                // @ts-ignore
                public static readonly URL_PROTOCOL_VFSFILE: java.lang.String | string
                /**
                 * URL protocol for a general JBoss VFS resource: "vfs".
                 */
                // @ts-ignore
                public static readonly URL_PROTOCOL_VFS: java.lang.String | string
                /**
                 * File extension for a regular jar file: ".jar".
                 */
                // @ts-ignore
                public static readonly JAR_FILE_EXTENSION: java.lang.String | string
                /**
                 * Separator between JAR URL and file path within the JAR: "!/".
                 */
                // @ts-ignore
                public static readonly JAR_URL_SEPARATOR: java.lang.String | string
                /**
                 * Special separator between WAR URL and jar part on Tomcat.
                 */
                // @ts-ignore
                public static readonly WAR_URL_SEPARATOR: java.lang.String | string
                /**
                 * Return whether the given resource location is a URL:
                 * either a special "classpath" pseudo URL or a standard URL.
                 * @param resourceLocation the location String to check
                 * @return whether the location qualifies as a URL
                 * @see #CLASSPATH_URL_PREFIX
                 * @see java.net.URL
                 */
                // @ts-ignore
                public static isUrl(resourceLocation: java.lang.String | string): boolean
                /**
                 * Resolve the given resource location to a {@code java.net.URL}.
                 * <p>Does not check whether the URL actually exists; simply returns
                 * the URL that the given location would correspond to.
                 * @param resourceLocation the resource location to resolve: either a
                 *  "classpath:" pseudo URL, a "file:" URL, or a plain file path
                 * @return a corresponding URL object
                 * @throws FileNotFoundException if the resource cannot be resolved to a URL
                 */
                // @ts-ignore
                public static getURL(resourceLocation: java.lang.String | string): java.net.URL
                /**
                 * Resolve the given resource location to a {@code java.io.File},
                 * i.e. to a file in the file system.
                 * <p>Does not check whether the file actually exists; simply returns
                 * the File that the given location would correspond to.
                 * @param resourceLocation the resource location to resolve: either a
                 *  "classpath:" pseudo URL, a "file:" URL, or a plain file path
                 * @return a corresponding File object
                 * @throws FileNotFoundException if the resource cannot be resolved to
                 *  a file in the file system
                 */
                // @ts-ignore
                public static getFile(resourceLocation: java.lang.String | string): java.io.File
                /**
                 * Resolve the given resource URL to a {@code java.io.File},
                 * i.e. to a file in the file system.
                 * @param resourceUrl the resource URL to resolve
                 * @return a corresponding File object
                 * @throws FileNotFoundException if the URL cannot be resolved to
                 *  a file in the file system
                 */
                // @ts-ignore
                public static getFile(resourceUrl: java.net.URL): java.io.File
                /**
                 * Resolve the given resource URL to a {@code java.io.File},
                 * i.e. to a file in the file system.
                 * @param resourceUrl the resource URL to resolve
                 * @param description a description of the original resource that
                 *  the URL was created for (for example, a class path location)
                 * @return a corresponding File object
                 * @throws FileNotFoundException if the URL cannot be resolved to
                 *  a file in the file system
                 */
                // @ts-ignore
                public static getFile(resourceUrl: java.net.URL, description: java.lang.String | string): java.io.File
                /**
                 * Resolve the given resource URI to a {@code java.io.File},
                 * i.e. to a file in the file system.
                 * @param resourceUri the resource URI to resolve
                 * @return a corresponding File object
                 * @throws FileNotFoundException if the URL cannot be resolved to
                 *  a file in the file system
                 * @since 2.5
                 */
                // @ts-ignore
                public static getFile(resourceUri: java.net.URI): java.io.File
                /**
                 * Resolve the given resource URI to a {@code java.io.File},
                 * i.e. to a file in the file system.
                 * @param resourceUri the resource URI to resolve
                 * @param description a description of the original resource that
                 *  the URI was created for (for example, a class path location)
                 * @return a corresponding File object
                 * @throws FileNotFoundException if the URL cannot be resolved to
                 *  a file in the file system
                 * @since 2.5
                 */
                // @ts-ignore
                public static getFile(resourceUri: java.net.URI, description: java.lang.String | string): java.io.File
                /**
                 * Determine whether the given URL points to a resource in the file system,
                 * i.e. has protocol "file", "vfsfile" or "vfs".
                 * @param url the URL to check
                 * @return whether the URL has been identified as a file system URL
                 */
                // @ts-ignore
                public static isFileURL(url: java.net.URL): boolean
                /**
                 * Determine whether the given URL points to a resource in a jar file.
                 * i.e. has protocol "jar", "war, ""zip", "vfszip" or "wsjar".
                 * @param url the URL to check
                 * @return whether the URL has been identified as a JAR URL
                 */
                // @ts-ignore
                public static isJarURL(url: java.net.URL): boolean
                /**
                 * Determine whether the given URL points to a jar file itself,
                 * that is, has protocol "file" and ends with the ".jar" extension.
                 * @param url the URL to check
                 * @return whether the URL has been identified as a JAR file URL
                 * @since 4.1
                 */
                // @ts-ignore
                public static isJarFileURL(url: java.net.URL): boolean
                /**
                 * Extract the URL for the actual jar file from the given URL
                 * (which may point to a resource in a jar file or to a jar file itself).
                 * @param jarUrl the original URL
                 * @return the URL for the actual jar file
                 * @throws MalformedURLException if no valid jar file URL could be extracted
                 */
                // @ts-ignore
                public static extractJarFileURL(jarUrl: java.net.URL): java.net.URL
                /**
                 * Extract the URL for the outermost archive from the given jar/war URL
                 * (which may point to a resource in a jar file or to a jar file itself).
                 * <p>In the case of a jar file nested within a war file, this will return
                 * a URL to the war file since that is the one resolvable in the file system.
                 * @param jarUrl the original URL
                 * @return the URL for the actual jar file
                 * @throws MalformedURLException if no valid jar file URL could be extracted
                 * @since 4.1.8
                 * @see #extractJarFileURL(URL)
                 */
                // @ts-ignore
                public static extractArchiveURL(jarUrl: java.net.URL): java.net.URL
                /**
                 * Create a URI instance for the given URL,
                 * replacing spaces with "%20" URI encoding first.
                 * @param url the URL to convert into a URI instance
                 * @return the URI instance
                 * @throws URISyntaxException if the URL wasn't a valid URI
                 * @see java.net.URL#toURI()
                 */
                // @ts-ignore
                public static toURI(url: java.net.URL): java.net.URI
                /**
                 * Create a URI instance for the given location String,
                 * replacing spaces with "%20" URI encoding first.
                 * @param location the location String to convert into a URI instance
                 * @return the URI instance
                 * @throws URISyntaxException if the location wasn't a valid URI
                 */
                // @ts-ignore
                public static toURI(location: java.lang.String | string): java.net.URI
                /**
                 * Set the {@link URLConnection#setUseCaches "useCaches"} flag on the
                 * given connection, preferring {@code false} but leaving the
                 * flag at {@code true} for JNLP based resources.
                 * @param con the URLConnection to set the flag on
                 */
                // @ts-ignore
                public static useCachesIfNecessary(con: java.net.URLConnection): void
            }
        }
    }
}
