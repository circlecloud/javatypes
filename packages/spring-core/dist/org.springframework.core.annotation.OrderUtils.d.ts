declare namespace org {
    namespace springframework {
        namespace core {
            namespace annotation {
                /**
                 * General utility for determining the order of an object based on its type declaration.
                 * Handles Spring's {@link Order} annotation as well as {@link javax.annotation.Priority}.
                 * @author Stephane Nicoll
                 * @author Juergen Hoeller
                 * @since 4.1
                 * @see Order
                 * @see javax.annotation.Priority
                 */
                // @ts-ignore
                class OrderUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Return the order on the specified {@code type}, or the specified
                     * default value if none can be found.
                     * <p>Takes care of {@link Order @Order} and {@code @javax.annotation.Priority}.
                     * @param type the type to handle
                     * @return the priority value, or the specified default order if none can be found
                     * @since 5.0
                     * @see #getPriority(Class)
                     */
                    // @ts-ignore
                    getOrder(type: java.lang.Class<any>, defaultOrder: number /*int*/): int
                    /**
                     * Return the order on the specified {@code type}, or the specified
                     * default value if none can be found.
                     * <p>Takes care of {@link Order @Order} and {@code @javax.annotation.Priority}.
                     * @param type the type to handle
                     * @return the priority value, or the specified default order if none can be found
                     * @see #getPriority(Class)
                     */
                    // @ts-ignore
                    getOrder(type: java.lang.Class<any>, defaultOrder: number): java.lang.Integer
                    /**
                     * Return the order on the specified {@code type}.
                     * <p>Takes care of {@link Order @Order} and {@code @javax.annotation.Priority}.
                     * @param type the type to handle
                     * @return the order value, or {#code null} if none can be found
                     * @see #getPriority(Class)
                     */
                    // @ts-ignore
                    getOrder(type: java.lang.Class<any>): java.lang.Integer
                    /**
                     * Return the value of the {@code javax.annotation.Priority} annotation
                     * declared on the specified type, or {@code null} if none.
                     * @param type the type to handle
                     * @return the priority value if the annotation is declared, or {#code null} if none
                     */
                    // @ts-ignore
                    getPriority(type: java.lang.Class<any>): java.lang.Integer
                }
            }
        }
    }
}
