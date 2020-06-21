declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace parsing {
                    /**
                     * ComponentDefinition based on a standard BeanDefinition, exposing the given bean
                     * definition as well as inner bean definitions and bean references for the given bean.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @since 2.0
                     */
                    // @ts-ignore
                    class BeanComponentDefinition extends org.springframework.beans.factory.config.BeanDefinitionHolder implements org.springframework.beans.factory.parsing.ComponentDefinition {
                        /**
                         * Create a new BeanComponentDefinition for the given bean.
                         * @param beanDefinition the BeanDefinition
                         * @param beanName the name of the bean
                         */
                        // @ts-ignore
                        constructor(beanDefinition: org.springframework.beans.factory.config.BeanDefinition, beanName: java.lang.String | string)
                        /**
                         * Create a new BeanComponentDefinition for the given bean.
                         * @param beanDefinition the BeanDefinition
                         * @param beanName the name of the bean
                         * @param aliases alias names for the bean, or {#code null} if none
                         */
                        // @ts-ignore
                        constructor(beanDefinition: org.springframework.beans.factory.config.BeanDefinition, beanName: java.lang.String | string, aliases: java.lang.String[] | string[])
                        /**
                         * Create a new BeanComponentDefinition for the given bean.
                         * @param beanDefinitionHolder the BeanDefinitionHolder encapsulating
                         *  the bean definition as well as the name of the bean
                         */
                        // @ts-ignore
                        constructor(beanDefinitionHolder: org.springframework.beans.factory.config.BeanDefinitionHolder)
                        // @ts-ignore
                        public getName(): string
                        // @ts-ignore
                        public getDescription(): string
                        // @ts-ignore
                        public getBeanDefinitions(): org.springframework.beans.factory.config.BeanDefinition[]
                        // @ts-ignore
                        public getInnerBeanDefinitions(): org.springframework.beans.factory.config.BeanDefinition[]
                        // @ts-ignore
                        public getBeanReferences(): org.springframework.beans.factory.config.BeanReference[]
                        /**
                         * This implementation returns this ComponentDefinition's description.
                         * @see #getDescription()
                         */
                        // @ts-ignore
                        public toString(): string
                        /**
                         * This implementations expects the other object to be of type BeanComponentDefinition
                         * as well, in addition to the superclass's equality requirements.
                         */
                        // @ts-ignore
                        public equals(other: java.lang.Object | any): boolean
                    }
                }
            }
        }
    }
}
