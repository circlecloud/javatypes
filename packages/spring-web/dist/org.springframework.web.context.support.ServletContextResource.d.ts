declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace support {
                    /**
                     * {@link org.springframework.core.io.Resource} implementation for
                     * {@link javax.servlet.ServletContext} resources, interpreting
                     * relative paths within the web application root directory.
                     * <p>Always supports stream access and URL access, but only allows
                     * {@code java.io.File} access when the web application archive
                     * is expanded.
                     * @author Juergen Hoeller
                     * @since 28.12.2003
                     * @see javax.servlet.ServletContext#getResourceAsStream
                     * @see javax.servlet.ServletContext#getResource
                     * @see javax.servlet.ServletContext#getRealPath
                     */
                    // @ts-ignore
                    class ServletContextResource extends AbstractFileResolvingResource {
                        /**
                         * Create a new ServletContextResource.
                         * <p>The Servlet spec requires that resource paths start with a slash,
                         * even if many containers accept paths without leading slash too.
                         * Consequently, the given path will be prepended with a slash if it
                         * doesn't already start with one.
                         * @param servletContext the ServletContext to load from
                         * @param path the path of the resource
                         */
                        // @ts-ignore
                        constructor(servletContext: ServletContext, path: string)
                        /**
                         * Return the ServletContext for this resource.
                         */
                        // @ts-ignore
                        getServletContext(): ServletContext
                        /**
                         * Return the path for this resource.
                         */
                        // @ts-ignore
                        getPath(): java.lang.String
                        /**
                         * This implementation checks {@code ServletContext.getResource}.
                         * @see javax.servlet.ServletContext#getResource(String)
                         */
                        // @ts-ignore
                        exists(): boolean
                        /**
                         * This implementation delegates to {@code ServletContext.getResourceAsStream},
                         * which returns {@code null} in case of a non-readable resource (e.g. a directory).
                         * @see javax.servlet.ServletContext#getResourceAsStream(String)
                         */
                        // @ts-ignore
                        isReadable(): boolean
                        // @ts-ignore
                        isFile(): boolean
                        /**
                         * This implementation delegates to {@code ServletContext.getResourceAsStream},
                         * but throws a FileNotFoundException if no resource found.
                         * @see javax.servlet.ServletContext#getResourceAsStream(String)
                         */
                        // @ts-ignore
                        getInputStream(): java.io.InputStream
                        /**
                         * This implementation delegates to {@code ServletContext.getResource},
                         * but throws a FileNotFoundException if no resource found.
                         * @see javax.servlet.ServletContext#getResource(String)
                         */
                        // @ts-ignore
                        getURL(): java.net.URL
                        /**
                         * This implementation resolves "file:" URLs or alternatively delegates to
                         * {@code ServletContext.getRealPath}, throwing a FileNotFoundException
                         * if not found or not resolvable.
                         * @see javax.servlet.ServletContext#getResource(String)
                         * @see javax.servlet.ServletContext#getRealPath(String)
                         */
                        // @ts-ignore
                        getFile(): java.io.File
                        /**
                         * This implementation creates a ServletContextResource, applying the given path
                         * relative to the path of the underlying file of this resource descriptor.
                         * @see org.springframework.util.StringUtils#applyRelativePath(String, String)
                         */
                        // @ts-ignore
                        createRelative(relativePath: string): Resource
                        /**
                         * This implementation returns the name of the file that this ServletContext
                         * resource refers to.
                         * @see org.springframework.util.StringUtils#getFilename(String)
                         */
                        // @ts-ignore
                        getFilename(): java.lang.String
                        /**
                         * This implementation returns a description that includes the ServletContext
                         * resource location.
                         */
                        // @ts-ignore
                        getDescription(): java.lang.String
                        // @ts-ignore
                        getPathWithinContext(): java.lang.String
                        /**
                         * This implementation compares the underlying ServletContext resource locations.
                         */
                        // @ts-ignore
                        equals(other: any): boolean
                        /**
                         * This implementation returns the hash code of the underlying
                         * ServletContext resource location.
                         */
                        // @ts-ignore
                        hashCode(): int
                    }
                }
            }
        }
    }
}
