declare namespace org {
    namespace springframework {
        namespace web {
            namespace multipart {
                namespace commons {
                    /**
                     * Servlet-based {@link MultipartResolver} implementation for
                     * <a href="https://commons.apache.org/proper/commons-fileupload">Apache Commons FileUpload</a>
                     * 1.2 or above.
                     * <p>Provides "maxUploadSize", "maxInMemorySize" and "defaultEncoding" settings as
                     * bean properties (inherited from {@link CommonsFileUploadSupport}). See corresponding
                     * ServletFileUpload / DiskFileItemFactory properties ("sizeMax", "sizeThreshold",
                     * "headerEncoding") for details in terms of defaults and accepted values.
                     * <p>Saves temporary files to the servlet container's temporary directory.
                     * Needs to be initialized <i>either</i> by an application context <i>or</i>
                     * via the constructor that takes a ServletContext (for standalone usage).
                     * @author Trevor D. Cook
                     * @author Juergen Hoeller
                     * @since 29.09.2003
                     * @see #CommonsMultipartResolver(ServletContext)
                     * @see #setResolveLazily
                     * @see org.apache.commons.fileupload.servlet.ServletFileUpload
                     * @see org.apache.commons.fileupload.disk.DiskFileItemFactory
                     */
                    // @ts-ignore
                    class CommonsMultipartResolver extends org.springframework.web.multipart.commons.CommonsFileUploadSupport implements org.springframework.web.multipart.MultipartResolver, org.springframework.web.context.ServletContextAware {
                        /**
                         * Constructor for use as bean. Determines the servlet container's
                         * temporary directory via the ServletContext passed in as through the
                         * ServletContextAware interface (typically by a WebApplicationContext).
                         * @see #setServletContext
                         * @see org.springframework.web.context.ServletContextAware
                         * @see org.springframework.web.context.WebApplicationContext
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Constructor for standalone usage. Determines the servlet container's
                         * temporary directory via the given ServletContext.
                         * @param servletContext the ServletContext to use
                         */
                        // @ts-ignore
                        constructor(servletContext: ServletContext)
                        /**
                         * Set whether to resolve the multipart request lazily at the time of
                         * file or parameter access.
                         * <p>Default is "false", resolving the multipart elements immediately, throwing
                         * corresponding exceptions at the time of the {@link #resolveMultipart} call.
                         * Switch this to "true" for lazy multipart parsing, throwing parse exceptions
                         * once the application attempts to obtain multipart files or parameters.
                         */
                        // @ts-ignore
                        public setResolveLazily(resolveLazily: boolean): void
                        /**
                         * Initialize the underlying {@code org.apache.commons.fileupload.servlet.ServletFileUpload}
                         * instance. Can be overridden to use a custom subclass, e.g. for testing purposes.
                         * @param fileItemFactory the Commons FileItemFactory to use
                         * @return the new ServletFileUpload instance
                         */
                        // @ts-ignore
                        newFileUpload(fileItemFactory: FileItemFactory): FileUpload
                        // @ts-ignore
                        public setServletContext(servletContext: ServletContext): void
                        // @ts-ignore
                        public isMultipart(request: HttpServletRequest): boolean
                        // @ts-ignore
                        public resolveMultipart(request: HttpServletRequest): org.springframework.web.multipart.MultipartHttpServletRequest
                        /**
                         * Parse the given servlet request, resolving its multipart elements.
                         * @param request the request to parse
                         * @return the parsing result
                         * @throws MultipartException if multipart resolution failed.
                         */
                        // @ts-ignore
                        parseRequest(request: HttpServletRequest): org.springframework.web.multipart.commons.CommonsFileUploadSupport.MultipartParsingResult
                        /**
                         * Determine the encoding for the given request.
                         * Can be overridden in subclasses.
                         * <p>The default implementation checks the request encoding,
                         * falling back to the default encoding specified for this resolver.
                         * @param request current HTTP request
                         * @return the encoding for the request (never {#code null})
                         * @see javax.servlet.ServletRequest#getCharacterEncoding
                         * @see #setDefaultEncoding
                         */
                        // @ts-ignore
                        determineEncoding(request: HttpServletRequest): string
                        // @ts-ignore
                        public cleanupMultipart(request: org.springframework.web.multipart.MultipartHttpServletRequest): void
                    }
                }
            }
        }
    }
}
