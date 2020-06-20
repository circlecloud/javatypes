declare namespace javax {
    namespace imageio {
        namespace spi {
            /**
             * An optional interface that may be provided by service provider
             * objects that will be registered with a
             * <code>ServiceRegistry</code>.  If this interface is present,
             * notification of registration and deregistration will be performed.
             * @see ServiceRegistry
             */
            // @ts-ignore
            interface RegisterableService {
                /**
                 * Called when an object implementing this interface is added to
                 * the given <code>category</code> of the given
                 * <code>registry</code>.  The object may already be registered
                 * under another category or categories.
                 * @param registry a <code>ServiceRegistry</code> where this
                 *  object has been registered.
                 * @param category a <code>Class</code> object indicating the
                 *  registry category under which this object has been registered.
                 */
                // @ts-ignore
                onRegistration(registry: javax.imageio.spi.ServiceRegistry, category: java.lang.Class<any>): void
                /**
                 * Called when an object implementing this interface is removed
                 * from the given <code>category</code> of the given
                 * <code>registry</code>.  The object may still be registered
                 * under another category or categories.
                 * @param registry a <code>ServiceRegistry</code> from which this
                 *  object is being (wholly or partially) deregistered.
                 * @param category a <code>Class</code> object indicating the
                 *  registry category from which this object is being deregistered.
                 */
                // @ts-ignore
                onDeregistration(registry: javax.imageio.spi.ServiceRegistry, category: java.lang.Class<any>): void
            }
        }
    }
}
