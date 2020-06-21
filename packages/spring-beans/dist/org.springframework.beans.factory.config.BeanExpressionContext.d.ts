declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Context object for evaluating an expression within a bean definition.
                     * @author Juergen Hoeller
                     * @since 3.0
                     */
                    // @ts-ignore
                    class BeanExpressionContext extends java.lang.Object {
                        // @ts-ignore
                        constructor(beanFactory: org.springframework.beans.factory.config.ConfigurableBeanFactory, scope: org.springframework.beans.factory.config.Scope)
                        // @ts-ignore
                        public getBeanFactory(): org.springframework.beans.factory.config.ConfigurableBeanFactory
                        // @ts-ignore
                        public getScope(): org.springframework.beans.factory.config.Scope
                        // @ts-ignore
                        public containsObject(key: java.lang.String | string): boolean
                        // @ts-ignore
                        public getObject(key: java.lang.String | string): any
                        // @ts-ignore
                        public equals(other: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                    }
                }
            }
        }
    }
}
