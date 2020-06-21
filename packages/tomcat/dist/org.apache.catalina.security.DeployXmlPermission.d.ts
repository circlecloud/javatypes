declare namespace org {
    namespace apache {
        namespace catalina {
            namespace security {
                /**
                 * Grant this permission to a docBase to permit the web application to use any
                 * <code>META-INF/context.xml</code> that might be present with in the
                 * application when <code>deployXML</code> has been disabled at the Host level.
                 * The name of the permission should be the base name for the web application.
                 */
                // @ts-ignore
                class DeployXmlPermission extends java.security.BasicPermission {
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                    // @ts-ignore
                    constructor(name: java.lang.String | string, actions: java.lang.String | string)
                }
            }
        }
    }
}
