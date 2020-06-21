declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * {@link FactoryBean} which retrieves a static or non-static field value.
                     * <p>Typically used for retrieving public static final constants. Usage example:
                     * <pre class="code">
                     * // standard definition for exposing a static field, specifying the "staticField" property
                     * &lt;bean id="myField" class="org.springframework.beans.factory.config.FieldRetrievingFactoryBean"&gt;
                     * &lt;property name="staticField" value="java.sql.Connection.TRANSACTION_SERIALIZABLE"/&gt;
                     * &lt;/bean&gt;
                     * // convenience version that specifies a static field pattern as bean name
                     * &lt;bean id="java.sql.Connection.TRANSACTION_SERIALIZABLE"
                     * class="org.springframework.beans.factory.config.FieldRetrievingFactoryBean"/&gt;
                     * </pre>
                     * <p>If you are using Spring 2.0, you can also use the following style of configuration for
                     * public static fields.
                     * <pre class="code">&lt;util:constant static-field="java.sql.Connection.TRANSACTION_SERIALIZABLE"/&gt;</pre>
                     * @author Juergen Hoeller
                     * @since 1.1
                     * @see #setStaticField
                     */
                    // @ts-ignore
                    class FieldRetrievingFactoryBean extends java.lang.Object implements org.springframework.beans.factory.FactoryBean<java.lang.Object | any>, org.springframework.beans.factory.BeanNameAware, org.springframework.beans.factory.BeanClassLoaderAware, org.springframework.beans.factory.InitializingBean {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the target class on which the field is defined.
                         * Only necessary when the target field is static; else,
                         * a target object needs to be specified anyway.
                         * @see #setTargetObject
                         * @see #setTargetField
                         */
                        // @ts-ignore
                        public setTargetClass(targetClass: java.lang.Class<any>): void
                        /**
                         * Return the target class on which the field is defined.
                         */
                        // @ts-ignore
                        public getTargetClass(): java.lang.Class<any>
                        /**
                         * Set the target object on which the field is defined.
                         * Only necessary when the target field is not static;
                         * else, a target class is sufficient.
                         * @see #setTargetClass
                         * @see #setTargetField
                         */
                        // @ts-ignore
                        public setTargetObject(targetObject: java.lang.Object | any): void
                        /**
                         * Return the target object on which the field is defined.
                         */
                        // @ts-ignore
                        public getTargetObject(): any
                        /**
                         * Set the name of the field to be retrieved.
                         * Refers to either a static field or a non-static field,
                         * depending on a target object being set.
                         * @see #setTargetClass
                         * @see #setTargetObject
                         */
                        // @ts-ignore
                        public setTargetField(targetField: java.lang.String | string): void
                        /**
                         * Return the name of the field to be retrieved.
                         */
                        // @ts-ignore
                        public getTargetField(): string
                        /**
                         * Set a fully qualified static field name to retrieve,
                         * e.g. "example.MyExampleClass.MY_EXAMPLE_FIELD".
                         * Convenient alternative to specifying targetClass and targetField.
                         * @see #setTargetClass
                         * @see #setTargetField
                         */
                        // @ts-ignore
                        public setStaticField(staticField: java.lang.String | string): void
                        /**
                         * The bean name of this FieldRetrievingFactoryBean will be interpreted
                         * as "staticField" pattern, if neither "targetClass" nor "targetObject"
                         * nor "targetField" have been specified.
                         * This allows for concise bean definitions with just an id/name.
                         */
                        // @ts-ignore
                        public setBeanName(beanName: java.lang.String | string): void
                        // @ts-ignore
                        public setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                        // @ts-ignore
                        public afterPropertiesSet(): void
                        // @ts-ignore
                        public getObject(): any
                        // @ts-ignore
                        public getObjectType(): java.lang.Class<any>
                        // @ts-ignore
                        public isSingleton(): boolean
                    }
                }
            }
        }
    }
}
