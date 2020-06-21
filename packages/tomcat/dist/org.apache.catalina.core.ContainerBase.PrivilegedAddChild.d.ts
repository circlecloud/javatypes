declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                namespace ContainerBase {
                    /**
                     * Perform addChild with the permissions of this class.
                     * addChild can be called with the XML parser on the stack,
                     * this allows the XML parser to have fewer privileges than
                     * Tomcat.
                     */
                    // @ts-ignore
                    class PrivilegedAddChild extends java.lang.Object implements java.security.PrivilegedAction<java.lang.Void> {
                        // @ts-ignore
                        public run(): java.lang.Void
                    }
                }
            }
        }
    }
}
