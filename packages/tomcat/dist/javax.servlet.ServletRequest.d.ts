declare namespace javax {
    namespace servlet {
        /**
         * Defines an object to provide client request information to a servlet. The
         * servlet container creates a <code>ServletRequest</code> object and passes it
         * as an argument to the servlet's <code>service</code> method.
         * <p>
         * A <code>ServletRequest</code> object provides data including parameter name
         * and values, attributes, and an input stream. Interfaces that extend
         * <code>ServletRequest</code> can provide additional protocol-specific data
         * (for example, HTTP data is provided by
         * {@link javax.servlet.http.HttpServletRequest}.
         * @see javax.servlet.http.HttpServletRequest
         */
        // @ts-ignore
        interface ServletRequest {
            /**
             * Returns the value of the named attribute as an <code>Object</code>, or
             * <code>null</code> if no attribute of the given name exists.
             * <p>
             * Attributes can be set two ways. The servlet container may set attributes
             * to make available custom information about a request. For example, for
             * requests made using HTTPS, the attribute
             * <code>javax.servlet.request.X509Certificate</code> can be used to
             * retrieve information on the certificate of the client. Attributes can
             * also be set programmatically using {@link ServletRequest#setAttribute}.
             * This allows information to be embedded into a request before a
             * {@link RequestDispatcher} call.
             * <p>
             * Attribute names should follow the same conventions as package names.
             * Names beginning with <code>java.*</code> and <code>javax.*</code> are
             * reserved for use by the Servlet specification. Names beginning with
             * <code>sun.*</code>, <code>com.sun.*</code>, <code>oracle.*</code> and
             * <code>com.oracle.*</code>) are reserved for use by Oracle Corporation.
             * @param name
             *             a <code>String</code> specifying the name of the attribute
             * @return an <code>Object</code> containing the value of the attribute, or
             *          <code>null</code> if the attribute does not exist
             */
            // @ts-ignore
            getAttribute(name: java.lang.String | string): any
            /**
             * Returns an <code>Enumeration</code> containing the names of the
             * attributes available to this request. This method returns an empty
             * <code>Enumeration</code> if the request has no attributes available to
             * it.
             * @return an <code>Enumeration</code> of strings containing the names of the
             *          request's attributes
             */
            // @ts-ignore
            getAttributeNames(): java.util.Enumeration<java.lang.String | string>
            /**
             * Returns the name of the character encoding used in the body of this
             * request. This method returns <code>null</code> if the no character
             * encoding has been specified. The following priority order is used to
             * determine the specified encoding:
             * <ol>
             * <li>per request</li>
             * <li>web application default via the deployment descriptor or
             * {@link ServletContext#setRequestCharacterEncoding(String)}</li>
             * <li>container default via container specific configuration</li>
             * </ol>
             * @return a <code>String</code> containing the name of the character
             *          encoding, or <code>null</code> if the request does not specify a
             *          character encoding
             */
            // @ts-ignore
            getCharacterEncoding(): string
            /**
             * Overrides the name of the character encoding used in the body of this
             * request. This method must be called prior to reading request parameters
             * or reading input using getReader().
             * @param env
             *             a <code>String</code> containing the name of the character
             *             encoding.
             * @throws java.io.UnsupportedEncodingException
             *              if this is not a valid encoding
             */
            // @ts-ignore
            setCharacterEncoding(env: java.lang.String | string): void
            /**
             * Returns the length, in bytes, of the request body and made available by
             * the input stream, or -1 if the length is not known. For HTTP servlets,
             * same as the value of the CGI variable CONTENT_LENGTH.
             * @return an integer containing the length of the request body or -1 if the
             *          length is not known or is greater than {#link Integer#MAX_VALUE}
             */
            // @ts-ignore
            getContentLength(): number /*int*/
            /**
             * Returns the length, in bytes, of the request body and made available by
             * the input stream, or -1 if the length is not known. For HTTP servlets,
             * same as the value of the CGI variable CONTENT_LENGTH.
             * @return a long integer containing the length of the request body or -1 if
             *          the length is not known
             * @since Servlet 3.1
             */
            // @ts-ignore
            getContentLengthLong(): number /*long*/
            /**
             * Returns the MIME type of the body of the request, or <code>null</code> if
             * the type is not known. For HTTP servlets, same as the value of the CGI
             * variable CONTENT_TYPE.
             * @return a <code>String</code> containing the name of the MIME type of the
             *          request, or null if the type is not known
             */
            // @ts-ignore
            getContentType(): string
            /**
             * Retrieves the body of the request as binary data using a
             * {@link ServletInputStream}. Either this method or {@link #getReader} may
             * be called to read the body, not both.
             * @return a {#link ServletInputStream} object containing the body of the
             *          request
             * @exception IllegalStateException
             *                 if the {#link #getReader} method has already been called
             *                 for this request
             * @exception IOException
             *                 if an input or output exception occurred
             */
            // @ts-ignore
            getInputStream(): javax.servlet.ServletInputStream
            /**
             * Returns the value of a request parameter as a <code>String</code>, or
             * <code>null</code> if the parameter does not exist. Request parameters are
             * extra information sent with the request. For HTTP servlets, parameters
             * are contained in the query string or posted form data.
             * <p>
             * You should only use this method when you are sure the parameter has only
             * one value. If the parameter might have more than one value, use
             * {@link #getParameterValues}.
             * <p>
             * If you use this method with a multivalued parameter, the value returned
             * is equal to the first value in the array returned by
             * <code>getParameterValues</code>.
             * <p>
             * If the parameter data was sent in the request body, such as occurs with
             * an HTTP POST request, then reading the body directly via
             * {@link #getInputStream} or {@link #getReader} can interfere with the
             * execution of this method.
             * @param name
             *             a <code>String</code> specifying the name of the parameter
             * @return a <code>String</code> representing the single value of the
             *          parameter
             * @see #getParameterValues
             */
            // @ts-ignore
            getParameter(name: java.lang.String | string): string
            /**
             * Returns an <code>Enumeration</code> of <code>String</code> objects
             * containing the names of the parameters contained in this request. If the
             * request has no parameters, the method returns an empty
             * <code>Enumeration</code>.
             * @return an <code>Enumeration</code> of <code>String</code> objects, each
             *          <code>String</code> containing the name of a request parameter;
             *          or an empty <code>Enumeration</code> if the request has no
             *          parameters
             */
            // @ts-ignore
            getParameterNames(): java.util.Enumeration<java.lang.String | string>
            /**
             * Returns an array of <code>String</code> objects containing all of the
             * values the given request parameter has, or <code>null</code> if the
             * parameter does not exist.
             * <p>
             * If the parameter has a single value, the array has a length of 1.
             * @param name
             *             a <code>String</code> containing the name of the parameter
             *             whose value is requested
             * @return an array of <code>String</code> objects containing the parameter's
             *          values
             * @see #getParameter
             */
            // @ts-ignore
            getParameterValues(name: java.lang.String | string): string[]
            /**
             * Returns a java.util.Map of the parameters of this request. Request
             * parameters are extra information sent with the request. For HTTP
             * servlets, parameters are contained in the query string or posted form
             * data.
             * @return an immutable java.util.Map containing parameter names as keys and
             *          parameter values as map values. The keys in the parameter map are
             *          of type String. The values in the parameter map are of type
             *          String array.
             */
            // @ts-ignore
            getParameterMap(): java.util.Map<java.lang.String | string, java.lang.String[] | string[]>
            /**
             * Returns the name and version of the protocol the request uses in the form
             * <i>protocol/majorVersion.minorVersion</i>, for example, HTTP/1.1. For
             * HTTP servlets, the value returned is the same as the value of the CGI
             * variable <code>SERVER_PROTOCOL</code>.
             * @return a <code>String</code> containing the protocol name and version
             *          number
             */
            // @ts-ignore
            getProtocol(): string
            /**
             * Returns the name of the scheme used to make this request, for example,
             * <code>http</code>, <code>https</code>, or <code>ftp</code>. Different
             * schemes have different rules for constructing URLs, as noted in RFC 1738.
             * @return a <code>String</code> containing the name of the scheme used to
             *          make this request
             */
            // @ts-ignore
            getScheme(): string
            /**
             * Returns the host name of the server to which the request was sent. It is
             * the value of the part before ":" in the <code>Host</code> header value,
             * if any, or the resolved server name, or the server IP address.
             * @return a <code>String</code> containing the name of the server
             */
            // @ts-ignore
            getServerName(): string
            /**
             * Returns the port number to which the request was sent. It is the value of
             * the part after ":" in the <code>Host</code> header value, if any, or the
             * server port where the client connection was accepted on.
             * @return an integer specifying the port number
             */
            // @ts-ignore
            getServerPort(): number /*int*/
            /**
             * Retrieves the body of the request as character data using a
             * <code>BufferedReader</code>. The reader translates the character data
             * according to the character encoding used on the body. Either this method
             * or {@link #getInputStream} may be called to read the body, not both.
             * @return a <code>BufferedReader</code> containing the body of the request
             * @exception java.io.UnsupportedEncodingException
             *                 if the character set encoding used is not supported and
             *                 the text cannot be decoded
             * @exception IllegalStateException
             *                 if {#link #getInputStream} method has been called on this
             *                 request
             * @exception IOException
             *                 if an input or output exception occurred
             * @see #getInputStream
             */
            // @ts-ignore
            getReader(): java.io.BufferedReader
            /**
             * Returns the Internet Protocol (IP) address of the client or last proxy
             * that sent the request. For HTTP servlets, same as the value of the CGI
             * variable <code>REMOTE_ADDR</code>.
             * @return a <code>String</code> containing the IP address of the client
             *          that sent the request
             */
            // @ts-ignore
            getRemoteAddr(): string
            /**
             * Returns the fully qualified name of the client or the last proxy that
             * sent the request. If the engine cannot or chooses not to resolve the
             * hostname (to improve performance), this method returns the dotted-string
             * form of the IP address. For HTTP servlets, same as the value of the CGI
             * variable <code>REMOTE_HOST</code>.
             * @return a <code>String</code> containing the fully qualified name of the
             *          client
             */
            // @ts-ignore
            getRemoteHost(): string
            /**
             * Stores an attribute in this request. Attributes are reset between
             * requests. This method is most often used in conjunction with
             * {@link RequestDispatcher}.
             * <p>
             * Attribute names should follow the same conventions as package names.
             * Names beginning with <code>java.*</code> and <code>javax.*</code> are
             * reserved for use by the Servlet specification. Names beginning with
             * <code>sun.*</code>, <code>com.sun.*</code>, <code>oracle.*</code> and
             * <code>com.oracle.*</code>) are reserved for use by Oracle Corporation.
             * <br>
             * If the object passed in is null, the effect is the same as calling
             * {@link #removeAttribute}. <br>
             * It is warned that when the request is dispatched from the servlet resides
             * in a different web application by <code>RequestDispatcher</code>, the
             * object set by this method may not be correctly retrieved in the caller
             * servlet.
             * @param name
             *             a <code>String</code> specifying the name of the attribute
             * @param o
             *             the <code>Object</code> to be stored
             */
            // @ts-ignore
            setAttribute(name: java.lang.String | string, o: java.lang.Object | any): void
            /**
             * Removes an attribute from this request. This method is not generally
             * needed as attributes only persist as long as the request is being
             * handled.
             * <p>
             * Attribute names should follow the same conventions as package names.
             * Names beginning with <code>java.*</code> and <code>javax.*</code> are
             * reserved for use by the Servlet specification. Names beginning with
             * <code>sun.*</code>, <code>com.sun.*</code>, <code>oracle.*</code> and
             * <code>com.oracle.*</code>) are reserved for use by Oracle Corporation.
             * @param name
             *             a <code>String</code> specifying the name of the attribute to
             *             remove
             */
            // @ts-ignore
            removeAttribute(name: java.lang.String | string): void
            /**
             * Returns the preferred <code>Locale</code> that the client will accept
             * content in, based on the Accept-Language header. If the client request
             * doesn't provide an Accept-Language header, this method returns the
             * default locale for the server.
             * @return the preferred <code>Locale</code> for the client
             */
            // @ts-ignore
            getLocale(): java.util.Locale
            /**
             * Returns an <code>Enumeration</code> of <code>Locale</code> objects
             * indicating, in decreasing order starting with the preferred locale, the
             * locales that are acceptable to the client based on the Accept-Language
             * header. If the client request doesn't provide an Accept-Language header,
             * this method returns an <code>Enumeration</code> containing one
             * <code>Locale</code>, the default locale for the server.
             * @return an <code>Enumeration</code> of preferred <code>Locale</code>
             *          objects for the client
             */
            // @ts-ignore
            getLocales(): java.util.Enumeration<java.util.Locale>
            /**
             * Returns a boolean indicating whether this request was made using a secure
             * channel, such as HTTPS.
             * @return a boolean indicating if the request was made using a secure
             *          channel
             */
            // @ts-ignore
            isSecure(): boolean
            /**
             * Returns a {@link RequestDispatcher} object that acts as a wrapper for the
             * resource located at the given path. A <code>RequestDispatcher</code>
             * object can be used to forward a request to the resource or to include the
             * resource in a response. The resource can be dynamic or static.
             * <p>
             * The pathname specified may be relative, although it cannot extend outside
             * the current servlet context. If the path begins with a "/" it is
             * interpreted as relative to the current context root. This method returns
             * <code>null</code> if the servlet container cannot return a
             * <code>RequestDispatcher</code>.
             * <p>
             * The difference between this method and
             * {@link ServletContext#getRequestDispatcher} is that this method can take
             * a relative path.
             * @param path
             *             a <code>String</code> specifying the pathname to the resource.
             *             If it is relative, it must be relative against the current
             *             servlet.
             * @return a <code>RequestDispatcher</code> object that acts as a wrapper for
             *          the resource at the specified path, or <code>null</code> if the
             *          servlet container cannot return a <code>RequestDispatcher</code>
             * @see RequestDispatcher
             * @see ServletContext#getRequestDispatcher
             */
            // @ts-ignore
            getRequestDispatcher(path: java.lang.String | string): javax.servlet.RequestDispatcher
            /**
             * @param path The virtual path to be converted to a real path
             * @return {#link ServletContext#getRealPath(String)}
             * @deprecated As of Version 2.1 of the Java Servlet API, use
             *              {#link ServletContext#getRealPath} instead.
             */
            // @ts-ignore
            getRealPath(path: java.lang.String | string): string
            /**
             * Returns the Internet Protocol (IP) source port of the client or last
             * proxy that sent the request.
             * @return an integer specifying the port number
             * @since Servlet 2.4
             */
            // @ts-ignore
            getRemotePort(): number /*int*/
            /**
             * Returns the host name of the Internet Protocol (IP) interface on which
             * the request was received.
             * @return a <code>String</code> containing the host name of the IP on which
             *          the request was received.
             * @since Servlet 2.4
             */
            // @ts-ignore
            getLocalName(): string
            /**
             * Returns the Internet Protocol (IP) address of the interface on which the
             * request was received.
             * @return a <code>String</code> containing the IP address on which the
             *          request was received.
             * @since Servlet 2.4
             */
            // @ts-ignore
            getLocalAddr(): string
            /**
             * Returns the Internet Protocol (IP) port number of the interface on which
             * the request was received.
             * @return an integer specifying the port number
             * @since Servlet 2.4
             */
            // @ts-ignore
            getLocalPort(): number /*int*/
            /**
             * @return TODO
             * @since Servlet 3.0 TODO SERVLET3 - Add comments
             */
            // @ts-ignore
            getServletContext(): javax.servlet.ServletContext
            /**
             * @return TODO
             * @throws IllegalStateException If async is not supported for this request
             * @since Servlet 3.0 TODO SERVLET3 - Add comments
             */
            // @ts-ignore
            startAsync(): javax.servlet.AsyncContext
            /**
             * @param servletRequest    The ServletRequest with which to initialise the
             *                           asynchronous context
             * @param servletResponse   The ServletResponse with which to initialise the
             *                           asynchronous context
             * @return TODO
             * @throws IllegalStateException If async is not supported for this request
             * @since Servlet 3.0 TODO SERVLET3 - Add comments
             */
            // @ts-ignore
            startAsync(servletRequest: javax.servlet.ServletRequest, servletResponse: javax.servlet.ServletResponse): javax.servlet.AsyncContext
            /**
             * @return TODO
             * @since Servlet 3.0 TODO SERVLET3 - Add comments
             */
            // @ts-ignore
            isAsyncStarted(): boolean
            /**
             * @return TODO
             * @since Servlet 3.0 TODO SERVLET3 - Add comments
             */
            // @ts-ignore
            isAsyncSupported(): boolean
            /**
             * Get the current AsyncContext.
             * @return The current AsyncContext
             * @throws IllegalStateException if the request is not in asynchronous mode
             *          (i.e. #link #isAsyncStarted() is {@code false})
             * @since Servlet 3.0
             */
            // @ts-ignore
            getAsyncContext(): javax.servlet.AsyncContext
            /**
             * @return TODO
             * @since Servlet 3.0 TODO SERVLET3 - Add comments
             */
            // @ts-ignore
            getDispatcherType(): javax.servlet.DispatcherType
        }
    }
}
