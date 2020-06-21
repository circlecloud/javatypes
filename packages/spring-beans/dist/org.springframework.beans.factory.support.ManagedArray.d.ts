declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Tag collection class used to hold managed array elements, which may
                     * include runtime bean references (to be resolved into bean objects).
                     * @author Juergen Hoeller
                     * @since 3.0
                     */
                    // @ts-ignore
                    class ManagedArray extends org.springframework.beans.factory.support.ManagedList<java.lang.Object | any> {
                        /**
                         * Create a new managed array placeholder.
                         * @param elementTypeName the target element type as a class name
                         * @param size the size of the array
                         */
                        // @ts-ignore
                        constructor(elementTypeName: java.lang.String | string, size: number /*int*/)
                    }
                }
            }
        }
    }
}
