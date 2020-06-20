declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * {@link FactoryBean} which returns a value which is the result of a static or instance
                     * method invocation. For most use cases it is better to just use the container's
                     * built-in factory method support for the same purpose, since that is smarter at
                     * converting arguments. This factory bean is still useful though when you need to
                     * call a method which doesn't return any value (for example, a static class method
                     * to force some sort of initialization to happen). This use case is not supported
                     * by factory methods, since a return value is needed to obtain the bean instance.
                     * <p>Note that as it is expected to be used mostly for accessing factory methods,
                     * this factory by default operates in a <b>singleton</b> fashion. The first request
                     * to {@link #getObject} by the owning bean factory will cause a method invocation,
                     * whose return value will be cached for subsequent requests. An internal
                     * {@link #setSingleton singleton} property may be set to "false", to cause this
                     * factory to invoke the target method each time it is asked for an object.
                     * <p><b>NOTE: If your target method does not produce a result to expose, consider
                     * {@link MethodInvokingBean} instead, which avoids the type determination and
                     * lifecycle limitations that this {@link MethodInvokingFactoryBean} comes with.</b>
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
                     * which uses this class to call a static factory method:
                     * <pre class="code">
                     * &lt;bean id="myObject" class="org.springframework.beans.factory.config.MethodInvokingFactoryBean">
                     * &lt;property name="staticMethod" value="com.whatever.MyClassFactory.getInstance"/>
                     * &lt;/bean></pre>
                     * <p>An example of calling a static method then an instance method to get at a
                     * Java system property. Somewhat verbose, but it works.
                     * <pre class="code">
                     * &lt;bean id="sysProps" class="org.springframework.beans.factory.config.MethodInvokingFactoryBean">
                     * &lt;property name="targetClass" value="java.lang.System"/>
                     * &lt;property name="targetMethod" value="getProperties"/>
                     * &lt;/bean>
                     * &lt;bean id="javaVersion" class="org.springframework.beans.factory.config.MethodInvokingFactoryBean">
                     * &lt;property name="targetObject" ref="sysProps"/>
                     * &lt;property name="targetMethod" value="getProperty"/>
                     * &lt;property name="arguments" value="java.version"/>
                     * &lt;/bean></pre>
                     * @author Colin Sampaleanu
                     * @author Juergen Hoeller
                     * @since 21.11.2003
                     * @see MethodInvokingBean
                     * @see org.springframework.util.MethodInvoker
                     */
                    // @ts-ignore
                    class MethodInvokingFactoryBean extends org.springframework.beans.factory.config.MethodInvokingBean implements org.springframework.beans.factory.FactoryBean<java.lang.Object> {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set if a singleton should be created, or a new object on each
                         * {@link #getObject()} request otherwise. Default is "true".
                         */
                        // @ts-ignore
                        setSingleton(singleton: boolean): void
                        // @ts-ignore
                        afterPropertiesSet(): void
                        /**
                         * Returns the same value each time if the singleton property is set
                         * to "true", otherwise returns the value returned from invoking the
                         * specified method on the fly.
                         */
                        // @ts-ignore
                        getObject(): java.lang.Object
                        /**
                         * Return the type of object that this FactoryBean creates,
                         * or {@code null} if not known in advance.
                         */
                        // @ts-ignore
                        getObjectType(): java.lang.Class<?>
                        // @ts-ignore
                        isSingleton(): boolean
                    }
                }
            }
        }
    }
}
