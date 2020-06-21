declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * Defines additional methods implemented by {@link Principal}s created by
             * Tomcat's standard {@link Realm} implementations.
             */
            // @ts-ignore
            interface TomcatPrincipal extends java.security.Principal {
                /**
                 * @return The authenticated Principal to be exposed to applications.
                 */
                // @ts-ignore
                getUserPrincipal(): java.security.Principal
                /**
                 * @return The user's delegated credentials.
                 */
                // @ts-ignore
                getGssCredential(): org.ietf.jgss.GSSCredential
                /**
                 * Calls logout, if necessary, on any associated JAASLoginContext and/or
                 * GSSContext. May in the future be extended to cover other logout
                 * requirements.
                 * @throws Exception If something goes wrong with the logout. Uses Exception
                 *                    to allow for future expansion of this method to cover
                 *                    other logout mechanisms that might throw a different
                 *                    exception to LoginContext
                 */
                // @ts-ignore
                logout(): void
            }
        }
    }
}
