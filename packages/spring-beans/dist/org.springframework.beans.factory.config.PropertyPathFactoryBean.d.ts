declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * {@link FactoryBean} that evaluates a property path on a given target object.
                     * <p>The target object can be specified directly or via a bean name.
                     * <p>Usage examples:
                     * <pre class="code">&lt;!-- target bean to be referenced by name --&gt;
                     * &lt;bean id="tb" class="org.springframework.beans.TestBean" singleton="false"&gt;
                     * &lt;property name="age" value="10"/&gt;
                     * &lt;property name="spouse"&gt;
                     * &lt;bean class="org.springframework.beans.TestBean"&gt;
                     * &lt;property name="age" value="11"/&gt;
                     * &lt;/bean&gt;
                     * &lt;/property&gt;
                     * &lt;/bean&gt;
                     * &lt;!-- will result in 12, which is the value of property 'age' of the inner bean --&gt;
                     * &lt;bean id="propertyPath1" class="org.springframework.beans.factory.config.PropertyPathFactoryBean"&gt;
                     * &lt;property name="targetObject"&gt;
                     * &lt;bean class="org.springframework.beans.TestBean"&gt;
                     * &lt;property name="age" value="12"/&gt;
                     * &lt;/bean&gt;
                     * &lt;/property&gt;
                     * &lt;property name="propertyPath" value="age"/&gt;
                     * &lt;/bean&gt;
                     * &lt;!-- will result in 11, which is the value of property 'spouse.age' of bean 'tb' --&gt;
                     * &lt;bean id="propertyPath2" class="org.springframework.beans.factory.config.PropertyPathFactoryBean"&gt;
                     * &lt;property name="targetBeanName" value="tb"/&gt;
                     * &lt;property name="propertyPath" value="spouse.age"/&gt;
                     * &lt;/bean&gt;
                     * &lt;!-- will result in 10, which is the value of property 'age' of bean 'tb' --&gt;
                     * &lt;bean id="tb.age" class="org.springframework.beans.factory.config.PropertyPathFactoryBean"/&gt;</pre>
                     * <p>If you are using Spring 2.0 and XML Schema support in your configuration file(s),
                     * you can also use the following style of configuration for property path access.
                     * (See also the appendix entitled 'XML Schema-based configuration' in the Spring
                     * reference manual for more examples.)
                     * <pre class="code"> &lt;!-- will result in 10, which is the value of property 'age' of bean 'tb' --&gt;
                     * &lt;util:property-path id="name" path="testBean.age"/&gt;</pre>
                     * Thanks to Matthias Ernst for the suggestion and initial prototype!
                     * @author Juergen Hoeller
                     * @since 1.1.2
                     * @see #setTargetObject
                     * @see #setTargetBeanName
                     * @see #setPropertyPath
                     */
                    // @ts-ignore
                    class PropertyPathFactoryBean extends java.lang.Object implements org.springframework.beans.factory.FactoryBean<java.lang.Object | any>, org.springframework.beans.factory.BeanNameAware, org.springframework.beans.factory.BeanFactoryAware {
                        // @ts-ignore
                        constructor()
                        /**
                         * Specify a target object to apply the property path to.
                         * Alternatively, specify a target bean name.
                         * @param targetObject a target object, for example a bean reference
                         *  or an inner bean
                         * @see #setTargetBeanName
                         */
                        // @ts-ignore
                        public setTargetObject(targetObject: java.lang.Object | any): void
                        /**
                         * Specify the name of a target bean to apply the property path to.
                         * Alternatively, specify a target object directly.
                         * @param targetBeanName the bean name to be looked up in the
                         *  containing bean factory (e.g. "testBean")
                         * @see #setTargetObject
                         */
                        // @ts-ignore
                        public setTargetBeanName(targetBeanName: java.lang.String | string): void
                        /**
                         * Specify the property path to apply to the target.
                         * @param propertyPath the property path, potentially nested
                         *  (e.g. "age" or "spouse.age")
                         */
                        // @ts-ignore
                        public setPropertyPath(propertyPath: java.lang.String | string): void
                        /**
                         * Specify the type of the result from evaluating the property path.
                         * <p>Note: This is not necessary for directly specified target objects
                         * or singleton target beans, where the type can be determined through
                         * introspection. Just specify this in case of a prototype target,
                         * provided that you need matching by type (for example, for autowiring).
                         * @param resultType the result type, for example "java.lang.Integer"
                         */
                        // @ts-ignore
                        public setResultType(resultType: java.lang.Class<any>): void
                        /**
                         * The bean name of this PropertyPathFactoryBean will be interpreted
                         * as "beanName.property" pattern, if neither "targetObject" nor
                         * "targetBeanName" nor "propertyPath" have been specified.
                         * This allows for concise bean definitions with just an id/name.
                         */
                        // @ts-ignore
                        public setBeanName(beanName: java.lang.String | string): void
                        // @ts-ignore
                        public setBeanFactory(beanFactory: org.springframework.beans.factory.BeanFactory): void
                        // @ts-ignore
                        public getObject(): any
                        // @ts-ignore
                        public getObjectType(): java.lang.Class<any>
                        /**
                         * While this FactoryBean will often be used for singleton targets,
                         * the invoked getters for the property path might return a new object
                         * for each call, so we have to assume that we're not returning the
                         * same object for each {@link #getObject()} call.
                         */
                        // @ts-ignore
                        public isSingleton(): boolean
                    }
                }
            }
        }
    }
}
