declare namespace javax {
    namespace servlet {
        namespace http {
            /**
             * Provides a convenient implementation of the HttpServletResponse interface
             * that can be subclassed by developers wishing to adapt the response from a
             * Servlet. This class implements the Wrapper or Decorator pattern. Methods
             * default to calling through to the wrapped response object.
             * @since v 2.3
             * @see javax.servlet.http.HttpServletResponse
             */
            // @ts-ignore
            class HttpServletResponseWrapper extends javax.servlet.ServletResponseWrapper implements javax.servlet.http.HttpServletResponse {
                /**
                 * Constructs a response adaptor wrapping the given response.
                 * @param response The response to be wrapped
                 * @throws java.lang.IllegalArgumentException
                 *              if the response is null
                 */
                // @ts-ignore
                constructor(response: javax.servlet.http.HttpServletResponse)
                /**
                 * The default behavior of this method is to call addCookie(Cookie cookie)
                 * on the wrapped response object.
                 */
                // @ts-ignore
                public addCookie(cookie: javax.servlet.http.Cookie): void
                /**
                 * The default behavior of this method is to call containsHeader(String
                 * name) on the wrapped response object.
                 */
                // @ts-ignore
                public containsHeader(name: java.lang.String | string): boolean
                /**
                 * The default behavior of this method is to call encodeURL(String url) on
                 * the wrapped response object.
                 */
                // @ts-ignore
                public encodeURL(url: java.lang.String | string): string
                /**
                 * The default behavior of this method is to return encodeRedirectURL(String
                 * url) on the wrapped response object.
                 */
                // @ts-ignore
                public encodeRedirectURL(url: java.lang.String | string): string
                /**
                 * The default behavior of this method is to call encodeUrl(String url) on
                 * the wrapped response object.
                 * @deprecated As of Version 3.0 of the Java Servlet API
                 */
                // @ts-ignore
                public encodeUrl(url: java.lang.String | string): string
                /**
                 * The default behavior of this method is to return encodeRedirectUrl(String
                 * url) on the wrapped response object.
                 * @deprecated As of Version 3.0 of the Java Servlet API
                 */
                // @ts-ignore
                public encodeRedirectUrl(url: java.lang.String | string): string
                /**
                 * The default behavior of this method is to call sendError(int sc, String
                 * msg) on the wrapped response object.
                 */
                // @ts-ignore
                public sendError(sc: number /*int*/, msg: java.lang.String | string): void
                /**
                 * The default behavior of this method is to call sendError(int sc) on the
                 * wrapped response object.
                 */
                // @ts-ignore
                public sendError(sc: number /*int*/): void
                /**
                 * The default behavior of this method is to return sendRedirect(String
                 * location) on the wrapped response object.
                 */
                // @ts-ignore
                public sendRedirect(location: java.lang.String | string): void
                /**
                 * The default behavior of this method is to call setDateHeader(String name,
                 * long date) on the wrapped response object.
                 */
                // @ts-ignore
                public setDateHeader(name: java.lang.String | string, date: number /*long*/): void
                /**
                 * The default behavior of this method is to call addDateHeader(String name,
                 * long date) on the wrapped response object.
                 */
                // @ts-ignore
                public addDateHeader(name: java.lang.String | string, date: number /*long*/): void
                /**
                 * The default behavior of this method is to return setHeader(String name,
                 * String value) on the wrapped response object.
                 */
                // @ts-ignore
                public setHeader(name: java.lang.String | string, value: java.lang.String | string): void
                /**
                 * The default behavior of this method is to return addHeader(String name,
                 * String value) on the wrapped response object.
                 */
                // @ts-ignore
                public addHeader(name: java.lang.String | string, value: java.lang.String | string): void
                /**
                 * The default behavior of this method is to call setIntHeader(String name,
                 * int value) on the wrapped response object.
                 */
                // @ts-ignore
                public setIntHeader(name: java.lang.String | string, value: number /*int*/): void
                /**
                 * The default behavior of this method is to call addIntHeader(String name,
                 * int value) on the wrapped response object.
                 */
                // @ts-ignore
                public addIntHeader(name: java.lang.String | string, value: number /*int*/): void
                /**
                 * The default behavior of this method is to call setStatus(int sc) on the
                 * wrapped response object.
                 */
                // @ts-ignore
                public setStatus(sc: number /*int*/): void
                /**
                 * The default behavior of this method is to call setStatus(int sc, String
                 * sm) on the wrapped response object.
                 * @deprecated As of Version 3.0 of the Java Servlet API
                 */
                // @ts-ignore
                public setStatus(sc: number /*int*/, sm: java.lang.String | string): void
                /**
                 * {@inheritDoc}
                 * <p>
                 * The default implementation is to call
                 * {@link HttpServletResponse#getStatus()}
                 * on the wrapped {@link HttpServletResponse}.
                 * @since Servlet 3.0
                 */
                // @ts-ignore
                public getStatus(): number /*int*/
                /**
                 * {@inheritDoc}
                 * <p>
                 * The default implementation is to call
                 * {@link HttpServletResponse#getHeader(String)}
                 * on the wrapped {@link HttpServletResponse}.
                 * @since Servlet 3.0
                 */
                // @ts-ignore
                public getHeader(name: java.lang.String | string): string
                /**
                 * {@inheritDoc}
                 * <p>
                 * The default implementation is to call
                 * {@link HttpServletResponse#getHeaders(String)}
                 * on the wrapped {@link HttpServletResponse}.
                 * @since Servlet 3.0
                 */
                // @ts-ignore
                public getHeaders(name: java.lang.String | string): Array<java.lang.String | string>
                /**
                 * {@inheritDoc}
                 * <p>
                 * The default implementation is to call
                 * {@link HttpServletResponse#getHeaderNames()}
                 * on the wrapped {@link HttpServletResponse}.
                 * @since Servlet 3.0
                 */
                // @ts-ignore
                public getHeaderNames(): Array<java.lang.String | string>
                /**
                 * {@inheritDoc}
                 * <p>
                 * The default implementation is to call
                 * {@link HttpServletResponse#setTrailerFields(Supplier)}
                 * on the wrapped {@link HttpServletResponse}.
                 * @since Servlet 4.0
                 */
                // @ts-ignore
                public setTrailerFields(supplier: java.util.function$.Supplier<java.util.Map<java.lang.String | string, java.lang.String | string>>): void
                /**
                 * {@inheritDoc}
                 * <p>
                 * The default implementation is to call
                 * {@link HttpServletResponse#getTrailerFields()}
                 * on the wrapped {@link HttpServletResponse}.
                 * @since Servlet 4.0
                 */
                // @ts-ignore
                public getTrailerFields(): java.util.function$.Supplier<java.util.Map<java.lang.String | string, java.lang.String | string>>
            }
        }
    }
}
