declare namespace javax {
    namespace servlet {
        /**
         * Provides a convenient implementation of the ServletRequest interface that can
         * be subclassed by developers wishing to adapt the request to a Servlet. This
         * class implements the Wrapper or Decorator pattern. Methods default to calling
         * through to the wrapped request object.
         * @since Servlet 2.3
         * @see javax.servlet.ServletRequest
         */
        // @ts-ignore
        class ServletRequestWrapper extends java.lang.Object implements javax.servlet.ServletRequest {
            /**
             * Creates a ServletRequest adaptor wrapping the given request object.
             * @param request The request to wrap
             * @throws IllegalArgumentException if the request is null
             */
            // @ts-ignore
            constructor(request: javax.servlet.ServletRequest)
            /**
             * Get the wrapped request.
             * @return the wrapped request object
             */
            // @ts-ignore
            public getRequest(): javax.servlet.ServletRequest
            /**
             * Sets the request object being wrapped.
             * @param request The new wrapped request.
             * @throws IllegalArgumentException if the request is null.
             */
            // @ts-ignore
            public setRequest(request: javax.servlet.ServletRequest): void
            /**
             * The default behavior of this method is to call getAttribute(String name)
             * on the wrapped request object.
             */
            // @ts-ignore
            public getAttribute(name: java.lang.String | string): any
            /**
             * The default behavior of this method is to return getAttributeNames() on
             * the wrapped request object.
             */
            // @ts-ignore
            public getAttributeNames(): java.util.Enumeration<java.lang.String | string>
            /**
             * The default behavior of this method is to return getCharacterEncoding()
             * on the wrapped request object.
             */
            // @ts-ignore
            public getCharacterEncoding(): string
            /**
             * The default behavior of this method is to set the character encoding on
             * the wrapped request object.
             */
            // @ts-ignore
            public setCharacterEncoding(enc: java.lang.String | string): void
            /**
             * The default behavior of this method is to return getContentLength() on
             * the wrapped request object.
             */
            // @ts-ignore
            public getContentLength(): number /*int*/
            /**
             * The default behavior of this method is to return getContentLengthLong()
             * on the wrapped request object.
             * @since Servlet 3.1
             */
            // @ts-ignore
            public getContentLengthLong(): number /*long*/
            /**
             * The default behavior of this method is to return getContentType() on the
             * wrapped request object.
             */
            // @ts-ignore
            public getContentType(): string
            /**
             * The default behavior of this method is to return getInputStream() on the
             * wrapped request object.
             */
            // @ts-ignore
            public getInputStream(): javax.servlet.ServletInputStream
            /**
             * The default behavior of this method is to return getParameter(String
             * name) on the wrapped request object.
             */
            // @ts-ignore
            public getParameter(name: java.lang.String | string): string
            /**
             * The default behavior of this method is to return getParameterMap() on the
             * wrapped request object.
             */
            // @ts-ignore
            public getParameterMap(): java.util.Map<java.lang.String | string, java.lang.String[] | string[]>
            /**
             * The default behavior of this method is to return getParameterNames() on
             * the wrapped request object.
             */
            // @ts-ignore
            public getParameterNames(): java.util.Enumeration<java.lang.String | string>
            /**
             * The default behavior of this method is to return
             * getParameterValues(String name) on the wrapped request object.
             */
            // @ts-ignore
            public getParameterValues(name: java.lang.String | string): string[]
            /**
             * The default behavior of this method is to return getProtocol() on the
             * wrapped request object.
             */
            // @ts-ignore
            public getProtocol(): string
            /**
             * The default behavior of this method is to return getScheme() on the
             * wrapped request object.
             */
            // @ts-ignore
            public getScheme(): string
            /**
             * The default behavior of this method is to return getServerName() on the
             * wrapped request object.
             */
            // @ts-ignore
            public getServerName(): string
            /**
             * The default behavior of this method is to return getServerPort() on the
             * wrapped request object.
             */
            // @ts-ignore
            public getServerPort(): number /*int*/
            /**
             * The default behavior of this method is to return getReader() on the
             * wrapped request object.
             */
            // @ts-ignore
            public getReader(): java.io.BufferedReader
            /**
             * The default behavior of this method is to return getRemoteAddr() on the
             * wrapped request object.
             */
            // @ts-ignore
            public getRemoteAddr(): string
            /**
             * The default behavior of this method is to return getRemoteHost() on the
             * wrapped request object.
             */
            // @ts-ignore
            public getRemoteHost(): string
            /**
             * The default behavior of this method is to return setAttribute(String
             * name, Object o) on the wrapped request object.
             */
            // @ts-ignore
            public setAttribute(name: java.lang.String | string, o: java.lang.Object | any): void
            /**
             * The default behavior of this method is to call removeAttribute(String
             * name) on the wrapped request object.
             */
            // @ts-ignore
            public removeAttribute(name: java.lang.String | string): void
            /**
             * The default behavior of this method is to return getLocale() on the
             * wrapped request object.
             */
            // @ts-ignore
            public getLocale(): java.util.Locale
            /**
             * The default behavior of this method is to return getLocales() on the
             * wrapped request object.
             */
            // @ts-ignore
            public getLocales(): java.util.Enumeration<java.util.Locale>
            /**
             * The default behavior of this method is to return isSecure() on the
             * wrapped request object.
             */
            // @ts-ignore
            public isSecure(): boolean
            /**
             * The default behavior of this method is to return
             * getRequestDispatcher(String path) on the wrapped request object.
             */
            // @ts-ignore
            public getRequestDispatcher(path: java.lang.String | string): javax.servlet.RequestDispatcher
            /**
             * The default behavior of this method is to return getRealPath(String path)
             * on the wrapped request object.
             * @deprecated As of Version 3.0 of the Java Servlet API
             */
            // @ts-ignore
            public getRealPath(path: java.lang.String | string): string
            /**
             * The default behavior of this method is to return getRemotePort() on the
             * wrapped request object.
             * @since Servlet 2.4
             */
            // @ts-ignore
            public getRemotePort(): number /*int*/
            /**
             * The default behavior of this method is to return getLocalName() on the
             * wrapped request object.
             * @since Servlet 2.4
             */
            // @ts-ignore
            public getLocalName(): string
            /**
             * The default behavior of this method is to return getLocalAddr() on the
             * wrapped request object.
             * @since Servlet 2.4
             */
            // @ts-ignore
            public getLocalAddr(): string
            /**
             * The default behavior of this method is to return getLocalPort() on the
             * wrapped request object.
             * @since Servlet 2.4
             */
            // @ts-ignore
            public getLocalPort(): number /*int*/
            /**
             * The default behavior of this method is to return getServletContext() on
             * the wrapped request object.
             * @since Servlet 3.0
             */
            // @ts-ignore
            public getServletContext(): javax.servlet.ServletContext
            /**
             * The default behavior of this method is to return startAsync() on the
             * wrapped request object.
             * @throws IllegalStateException If asynchronous processing is not supported
             *          for this request or if the request is already in asynchronous
             *          mode
             * @since Servlet 3.0
             */
            // @ts-ignore
            public startAsync(): javax.servlet.AsyncContext
            /**
             * The default behavior of this method is to return startAsync(Runnable) on
             * the wrapped request object.
             * @param servletRequest    The ServletRequest with which to initialise the
             *                           asynchronous context
             * @param servletResponse   The ServletResponse with which to initialise the
             *                           asynchronous context
             * @throws IllegalStateException If asynchronous processing is not supported
             *          for this request or if the request is already in asynchronous
             *          mode
             * @since Servlet 3.0
             */
            // @ts-ignore
            public startAsync(servletRequest: javax.servlet.ServletRequest, servletResponse: javax.servlet.ServletResponse): javax.servlet.AsyncContext
            /**
             * The default behavior of this method is to return isAsyncStarted() on the
             * wrapped request object.
             * @since Servlet 3.0
             */
            // @ts-ignore
            public isAsyncStarted(): boolean
            /**
             * The default behavior of this method is to return isAsyncSupported() on
             * the wrapped request object.
             * @since Servlet 3.0
             */
            // @ts-ignore
            public isAsyncSupported(): boolean
            /**
             * The default behavior of this method is to return getAsyncContext() on the
             * wrapped request object.
             * @since Servlet 3.0
             */
            // @ts-ignore
            public getAsyncContext(): javax.servlet.AsyncContext
            /**
             * TODO SERVLET3 - Add comments
             * @param wrapped The request to compare to the wrapped request
             * @return <code>true</code> if the request wrapped by this wrapper (or
             *          series of wrappers) is the same as the supplied request,
             *          otherwise <code>false</code>
             * @since Servlet 3.0
             */
            // @ts-ignore
            public isWrapperFor(wrapped: javax.servlet.ServletRequest): boolean
            /**
             * TODO SERVLET3 - Add comments
             * @param wrappedType The class to compare to the class of the wrapped
             *                     request
             * @return <code>true</code> if the request wrapped by this wrapper (or
             *          series of wrappers) is the same type as the supplied type,
             *          otherwise <code>false</code>
             * @since Servlet 3.0
             */
            // @ts-ignore
            public isWrapperFor(wrappedType: java.lang.Class<any>): boolean
            /**
             * The default behavior of this method is to call getDispatcherType() on the
             * wrapped request object.
             * @since Servlet 3.0
             */
            // @ts-ignore
            public getDispatcherType(): javax.servlet.DispatcherType
        }
    }
}
