declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * PersistentManager would have been a better name but that would have clashed
             * with the implementation name.
             */
            // @ts-ignore
            interface StoreManager extends org.apache.catalina.DistributedManager {
                /**
                 * @return the Store object which manages persistent Session
                 *  storage for this Manager.
                 */
                // @ts-ignore
                getStore(): org.apache.catalina.Store
                /**
                 * Remove this Session from the active Sessions for this Manager,
                 * but not from the Store. (Used by the PersistentValve)
                 * @param session Session to be removed
                 */
                // @ts-ignore
                removeSuper(session: org.apache.catalina.Session): void
            }
        }
    }
}
