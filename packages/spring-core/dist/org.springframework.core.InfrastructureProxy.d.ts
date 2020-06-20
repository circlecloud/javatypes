declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * Interface to be implemented by transparent resource proxies that need to be
             * considered as equal to the underlying resource, for example for consistent
             * lookup key comparisons. Note that this interface does imply such special
             * semantics and does not constitute a general-purpose mixin!
             * <p>Such wrappers will automatically be unwrapped for key comparisons in
             * {@link org.springframework.transaction.support.TransactionSynchronizationManager}.
             * <p>Only fully transparent proxies, e.g. for redirection or service lookups,
             * are supposed to implement this interface. Proxies that decorate the target
             * object with new behavior, such as AOP proxies, do <i>not</i> qualify here!
             * @author Juergen Hoeller
             * @since 2.5.4
             * @see org.springframework.transaction.support.TransactionSynchronizationManager
             */
            // @ts-ignore
            interface InfrastructureProxy {
                /**
                 * Return the underlying resource (never {@code null}).
                 */
                // @ts-ignore
                getWrappedObject(): java.lang.Object
            }
        }
    }
}
