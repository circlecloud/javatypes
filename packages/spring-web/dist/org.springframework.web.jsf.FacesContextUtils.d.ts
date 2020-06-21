declare namespace org {
    namespace springframework {
        namespace web {
            namespace jsf {
                /**
                 * Convenience methods to retrieve Spring's root {@link WebApplicationContext}
                 * for a given JSF {@link FacesContext}. This is useful for accessing a
                 * Spring application context from custom JSF-based code.
                 * <p>Analogous to Spring's WebApplicationContextUtils for the ServletContext.
                 * @author Juergen Hoeller
                 * @since 1.1
                 * @see org.springframework.web.context.ContextLoader
                 * @see org.springframework.web.context.support.WebApplicationContextUtils
                 */
                // @ts-ignore
                abstract class FacesContextUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Find the root {@link WebApplicationContext} for this web app, typically
                     * loaded via {@link org.springframework.web.context.ContextLoaderListener}.
                     * <p>Will rethrow an exception that happened on root context startup,
                     * to differentiate between a failed context startup and no context at all.
                     * @param fc the FacesContext to find the web application context for
                     * @return the root WebApplicationContext for this web app, or {#code null} if none
                     * @see org.springframework.web.context.WebApplicationContext#ROOT_WEB_APPLICATION_CONTEXT_ATTRIBUTE
                     */
                    // @ts-ignore
                    public static getWebApplicationContext(fc: FacesContext): org.springframework.web.context.WebApplicationContext
                    /**
                     * Find the root {@link WebApplicationContext} for this web app, typically
                     * loaded via {@link org.springframework.web.context.ContextLoaderListener}.
                     * <p>Will rethrow an exception that happened on root context startup,
                     * to differentiate between a failed context startup and no context at all.
                     * @param fc the FacesContext to find the web application context for
                     * @return the root WebApplicationContext for this web app
                     * @throws IllegalStateException if the root WebApplicationContext could not be found
                     * @see org.springframework.web.context.WebApplicationContext#ROOT_WEB_APPLICATION_CONTEXT_ATTRIBUTE
                     */
                    // @ts-ignore
                    public static getRequiredWebApplicationContext(fc: FacesContext): org.springframework.web.context.WebApplicationContext
                    /**
                     * Return the best available mutex for the given session:
                     * that is, an object to synchronize on for the given session.
                     * <p>Returns the session mutex attribute if available; usually,
                     * this means that the HttpSessionMutexListener needs to be defined
                     * in {@code web.xml}. Falls back to the Session reference itself
                     * if no mutex attribute found.
                     * <p>The session mutex is guaranteed to be the same object during
                     * the entire lifetime of the session, available under the key defined
                     * by the {@code SESSION_MUTEX_ATTRIBUTE} constant. It serves as a
                     * safe reference to synchronize on for locking on the current session.
                     * <p>In many cases, the Session reference itself is a safe mutex
                     * as well, since it will always be the same object reference for the
                     * same active logical session. However, this is not guaranteed across
                     * different servlet containers; the only 100% safe way is a session mutex.
                     * @param fc the FacesContext to find the session mutex for
                     * @return the mutex object (never {#code null})
                     * @see org.springframework.web.util.WebUtils#SESSION_MUTEX_ATTRIBUTE
                     * @see org.springframework.web.util.HttpSessionMutexListener
                     */
                    // @ts-ignore
                    public static getSessionMutex(fc: FacesContext): any
                }
            }
        }
    }
}
