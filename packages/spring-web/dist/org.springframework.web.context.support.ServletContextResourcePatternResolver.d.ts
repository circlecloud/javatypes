declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace support {
                    /**
                     * ServletContext-aware subclass of {@link PathMatchingResourcePatternResolver},
                     * able to find matching resources below the web application root directory
                     * via {@link ServletContext#getResourcePaths}. Falls back to the superclass'
                     * file system checking for other resources.
                     * @author Juergen Hoeller
                     * @since 1.1.2
                     */
                    // @ts-ignore
                    class ServletContextResourcePatternResolver extends PathMatchingResourcePatternResolver {
                        /**
                         * Create a new ServletContextResourcePatternResolver.
                         * @param servletContext the ServletContext to load resources with
                         * @see ServletContextResourceLoader#ServletContextResourceLoader(javax.servlet.ServletContext)
                         */
                        // @ts-ignore
                        constructor(servletContext: ServletContext)
                        /**
                         * Create a new ServletContextResourcePatternResolver.
                         * @param resourceLoader the ResourceLoader to load root directories and
                         *  actual resources with
                         */
                        // @ts-ignore
                        constructor(resourceLoader: ResourceLoader)
                        /**
                         * Overridden version which checks for ServletContextResource
                         * and uses {@code ServletContext.getResourcePaths} to find
                         * matching resources below the web application root directory.
                         * In case of other resources, delegates to the superclass version.
                         * @see #doRetrieveMatchingServletContextResources
                         * @see ServletContextResource
                         * @see javax.servlet.ServletContext#getResourcePaths
                         */
                        // @ts-ignore
                        doFindPathMatchingFileResources(rootDirResource: Resource, subPattern: string): java.util.Set<Resource>
                        /**
                         * Recursively retrieve ServletContextResources that match the given pattern,
                         * adding them to the given result set.
                         * @param servletContext the ServletContext to work on
                         * @param fullPattern the pattern to match against,
                         *  with preprended root directory path
                         * @param dir the current directory
                         * @param result the Set of matching Resources to add to
                         * @throws IOException if directory contents could not be retrieved
                         * @see ServletContextResource
                         * @see javax.servlet.ServletContext#getResourcePaths
                         */
                        // @ts-ignore
                        doRetrieveMatchingServletContextResources(servletContext: ServletContext, fullPattern: string, dir: string, result: Array<Resource>): void
                    }
                }
            }
        }
    }
}
