declare namespace org {
    namespace apache {
        namespace tomcat {
            // @ts-ignore
            interface InstanceManager {
                // @ts-ignore
                newInstance(clazz: java.lang.Class<any>): any
                // @ts-ignore
                newInstance(className: java.lang.String | string): any
                // @ts-ignore
                newInstance(fqcn: java.lang.String | string, classLoader: java.lang.ClassLoader): any
                // @ts-ignore
                newInstance(o: java.lang.Object | any): void
                // @ts-ignore
                destroyInstance(o: java.lang.Object | any): void
                /**
                 * Called by the component using the InstanceManager periodically to perform
                 * any regular maintenance that might be required. By default, this method
                 * is a NO-OP.
                 */
                // @ts-ignore
                backgroundProcess(): void
            }
        }
    }
}
