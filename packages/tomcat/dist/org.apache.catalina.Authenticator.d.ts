declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * An <b>Authenticator</b> is a component (usually a Valve or Container) that
             * provides some sort of authentication service.
             * @author Craig R. McClanahan
             */
            // @ts-ignore
            interface Authenticator {
                /**
                 * Authenticate the user making this request, based on the login
                 * configuration of the {@link Context} with which this Authenticator is
                 * associated.
                 * @param request Request we are processing
                 * @param response Response we are populating
                 * @return <code>true</code> if any specified constraints have been
                 *          satisfied, or <code>false</code> if one more constraints were not
                 *          satisfied (in which case an authentication challenge will have
                 *          been written to the response).
                 * @exception IOException if an input/output error occurs
                 */
                // @ts-ignore
                authenticate(request: org.apache.catalina.connector.Request, response: javax.servlet.http.HttpServletResponse): boolean
                // @ts-ignore
                login(userName: java.lang.String | string, password: java.lang.String | string, request: org.apache.catalina.connector.Request): void
                // @ts-ignore
                logout(request: org.apache.catalina.connector.Request): void
            }
        }
    }
}
