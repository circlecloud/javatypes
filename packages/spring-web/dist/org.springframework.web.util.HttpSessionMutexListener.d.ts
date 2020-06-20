declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                /**
                 * Servlet HttpSessionListener that automatically exposes the session mutex
                 * when an HttpSession gets created. To be registered as a listener in
                 * {@code web.xml}.
                 * <p>The session mutex is guaranteed to be the same object during
                 * the entire lifetime of the session, available under the key defined
                 * by the {@code SESSION_MUTEX_ATTRIBUTE} constant. It serves as a
                 * safe reference to synchronize on for locking on the current session.
                 * <p>In many cases, the HttpSession reference itself is a safe mutex
                 * as well, since it will always be the same object reference for the
                 * same active logical session. However, this is not guaranteed across
                 * different servlet containers; the only 100% safe way is a session mutex.
                 * @author Juergen Hoeller
                 * @since 1.2.7
                 * @see WebUtils#SESSION_MUTEX_ATTRIBUTE
                 * @see WebUtils#getSessionMutex(javax.servlet.http.HttpSession)
                 * @see org.springframework.web.servlet.mvc.AbstractController#setSynchronizeOnSession
                 */
                // @ts-ignore
                class HttpSessionMutexListener extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    sessionCreated(event: HttpSessionEvent): void
                    // @ts-ignore
                    sessionDestroyed(event: HttpSessionEvent): void
                }
            }
        }
    }
}
