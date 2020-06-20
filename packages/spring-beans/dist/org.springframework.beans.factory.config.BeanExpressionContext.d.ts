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
                        getBeanFactory(): org.springframework.beans.factory.config.ConfigurableBeanFactory
                        // @ts-ignore
                        getScope(): org.springframework.beans.factory.config.Scope
                        // @ts-ignore
                        containsObject(key: string): boolean
                        // @ts-ignore
                        getObject(key: string): java.lang.Object
                        // @ts-ignore
                        equals(other: any): boolean
                        // @ts-ignore
                        hashCode(): int
                    }
                }
            }
        }
    }
}
