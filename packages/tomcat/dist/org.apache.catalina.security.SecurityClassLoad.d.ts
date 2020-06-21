declare namespace org {
    namespace apache {
        namespace catalina {
            namespace security {
                /**
                 * Static class used to preload java classes when using the
                 * Java SecurityManager so that the defineClassInPackage
                 * RuntimePermission does not trigger an AccessControlException.
                 * @author Glenn L. Nielsen
                 */
                // @ts-ignore
                class SecurityClassLoad extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static securityClassLoad(loader: java.lang.ClassLoader): void
                }
            }
        }
    }
}
