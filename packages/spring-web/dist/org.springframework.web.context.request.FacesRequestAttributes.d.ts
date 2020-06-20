declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace request {
                    /**
                     * {@link RequestAttributes} adapter for a JSF {@link javax.faces.context.FacesContext}.
                     * Used as default in a JSF environment, wrapping the current FacesContext.
                     * <p><b>NOTE:</b> In contrast to {@link ServletRequestAttributes}, this variant does
                     * <i>not</i> support destruction callbacks for scoped attributes, neither for the
                     * request scope nor for the session scope. If you rely on such implicit destruction
                     * callbacks, consider defining a Spring {@link RequestContextListener} in your
                     * {@code web.xml}.
                     * <p>Requires JSF 2.0 or higher, as of Spring 4.0.
                     * @author Juergen Hoeller
                     * @since 2.5.2
                     * @see javax.faces.context.FacesContext#getExternalContext()
                     * @see javax.faces.context.ExternalContext#getRequestMap()
                     * @see javax.faces.context.ExternalContext#getSessionMap()
                     * @see RequestContextHolder#currentRequestAttributes()
                     */
                    // @ts-ignore
                    class FacesRequestAttributes extends java.lang.Object implements org.springframework.web.context.request.RequestAttributes {
                        /**
                         * Create a new FacesRequestAttributes adapter for the given FacesContext.
                         * @param facesContext the current FacesContext
                         * @see javax.faces.context.FacesContext#getCurrentInstance()
                         */
                        // @ts-ignore
                        constructor(facesContext: FacesContext)
                        /**
                         * Return the JSF FacesContext that this adapter operates on.
                         */
                        // @ts-ignore
                        getFacesContext(): FacesContext
                        /**
                         * Return the JSF ExternalContext that this adapter operates on.
                         * @see javax.faces.context.FacesContext#getExternalContext()
                         */
                        // @ts-ignore
                        getExternalContext(): ExternalContext
                        /**
                         * Return the JSF attribute Map for the specified scope.
                         * @param scope constant indicating request or session scope
                         * @return the Map representation of the attributes in the specified scope
                         * @see #SCOPE_REQUEST
                         * @see #SCOPE_SESSION
                         */
                        // @ts-ignore
                        getAttributeMap(scope: number /*int*/): java.util.Map<java.lang.String, java.lang.Object>
                        // @ts-ignore
                        getAttribute(name: string, scope: number /*int*/): java.lang.Object
                        // @ts-ignore
                        setAttribute(name: string, value: any, scope: number /*int*/): void
                        // @ts-ignore
                        removeAttribute(name: string, scope: number /*int*/): void
                        // @ts-ignore
                        getAttributeNames(scope: number /*int*/): java.lang.String[]
                        // @ts-ignore
                        registerDestructionCallback(name: string, callback: java.lang.Runnable, scope: number /*int*/): void
                        // @ts-ignore
                        resolveReference(key: string): java.lang.Object
                        // @ts-ignore
                        getSessionId(): java.lang.String
                        // @ts-ignore
                        getSessionMutex(): java.lang.Object
                    }
                }
            }
        }
    }
}
