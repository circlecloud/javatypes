declare namespace javax {
    namespace servlet {
        /**
         * TODO SERVLET3 - Add comments
         * @since Servlet 3.0
         */
        // @ts-ignore
        interface AsyncContext {
            // @ts-ignore
            readonly ASYNC_REQUEST_URI: java.lang.String | string
            // @ts-ignore
            readonly ASYNC_CONTEXT_PATH: java.lang.String | string
            // @ts-ignore
            readonly ASYNC_MAPPING: java.lang.String | string
            // @ts-ignore
            readonly ASYNC_PATH_INFO: java.lang.String | string
            // @ts-ignore
            readonly ASYNC_SERVLET_PATH: java.lang.String | string
            // @ts-ignore
            readonly ASYNC_QUERY_STRING: java.lang.String | string
            // @ts-ignore
            getRequest(): javax.servlet.ServletRequest
            // @ts-ignore
            getResponse(): javax.servlet.ServletResponse
            // @ts-ignore
            hasOriginalRequestAndResponse(): boolean
            /**
             * @throws IllegalStateException if this method is called when the request
             *  is not in asynchronous mode. The request is in asynchronous mode after
             *  {#link javax.servlet.http.HttpServletRequest#startAsync()} or
             *  {@link javax.servlet.http.HttpServletRequest#startAsync(ServletRequest,
             *  ServletResponse)} has been called and before {@link #complete()} or any
             *  other dispatch() method has been called.
             */
            // @ts-ignore
            dispatch(): void
            /**
             * @param path The path to which the request/response should be dispatched
             *              relative to the {#link ServletContext} from which this async
             *              request was started.
             * @throws IllegalStateException if this method is called when the request
             *  is not in asynchronous mode. The request is in asynchronous mode after
             *  {#link javax.servlet.http.HttpServletRequest#startAsync()} or
             *  {@link javax.servlet.http.HttpServletRequest#startAsync(ServletRequest,
             *  ServletResponse)} has been called and before {@link #complete()} or any
             *  other dispatch() method has been called.
             */
            // @ts-ignore
            dispatch(path: java.lang.String | string): void
            /**
             * @param path The path to which the request/response should be dispatched
             *              relative to the specified {#link ServletContext}.
             * @param context The {#link ServletContext} to which the request/response
             *                 should be dispatched.
             * @throws IllegalStateException if this method is called when the request
             *  is not in asynchronous mode. The request is in asynchronous mode after
             *  {#link javax.servlet.http.HttpServletRequest#startAsync()} or
             *  {@link javax.servlet.http.HttpServletRequest#startAsync(ServletRequest,
             *  ServletResponse)} has been called and before {@link #complete()} or any
             *  other dispatch() method has been called.
             */
            // @ts-ignore
            dispatch(context: javax.servlet.ServletContext, path: java.lang.String | string): void
            // @ts-ignore
            complete(): void
            // @ts-ignore
            start(run: java.lang.Runnable): void
            // @ts-ignore
            addListener(listener: javax.servlet.AsyncListener): void
            // @ts-ignore
            addListener(listener: javax.servlet.AsyncListener, request: javax.servlet.ServletRequest, response: javax.servlet.ServletResponse): void
            // @ts-ignore
            createListener<T extends javax.servlet.AsyncListener>(clazz: java.lang.Class<T>): T
            /**
             * Set the timeout.
             * @param timeout The timeout in milliseconds. 0 or less indicates no
             *                 timeout.
             */
            // @ts-ignore
            setTimeout(timeout: number /*long*/): void
            /**
             * Get the current.
             * @return The timeout in milliseconds. 0 or less indicates no timeout.
             */
            // @ts-ignore
            getTimeout(): number /*long*/
        }
    }
}
