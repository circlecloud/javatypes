declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * Interface implemented by session managers that do not keep a complete copy
             * of all sessions in memory but do know where every session is. The
             * BackupManager is an example of such a Manager as are implementations of the
             * StoreManager interface.
             * <p>
             * With the BackupManager, sessions can be primary (master copy on this node),
             * backup (backup copy on this node) or proxy (only the session ID on this
             * node). The identity of the primary and backup nodes are known for all
             * sessions, including proxy sessions.
             * <p>
             * With StoreManager implementations, sessions can be primary (session is in
             * memory) or proxy (session is in the Store).
             */
            // @ts-ignore
            interface DistributedManager {
                /**
                 * Returns the total session count for primary, backup and proxy.
                 * @return The total session count across the cluster.
                 */
                // @ts-ignore
                getActiveSessionsFull(): number /*int*/
                /**
                 * Returns the list of all sessions IDS (primary, backup and proxy).
                 * @return The complete set of sessions IDs across the cluster.
                 */
                // @ts-ignore
                getSessionIdsFull(): Array<java.lang.String | string>
            }
        }
    }
}
