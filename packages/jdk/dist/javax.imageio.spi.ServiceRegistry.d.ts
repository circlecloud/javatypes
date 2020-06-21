declare namespace javax {
    namespace imageio {
        namespace spi {
            /**
             * A registry for service provider instances.
             * <p> A <i>service</i> is a well-known set of interfaces and (usually
             * abstract) classes.  A <i>service provider</i> is a specific
             * implementation of a service.  The classes in a provider typically
             * implement the interface or subclass the class defined by the
             * service itself.
             * <p> Service providers are stored in one or more <i>categories</i>,
             * each of which is defined by a class of interface (described by a
             * <code>Class</code> object) that all of its members must implement.
             * The set of categories may be changed dynamically.
             * <p> Only a single instance of a given leaf class (that is, the
             * actual class returned by <code>getClass()</code>, as opposed to any
             * inherited classes or interfaces) may be registered.  That is,
             * suppose that the
             * <code>com.mycompany.mypkg.GreenServiceProvider</code> class
             * implements the <code>com.mycompany.mypkg.MyService</code>
             * interface.  If a <code>GreenServiceProvider</code> instance is
             * registered, it will be stored in the category defined by the
             * <code>MyService</code> class.  If a new instance of
             * <code>GreenServiceProvider</code> is registered, it will replace
             * the previous instance.  In practice, service provider objects are
             * usually singletons so this behavior is appropriate.
             * <p> To declare a service provider, a <code>services</code>
             * subdirectory is placed within the <code>META-INF</code> directory
             * that is present in every JAR file.  This directory contains a file
             * for each service provider interface that has one or more
             * implementation classes present in the JAR file.  For example, if
             * the JAR file contained a class named
             * <code>com.mycompany.mypkg.MyServiceImpl</code> which implements the
             * <code>javax.someapi.SomeService</code> interface, the JAR file
             * would contain a file named: <pre>
             * META-INF/services/javax.someapi.SomeService </pre>
             * containing the line:
             * <pre>
             * com.mycompany.mypkg.MyService
             * </pre>
             * <p> The service provider classes should be to be lightweight and
             * quick to load.  Implementations of these interfaces should avoid
             * complex dependencies on other classes and on native code. The usual
             * pattern for more complex services is to register a lightweight
             * proxy for the heavyweight service.
             * <p> An application may customize the contents of a registry as it
             * sees fit, so long as it has the appropriate runtime permission.
             * <p> For more details on declaring service providers, and the JAR
             * format in general, see the <a
             * href="../../../../technotes/guides/jar/jar.html">
             * JAR File Specification</a>.
             * @see RegisterableService
             */
            // @ts-ignore
            class ServiceRegistry extends java.lang.Object {
                /**
                 * Constructs a <code>ServiceRegistry</code> instance with a
                 * set of categories taken from the <code>categories</code>
                 * argument.
                 * @param categories an <code>Iterator</code> containing
                 *  <code>Class</code> objects to be used to define categories.
                 * @exception IllegalArgumentException if
                 *  <code>categories</code> is <code>null</code>.
                 */
                // @ts-ignore
                constructor(categories: java.util.Iterator<java.lang.Class<any>>)
                /**
                 * Searches for implementations of a particular service class
                 * using the given class loader.
                 * <p> This method transforms the name of the given service class
                 * into a provider-configuration filename as described in the
                 * class comment and then uses the <code>getResources</code>
                 * method of the given class loader to find all available files
                 * with that name.  These files are then read and parsed to
                 * produce a list of provider-class names.  The iterator that is
                 * returned uses the given class loader to look up and then
                 * instantiate each element of the list.
                 * <p> Because it is possible for extensions to be installed into
                 * a running Java virtual machine, this method may return
                 * different results each time it is invoked.
                 * @param providerClass a <code>Class</code>object indicating the
                 *  class or interface of the service providers being detected.
                 * @param loader the class loader to be used to load
                 *  provider-configuration files and instantiate provider classes,
                 *  or <code>null</code> if the system class loader (or, failing that
                 *  the bootstrap class loader) is to be used.
                 * @param <T> the type of the providerClass.
                 * @return An <code>Iterator</code> that yields provider objects
                 *  for the given service, in some arbitrary order.  The iterator
                 *  will throw an <code>Error</code> if a provider-configuration
                 *  file violates the specified format or if a provider class
                 *  cannot be found and instantiated.
                 * @exception IllegalArgumentException if
                 *  <code>providerClass</code> is <code>null</code>.
                 */
                // @ts-ignore
                public static lookupProviders<T>(providerClass: java.lang.Class<T>, loader: java.lang.ClassLoader): java.util.Iterator<T>
                /**
                 * Locates and incrementally instantiates the available providers
                 * of a given service using the context class loader.  This
                 * convenience method is equivalent to:
                 * <pre>
                 * ClassLoader cl = Thread.currentThread().getContextClassLoader();
                 * return Service.providers(service, cl);
                 * </pre>
                 * @param providerClass a <code>Class</code>object indicating the
                 *  class or interface of the service providers being detected.
                 * @param <T> the type of the providerClass.
                 * @return An <code>Iterator</code> that yields provider objects
                 *  for the given service, in some arbitrary order.  The iterator
                 *  will throw an <code>Error</code> if a provider-configuration
                 *  file violates the specified format or if a provider class
                 *  cannot be found and instantiated.
                 * @exception IllegalArgumentException if
                 *  <code>providerClass</code> is <code>null</code>.
                 */
                // @ts-ignore
                public static lookupProviders<T>(providerClass: java.lang.Class<T>): java.util.Iterator<T>
                /**
                 * Returns an <code>Iterator</code> of <code>Class</code> objects
                 * indicating the current set of categories.  The iterator will be
                 * empty if no categories exist.
                 * @return an <code>Iterator</code> containing
                 *  <code>Class</code>objects.
                 */
                // @ts-ignore
                public getCategories(): java.util.Iterator<java.lang.Class<any>>
                /**
                 * Adds a service provider object to the registry.  The provider
                 * is associated with the given category.
                 * <p> If <code>provider</code> implements the
                 * <code>RegisterableService</code> interface, its
                 * <code>onRegistration</code> method will be called.  Its
                 * <code>onDeregistration</code> method will be called each time
                 * it is deregistered from a category, for example if a
                 * category is removed or the registry is garbage collected.
                 * @param provider the service provide object to be registered.
                 * @param category the category under which to register the
                 *  provider.
                 * @param <T> the type of the provider.
                 * @return true if no provider of the same class was previously
                 *  registered in the same category category.
                 * @exception IllegalArgumentException if <code>provider</code> is
                 *  <code>null</code>.
                 * @exception IllegalArgumentException if there is no category
                 *  corresponding to <code>category</code>.
                 * @exception ClassCastException if provider does not implement
                 *  the <code>Class</code> defined by <code>category</code>.
                 */
                // @ts-ignore
                public registerServiceProvider<T>(provider: T, category: java.lang.Class<T>): boolean
                /**
                 * Adds a service provider object to the registry.  The provider
                 * is associated within each category present in the registry
                 * whose <code>Class</code> it implements.
                 * <p> If <code>provider</code> implements the
                 * <code>RegisterableService</code> interface, its
                 * <code>onRegistration</code> method will be called once for each
                 * category it is registered under.  Its
                 * <code>onDeregistration</code> method will be called each time
                 * it is deregistered from a category or when the registry is
                 * finalized.
                 * @param provider the service provider object to be registered.
                 * @exception IllegalArgumentException if
                 *  <code>provider</code> is <code>null</code>.
                 */
                // @ts-ignore
                public registerServiceProvider(provider: java.lang.Object | any): void
                /**
                 * Adds a set of service provider objects, taken from an
                 * <code>Iterator</code> to the registry.  Each provider is
                 * associated within each category present in the registry whose
                 * <code>Class</code> it implements.
                 * <p> For each entry of <code>providers</code> that implements
                 * the <code>RegisterableService</code> interface, its
                 * <code>onRegistration</code> method will be called once for each
                 * category it is registered under.  Its
                 * <code>onDeregistration</code> method will be called each time
                 * it is deregistered from a category or when the registry is
                 * finalized.
                 * @param providers an Iterator containing service provider
                 *  objects to be registered.
                 * @exception IllegalArgumentException if <code>providers</code>
                 *  is <code>null</code> or contains a <code>null</code> entry.
                 */
                // @ts-ignore
                public registerServiceProviders(providers: java.util.Iterator<any>): void
                /**
                 * Removes a service provider object from the given category.  If
                 * the provider was not previously registered, nothing happens and
                 * <code>false</code> is returned.  Otherwise, <code>true</code>
                 * is returned.  If an object of the same class as
                 * <code>provider</code> but not equal (using <code>==</code>) to
                 * <code>provider</code> is registered, it will not be
                 * deregistered.
                 * <p> If <code>provider</code> implements the
                 * <code>RegisterableService</code> interface, its
                 * <code>onDeregistration</code> method will be called.
                 * @param provider the service provider object to be deregistered.
                 * @param category the category from which to deregister the
                 *  provider.
                 * @param <T> the type of the provider.
                 * @return <code>true</code> if the provider was previously
                 *  registered in the same category category,
                 *  <code>false</code> otherwise.
                 * @exception IllegalArgumentException if <code>provider</code> is
                 *  <code>null</code>.
                 * @exception IllegalArgumentException if there is no category
                 *  corresponding to <code>category</code>.
                 * @exception ClassCastException if provider does not implement
                 *  the class defined by <code>category</code>.
                 */
                // @ts-ignore
                public deregisterServiceProvider<T>(provider: T, category: java.lang.Class<T>): boolean
                /**
                 * Removes a service provider object from all categories that
                 * contain it.
                 * @param provider the service provider object to be deregistered.
                 * @exception IllegalArgumentException if <code>provider</code> is
                 *  <code>null</code>.
                 */
                // @ts-ignore
                public deregisterServiceProvider(provider: java.lang.Object | any): void
                /**
                 * Returns <code>true</code> if <code>provider</code> is currently
                 * registered.
                 * @param provider the service provider object to be queried.
                 * @return <code>true</code> if the given provider has been
                 *  registered.
                 * @exception IllegalArgumentException if <code>provider</code> is
                 *  <code>null</code>.
                 */
                // @ts-ignore
                public contains(provider: java.lang.Object | any): boolean
                /**
                 * Returns an <code>Iterator</code> containing all registered
                 * service providers in the given category.  If
                 * <code>useOrdering</code> is <code>false</code>, the iterator
                 * will return all of the server provider objects in an arbitrary
                 * order.  Otherwise, the ordering will respect any pairwise
                 * orderings that have been set.  If the graph of pairwise
                 * orderings contains cycles, any providers that belong to a cycle
                 * will not be returned.
                 * @param category the category to be retrieved from.
                 * @param useOrdering <code>true</code> if pairwise orderings
                 *  should be taken account in ordering the returned objects.
                 * @param <T> the type of the category.
                 * @return an <code>Iterator</code> containing service provider
                 *  objects from the given category, possibly in order.
                 * @exception IllegalArgumentException if there is no category
                 *  corresponding to <code>category</code>.
                 */
                // @ts-ignore
                public getServiceProviders<T>(category: java.lang.Class<T>, useOrdering: boolean): java.util.Iterator<T>
                /**
                 * Returns an <code>Iterator</code> containing service provider
                 * objects within a given category that satisfy a criterion
                 * imposed by the supplied <code>ServiceRegistry.Filter</code>
                 * object's <code>filter</code> method.
                 * <p> The <code>useOrdering</code> argument controls the
                 * ordering of the results using the same rules as
                 * <code>getServiceProviders(Class, boolean)</code>.
                 * @param category the category to be retrieved from.
                 * @param filter an instance of <code>ServiceRegistry.Filter</code>
                 *  whose <code>filter</code> method will be invoked.
                 * @param useOrdering <code>true</code> if pairwise orderings
                 *  should be taken account in ordering the returned objects.
                 * @param <T> the type of the category.
                 * @return an <code>Iterator</code> containing service provider
                 *  objects from the given category, possibly in order.
                 * @exception IllegalArgumentException if there is no category
                 *  corresponding to <code>category</code>.
                 */
                // @ts-ignore
                public getServiceProviders<T>(category: java.lang.Class<T>, filter: javax.imageio.spi.ServiceRegistry.Filter, useOrdering: boolean): java.util.Iterator<T>
                /**
                 * Returns the currently registered service provider object that
                 * is of the given class type.  At most one object of a given
                 * class is allowed to be registered at any given time.  If no
                 * registered object has the desired class type, <code>null</code>
                 * is returned.
                 * @param providerClass the <code>Class</code> of the desired
                 *  service provider object.
                 * @param <T> the type of the provider.
                 * @return a currently registered service provider object with the
                 *  desired <code>Class</code>type, or <code>null</code> is none is
                 *  present.
                 * @exception IllegalArgumentException if <code>providerClass</code> is
                 *  <code>null</code>.
                 */
                // @ts-ignore
                public getServiceProviderByClass<T>(providerClass: java.lang.Class<T>): T
                /**
                 * Sets a pairwise ordering between two service provider objects
                 * within a given category.  If one or both objects are not
                 * currently registered within the given category, or if the
                 * desired ordering is already set, nothing happens and
                 * <code>false</code> is returned.  If the providers previously
                 * were ordered in the reverse direction, that ordering is
                 * removed.
                 * <p> The ordering will be used by the
                 * <code>getServiceProviders</code> methods when their
                 * <code>useOrdering</code> argument is <code>true</code>.
                 * @param category a <code>Class</code> object indicating the
                 *  category under which the preference is to be established.
                 * @param firstProvider the preferred provider.
                 * @param secondProvider the provider to which
                 *  <code>firstProvider</code> is preferred.
                 * @param <T> the type of the category.
                 * @return <code>true</code> if a previously unset ordering
                 *  was established.
                 * @exception IllegalArgumentException if either provider is
                 *  <code>null</code> or they are the same object.
                 * @exception IllegalArgumentException if there is no category
                 *  corresponding to <code>category</code>.
                 */
                // @ts-ignore
                public setOrdering<T>(category: java.lang.Class<T>, firstProvider: T, secondProvider: T): boolean
                /**
                 * Sets a pairwise ordering between two service provider objects
                 * within a given category.  If one or both objects are not
                 * currently registered within the given category, or if no
                 * ordering is currently set between them, nothing happens
                 * and <code>false</code> is returned.
                 * <p> The ordering will be used by the
                 * <code>getServiceProviders</code> methods when their
                 * <code>useOrdering</code> argument is <code>true</code>.
                 * @param category a <code>Class</code> object indicating the
                 *  category under which the preference is to be disestablished.
                 * @param firstProvider the formerly preferred provider.
                 * @param secondProvider the provider to which
                 *  <code>firstProvider</code> was formerly preferred.
                 * @param <T> the type of the category.
                 * @return <code>true</code> if a previously set ordering was
                 *  disestablished.
                 * @exception IllegalArgumentException if either provider is
                 *  <code>null</code> or they are the same object.
                 * @exception IllegalArgumentException if there is no category
                 *  corresponding to <code>category</code>.
                 */
                // @ts-ignore
                public unsetOrdering<T>(category: java.lang.Class<T>, firstProvider: T, secondProvider: T): boolean
                /**
                 * Deregisters all service provider object currently registered
                 * under the given category.
                 * @param category the category to be emptied.
                 * @exception IllegalArgumentException if there is no category
                 *  corresponding to <code>category</code>.
                 */
                // @ts-ignore
                public deregisterAll(category: java.lang.Class<any>): void
                /**
                 * Deregisters all currently registered service providers from all
                 * categories.
                 */
                // @ts-ignore
                public deregisterAll(): void
                /**
                 * Finalizes this object prior to garbage collection.  The
                 * <code>deregisterAll</code> method is called to deregister all
                 * currently registered service providers.  This method should not
                 * be called from application code.
                 * @exception Throwable if an error occurs during superclass
                 *  finalization.
                 */
                // @ts-ignore
                public finalize(): void
            }
        }
    }
}
