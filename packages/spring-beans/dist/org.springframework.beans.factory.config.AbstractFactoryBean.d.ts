declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Simple template superclass for {@link FactoryBean} implementations that
                     * creates a singleton or a prototype object, depending on a flag.
                     * <p>If the "singleton" flag is {@code true} (the default),
                     * this class will create the object that it creates exactly once
                     * on initialization and subsequently return said singleton instance
                     * on all calls to the {@link #getObject()} method.
                     * <p>Else, this class will create a new instance every time the
                     * {@link #getObject()} method is invoked. Subclasses are responsible
                     * for implementing the abstract {@link #createInstance()} template
                     * method to actually create the object(s) to expose.
                     * @author Juergen Hoeller
                     * @author Keith Donald
                     * @since 1.0.2
                     * @param <T> the bean type
                     * @see #setSingleton
                     * @see #createInstance()
                     */
                    // @ts-ignore
                    abstract class AbstractFactoryBean<T> extends java.lang.Object implements org.springframework.beans.factory.FactoryBean<T>, org.springframework.beans.factory.BeanClassLoaderAware, org.springframework.beans.factory.BeanFactoryAware, org.springframework.beans.factory.InitializingBean, org.springframework.beans.factory.DisposableBean {
                        // @ts-ignore
                        constructor()
                        /**
                         * Logger available to subclasses.
                         */
                        // @ts-ignore
                        readonly logger: Log
                        /**
                         * Set if a singleton should be created, or a new object on each request
                         * otherwise. Default is {@code true} (a singleton).
                         */
                        // @ts-ignore
                        public setSingleton(singleton: boolean): void
                        // @ts-ignore
                        public isSingleton(): boolean
                        // @ts-ignore
                        public setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                        // @ts-ignore
                        public setBeanFactory(beanFactory: org.springframework.beans.factory.BeanFactory): void
                        /**
                         * Return the BeanFactory that this bean runs in.
                         */
                        // @ts-ignore
                        getBeanFactory(): org.springframework.beans.factory.BeanFactory
                        /**
                         * Obtain a bean type converter from the BeanFactory that this bean
                         * runs in. This is typically a fresh instance for each call,
                         * since TypeConverters are usually <i>not</i> thread-safe.
                         * <p>Falls back to a SimpleTypeConverter when not running in a BeanFactory.
                         * @see ConfigurableBeanFactory#getTypeConverter()
                         * @see org.springframework.beans.SimpleTypeConverter
                         */
                        // @ts-ignore
                        getBeanTypeConverter(): org.springframework.beans.TypeConverter
                        /**
                         * Eagerly create the singleton instance, if necessary.
                         */
                        // @ts-ignore
                        public afterPropertiesSet(): void
                        /**
                         * Expose the singleton instance or create a new prototype instance.
                         * @see #createInstance()
                         * @see #getEarlySingletonInterfaces()
                         */
                        // @ts-ignore
                        public getObject(): T
                        /**
                         * Destroy the singleton instance, if any.
                         * @see #destroyInstance(Object)
                         */
                        // @ts-ignore
                        public destroy(): void
                        /**
                         * This abstract method declaration mirrors the method in the FactoryBean
                         * interface, for a consistent offering of abstract template methods.
                         * @see org.springframework.beans.factory.FactoryBean#getObjectType()
                         */
                        // @ts-ignore
                        public abstract getObjectType(): java.lang.Class<any>
                        /**
                         * Template method that subclasses must override to construct
                         * the object returned by this factory.
                         * <p>Invoked on initialization of this FactoryBean in case of
                         * a singleton; else, on each {@link #getObject()} call.
                         * @return the object returned by this factory
                         * @throws Exception if an exception occurred during object creation
                         * @see #getObject()
                         */
                        // @ts-ignore
                        abstract createInstance(): T
                        /**
                         * Return an array of interfaces that a singleton object exposed by this
                         * FactoryBean is supposed to implement, for use with an 'early singleton
                         * proxy' that will be exposed in case of a circular reference.
                         * <p>The default implementation returns this FactoryBean's object type,
                         * provided that it is an interface, or {@code null} otherwise. The latter
                         * indicates that early singleton access is not supported by this FactoryBean.
                         * This will lead to a FactoryBeanNotInitializedException getting thrown.
                         * @return the interfaces to use for 'early singletons',
                         *  or {#code null} to indicate a FactoryBeanNotInitializedException
                         * @see org.springframework.beans.factory.FactoryBeanNotInitializedException
                         */
                        // @ts-ignore
                        getEarlySingletonInterfaces(): java.lang.Class<any>[]
                        /**
                         * Callback for destroying a singleton instance. Subclasses may
                         * override this to destroy the previously created instance.
                         * <p>The default implementation is empty.
                         * @param instance the singleton instance, as returned by
                         *  {#link #createInstance()}
                         * @throws Exception in case of shutdown errors
                         * @see #createInstance()
                         */
                        // @ts-ignore
                        destroyInstance(instance: T): void
                    }
                }
            }
        }
    }
}
