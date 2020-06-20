declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                /**
                 * A variant of {@link ObjectFactory} designed specifically for injection points,
                 * allowing for programmatic optionality and lenient not-unique handling.
                 * <p>As of 5.1, this interface extends {@link Iterable} and provides {@link Stream}
                 * support. It can be therefore be used in {@code for} loops, provides {@link #forEach}
                 * iteration and allows for collection-style {@link #stream} access.
                 * @author Juergen Hoeller
                 * @since 4.3
                 * @param <T> the object type
                 * @see BeanFactory#getBeanProvider
                 * @see org.springframework.beans.factory.annotation.Autowired
                 */
                // @ts-ignore
                interface ObjectProvider<T> extends org.springframework.beans.factory.ObjectFactory<T>, java.lang.Iterable<T> {
                    /**
                     * Return an instance (possibly shared or independent) of the object
                     * managed by this factory.
                     * <p>Allows for specifying explicit construction arguments, along the
                     * lines of {@link BeanFactory#getBean(String, Object...)}.
                     * @param args arguments to use when creating a corresponding instance
                     * @return an instance of the bean
                     * @throws BeansException in case of creation errors
                     * @see #getObject()
                     */
                    // @ts-ignore
                    getObject(...args: any[]): T
                    /**
                     * Return an instance (possibly shared or independent) of the object
                     * managed by this factory.
                     * @return an instance of the bean, or {#code null} if not available
                     * @throws BeansException in case of creation errors
                     * @see #getObject()
                     */
                    // @ts-ignore
                    getIfAvailable(): T
                    /**
                     * Return an instance (possibly shared or independent) of the object
                     * managed by this factory.
                     * @param defaultSupplier a callback for supplying a default object
                     *  if none is present in the factory
                     * @return an instance of the bean, or the supplied default object
                     *  if no such bean is available
                     * @throws BeansException in case of creation errors
                     * @since 5.0
                     * @see #getIfAvailable()
                     */
                    // @ts-ignore
                    getIfAvailable(defaultSupplier: java.util.function.Supplier<T> | java.util.function$.Supplier<T>): T
                    /**
                     * Consume an instance (possibly shared or independent) of the object
                     * managed by this factory, if available.
                     * @param dependencyConsumer a callback for processing the target object
                     *  if available (not called otherwise)
                     * @throws BeansException in case of creation errors
                     * @since 5.0
                     * @see #getIfAvailable()
                     */
                    // @ts-ignore
                    ifAvailable(dependencyConsumer: java.util.function.Consumer<T> | java.util.function$.Consumer<T>): void
                    /**
                     * Return an instance (possibly shared or independent) of the object
                     * managed by this factory.
                     * @return an instance of the bean, or {#code null} if not available or
                     *  not unique (i.e. multiple candidates found with none marked as primary)
                     * @throws BeansException in case of creation errors
                     * @see #getObject()
                     */
                    // @ts-ignore
                    getIfUnique(): T
                    /**
                     * Return an instance (possibly shared or independent) of the object
                     * managed by this factory.
                     * @param defaultSupplier a callback for supplying a default object
                     *  if no unique candidate is present in the factory
                     * @return an instance of the bean, or the supplied default object
                     *  if no such bean is available or if it is not unique in the factory
                     *  (i.e. multiple candidates found with none marked as primary)
                     * @throws BeansException in case of creation errors
                     * @since 5.0
                     * @see #getIfUnique()
                     */
                    // @ts-ignore
                    getIfUnique(defaultSupplier: java.util.function.Supplier<T> | java.util.function$.Supplier<T>): T
                    /**
                     * Consume an instance (possibly shared or independent) of the object
                     * managed by this factory, if unique.
                     * @param dependencyConsumer a callback for processing the target object
                     *  if unique (not called otherwise)
                     * @throws BeansException in case of creation errors
                     * @since 5.0
                     * @see #getIfAvailable()
                     */
                    // @ts-ignore
                    ifUnique(dependencyConsumer: java.util.function.Consumer<T> | java.util.function$.Consumer<T>): void
                    /**
                     * Return an {@link Iterator} over all matching object instances,
                     * without specific ordering guarantees (but typically in registration order).
                     * @since 5.1
                     * @see #stream()
                     */
                    // @ts-ignore
                    iterator(): java.util.Iterator<T>
                    /**
                     * Return a sequential {@link Stream} over all matching object instances,
                     * without specific ordering guarantees (but typically in registration order).
                     * @since 5.1
                     * @see #iterator()
                     * @see #orderedStream()
                     */
                    // @ts-ignore
                    stream(): java.util.stream.Stream<T>
                    /**
                     * Return a sequential {@link Stream} over all matching object instances,
                     * pre-ordered according to the factory's common order comparator.
                     * <p>In a standard Spring application context, this will be ordered
                     * according to {@link org.springframework.core.Ordered} conventions,
                     * and in case of annotation-based configuration also considering the
                     * {@link org.springframework.core.annotation.Order} annotation,
                     * analogous to multi-element injection points of list/array type.
                     * @since 5.1
                     * @see #stream()
                     * @see org.springframework.core.OrderComparator
                     */
                    // @ts-ignore
                    orderedStream(): java.util.stream.Stream<T>
                }
            }
        }
    }
}
