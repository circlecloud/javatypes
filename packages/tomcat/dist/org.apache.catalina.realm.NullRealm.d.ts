declare namespace org {
    namespace apache {
        namespace catalina {
            namespace realm {
                /**
                 * Minimal Realm implementation that always returns null when an attempt is made
                 * to validate a user name and password. It is intended to be used as a default
                 * Realm implementation when no other Realm is specified.
                 */
                // @ts-ignore
                class NullRealm extends org.apache.catalina.realm.RealmBase {
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
