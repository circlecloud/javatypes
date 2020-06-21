declare namespace javax {
    namespace servlet {
        /**
         * Defines an object that receives requests from the client and sends them to
         * any resource (such as a servlet, HTML file, or JSP file) on the server. The
         * servlet container creates the <code>RequestDispatcher</code> object, which is
         * used as a wrapper around a server resource located at a particular path or
         * given by a particular name.
         * <p>
         * This interface is intended to wrap servlets, but a servlet container can
         * create <code>RequestDispatcher</code> objects to wrap any type of resource.
         * @see ServletContext#getRequestDispatcher(java.lang.String)
         * @see ServletContext#getNamedDispatcher(java.lang.String)
         * @see ServletRequest#getRequestDispatcher(java.lang.String)
         */
        // @ts-ignore
        interface RequestDispatcher {
            /**
             * The name of the request attribute that should be set by the container
             * when the {@link #forward(ServletRequest, ServletResponse)} method is
             * called. It provides the original value of a path-related property of the
             * request. See the chapter "Forwarded Request Parameters" in the Servlet
             * Specification for details.
             * @since Servlet 3.0
             */
            // @ts-ignore
            readonly FORWARD_REQUEST_URI: java.lang.String | string
            /**
             * The name of the request attribute that should be set by the container
             * when the {@link #forward(ServletRequest, ServletResponse)} method is
             * called. It provides the original value of a path-related property of the
             * request. See the chapter "Forwarded Request Parameters" in the Servlet
             * Specification for details.
             * @since Servlet 3.0
             */
            // @ts-ignore
            readonly FORWARD_CONTEXT_PATH: java.lang.String | string
            /**
             * The name of the request attribute that should be set by the container
             * when the {@link #forward(ServletRequest, ServletResponse)} method is
             * called. It provides the original value of a path-related property of the
             * request. See the chapter "Forwarded Request Parameters" in the Servlet
             * Specification for details.
             * @since Servlet 4.0
             */
            // @ts-ignore
            readonly FORWARD_MAPPING: java.lang.String | string
            /**
             * The name of the request attribute that should be set by the container
             * when the {@link #forward(ServletRequest, ServletResponse)} method is
             * called. It provides the original value of a path-related property of the
             * request. See the chapter "Forwarded Request Parameters" in the Servlet
             * Specification for details.
             * @since Servlet 3.0
             */
            // @ts-ignore
            readonly FORWARD_PATH_INFO: java.lang.String | string
            /**
             * The name of the request attribute that should be set by the container
             * when the {@link #forward(ServletRequest, ServletResponse)} method is
             * called. It provides the original value of a path-related property of the
             * request. See the chapter "Forwarded Request Parameters" in the Servlet
             * Specification for details.
             * @since Servlet 3.0
             */
            // @ts-ignore
            readonly FORWARD_SERVLET_PATH: java.lang.String | string
            /**
             * The name of the request attribute that should be set by the container
             * when the {@link #forward(ServletRequest, ServletResponse)} method is
             * called. It provides the original value of a path-related property of the
             * request. See the chapter "Forwarded Request Parameters" in the Servlet
             * Specification for details.
             * @since Servlet 3.0
             */
            // @ts-ignore
            readonly FORWARD_QUERY_STRING: java.lang.String | string
            /**
             * The name of the request attribute that should be set by the container
             * when the {@link #include(ServletRequest, ServletResponse)} method is
             * called on the {@code RequestDispatcher} obtained by a path and not by a
             * name. It provides information on the path that was used to obtain the
             * {@code RequestDispatcher} instance for this include call. See the chapter
             * "Included Request Parameters" in the Servlet Specification for details.
             * @since Servlet 3.0
             */
            // @ts-ignore
            readonly INCLUDE_REQUEST_URI: java.lang.String | string
            /**
             * The name of the request attribute that should be set by the container
             * when the {@link #include(ServletRequest, ServletResponse)} method is
             * called on the {@code RequestDispatcher} obtained by a path and not by a
             * name. It provides information on the path that was used to obtain the
             * {@code RequestDispatcher} instance for this include call. See the chapter
             * "Included Request Parameters" in the Servlet Specification for details.
             * @since Servlet 3.0
             */
            // @ts-ignore
            readonly INCLUDE_CONTEXT_PATH: java.lang.String | string
            /**
             * The name of the request attribute that should be set by the container
             * when the {@link #include(ServletRequest, ServletResponse)} method is
             * called on the {@code RequestDispatcher} obtained by a path and not by a
             * name. It provides information on the path that was used to obtain the
             * {@code RequestDispatcher} instance for this include call. See the chapter
             * "Included Request Parameters" in the Servlet Specification for details.
             * @since Servlet 3.0
             */
            // @ts-ignore
            readonly INCLUDE_PATH_INFO: java.lang.String | string
            /**
             * The name of the request attribute that should be set by the container
             * when the {@link #include(ServletRequest, ServletResponse)} method is
             * called on the {@code RequestDispatcher} obtained by a path and not by a
             * name. It provides information on the path that was used to obtain the
             * {@code RequestDispatcher} instance for this include call. See the chapter
             * "Included Request Parameters" in the Servlet Specification for details.
             * @since Servlet 4.0
             */
            // @ts-ignore
            readonly INCLUDE_MAPPING: java.lang.String | string
            /**
             * The name of the request attribute that should be set by the container
             * when the {@link #include(ServletRequest, ServletResponse)} method is
             * called on the {@code RequestDispatcher} obtained by a path and not by a
             * name. It provides information on the path that was used to obtain the
             * {@code RequestDispatcher} instance for this include call. See the chapter
             * "Included Request Parameters" in the Servlet Specification for details.
             * @since Servlet 3.0
             */
            // @ts-ignore
            readonly INCLUDE_SERVLET_PATH: java.lang.String | string
            /**
             * The name of the request attribute that should be set by the container
             * when the {@link #include(ServletRequest, ServletResponse)} method is
             * called on the {@code RequestDispatcher} obtained by a path and not by a
             * name. It provides information on the path that was used to obtain the
             * {@code RequestDispatcher} instance for this include call. See the chapter
             * "Included Request Parameters" in the Servlet Specification for details.
             * @since Servlet 3.0
             */
            // @ts-ignore
            readonly INCLUDE_QUERY_STRING: java.lang.String | string
            /**
             * The name of the request attribute that should be set by the container
             * when custom error-handling servlet or JSP page is invoked. The value of
             * the attribute is of type {@code java.lang.Throwable}. See the chapter
             * "Error Handling" in the Servlet Specification for details.
             * @since Servlet 3.0
             */
            // @ts-ignore
            readonly ERROR_EXCEPTION: java.lang.String | string
            /**
             * The name of the request attribute that should be set by the container
             * when custom error-handling servlet or JSP page is invoked. The value of
             * the attribute is of type {@code java.lang.Class}. See the chapter
             * "Error Handling" in the Servlet Specification for details.
             * @since Servlet 3.0
             */
            // @ts-ignore
            readonly ERROR_EXCEPTION_TYPE: java.lang.String | string
            /**
             * The name of the request attribute that should be set by the container
             * when custom error-handling servlet or JSP page is invoked. The value of
             * the attribute is of type {@code java.lang.String}. See the chapter
             * "Error Handling" in the Servlet Specification for details.
             * @since Servlet 3.0
             */
            // @ts-ignore
            readonly ERROR_MESSAGE: java.lang.String | string
            /**
             * The name of the request attribute that should be set by the container
             * when custom error-handling servlet or JSP page is invoked. The value of
             * the attribute is of type {@code java.lang.String}. See the chapter
             * "Error Handling" in the Servlet Specification for details.
             * @since Servlet 3.0
             */
            // @ts-ignore
            readonly ERROR_REQUEST_URI: java.lang.String | string
            /**
             * The name of the request attribute that should be set by the container
             * when custom error-handling servlet or JSP page is invoked. The value of
             * the attribute is of type {@code java.lang.String}. See the chapter
             * "Error Handling" in the Servlet Specification for details.
             * @since Servlet 3.0
             */
            // @ts-ignore
            readonly ERROR_SERVLET_NAME: java.lang.String | string
            /**
             * The name of the request attribute that should be set by the container
             * when custom error-handling servlet or JSP page is invoked. The value of
             * the attribute is of type {@code java.lang.Integer}. See the chapter
             * "Error Handling" in the Servlet Specification for details.
             * @since Servlet 3.0
             */
            // @ts-ignore
            readonly ERROR_STATUS_CODE: java.lang.String | string
            /**
             * Forwards a request from a servlet to another resource (servlet, JSP file,
             * or HTML file) on the server. This method allows one servlet to do
             * preliminary processing of a request and another resource to generate the
             * response.
             * <p>
             * For a <code>RequestDispatcher</code> obtained via
             * <code>getRequestDispatcher()</code>, the <code>ServletRequest</code>
             * object has its path elements and parameters adjusted to match the path of
             * the target resource.
             * <p>
             * <code>forward</code> should be called before the response has been
             * committed to the client (before response body output has been flushed).
             * If the response already has been committed, this method throws an
             * <code>IllegalStateException</code>. Uncommitted output in the response
             * buffer is automatically cleared before the forward.
             * <p>
             * The request and response parameters must be either the same objects as
             * were passed to the calling servlet's service method or be subclasses of
             * the {@link ServletRequestWrapper} or {@link ServletResponseWrapper}
             * classes that wrap them.
             * @param request
             *             a {#link ServletRequest} object that represents the request
             *             the client makes of the servlet
             * @param response
             *             a {#link ServletResponse} object that represents the response
             *             the servlet returns to the client
             * @exception ServletException
             *                 if the target resource throws this exception
             * @exception IOException
             *                 if the target resource throws this exception
             * @exception IllegalStateException
             *                 if the response was already committed
             */
            // @ts-ignore
            forward(request: javax.servlet.ServletRequest, response: javax.servlet.ServletResponse): void
            /**
             * Includes the content of a resource (servlet, JSP page, HTML file) in the
             * response. In essence, this method enables programmatic server-side
             * includes.
             * <p>
             * The {@link ServletResponse} object has its path elements and parameters
             * remain unchanged from the caller's. The included servlet cannot change
             * the response status code or set headers; any attempt to make a change is
             * ignored.
             * <p>
             * The request and response parameters must be either the same objects as
             * were passed to the calling servlet's service method or be subclasses of
             * the {@link ServletRequestWrapper} or {@link ServletResponseWrapper}
             * classes that wrap them.
             * @param request
             *             a {#link ServletRequest} object that contains the client's
             *             request
             * @param response
             *             a {#link ServletResponse} object that contains the servlet's
             *             response
             * @exception ServletException
             *                 if the included resource throws this exception
             * @exception IOException
             *                 if the included resource throws this exception
             */
            // @ts-ignore
            include(request: javax.servlet.ServletRequest, response: javax.servlet.ServletResponse): void
        }
    }
}
