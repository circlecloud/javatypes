declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Simple method invoker bean: just invoking a target method, not expecting a result
                     * to expose to the container (in contrast to {@link MethodInvokingFactoryBean}).
                     * <p>This invoker supports any kind of target method. A static method may be specified
                     * by setting the {@link #setTargetMethod targetMethod} property to a String representing
                     * the static method name, with {@link #setTargetClass targetClass} specifying the Class
                     * that the static method is defined on. Alternatively, a target instance method may be
                     * specified, by setting the {@link #setTargetObject targetObject} property as the target
                     * object, and the {@link #setTargetMethod targetMethod} property as the name of the
                     * method to call on that target object. Arguments for the method invocation may be
                     * specified by setting the {@link #setArguments arguments} property.
                     * <p>This class depends on {@link #afterPropertiesSet()} being called once
                     * all properties have been set, as per the InitializingBean contract.
                     * <p>An example (in an XML based bean factory definition) of a bean definition
                     * which uses this class to call a static initialization method:
                     * <pre class="code">
                     * &lt;bean id="myObject" class="org.springframework.beans.factory.config.MethodInvokingBean">
                     * &lt;property name="staticMethod" value="com.whatever.MyClass.init"/>
                     * &lt;/bean></pre>
                     * <p>An example of calling an instance method to start some server bean:
                     * <pre class="code">
                     * &lt;bean id="myStarter" class="org.springframework.beans.factory.config.MethodInvokingBean">
                     * &lt;property name="targetObject" ref="myServer"/>
                     * &lt;property name="targetMethod" value="start"/>
                     * &lt;/bean></pre>
                     * @author Juergen Hoeller
                     * @since 4.0.3
                     * @see MethodInvokingFactoryBean
                     * @see org.springframework.util.MethodInvoker
                     */
                    // @ts-ignore
                    class MethodInvokingBean extends org.springframework.beans.support.ArgumentConvertingMethodInvoker implements org.springframework.beans.factory.BeanClassLoaderAware, org.springframework.beans.factory.BeanFactoryAware, org.springframework.beans.factory.InitializingBean {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                        // @ts-ignore
                        resolveClassName(className: string): java.lang.Class<?>
                        // @ts-ignore
                        setBeanFactory(beanFactory: org.springframework.beans.factory.BeanFactory): void
                        /**
                         * Obtain the TypeConverter from the BeanFactory that this bean runs in,
                         * if possible.
                         * @see ConfigurableBeanFactory#getTypeConverter()
                         */
                        // @ts-ignore
                        getDefaultTypeConverter(): org.springframework.beans.TypeConverter
                        // @ts-ignore
                        afterPropertiesSet(): void
                        /**
                         * Perform the invocation and convert InvocationTargetException
                         * into the underlying target exception.
                         */
                        // @ts-ignore
                        invokeWithTargetException(): java.lang.Object
                    }
                }
            }
        }
    }
}
