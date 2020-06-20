declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace request {
                    /**
                     * Abstraction for accessing attribute objects associated with a request.
                     * Supports access to request-scoped attributes as well as to session-scoped
                     * attributes, with the optional notion of a "global session".
                     * <p>Can be implemented for any kind of request/session mechanism,
                     * in particular for servlet requests.
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see ServletRequestAttributes
                     */
                    // @ts-ignore
                    interface RequestAttributes {
                        /**
                         * Constant that indicates request scope.
                         */
                        // @ts-ignore
                        
                        /**
                         * Constant that indicates session scope.
                         * <p>This preferably refers to a locally isolated session, if such
                         * a distinction is available.
                         * Else, it simply refers to the common session.
                         */
                        // @ts-ignore
                        
                        /**
                         * Name of the standard reference to the request object: "request".
                         * @see #resolveReference
                         */
                        // @ts-ignore
                        
                        /**
                         * Name of the standard reference to the session object: "session".
                         * @see #resolveReference
                         */
                        // @ts-ignore
                        
                        /**
                         * Return the value for the scoped attribute of the given name, if any.
                         * @param name the name of the attribute
                         * @param scope the scope identifier
                         * @return the current attribute value, or {#code null} if not found
                         */
                        // @ts-ignore
                        getAttribute(name: string, scope: number /*int*/): java.lang.Object
                        /**
                         * Set the value for the scoped attribute of the given name,
                         * replacing an existing value (if any).
                         * @param name the name of the attribute
                         * @param scope the scope identifier
                         * @param value the value for the attribute
                         */
                        // @ts-ignore
                        setAttribute(name: string, value: any, scope: number /*int*/): void
                        /**
                         * Remove the scoped attribute of the given name, if it exists.
                         * <p>Note that an implementation should also remove a registered destruction
                         * callback for the specified attribute, if any. It does, however, <i>not</i>
                         * need to <i>execute</i> a registered destruction callback in this case,
                         * since the object will be destroyed by the caller (if appropriate).
                         * @param name the name of the attribute
                         * @param scope the scope identifier
                         */
                        // @ts-ignore
                        removeAttribute(name: string, scope: number /*int*/): void
                        /**
                         * Retrieve the names of all attributes in the scope.
                         * @param scope the scope identifier
                         * @return the attribute names as String array
                         */
                        // @ts-ignore
                        getAttributeNames(scope: number /*int*/): java.lang.String[]
                        /**
                         * Register a callback to be executed on destruction of the
                         * specified attribute in the given scope.
                         * <p>Implementations should do their best to execute the callback
                         * at the appropriate time: that is, at request completion or session
                         * termination, respectively. If such a callback is not supported by the
                         * underlying runtime environment, the callback <i>must be ignored</i>
                         * and a corresponding warning should be logged.
                         * <p>Note that 'destruction' usually corresponds to destruction of the
                         * entire scope, not to the individual attribute having been explicitly
                         * removed by the application. If an attribute gets removed via this
                         * facade's {@link #removeAttribute(String, int)} method, any registered
                         * destruction callback should be disabled as well, assuming that the
                         * removed object will be reused or manually destroyed.
                         * <p><b>NOTE:</b> Callback objects should generally be serializable if
                         * they are being registered for a session scope. Otherwise the callback
                         * (or even the entire session) might not survive web app restarts.
                         * @param name the name of the attribute to register the callback for
                         * @param callback the destruction callback to be executed
                         * @param scope the scope identifier
                         */
                        // @ts-ignore
                        registerDestructionCallback(name: string, callback: java.lang.Runnable, scope: number /*int*/): void
                        /**
                         * Resolve the contextual reference for the given key, if any.
                         * <p>At a minimum: the HttpServletRequest reference for key "request", and
                         * the HttpSession reference for key "session".
                         * @param key the contextual key
                         * @return the corresponding object, or {#code null} if none found
                         */
                        // @ts-ignore
                        resolveReference(key: string): java.lang.Object
                        /**
                         * Return an id for the current underlying session.
                         * @return the session id as String (never {#code null})
                         */
                        // @ts-ignore
                        getSessionId(): java.lang.String
                        /**
                         * Expose the best available mutex for the underlying session:
                         * that is, an object to synchronize on for the underlying session.
                         * @return the session mutex to use (never {#code null})
                         */
                        // @ts-ignore
                        getSessionMutex(): java.lang.Object
                    }
                }
            }
        }
    }
}
