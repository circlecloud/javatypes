declare namespace javax {
    namespace servlet {
        namespace http {
            /**
             * Implementations of this interface are notified when an {@link HttpSession}'s
             * ID changes. To receive notification events, the implementation class must be
             * configured in the deployment descriptor for the web application, annotated
             * with {@link javax.servlet.annotation.WebListener} or registered by calling an
             * addListener method on the {@link javax.servlet.ServletContext}.
             * @see HttpSessionEvent
             * @see HttpServletRequest#changeSessionId()
             * @since Servlet 3.1
             */
            // @ts-ignore
            interface HttpSessionIdListener extends java.util.EventListener {
                /**
                 * Notification that a session ID has been changed.
                 * @param se the notification event
                 * @param oldSessionId the old session ID
                 */
                // @ts-ignore
                sessionIdChanged(se: javax.servlet.http.HttpSessionEvent, oldSessionId: java.lang.String | string): void
            }
        }
    }
}
