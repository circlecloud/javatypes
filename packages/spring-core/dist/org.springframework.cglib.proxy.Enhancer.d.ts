declare namespace org {
    namespace springframework {
        namespace cglib {
            namespace proxy {
                /**
                 * Generates dynamic subclasses to enable method interception. This
                 * class started as a substitute for the standard Dynamic Proxy support
                 * included with JDK 1.3, but one that allowed the proxies to extend a
                 * concrete base class, in addition to implementing interfaces. The dynamically
                 * generated subclasses override the non-final methods of the superclass and
                 * have hooks which callback to user-defined interceptor
                 * implementations.
                 * <p>
                 * The original and most general callback type is the {@link MethodInterceptor}, which
                 * in AOP terms enables "around advice"--that is, you can invoke custom code both before
                 * and after the invocation of the "super" method. In addition you can modify the
                 * arguments before calling the super method, or not call it at all.
                 * <p>
                 * Although <code>MethodInterceptor</code> is generic enough to meet any
                 * interception need, it is often overkill. For simplicity and performance, additional
                 * specialized callback types, such as {@link LazyLoader} are also available.
                 * Often a single callback will be used per enhanced class, but you can control
                 * which callback is used on a per-method basis with a {@link CallbackFilter}.
                 * <p>
                 * The most common uses of this class are embodied in the static helper methods. For
                 * advanced needs, such as customizing the <code>ClassLoader</code> to use, you should create
                 * a new instance of <code>Enhancer</code>. Other classes within CGLIB follow a similar pattern.
                 * <p>
                 * All enhanced objects implement the {@link Factory} interface, unless {@link #setUseFactory} is
                 * used to explicitly disable this feature. The <code>Factory</code> interface provides an API
                 * to change the callbacks of an existing object, as well as a faster and easier way to create
                 * new instances of the same type.
                 * <p>
                 * For an almost drop-in replacement for
                 * <code>java.lang.reflect.Proxy</code>, see the {@link Proxy} class.
                 */
                // @ts-ignore
                class Enhancer extends org.springframework.cglib.core.AbstractClassGenerator<any> {
                    /**
                     * Create a new <code>Enhancer</code>. A new <code>Enhancer</code>
                     * object should be used for each generated object, and should not
                     * be shared across threads. To create additional instances of a
                     * generated class, use the <code>Factory</code> interface.
                     * @see Factory
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the class which the generated class will extend. As a convenience,
                     * if the supplied superclass is actually an interface, <code>setInterfaces</code>
                     * will be called with the appropriate argument instead.
                     * A non-interface argument must not be declared as final, and must have an
                     * accessible constructor.
                     * @param superclass class to extend or interface to implement
                     * @see #setInterfaces(Class[])
                     */
                    // @ts-ignore
                    public setSuperclass(superclass: java.lang.Class<any>): void
                    /**
                     * Set the interfaces to implement. The <code>Factory</code> interface will
                     * always be implemented regardless of what is specified here.
                     * @param interfaces array of interfaces to implement, or null
                     * @see Factory
                     */
                    // @ts-ignore
                    public setInterfaces(interfaces: java.lang.Class<any>[]): void
                    /**
                     * Set the {@link CallbackFilter} used to map the generated class' methods
                     * to a particular callback index.
                     * New object instances will always use the same mapping, but may use different
                     * actual callback objects.
                     * @param filter the callback filter to use when generating a new class
                     * @see #setCallbacks
                     */
                    // @ts-ignore
                    public setCallbackFilter(filter: CallbackFilter): void
                    /**
                     * Set the single {@link Callback} to use.
                     * Ignored if you use {@link #createClass}.
                     * @param callback the callback to use for all methods
                     * @see #setCallbacks
                     */
                    // @ts-ignore
                    public setCallback(callback: Callback): void
                    /**
                     * Set the array of callbacks to use.
                     * Ignored if you use {@link #createClass}.
                     * You must use a {@link CallbackFilter} to specify the index into this
                     * array for each method in the proxied class.
                     * @param callbacks the callback array
                     * @see #setCallbackFilter
                     * @see #setCallback
                     */
                    // @ts-ignore
                    public setCallbacks(callbacks: Callback[]): void
                    /**
                     * Set whether the enhanced object instances should implement
                     * the {@link Factory} interface.
                     * This was added for tools that need for proxies to be more
                     * indistinguishable from their targets. Also, in some cases it may
                     * be necessary to disable the <code>Factory</code> interface to
                     * prevent code from changing the underlying callbacks.
                     * @param useFactory whether to implement <code>Factory</code>; default is <code>true</code>
                     */
                    // @ts-ignore
                    public setUseFactory(useFactory: boolean): void
                    /**
                     * Set whether methods called from within the proxy's constructer
                     * will be intercepted. The default value is true. Unintercepted methods
                     * will call the method of the proxy's base class, if it exists.
                     * @param interceptDuringConstruction whether to intercept methods called from the constructor
                     */
                    // @ts-ignore
                    public setInterceptDuringConstruction(interceptDuringConstruction: boolean): void
                    /**
                     * Set the single type of {@link Callback} to use.
                     * This may be used instead of {@link #setCallback} when calling
                     * {@link #createClass}, since it may not be possible to have
                     * an array of actual callback instances.
                     * @param callbackType the type of callback to use for all methods
                     * @see #setCallbackTypes
                     */
                    // @ts-ignore
                    public setCallbackType(callbackType: java.lang.Class<any>): void
                    /**
                     * Set the array of callback types to use.
                     * This may be used instead of {@link #setCallbacks} when calling
                     * {@link #createClass}, since it may not be possible to have
                     * an array of actual callback instances.
                     * You must use a {@link CallbackFilter} to specify the index into this
                     * array for each method in the proxied class.
                     * @param callbackTypes the array of callback types
                     */
                    // @ts-ignore
                    public setCallbackTypes(callbackTypes: java.lang.Class<any>[]): void
                    /**
                     * Generate a new class if necessary and uses the specified
                     * callbacks (if any) to create a new object instance.
                     * Uses the no-arg constructor of the superclass.
                     * @return a new instance
                     */
                    // @ts-ignore
                    public create(): any
                    /**
                     * Generate a new class if necessary and uses the specified
                     * callbacks (if any) to create a new object instance.
                     * Uses the constructor of the superclass matching the <code>argumentTypes</code>
                     * parameter, with the given arguments.
                     * @param argumentTypes constructor signature
                     * @param arguments compatible wrapped arguments to pass to constructor
                     * @return a new instance
                     */
                    // @ts-ignore
                    public create(argumentTypes: java.lang.Class<any>[], arguments: java.lang.Object[] | any[]): any
                    /**
                     * Generate a new class if necessary and return it without creating a new instance.
                     * This ignores any callbacks that have been set.
                     * To create a new instance you will have to use reflection, and methods
                     * called during the constructor will not be intercepted. To avoid this problem,
                     * use the multi-arg <code>create</code> method.
                     * @see #create(Class[], Object[])
                     */
                    // @ts-ignore
                    public createClass(): java.lang.Class<any>
                    /**
                     * Insert a static serialVersionUID field into the generated class.
                     * @param sUID the field value, or null to avoid generating field.
                     */
                    // @ts-ignore
                    public setSerialVersionUID(sUID: java.lang.Long | number): void
                    // @ts-ignore
                    generate(data: org.springframework.cglib.core.AbstractClassGenerator.ClassLoaderData): java.lang.Class<any>
                    // @ts-ignore
                    getDefaultClassLoader(): java.lang.ClassLoader
                    // @ts-ignore
                    getProtectionDomain(): java.security.ProtectionDomain
                    /**
                     * Finds all of the methods that will be extended by an
                     * Enhancer-generated class using the specified superclass and
                     * interfaces. This can be useful in building a list of Callback
                     * objects. The methods are added to the end of the given list.  Due
                     * to the subclassing nature of the classes generated by Enhancer,
                     * the methods are guaranteed to be non-static, non-final, and
                     * non-private. Each method signature will only occur once, even if
                     * it occurs in multiple classes.
                     * @param superclass the class that will be extended, or null
                     * @param interfaces the list of interfaces that will be implemented, or null
                     * @param methods the list into which to copy the applicable methods
                     */
                    // @ts-ignore
                    public static getMethods(superclass: java.lang.Class<any>, interfaces: java.lang.Class<any>[], methods: java.util.List<any> | Array<any>): void
                    // @ts-ignore
                    public generateClass(v: org.springframework.asm.ClassVisitor): void
                    /**
                     * Filter the list of constructors from the superclass. The
                     * constructors which remain will be included in the generated
                     * class. The default implementation is to filter out all private
                     * constructors, but subclasses may extend Enhancer to override this
                     * behavior.
                     * @param sc the superclass
                     * @param constructors the list of all declared constructors from the superclass
                     * @throws IllegalArgumentException if there are no non-private constructors
                     */
                    // @ts-ignore
                    filterConstructors(sc: java.lang.Class<any>, constructors: java.util.List<any> | Array<any>): void
                    /**
                     * This method should not be called in regular flow.
                     * Technically speaking {@link #wrapCachedClass(Class)} uses {@link Enhancer.EnhancerFactoryData} as a cache value,
                     * and the latter enables faster instantiation than plain old reflection lookup and invoke.
                     * This method is left intact for backward compatibility reasons: just in case it was ever used.
                     * @param type class to instantiate
                     * @return newly created proxy instance
                     * @throws Exception if something goes wrong
                     */
                    // @ts-ignore
                    firstInstance(type: java.lang.Class<any>): any
                    // @ts-ignore
                    nextInstance(instance: java.lang.Object | any): any
                    // @ts-ignore
                    wrapCachedClass(klass: java.lang.Class<any>): any
                    // @ts-ignore
                    unwrapCachedValue(cached: java.lang.Object | any): any
                    /**
                     * Call this method to register the {@link Callback} array to use before
                     * creating a new instance of the generated class via reflection. If you are using
                     * an instance of <code>Enhancer</code> or the {@link Factory} interface to create
                     * new instances, this method is unnecessary. Its primary use is for when you want to
                     * cache and reuse a generated class yourself, and the generated class does
                     * <i>not</i> implement the {@link Factory} interface.
                     * <p>
                     * Note that this method only registers the callbacks on the current thread.
                     * If you want to register callbacks for instances created by multiple threads,
                     * use {@link #registerStaticCallbacks}.
                     * <p>
                     * The registered callbacks are overwritten and subsequently cleared
                     * when calling any of the <code>create</code> methods (such as
                     * {@link #create}), or any {@link Factory} <code>newInstance</code> method.
                     * Otherwise they are <i>not</i> cleared, and you should be careful to set them
                     * back to <code>null</code> after creating new instances via reflection if
                     * memory leakage is a concern.
                     * @param generatedClass a class previously created by {#link Enhancer}
                     * @param callbacks the array of callbacks to use when instances of the generated
                     *  class are created
                     * @see #setUseFactory
                     */
                    // @ts-ignore
                    public static registerCallbacks(generatedClass: java.lang.Class<any>, callbacks: Callback[]): void
                    /**
                     * Similar to {@link #registerCallbacks}, but suitable for use
                     * when multiple threads will be creating instances of the generated class.
                     * The thread-level callbacks will always override the static callbacks.
                     * Static callbacks are never cleared.
                     * @param generatedClass a class previously created by {#link Enhancer}
                     * @param callbacks the array of callbacks to use when instances of the generated
                     *  class are created
                     */
                    // @ts-ignore
                    public static registerStaticCallbacks(generatedClass: java.lang.Class<any>, callbacks: Callback[]): void
                    /**
                     * Determine if a class was generated using <code>Enhancer</code>.
                     * @param type any class
                     * @return whether the class was generated  using <code>Enhancer</code>
                     */
                    // @ts-ignore
                    public static isEnhanced(type: java.lang.Class<any>): boolean
                    /**
                     * Helper method to create an intercepted object.
                     * For finer control over the generated instance, use a new instance of <code>Enhancer</code>
                     * instead of this static method.
                     * @param type class to extend or interface to implement
                     * @param callback the callback to use for all methods
                     */
                    // @ts-ignore
                    public static create(type: java.lang.Class<any>, callback: Callback): any
                    /**
                     * Helper method to create an intercepted object.
                     * For finer control over the generated instance, use a new instance of <code>Enhancer</code>
                     * instead of this static method.
                     * @param superclass class to extend or interface to implement
                     * @param interfaces array of interfaces to implement, or null
                     * @param callback the callback to use for all methods
                     */
                    // @ts-ignore
                    public static create(superclass: java.lang.Class<any>, interfaces: java.lang.Class<any>[], callback: Callback): any
                    /**
                     * Helper method to create an intercepted object.
                     * For finer control over the generated instance, use a new instance of <code>Enhancer</code>
                     * instead of this static method.
                     * @param superclass class to extend or interface to implement
                     * @param interfaces array of interfaces to implement, or null
                     * @param filter the callback filter to use when generating a new class
                     * @param callbacks callback implementations to use for the enhanced object
                     */
                    // @ts-ignore
                    public static create(superclass: java.lang.Class<any>, interfaces: java.lang.Class<any>[], filter: CallbackFilter, callbacks: Callback[]): any
                }
            }
        }
    }
}
