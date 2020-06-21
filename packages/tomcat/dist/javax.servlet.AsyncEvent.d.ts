declare namespace javax {
    namespace servlet {
        /**
         * TODO SERVLET3 - Add comments
         * @since Servlet 3.0
         */
        // @ts-ignore
        class AsyncEvent extends java.lang.Object {
            // @ts-ignore
            constructor(context: javax.servlet.AsyncContext)
            // @ts-ignore
            constructor(context: javax.servlet.AsyncContext, request: javax.servlet.ServletRequest, response: javax.servlet.ServletResponse)
            // @ts-ignore
            constructor(context: javax.servlet.AsyncContext, throwable: java.lang.Throwable | Error)
            // @ts-ignore
            constructor(context: javax.servlet.AsyncContext, request: javax.servlet.ServletRequest, response: javax.servlet.ServletResponse, throwable: java.lang.Throwable | Error)
            // @ts-ignore
            public getAsyncContext(): javax.servlet.AsyncContext
            // @ts-ignore
            public getSuppliedRequest(): javax.servlet.ServletRequest
            // @ts-ignore
            public getSuppliedResponse(): javax.servlet.ServletResponse
            // @ts-ignore
            public getThrowable(): Error
        }
    }
}
