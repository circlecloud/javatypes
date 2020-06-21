declare namespace javax {
    namespace security {
        namespace sasl {
            /**
             * This callback is used by {@code SaslServer} to determine whether
             * one entity (identified by an authenticated authentication id)
             * can act on
             * behalf of another entity (identified by an authorization id).
             * @since 1.5
             * @author Rosanna Lee
             * @author Rob Weltman
             */
            // @ts-ignore
            class AuthorizeCallback extends java.lang.Object implements javax.security.auth.callback.Callback, java.io.Serializable {
                /**
                 * Constructs an instance of {@code AuthorizeCallback}.
                 * @param authnID   The (authenticated) authentication id.
                 * @param authzID   The authorization id.
                 */
                // @ts-ignore
                constructor(authnID: java.lang.String | string, authzID: java.lang.String | string)
                /**
                 * Returns the authentication id to check.
                 * @return The authentication id to check.
                 */
                // @ts-ignore
                public getAuthenticationID(): string
                /**
                 * Returns the authorization id to check.
                 * @return The authentication id to check.
                 */
                // @ts-ignore
                public getAuthorizationID(): string
                /**
                 * Determines whether the authentication id is allowed to
                 * act on behalf of the authorization id.
                 * @return {#code true} if authorization is allowed; {@code false} otherwise
                 * @see #setAuthorized(boolean)
                 * @see #getAuthorizedID()
                 */
                // @ts-ignore
                public isAuthorized(): boolean
                /**
                 * Sets whether the authorization is allowed.
                 * @param ok {#code true} if authorization is allowed; {@code false} otherwise
                 * @see #isAuthorized
                 * @see #setAuthorizedID(java.lang.String)
                 */
                // @ts-ignore
                public setAuthorized(ok: boolean): void
                /**
                 * Returns the id of the authorized user.
                 * @return The id of the authorized user. {#code null} means the
                 *  authorization failed.
                 * @see #setAuthorized(boolean)
                 * @see #setAuthorizedID(java.lang.String)
                 */
                // @ts-ignore
                public getAuthorizedID(): string
                /**
                 * Sets the id of the authorized entity. Called by handler only when the id
                 * is different from getAuthorizationID(). For example, the id
                 * might need to be canonicalized for the environment in which it
                 * will be used.
                 * @param id The id of the authorized user.
                 * @see #setAuthorized(boolean)
                 * @see #getAuthorizedID
                 */
                // @ts-ignore
                public setAuthorizedID(id: java.lang.String | string): void
            }
        }
    }
}
