declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * PoolCallback Interface
                 * @author Mladen Turk
                 */
                // @ts-ignore
                interface PoolCallback {
                    /**
                     * Called when the pool is destroyed or cleared
                     * @return Function must return APR_SUCCESS
                     */
                    // @ts-ignore
                    callback(): number /*int*/
                }
            }
        }
    }
}
