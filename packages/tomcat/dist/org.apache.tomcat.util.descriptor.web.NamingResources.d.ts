declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace web {
                        /**
                         * Defines an interface for the object that is added to the representation of a
                         * JNDI resource in web.xml to enable it to also be the implementation of that
                         * JNDI resource. Only Catalina implements this interface but because the
                         * web.xml representation is shared this interface has to be visible to Catalina
                         * and Jasper.
                         */
                        // @ts-ignore
                        interface NamingResources {
                            // @ts-ignore
                            addEnvironment(ce: org.apache.tomcat.util.descriptor.web.ContextEnvironment): void
                            // @ts-ignore
                            removeEnvironment(name: java.lang.String | string): void
                            // @ts-ignore
                            addResource(cr: org.apache.tomcat.util.descriptor.web.ContextResource): void
                            // @ts-ignore
                            removeResource(name: java.lang.String | string): void
                            // @ts-ignore
                            addResourceLink(crl: org.apache.tomcat.util.descriptor.web.ContextResourceLink): void
                            // @ts-ignore
                            removeResourceLink(name: java.lang.String | string): void
                            // @ts-ignore
                            getContainer(): any
                        }
                    }
                }
            }
        }
    }
}
