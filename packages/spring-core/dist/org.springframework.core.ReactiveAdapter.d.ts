declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * Adapter for a Reactive Streams {@link Publisher} to and from an async/reactive
             * type such as {@code CompletableFuture}, RxJava {@code Observable}, and others.
             * <p>An adapter is typically obtained via {@link ReactiveAdapterRegistry}.
             * @author Rossen Stoyanchev
             * @since 5.0
             */
            // @ts-ignore
            class ReactiveAdapter extends java.lang.Object {
                /**
                 * Constructor for an adapter with functions to convert the target reactive
                 * or async type to and from a Reactive Streams Publisher.
                 * @param descriptor the reactive type descriptor
                 * @param toPublisherFunction adapter to a Publisher
                 * @param fromPublisherFunction adapter from a Publisher
                 */
                // @ts-ignore
                constructor(descriptor: org.springframework.core.ReactiveTypeDescriptor, toPublisherFunction: java.util.function.Function<java.lang.Object, <any>> | java.util.function$.Function<java.lang.Object, <any>>, fromPublisherFunction: java.util.function.Function<<any>, java.lang.Object> | java.util.function$.Function<<any>, java.lang.Object>)
                /**
                 * Return the descriptor of the reactive type for the adapter.
                 */
                // @ts-ignore
                getDescriptor(): org.springframework.core.ReactiveTypeDescriptor
                /**
                 * Shortcut for {@code getDescriptor().getReactiveType()}.
                 */
                // @ts-ignore
                getReactiveType(): java.lang.Class<?>
                /**
                 * Shortcut for {@code getDescriptor().isMultiValue()}.
                 */
                // @ts-ignore
                isMultiValue(): boolean
                /**
                 * Shortcut for {@code getDescriptor().isNoValue()}.
                 */
                // @ts-ignore
                isNoValue(): boolean
                /**
                 * Shortcut for {@code getDescriptor().supportsEmpty()}.
                 */
                // @ts-ignore
                supportsEmpty(): boolean
                /**
                 * Adapt the given instance to a Reactive Streams {@code Publisher}.
                 * @param source the source object to adapt from; if the given object is
                 *  {#code null}, {@link ReactiveTypeDescriptor#getEmptyValue()} is used.
                 * @return the Publisher representing the adaptation
                 */
                // @ts-ignore
                toPublisher<T>(source: any): <any>
                /**
                 * Adapt from the given Reactive Streams Publisher.
                 * @param publisher the publisher to adapt from
                 * @return the reactive type instance representing the adapted publisher
                 */
                // @ts-ignore
                fromPublisher(publisher: object): java.lang.Object
            }
        }
    }
}
