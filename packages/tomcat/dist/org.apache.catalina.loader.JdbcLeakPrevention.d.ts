declare namespace org {
    namespace apache {
        namespace catalina {
            namespace loader {
                /**
                 * This class is loaded by {@link WebappClassLoaderBase} to enable it to
                 * deregister JDBC drivers forgotten by the web application. There are some
                 * classloading hacks involved - see
                 * {@link WebappClassLoaderBase#clearReferences()} for details - but the short
                 * version is do not just create a new instance of this class with the new
                 * keyword.
                 * Since this class is loaded by {@link WebappClassLoaderBase}, it cannot refer
                 * to any internal Tomcat classes as that will cause the security manager to
                 * complain.
                 */
                // @ts-ignore
                class JdbcLeakPrevention extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public clearJdbcDriverRegistrations(): Array<java.lang.String | string>
                }
            }
        }
    }
}
