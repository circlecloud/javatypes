declare namespace org {
    namespace springframework {
        namespace objenesis {
            /**
             * Spring-specific variant of {@link ObjenesisStd} / {@link ObjenesisBase},
             * providing a cache based on {@code Class} keys instead of class names,
             * and allowing for selective use of the cache.
             * @author Juergen Hoeller
             * @since 4.2
             * @see #isWorthTrying()
             * @see #newInstance(Class, boolean)
             */
            // @ts-ignore
            class SpringObjenesis extends java.lang.Object {
                /**
                 * Create a new {@code SpringObjenesis} instance with the
                 * standard instantiator strategy.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Create a new {@code SpringObjenesis} instance with the
                 * given standard instantiator strategy.
                 * @param strategy the instantiator strategy to use
                 */
                // @ts-ignore
                constructor(strategy: InstantiatorStrategy)
                /**
                 * System property that instructs Spring to ignore Objenesis, not even attempting
                 * to use it. Setting this flag to "true" is equivalent to letting Spring find
                 * out that Objenesis isn't working at runtime, triggering the fallback code path
                 * immediately: Most importantly, this means that all CGLIB AOP proxies will be
                 * created through regular instantiation via a default constructor.
                 */
                // @ts-ignore
                public static readonly IGNORE_OBJENESIS_PROPERTY_NAME: java.lang.String | string
                /**
                 * Return whether this Objenesis instance is worth trying for instance creation,
                 * i.e. whether it hasn't been used yet or is known to work.
                 * <p>If the configured Objenesis instantiator strategy has been identified to not
                 * work on the current JVM at all or if the "spring.objenesis.ignore" property has
                 * been set to "true", this method returns {@code false}.
                 */
                // @ts-ignore
                public isWorthTrying(): boolean
                /**
                 * Create a new instance of the given class via Objenesis.
                 * @param clazz the class to create an instance of
                 * @param useCache whether to use the instantiator cache
                 *  (typically {#code true} but can be set to {@code false}
                 *  e.g. for reloadable classes)
                 * @return the new instance (never {#code null})
                 * @throws ObjenesisException if instance creation failed
                 */
                // @ts-ignore
                public newInstance<T>(clazz: java.lang.Class<T>, useCache: boolean): T
                // @ts-ignore
                public newInstance<T>(clazz: java.lang.Class<T>): T
                // @ts-ignore
                public getInstantiatorOf<T>(clazz: java.lang.Class<T>): object
                // @ts-ignore
                newInstantiatorOf<T>(clazz: java.lang.Class<T>): object
            }
        }
    }
}
