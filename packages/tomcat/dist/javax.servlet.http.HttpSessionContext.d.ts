declare namespace javax {
    namespace servlet {
        namespace http {
            /**
             * Do not use.
             * @deprecated As of Java(tm) Servlet API 2.1 for security reasons, with no
             *              replacement. This interface will be removed in a future version
             *              of this API.
             * @see HttpSession
             * @see HttpSessionBindingEvent
             * @see HttpSessionBindingListener
             */
            // @ts-ignore
            interface HttpSessionContext {
                /**
                 * Do not use.
                 * @param sessionId Ignored
                 * @return Always <code>null</code>
                 * @deprecated As of Java Servlet API 2.1 with no replacement. This method
                 *              must return null and will be removed in a future version of
                 *              this API.
                 */
                // @ts-ignore
                getSession(sessionId: java.lang.String | string): javax.servlet.http.HttpSession
                /**
                 * Do not use.
                 * @return Always an empty Enumeration
                 * @deprecated As of Java Servlet API 2.1 with no replacement. This method
                 *              must return an empty <code>Enumeration</code> and will be
                 *              removed in a future version of this API.
                 */
                // @ts-ignore
                getIds(): java.util.Enumeration<java.lang.String | string>
            }
        }
    }
}
