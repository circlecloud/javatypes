declare namespace org {
    namespace apache {
        namespace catalina {
            namespace realm {
                /**
                 * This Realm is intended for use with Authenticator implementations
                 * ({@link org.apache.catalina.authenticator.SSLAuthenticator},
                 * {@link org.apache.catalina.authenticator.SpnegoAuthenticator}) that
                 * authenticate the user as well as obtain the user credentials. An
                 * authenticated Principal is always created from the user name presented to
                 * without further validation.
                 * <p>
                 * <strong>Note:</strong> It is unsafe to use this Realm with Authenticator
                 * implementations that do not validate the provided credentials.
                 */
                // @ts-ignore
                class AuthenticatedUserRealm extends org.apache.catalina.realm.RealmBase {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    getPassword(username: java.lang.String | string): string
                    // @ts-ignore
                    getPrincipal(username: java.lang.String | string): java.security.Principal
                }
            }
        }
    }
}
