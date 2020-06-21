declare namespace org {
    namespace apache {
        namespace catalina {
            namespace mbeans {
                // @ts-ignore
                abstract class BaseCatalinaMBean<T> extends org.apache.tomcat.util.modeler.BaseModelMBean {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    doGetManagedResource(): T
                    // @ts-ignore
                    static newInstance(type: java.lang.String | string): any
                }
            }
        }
    }
}
