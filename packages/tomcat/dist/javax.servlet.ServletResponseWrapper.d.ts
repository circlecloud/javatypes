declare namespace javax {
    namespace servlet {
        /**
         * Provides a convenient implementation of the ServletResponse interface that
         * can be subclassed by developers wishing to adapt the response from a Servlet.
         * This class implements the Wrapper or Decorator pattern. Methods default to
         * calling through to the wrapped response object.
         * @since v 2.3
         * @see javax.servlet.ServletResponse
         */
        // @ts-ignore
        class ServletResponseWrapper extends java.lang.Object implements javax.servlet.ServletResponse {
            /**
             * Creates a ServletResponse adaptor wrapping the given response object.
             * @param response The response to wrap
             * @throws java.lang.IllegalArgumentException
             *              if the response is null.
             */
            // @ts-ignore
            constructor(response: javax.servlet.ServletResponse)
            /**
             * Return the wrapped ServletResponse object.
             * @return The wrapped ServletResponse object.
             */
            // @ts-ignore
            public getResponse(): javax.servlet.ServletResponse
            /**
             * Sets the response being wrapped.
             * @param response The new response to wrap
             * @throws java.lang.IllegalArgumentException
             *              if the response is null.
             */
            // @ts-ignore
            public setResponse(response: javax.servlet.ServletResponse): void
            /**
             * The default behavior of this method is to call
             * setCharacterEncoding(String charset) on the wrapped response object.
             * @since 2.4
             */
            // @ts-ignore
            public setCharacterEncoding(charset: java.lang.String | string): void
            /**
             * The default behavior of this method is to return getCharacterEncoding()
             * on the wrapped response object.
             */
            // @ts-ignore
            public getCharacterEncoding(): string
            /**
             * The default behavior of this method is to return getOutputStream() on the
             * wrapped response object.
             */
            // @ts-ignore
            public getOutputStream(): javax.servlet.ServletOutputStream
            /**
             * The default behavior of this method is to return getWriter() on the
             * wrapped response object.
             */
            // @ts-ignore
            public getWriter(): java.io.PrintWriter
            /**
             * The default behavior of this method is to call setContentLength(int len)
             * on the wrapped response object.
             */
            // @ts-ignore
            public setContentLength(len: number /*int*/): void
            /**
             * The default behavior of this method is to call setContentLengthLong(long len)
             * on the wrapped response object.
             * @since Servlet 3.1
             */
            // @ts-ignore
            public setContentLengthLong(length: number /*long*/): void
            /**
             * The default behavior of this method is to call setContentType(String
             * type) on the wrapped response object.
             */
            // @ts-ignore
            public setContentType(type: java.lang.String | string): void
            /**
             * The default behavior of this method is to return getContentType() on the
             * wrapped response object.
             * @since 2.4
             */
            // @ts-ignore
            public getContentType(): string
            /**
             * The default behavior of this method is to call setBufferSize(int size) on
             * the wrapped response object.
             */
            // @ts-ignore
            public setBufferSize(size: number /*int*/): void
            /**
             * The default behavior of this method is to return getBufferSize() on the
             * wrapped response object.
             */
            // @ts-ignore
            public getBufferSize(): number /*int*/
            /**
             * The default behavior of this method is to call flushBuffer() on the
             * wrapped response object.
             */
            // @ts-ignore
            public flushBuffer(): void
            /**
             * The default behavior of this method is to return isCommitted() on the
             * wrapped response object.
             */
            // @ts-ignore
            public isCommitted(): boolean
            /**
             * The default behavior of this method is to call reset() on the wrapped
             * response object.
             */
            // @ts-ignore
            public reset(): void
            /**
             * The default behavior of this method is to call resetBuffer() on the
             * wrapped response object.
             */
            // @ts-ignore
            public resetBuffer(): void
            /**
             * The default behavior of this method is to call setLocale(Locale loc) on
             * the wrapped response object.
             */
            // @ts-ignore
            public setLocale(loc: java.util.Locale): void
            /**
             * The default behavior of this method is to return getLocale() on the
             * wrapped response object.
             */
            // @ts-ignore
            public getLocale(): java.util.Locale
            /**
             * TODO SERVLET3 - Add comments
             * @param wrapped The response to compare to the wrapped response
             * @return <code>true</code> if the response wrapped by this wrapper (or
             *          series of wrappers) is the same as the supplied response,
             *          otherwise <code>false</code>
             * @since Servlet 3.0
             */
            // @ts-ignore
            public isWrapperFor(wrapped: javax.servlet.ServletResponse): boolean
            /**
             * TODO SERVLET3 - Add comments
             * @param wrappedType The class to compare to the class of the wrapped
             *                     response
             * @return <code>true</code> if the response wrapped by this wrapper (or
             *          series of wrappers) is the same type as the supplied type,
             *          otherwise <code>false</code>
             * @since Servlet 3.0
             */
            // @ts-ignore
            public isWrapperFor(wrappedType: java.lang.Class<any>): boolean
        }
    }
}
