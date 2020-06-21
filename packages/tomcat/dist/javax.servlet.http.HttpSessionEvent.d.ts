declare namespace javax {
    namespace servlet {
        namespace http {
            /**
             * This is the class representing event notifications for changes to sessions
             * within a web application.
             * @since v 2.3
             */
            // @ts-ignore
            class HttpSessionEvent extends java.util.EventObject {
                /**
                 * Construct a session event from the given source.
                 * @param source    The HTTP session where the change took place
                 */
                // @ts-ignore
                constructor(source: javax.servlet.http.HttpSession)
                /**
                 * Get the session that changed.
                 * @return The session that changed
                 */
                // @ts-ignore
                public getSession(): javax.servlet.http.HttpSession
            }
        }
    }
}
