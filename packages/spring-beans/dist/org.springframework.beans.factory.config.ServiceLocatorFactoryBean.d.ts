declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * A {@link FactoryBean} implementation that takes an interface which must have one or more
                     * methods with the signatures {@code MyType xxx()} or {@code MyType xxx(MyIdType id)}
                     * (typically, {@code MyService getService()} or {@code MyService getService(String id)})
                     * and creates a dynamic proxy which implements that interface, delegating to an
                     * underlying {@link org.springframework.beans.factory.BeanFactory}.
                     * <p>Such service locators permit the decoupling of calling code from
                     * the {@link org.springframework.beans.factory.BeanFactory} API, by using an
                     * appropriate custom locator interface. They will typically be used for
                     * <b>prototype beans</b>, i.e. for factory methods that are supposed to
                     * return a new instance for each call. The client receives a reference to the
                     * service locator via setter or constructor injection, to be able to invoke
                     * the locator's factory methods on demand. <b>For singleton beans, direct
                     * setter or constructor injection of the target bean is preferable.</b>
                     * <p>On invocation of the no-arg factory method, or the single-arg factory
                     * method with a String id of {@code null} or empty String, if exactly
                     * <b>one</b> bean in the factory matches the return type of the factory
                     * method, that bean is returned, otherwise a
                     * {@link org.springframework.beans.factory.NoSuchBeanDefinitionException}
                     * is thrown.
                     * <p>On invocation of the single-arg factory method with a non-null (and
                     * non-empty) argument, the proxy returns the result of a
                     * {@link org.springframework.beans.factory.BeanFactory#getBean(String)} call,
                     * using a stringified version of the passed-in id as bean name.
                     * <p>A factory method argument will usually be a String, but can also be an
                     * int or a custom enumeration type, for example, stringified via
                     * {@code toString}. The resulting String can be used as bean name as-is,
                     * provided that corresponding beans are defined in the bean factory.
                     * Alternatively, {@linkplain #setServiceMappings(java.util.Properties) a custom
                     * mapping} between service IDs and bean names can be defined.
                     * <p>By way of an example, consider the following service locator interface.
                     * Note that this interface is not dependent on any Spring APIs.
                     * <pre class="code">package a.b.c;
                     * public interface ServiceFactory {
                     * public MyService getService();
                     * }</pre>
                     * <p>A sample config in an XML-based
                     * {@link org.springframework.beans.factory.BeanFactory} might look as follows:
                     * <pre class="code">&lt;beans>
                     * &lt;!-- Prototype bean since we have state -->
                     * &lt;bean id="myService" class="a.b.c.MyService" singleton="false"/>
                     * &lt;!-- will lookup the above 'myService' bean by *TYPE* -->
                     * &lt;bean id="myServiceFactory"
                     * class="org.springframework.beans.factory.config.ServiceLocatorFactoryBean">
                     * &lt;property name="serviceLocatorInterface" value="a.b.c.ServiceFactory"/>
                     * &lt;/bean>
                     * &lt;bean id="clientBean" class="a.b.c.MyClientBean">
                     * &lt;property name="myServiceFactory" ref="myServiceFactory"/>
                     * &lt;/bean>
                     * &lt;/beans></pre>
                     * <p>The attendant {@code MyClientBean} class implementation might then
                     * look something like this:
                     * <pre class="code">package a.b.c;
                     * public class MyClientBean {
                     * private ServiceFactory myServiceFactory;
                     * // actual implementation provided by the Spring container
                     * public void setServiceFactory(ServiceFactory myServiceFactory) {
                     * this.myServiceFactory = myServiceFactory;
                     * }
                     * public void someBusinessMethod() {
                     * // get a 'fresh', brand new MyService instance
                     * MyService service = this.myServiceFactory.getService();
                     * // use the service object to effect the business logic...
                     * }
                     * }</pre>
                     * <p>By way of an example that looks up a bean <b>by name</b>, consider
                     * the following service locator interface. Again, note that this
                     * interface is not dependent on any Spring APIs.
                     * <pre class="code">package a.b.c;
                     * public interface ServiceFactory {
                     * public MyService getService (String serviceName);
                     * }</pre>
                     * <p>A sample config in an XML-based
                     * {@link org.springframework.beans.factory.BeanFactory} might look as follows:
                     * <pre class="code">&lt;beans>
                     * &lt;!-- Prototype beans since we have state (both extend MyService) -->
                     * &lt;bean id="specialService" class="a.b.c.SpecialService" singleton="false"/>
                     * &lt;bean id="anotherService" class="a.b.c.AnotherService" singleton="false"/>
                     * &lt;bean id="myServiceFactory"
                     * class="org.springframework.beans.factory.config.ServiceLocatorFactoryBean">
                     * &lt;property name="serviceLocatorInterface" value="a.b.c.ServiceFactory"/>
                     * &lt;/bean>
                     * &lt;bean id="clientBean" class="a.b.c.MyClientBean">
                     * &lt;property name="myServiceFactory" ref="myServiceFactory"/>
                     * &lt;/bean>
                     * &lt;/beans></pre>
                     * <p>The attendant {@code MyClientBean} class implementation might then
                     * look something like this:
                     * <pre class="code">package a.b.c;
                     * public class MyClientBean {
                     * private ServiceFactory myServiceFactory;
                     * // actual implementation provided by the Spring container
                     * public void setServiceFactory(ServiceFactory myServiceFactory) {
                     * this.myServiceFactory = myServiceFactory;
                     * }
                     * public void someBusinessMethod() {
                     * // get a 'fresh', brand new MyService instance
                     * MyService service = this.myServiceFactory.getService("specialService");
                     * // use the service object to effect the business logic...
                     * }
                     * public void anotherBusinessMethod() {
                     * // get a 'fresh', brand new MyService instance
                     * MyService service = this.myServiceFactory.getService("anotherService");
                     * // use the service object to effect the business logic...
                     * }
                     * }</pre>
                     * <p>See {@link ObjectFactoryCreatingFactoryBean} for an alternate approach.
                     * @author Colin Sampaleanu
                     * @author Juergen Hoeller
                     * @since 1.1.4
                     * @see #setServiceLocatorInterface
                     * @see #setServiceMappings
                     * @see ObjectFactoryCreatingFactoryBean
                     */
                    // @ts-ignore
                    class ServiceLocatorFactoryBean extends java.lang.Object implements org.springframework.beans.factory.FactoryBean<java.lang.Object>, org.springframework.beans.factory.BeanFactoryAware, org.springframework.beans.factory.InitializingBean {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the service locator interface to use, which must have one or more methods with
                         * the signatures {@code MyType xxx()} or {@code MyType xxx(MyIdType id)}
                         * (typically, {@code MyService getService()} or {@code MyService getService(String id)}).
                         * See the {@link ServiceLocatorFactoryBean class-level Javadoc} for
                         * information on the semantics of such methods.
                         */
                        // @ts-ignore
                        setServiceLocatorInterface(interfaceType: java.lang.Class<any>): void
                        /**
                         * Set the exception class that the service locator should throw if service
                         * lookup failed. The specified exception class must have a constructor
                         * with one of the following parameter types: {@code (String, Throwable)}
                         * or {@code (Throwable)} or {@code (String)}.
                         * <p>If not specified, subclasses of Spring's BeansException will be thrown,
                         * for example NoSuchBeanDefinitionException. As those are unchecked, the
                         * caller does not need to handle them, so it might be acceptable that
                         * Spring exceptions get thrown as long as they are just handled generically.
                         * @see #determineServiceLocatorExceptionConstructor
                         * @see #createServiceLocatorException
                         */
                        // @ts-ignore
                        setServiceLocatorExceptionClass(serviceLocatorExceptionClass: java.lang.Class<java.lang.Exception>): void
                        /**
                         * Set mappings between service ids (passed into the service locator)
                         * and bean names (in the bean factory). Service ids that are not defined
                         * here will be treated as bean names as-is.
                         * <p>The empty string as service id key defines the mapping for {@code null} and
                         * empty string, and for factory methods without parameter. If not defined,
                         * a single matching bean will be retrieved from the bean factory.
                         * @param serviceMappings mappings between service ids and bean names,
                         *  with service ids as keys as bean names as values
                         */
                        // @ts-ignore
                        setServiceMappings(serviceMappings: java.util.Properties): void
                        // @ts-ignore
                        setBeanFactory(beanFactory: org.springframework.beans.factory.BeanFactory): void
                        // @ts-ignore
                        afterPropertiesSet(): void
                        /**
                         * Determine the constructor to use for the given service locator exception
                         * class. Only called in case of a custom service locator exception.
                         * <p>The default implementation looks for a constructor with one of the
                         * following parameter types: {@code (String, Throwable)}
                         * or {@code (Throwable)} or {@code (String)}.
                         * @param exceptionClass the exception class
                         * @return the constructor to use
                         * @see #setServiceLocatorExceptionClass
                         */
                        // @ts-ignore
                        determineServiceLocatorExceptionConstructor(exceptionClass: java.lang.Class<java.lang.Exception>): java.lang.reflect.Constructor<java.lang.Exception>
                        /**
                         * Create a service locator exception for the given cause.
                         * Only called in case of a custom service locator exception.
                         * <p>The default implementation can handle all variations of
                         * message and exception arguments.
                         * @param exceptionConstructor the constructor to use
                         * @param cause the cause of the service lookup failure
                         * @return the service locator exception to throw
                         * @see #setServiceLocatorExceptionClass
                         */
                        // @ts-ignore
                        createServiceLocatorException(exceptionConstructor: java.lang.reflect.Constructor<java.lang.Exception>, cause: org.springframework.beans.BeansException): java.lang.Exception
                        // @ts-ignore
                        getObject(): java.lang.Object
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
