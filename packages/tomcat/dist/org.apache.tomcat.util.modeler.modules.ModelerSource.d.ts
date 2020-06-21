declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace modeler {
                    namespace modules {
                        /**
                         * Source for descriptor data. More sources can be added.
                         */
                        // @ts-ignore
                        abstract class ModelerSource extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            static readonly sm: org.apache.tomcat.util.res.StringManager
                            // @ts-ignore
                            source: java.lang.Object | any
                            /**
                             * Load data, returns a list of items.
                             * @param registry The registry
                             * @param type The bean registry type
                             * @param source Introspected object or some other source
                             * @return a list of object names
                             * @throws Exception Error loading descriptors
                             */
                            // @ts-ignore
                            public abstract loadDescriptors(registry: org.apache.tomcat.util.modeler.Registry, type: java.lang.String | string, source: java.lang.Object | any): Array<javax.management.ObjectName>
                        }
                    }
                }
            }
        }
    }
}
