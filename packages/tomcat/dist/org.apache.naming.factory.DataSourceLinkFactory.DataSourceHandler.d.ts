declare namespace org {
    namespace apache {
        namespace naming {
            namespace factory {
                namespace DataSourceLinkFactory {
                    /**
                     * Simple wrapper class that will allow a user to configure a ResourceLink for a data source
                     * so that when {@link javax.sql.DataSource#getConnection()} is called, it will invoke
                     * {@link javax.sql.DataSource#getConnection(String, String)} with the preconfigured username and password.
                     */
                    // @ts-ignore
                    class DataSourceHandler extends java.lang.Object implements java.lang.reflect.InvocationHandler {
                        // @ts-ignore
                        constructor(ds: javax.sql.DataSource, username: java.lang.String | string, password: java.lang.String | string)
                        // @ts-ignore
                        public invoke(proxy: java.lang.Object | any, method: java.lang.reflect.Method, args: java.lang.Object[] | any[]): any
                        // @ts-ignore
                        public unwrap(iface: java.lang.Class<any>): any
                    }
                }
            }
        }
    }
}
