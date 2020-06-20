declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                /**
                 * Miscellaneous utilities for web applications.
                 * Used by various framework classes.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @author Sebastien Deleuze
                 */
                // @ts-ignore
                class WebUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Standard Servlet 2.3+ spec request attribute for include request URI.
                     * <p>If included via a {@code RequestDispatcher}, the current resource will see the
                     * originating request. Its own request URI is exposed as a request attribute.
                     */
                    // @ts-ignore
                    readonly INCLUDE_REQUEST_URI_ATTRIBUTE: string
                    /**
                     * Standard Servlet 2.3+ spec request attribute for include context path.
                     * <p>If included via a {@code RequestDispatcher}, the current resource will see the
                     * originating context path. Its own context path is exposed as a request attribute.
                     */
                    // @ts-ignore
                    readonly INCLUDE_CONTEXT_PATH_ATTRIBUTE: string
                    /**
                     * Standard Servlet 2.3+ spec request attribute for include servlet path.
                     * <p>If included via a {@code RequestDispatcher}, the current resource will see the
                     * originating servlet path. Its own servlet path is exposed as a request attribute.
                     */
                    // @ts-ignore
                    readonly INCLUDE_SERVLET_PATH_ATTRIBUTE: string
                    /**
                     * Standard Servlet 2.3+ spec request attribute for include path info.
                     * <p>If included via a {@code RequestDispatcher}, the current resource will see the
                     * originating path info. Its own path info is exposed as a request attribute.
                     */
                    // @ts-ignore
                    readonly INCLUDE_PATH_INFO_ATTRIBUTE: string
                    /**
                     * Standard Servlet 2.3+ spec request attribute for include query string.
                     * <p>If included via a {@code RequestDispatcher}, the current resource will see the
                     * originating query string. Its own query string is exposed as a request attribute.
                     */
                    // @ts-ignore
                    readonly INCLUDE_QUERY_STRING_ATTRIBUTE: string
                    /**
                     * Standard Servlet 2.4+ spec request attribute for forward request URI.
                     * <p>If forwarded to via a RequestDispatcher, the current resource will see its
                     * own request URI. The originating request URI is exposed as a request attribute.
                     */
                    // @ts-ignore
                    readonly FORWARD_REQUEST_URI_ATTRIBUTE: string
                    /**
                     * Standard Servlet 2.4+ spec request attribute for forward context path.
                     * <p>If forwarded to via a RequestDispatcher, the current resource will see its
                     * own context path. The originating context path is exposed as a request attribute.
                     */
                    // @ts-ignore
                    readonly FORWARD_CONTEXT_PATH_ATTRIBUTE: string
                    /**
                     * Standard Servlet 2.4+ spec request attribute for forward servlet path.
                     * <p>If forwarded to via a RequestDispatcher, the current resource will see its
                     * own servlet path. The originating servlet path is exposed as a request attribute.
                     */
                    // @ts-ignore
                    readonly FORWARD_SERVLET_PATH_ATTRIBUTE: string
                    /**
                     * Standard Servlet 2.4+ spec request attribute for forward path info.
                     * <p>If forwarded to via a RequestDispatcher, the current resource will see its
                     * own path ingo. The originating path info is exposed as a request attribute.
                     */
                    // @ts-ignore
                    readonly FORWARD_PATH_INFO_ATTRIBUTE: string
                    /**
                     * Standard Servlet 2.4+ spec request attribute for forward query string.
                     * <p>If forwarded to via a RequestDispatcher, the current resource will see its
                     * own query string. The originating query string is exposed as a request attribute.
                     */
                    // @ts-ignore
                    readonly FORWARD_QUERY_STRING_ATTRIBUTE: string
                    /**
                     * Standard Servlet 2.3+ spec request attribute for error page status code.
                     * <p>To be exposed to JSPs that are marked as error pages, when forwarding
                     * to them directly rather than through the servlet container's error page
                     * resolution mechanism.
                     */
                    // @ts-ignore
                    readonly ERROR_STATUS_CODE_ATTRIBUTE: string
                    /**
                     * Standard Servlet 2.3+ spec request attribute for error page exception type.
                     * <p>To be exposed to JSPs that are marked as error pages, when forwarding
                     * to them directly rather than through the servlet container's error page
                     * resolution mechanism.
                     */
                    // @ts-ignore
                    readonly ERROR_EXCEPTION_TYPE_ATTRIBUTE: string
                    /**
                     * Standard Servlet 2.3+ spec request attribute for error page message.
                     * <p>To be exposed to JSPs that are marked as error pages, when forwarding
                     * to them directly rather than through the servlet container's error page
                     * resolution mechanism.
                     */
                    // @ts-ignore
                    readonly ERROR_MESSAGE_ATTRIBUTE: string
                    /**
                     * Standard Servlet 2.3+ spec request attribute for error page exception.
                     * <p>To be exposed to JSPs that are marked as error pages, when forwarding
                     * to them directly rather than through the servlet container's error page
                     * resolution mechanism.
                     */
                    // @ts-ignore
                    readonly ERROR_EXCEPTION_ATTRIBUTE: string
                    /**
                     * Standard Servlet 2.3+ spec request attribute for error page request URI.
                     * <p>To be exposed to JSPs that are marked as error pages, when forwarding
                     * to them directly rather than through the servlet container's error page
                     * resolution mechanism.
                     */
                    // @ts-ignore
                    readonly ERROR_REQUEST_URI_ATTRIBUTE: string
                    /**
                     * Standard Servlet 2.3+ spec request attribute for error page servlet name.
                     * <p>To be exposed to JSPs that are marked as error pages, when forwarding
                     * to them directly rather than through the servlet container's error page
                     * resolution mechanism.
                     */
                    // @ts-ignore
                    readonly ERROR_SERVLET_NAME_ATTRIBUTE: string
                    /**
                     * Prefix of the charset clause in a content type String: ";charset=".
                     */
                    // @ts-ignore
                    readonly CONTENT_TYPE_CHARSET_PREFIX: string
                    /**
                     * Default character encoding to use when {@code request.getCharacterEncoding}
                     * returns {@code null}, according to the Servlet spec.
                     * @see ServletRequest#getCharacterEncoding
                     */
                    // @ts-ignore
                    readonly DEFAULT_CHARACTER_ENCODING: string
                    /**
                     * Standard Servlet spec context attribute that specifies a temporary
                     * directory for the current web application, of type {@code java.io.File}.
                     */
                    // @ts-ignore
                    readonly TEMP_DIR_CONTEXT_ATTRIBUTE: string
                    /**
                     * HTML escape parameter at the servlet context level
                     * (i.e. a context-param in {@code web.xml}): "defaultHtmlEscape".
                     */
                    // @ts-ignore
                    readonly HTML_ESCAPE_CONTEXT_PARAM: string
                    /**
                     * Use of response encoding for HTML escaping parameter at the servlet context level
                     * (i.e. a context-param in {@code web.xml}): "responseEncodedHtmlEscape".
                     * @since 4.1.2
                     */
                    // @ts-ignore
                    readonly RESPONSE_ENCODED_HTML_ESCAPE_CONTEXT_PARAM: string
                    /**
                     * Web app root key parameter at the servlet context level
                     * (i.e. a context-param in {@code web.xml}): "webAppRootKey".
                     */
                    // @ts-ignore
                    readonly WEB_APP_ROOT_KEY_PARAM: string
                    /**
                     * Default web app root key: "webapp.root".
                     */
                    // @ts-ignore
                    readonly DEFAULT_WEB_APP_ROOT_KEY: string
                    /**
                     * Name suffixes in case of image buttons.
                     */
                    // @ts-ignore
                    readonly SUBMIT_IMAGE_SUFFIXES: string[]
                    /**
                     * Key for the mutex session attribute.
                     */
                    // @ts-ignore
                    readonly SESSION_MUTEX_ATTRIBUTE: string
                    /**
                     * Set a system property to the web application root directory.
                     * The key of the system property can be defined with the "webAppRootKey"
                     * context-param in {@code web.xml}. Default is "webapp.root".
                     * <p>Can be used for tools that support substitution with {@code System.getProperty}
                     * values, like log4j's "${key}" syntax within log file locations.
                     * @param servletContext the servlet context of the web application
                     * @throws IllegalStateException if the system property is already set,
                     *  or if the WAR file is not expanded
                     * @see #WEB_APP_ROOT_KEY_PARAM
                     * @see #DEFAULT_WEB_APP_ROOT_KEY
                     * @see WebAppRootListener
                     */
                    // @ts-ignore
                    setWebAppRootSystemProperty(servletContext: ServletContext): void
                    /**
                     * Remove the system property that points to the web app root directory.
                     * To be called on shutdown of the web application.
                     * @param servletContext the servlet context of the web application
                     * @see #setWebAppRootSystemProperty
                     */
                    // @ts-ignore
                    removeWebAppRootSystemProperty(servletContext: ServletContext): void
                    /**
                     * Return whether default HTML escaping is enabled for the web application,
                     * i.e. the value of the "defaultHtmlEscape" context-param in {@code web.xml}
                     * (if any).
                     * <p>This method differentiates between no param specified at all and
                     * an actual boolean value specified, allowing to have a context-specific
                     * default in case of no setting at the global level.
                     * @param servletContext the servlet context of the web application
                     * @return whether default HTML escaping is enabled for the given application
                     *  ({#code null} = no explicit default)
                     */
                    // @ts-ignore
                    getDefaultHtmlEscape(servletContext: ServletContext): java.lang.Boolean
                    /**
                     * Return whether response encoding should be used when HTML escaping characters,
                     * thus only escaping XML markup significant characters with UTF-* encodings.
                     * This option is enabled for the web application with a ServletContext param,
                     * i.e. the value of the "responseEncodedHtmlEscape" context-param in {@code web.xml}
                     * (if any).
                     * <p>This method differentiates between no param specified at all and
                     * an actual boolean value specified, allowing to have a context-specific
                     * default in case of no setting at the global level.
                     * @param servletContext the servlet context of the web application
                     * @return whether response encoding is to be used for HTML escaping
                     *  ({#code null} = no explicit default)
                     * @since 4.1.2
                     */
                    // @ts-ignore
                    getResponseEncodedHtmlEscape(servletContext: ServletContext): java.lang.Boolean
                    /**
                     * Return the temporary directory for the current web application,
                     * as provided by the servlet container.
                     * @param servletContext the servlet context of the web application
                     * @return the File representing the temporary directory
                     */
                    // @ts-ignore
                    getTempDir(servletContext: ServletContext): java.io.File
                    /**
                     * Return the real path of the given path within the web application,
                     * as provided by the servlet container.
                     * <p>Prepends a slash if the path does not already start with a slash,
                     * and throws a FileNotFoundException if the path cannot be resolved to
                     * a resource (in contrast to ServletContext's {@code getRealPath},
                     * which returns null).
                     * @param servletContext the servlet context of the web application
                     * @param path the path within the web application
                     * @return the corresponding real path
                     * @throws FileNotFoundException if the path cannot be resolved to a resource
                     * @see javax.servlet.ServletContext#getRealPath
                     */
                    // @ts-ignore
                    getRealPath(servletContext: ServletContext, path: string): java.lang.String
                    /**
                     * Determine the session id of the given request, if any.
                     * @param request current HTTP request
                     * @return the session id, or {#code null} if none
                     */
                    // @ts-ignore
                    getSessionId(request: HttpServletRequest): java.lang.String
                    /**
                     * Check the given request for a session attribute of the given name.
                     * Returns null if there is no session or if the session has no such attribute.
                     * Does not create a new session if none has existed before!
                     * @param request current HTTP request
                     * @param name the name of the session attribute
                     * @return the value of the session attribute, or {#code null} if not found
                     */
                    // @ts-ignore
                    getSessionAttribute(request: HttpServletRequest, name: string): java.lang.Object
                    /**
                     * Check the given request for a session attribute of the given name.
                     * Throws an exception if there is no session or if the session has no such
                     * attribute. Does not create a new session if none has existed before!
                     * @param request current HTTP request
                     * @param name the name of the session attribute
                     * @return the value of the session attribute, or {#code null} if not found
                     * @throws IllegalStateException if the session attribute could not be found
                     */
                    // @ts-ignore
                    getRequiredSessionAttribute(request: HttpServletRequest, name: string): java.lang.Object
                    /**
                     * Set the session attribute with the given name to the given value.
                     * Removes the session attribute if value is null, if a session existed at all.
                     * Does not create a new session if not necessary!
                     * @param request current HTTP request
                     * @param name the name of the session attribute
                     * @param value the value of the session attribute
                     */
                    // @ts-ignore
                    setSessionAttribute(request: HttpServletRequest, name: string, value: any): void
                    /**
                     * Return the best available mutex for the given session:
                     * that is, an object to synchronize on for the given session.
                     * <p>Returns the session mutex attribute if available; usually,
                     * this means that the HttpSessionMutexListener needs to be defined
                     * in {@code web.xml}. Falls back to the HttpSession itself
                     * if no mutex attribute found.
                     * <p>The session mutex is guaranteed to be the same object during
                     * the entire lifetime of the session, available under the key defined
                     * by the {@code SESSION_MUTEX_ATTRIBUTE} constant. It serves as a
                     * safe reference to synchronize on for locking on the current session.
                     * <p>In many cases, the HttpSession reference itself is a safe mutex
                     * as well, since it will always be the same object reference for the
                     * same active logical session. However, this is not guaranteed across
                     * different servlet containers; the only 100% safe way is a session mutex.
                     * @param session the HttpSession to find a mutex for
                     * @return the mutex object (never {#code null})
                     * @see #SESSION_MUTEX_ATTRIBUTE
                     * @see HttpSessionMutexListener
                     */
                    // @ts-ignore
                    getSessionMutex(session: HttpSession): java.lang.Object
                    /**
                     * Return an appropriate request object of the specified type, if available,
                     * unwrapping the given request as far as necessary.
                     * @param request the servlet request to introspect
                     * @param requiredType the desired type of request object
                     * @return the matching request object, or {#code null} if none
                     *  of that type is available
                     */
                    // @ts-ignore
                    getNativeRequest<T>(request: ServletRequest, requiredType: java.lang.Class<T>): T
                    /**
                     * Return an appropriate response object of the specified type, if available,
                     * unwrapping the given response as far as necessary.
                     * @param response the servlet response to introspect
                     * @param requiredType the desired type of response object
                     * @return the matching response object, or {#code null} if none
                     *  of that type is available
                     */
                    // @ts-ignore
                    getNativeResponse<T>(response: ServletResponse, requiredType: java.lang.Class<T>): T
                    /**
                     * Determine whether the given request is an include request,
                     * that is, not a top-level HTTP request coming in from the outside.
                     * <p>Checks the presence of the "javax.servlet.include.request_uri"
                     * request attribute. Could check any request attribute that is only
                     * present in an include request.
                     * @param request current servlet request
                     * @return whether the given request is an include request
                     */
                    // @ts-ignore
                    isIncludeRequest(request: ServletRequest): boolean
                    /**
                     * Expose the Servlet spec's error attributes as {@link javax.servlet.http.HttpServletRequest}
                     * attributes under the keys defined in the Servlet 2.3 specification, for error pages that
                     * are rendered directly rather than through the Servlet container's error page resolution:
                     * {@code javax.servlet.error.status_code},
                     * {@code javax.servlet.error.exception_type},
                     * {@code javax.servlet.error.message},
                     * {@code javax.servlet.error.exception},
                     * {@code javax.servlet.error.request_uri},
                     * {@code javax.servlet.error.servlet_name}.
                     * <p>Does not override values if already present, to respect attribute values
                     * that have been exposed explicitly before.
                     * <p>Exposes status code 200 by default. Set the "javax.servlet.error.status_code"
                     * attribute explicitly (before or after) in order to expose a different status code.
                     * @param request current servlet request
                     * @param ex the exception encountered
                     * @param servletName the name of the offending servlet
                     */
                    // @ts-ignore
                    exposeErrorRequestAttributes(request: HttpServletRequest, ex: Error, servletName: string): void
                    /**
                     * Clear the Servlet spec's error attributes as {@link javax.servlet.http.HttpServletRequest}
                     * attributes under the keys defined in the Servlet 2.3 specification:
                     * {@code javax.servlet.error.status_code},
                     * {@code javax.servlet.error.exception_type},
                     * {@code javax.servlet.error.message},
                     * {@code javax.servlet.error.exception},
                     * {@code javax.servlet.error.request_uri},
                     * {@code javax.servlet.error.servlet_name}.
                     * @param request current servlet request
                     */
                    // @ts-ignore
                    clearErrorRequestAttributes(request: HttpServletRequest): void
                    /**
                     * Retrieve the first cookie with the given name. Note that multiple
                     * cookies can have the same name but different paths or domains.
                     * @param request current servlet request
                     * @param name cookie name
                     * @return the first cookie with the given name, or {#code null} if none is found
                     */
                    // @ts-ignore
                    getCookie(request: HttpServletRequest, name: string): Cookie
                    /**
                     * Check if a specific input type="submit" parameter was sent in the request,
                     * either via a button (directly with name) or via an image (name + ".x" or
                     * name + ".y").
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @return if the parameter was sent
                     * @see #SUBMIT_IMAGE_SUFFIXES
                     */
                    // @ts-ignore
                    hasSubmitParameter(request: ServletRequest, name: string): boolean
                    /**
                     * Obtain a named parameter from the given request parameters.
                     * <p>See {@link #findParameterValue(java.util.Map, String)}
                     * for a description of the lookup algorithm.
                     * @param request current HTTP request
                     * @param name the <i>logical</i> name of the request parameter
                     * @return the value of the parameter, or {#code null}
                     *  if the parameter does not exist in given request
                     */
                    // @ts-ignore
                    findParameterValue(request: ServletRequest, name: string): java.lang.String
                    /**
                     * Return a map containing all parameters with the given prefix.
                     * Maps single values to String and multiple values to String array.
                     * <p>For example, with a prefix of "spring_", "spring_param1" and
                     * "spring_param2" result in a Map with "param1" and "param2" as keys.
                     * @param request the HTTP request in which to look for parameters
                     * @param prefix the beginning of parameter names
                     *  (if this is null or the empty string, all parameters will match)
                     * @return map containing request parameters <b>without the prefix</b>,
                     *  containing either a String or a String array as values
                     * @see javax.servlet.ServletRequest#getParameterNames
                     * @see javax.servlet.ServletRequest#getParameterValues
                     * @see javax.servlet.ServletRequest#getParameterMap
                     */
                    // @ts-ignore
                    getParametersStartingWith(request: ServletRequest, prefix: string): java.util.Map<java.lang.String, java.lang.Object>
                    /**
                     * Parse the given string with matrix variables. An example string would look
                     * like this {@code "q1=a;q1=b;q2=a,b,c"}. The resulting map would contain
                     * keys {@code "q1"} and {@code "q2"} with values {@code ["a","b"]} and
                     * {@code ["a","b","c"]} respectively.
                     * @param matrixVariables the unparsed matrix variables string
                     * @return a map with matrix variable names and values (never {#code null})
                     * @since 3.2
                     */
                    // @ts-ignore
                    parseMatrixVariables(matrixVariables: string): <any>
                    /**
                     * Check the given request origin against a list of allowed origins.
                     * A list containing "*" means that all origins are allowed.
                     * An empty list means only same origin is allowed.
                     * <p><strong>Note:</strong> as of 5.1 this method ignores
                     * {@code "Forwarded"} and {@code "X-Forwarded-*"} headers that specify the
                     * client-originated address. Consider using the {@code ForwardedHeaderFilter}
                     * to extract and use, or to discard such headers.
                     * @return {#code true} if the request origin is valid, {@code false} otherwise
                     * @since 4.1.5
                     * @see <a href="https://tools.ietf.org/html/rfc6454">RFC 6454: The Web Origin Concept</a>
                     */
                    // @ts-ignore
                    isValidOrigin(request: org.springframework.http.HttpRequest, allowedOrigins: Array<java.lang.String>): boolean
                    /**
                     * Check if the request is a same-origin one, based on {@code Origin}, {@code Host},
                     * {@code Forwarded}, {@code X-Forwarded-Proto}, {@code X-Forwarded-Host} and
                     * {@code X-Forwarded-Port} headers.
                     * <p><strong>Note:</strong> as of 5.1 this method ignores
                     * {@code "Forwarded"} and {@code "X-Forwarded-*"} headers that specify the
                     * client-originated address. Consider using the {@code ForwardedHeaderFilter}
                     * to extract and use, or to discard such headers.
                     * @return {#code true} if the request is a same-origin one, {@code false} in case
                     *  of cross-origin request
                     * @since 4.2
                     */
                    // @ts-ignore
                    isSameOrigin(request: org.springframework.http.HttpRequest): boolean
                }
            }
        }
    }
}
