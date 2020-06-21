declare namespace org {
    namespace apache {
        namespace tomcat {
            /**
             * SimpleInstanceManager
             * Implement the org.apache.tomcat.InstanceManager interface.
             */
            // @ts-ignore
            class SimpleInstanceManager extends java.lang.Object implements org.apache.tomcat.InstanceManager {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public newInstance(clazz: java.lang.Class<any>): any
                // @ts-ignore
                public newInstance(className: java.lang.String | string): any
                // @ts-ignore
                public newInstance(fqcn: java.lang.String | string, classLoader: java.lang.ClassLoader): any
                // @ts-ignore
                public newInstance(o: java.lang.Object | any): void
                // @ts-ignore
                public destroyInstance(o: java.lang.Object | any): void
            }
        }
    }
}
