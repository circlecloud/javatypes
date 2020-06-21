declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace security {
                    /**
                     * This interface is implemented by components to enable privileged code to
                     * check whether the component has a given permission.
                     * This is typically used when a privileged component (e.g. the container) is
                     * performing an action on behalf of an untrusted component (e.g. a web
                     * application) without the current thread having passed through a code source
                     * provided by the untrusted component. Because the current thread has not
                     * passed through a code source provided by the untrusted component the
                     * SecurityManager assumes the code is trusted so the standard checking
                     * mechanisms can't be used.
                     */
                    // @ts-ignore
                    interface PermissionCheck {
                        /**
                         * Does this component have the given permission?
                         * @param permission The permission to test
                         * @return {#code false} if a SecurityManager is enabled and the component
                         *          does not have the given permission, otherwise {@code true}
                         */
                        // @ts-ignore
                        check(permission: java.security.Permission): boolean
                    }
                }
            }
        }
    }
}
