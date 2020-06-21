declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace modeler {
                    namespace modules {
                        // @ts-ignore
                        class MbeansDescriptorsIntrospectionSource extends org.apache.tomcat.util.modeler.modules.ModelerSource {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public setRegistry(reg: org.apache.tomcat.util.modeler.Registry): void
                            /**
                             * Used if a single component is loaded
                             * @param type The type
                             */
                            // @ts-ignore
                            public setType(type: java.lang.String | string): void
                            // @ts-ignore
                            public setSource(source: java.lang.Object | any): void
                            // @ts-ignore
                            public loadDescriptors(registry: org.apache.tomcat.util.modeler.Registry, type: java.lang.String | string, source: java.lang.Object | any): Array<javax.management.ObjectName>
                            // @ts-ignore
                            public execute(): void
                            /**
                             * XXX Find if the 'className' is the name of the MBean or
                             * the real class ( I suppose first )
                             * XXX Read (optional) descriptions from a .properties, generated
                             * from source
                             * XXX Deal with constructors
                             * @param registry The Bean registry (not used)
                             * @param domain The bean domain (not used)
                             * @param realClass The class to analyze
                             * @param type The bean type
                             * @return ManagedBean The create MBean
                             */
                            // @ts-ignore
                            public createManagedBean(registry: org.apache.tomcat.util.modeler.Registry, domain: java.lang.String | string, realClass: java.lang.Class<any>, type: java.lang.String | string): org.apache.tomcat.util.modeler.ManagedBean
                        }
                    }
                }
            }
        }
    }
}
