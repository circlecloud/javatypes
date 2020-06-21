declare namespace javax {
    namespace imageio {
        namespace spi {
            namespace ServiceRegistry {
                /**
                 * A simple filter interface used by
                 * <code>ServiceRegistry.getServiceProviders</code> to select
                 * providers matching an arbitrary criterion.  Classes that
                 * implement this interface should be defined in order to make use
                 * of the <code>getServiceProviders</code> method of
                 * <code>ServiceRegistry</code> that takes a <code>Filter</code>.
                 * @see ServiceRegistry#getServiceProviders(Class, ServiceRegistry.Filter, boolean)
                 */
                // @ts-ignore
                interface Filter {
                    /**
                     * Returns <code>true</code> if the given
                     * <code>provider</code> object matches the criterion defined
                     * by this <code>Filter</code>.
                     * @param provider a service provider <code>Object</code>.
                     * @return true if the provider matches the criterion.
                     */
                    // @ts-ignore
                    filter(provider: java.lang.Object | any): boolean
                }
            }
        }
    }
}
