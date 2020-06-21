declare namespace org {
    namespace springframework {
        namespace core {
            namespace OrderComparator {
                /**
                 * Strategy interface to provide an order source for a given object.
                 * @since 4.1
                 */
                // @ts-ignore
                interface OrderSourceProvider {
                    /**
                     * Return an order source for the specified object, i.e. an object that
                     * should be checked for an order value as a replacement to the given object.
                     * <p>Can also be an array of order source objects.
                     * <p>If the returned object does not indicate any order, the comparator
                     * will fall back to checking the original object.
                     * @param obj the object to find an order source for
                     * @return the order source for that object, or {#code null} if none found
                     */
                    // @ts-ignore
                    getOrderSource(obj: java.lang.Object | any): any
                }
            }
        }
    }
}
