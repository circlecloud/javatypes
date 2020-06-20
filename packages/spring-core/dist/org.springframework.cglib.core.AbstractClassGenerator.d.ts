declare namespace org {
    namespace springframework {
        namespace cglib {
            namespace core {
                /**
                 * Abstract class for all code-generating CGLIB utilities.
                 * In addition to caching generated classes for performance, it provides hooks for
                 * customizing the <code>ClassLoader</code>, name of the generated class, and transformations
                 * applied before generation.
                 */
                // @ts-ignore
                class AbstractClassGenerator<T> extends java.lang.Object {
                    // @ts-ignore
                    constructor(source: org.springframework.cglib.core.AbstractClassGenerator.Source)
                    // @ts-ignore
                    wrapCachedClass(klass: java.lang.Class): T
                    // @ts-ignore
                    unwrapCachedValue(cached: T): java.lang.Object
                    // @ts-ignore
                    setNamePrefix(namePrefix: string): void
                    // @ts-ignore
                    getClassName(): java.lang.String
                    /**
                     * Set the <code>ClassLoader</code> in which the class will be generated.
                     * Concrete subclasses of <code>AbstractClassGenerator</code> (such as <code>Enhancer</code>)
                     * will try to choose an appropriate default if this is unset.
                     * <p>
                     * Classes are cached per-<code>ClassLoader</code> using a <code>WeakHashMap</code>, to allow
                     * the generated classes to be removed when the associated loader is garbage collected.
                     * @param classLoader the loader to generate the new class with, or null to use the default
                     */
                    // @ts-ignore
                    setClassLoader(classLoader: java.lang.ClassLoader): void
                    // @ts-ignore
                    setContextClass(contextClass: java.lang.Class): void
                    /**
                     * Override the default naming policy.
                     * @param namingPolicy the custom policy, or null to use the default
                     * @see DefaultNamingPolicy
                     */
                    // @ts-ignore
                    setNamingPolicy(namingPolicy: NamingPolicy): void
                    /**
                     * @see #setNamingPolicy
                     */
                    // @ts-ignore
                    getNamingPolicy(): NamingPolicy
                    /**
                     * Whether use and update the static cache of generated classes
                     * for a class with the same properties. Default is <code>true</code>.
                     */
                    // @ts-ignore
                    setUseCache(useCache: boolean): void
                    /**
                     * @see #setUseCache
                     */
                    // @ts-ignore
                    getUseCache(): boolean
                    /**
                     * If set, CGLIB will attempt to load classes from the specified
                     * <code>ClassLoader</code> before generating them. Because generated
                     * class names are not guaranteed to be unique, the default is <code>false</code>.
                     */
                    // @ts-ignore
                    setAttemptLoad(attemptLoad: boolean): void
                    // @ts-ignore
                    getAttemptLoad(): boolean
                    /**
                     * Set the strategy to use to create the bytecode from this generator.
                     * By default an instance of {@link DefaultGeneratorStrategy} is used.
                     */
                    // @ts-ignore
                    setStrategy(strategy: GeneratorStrategy): void
                    /**
                     * @see #setStrategy
                     */
                    // @ts-ignore
                    getStrategy(): GeneratorStrategy
                    /**
                     * Used internally by CGLIB. Returns the <code>AbstractClassGenerator</code>
                     * that is being used to generate a class in the current thread.
                     */
                    // @ts-ignore
                    getCurrent(): org.springframework.cglib.core.AbstractClassGenerator
                    // @ts-ignore
                    getClassLoader(): java.lang.ClassLoader
                    // @ts-ignore
                    abstract getDefaultClassLoader(): java.lang.ClassLoader
                    /**
                     * Returns the protection domain to use when defining the class.
                     * <p>
                     * Default implementation returns <code>null</code> for using a default protection domain. Sub-classes may
                     * override to use a more specific protection domain.
                     * </p>
                     * @return the protection domain (<code>null</code> for using a default)
                     */
                    // @ts-ignore
                    getProtectionDomain(): java.security.ProtectionDomain
                    // @ts-ignore
                    create(key: any): java.lang.Object
                    // @ts-ignore
                    generate(data: org.springframework.cglib.core.AbstractClassGenerator.ClassLoaderData): java.lang.Class
                    // @ts-ignore
                    abstract firstInstance(type: java.lang.Class): java.lang.Object
                    // @ts-ignore
                    abstract nextInstance(instance: any): java.lang.Object
                }
            }
        }
    }
}
