declare namespace javax {
    namespace servlet {
        /**
         * TODO SERVLET3 - Add comments
         * @since Servlet 3.0
         */
        // @ts-ignore
        interface AsyncListener extends java.util.EventListener {
            // @ts-ignore
            onComplete(event: javax.servlet.AsyncEvent): void
            // @ts-ignore
            onTimeout(event: javax.servlet.AsyncEvent): void
            // @ts-ignore
            onError(event: javax.servlet.AsyncEvent): void
            // @ts-ignore
            onStartAsync(event: javax.servlet.AsyncEvent): void
        }
    }
}
