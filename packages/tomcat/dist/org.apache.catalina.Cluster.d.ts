declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * A <b>Cluster</b> works as a Cluster client/server for the local host
             * Different Cluster implementations can be used to support different
             * ways to communicate within the Cluster. A Cluster implementation is
             * responsible for setting up a way to communicate within the Cluster
             * and also supply "ClientApplications" with <code>ClusterSender</code>
             * used when sending information in the Cluster and
             * <code>ClusterInfo</code> used for receiving information in the Cluster.
             * @author Bip Thelin
             * @author Remy Maucherat
             */
            // @ts-ignore
            interface Cluster extends org.apache.catalina.Contained {
                /**
                 * Return the name of the cluster that this Server is currently
                 * configured to operate within.
                 * @return The name of the cluster associated with this server
                 */
                // @ts-ignore
                getClusterName(): string
                /**
                 * Set the name of the cluster to join, if no cluster with
                 * this name is present create one.
                 * @param clusterName The clustername to join
                 */
                // @ts-ignore
                setClusterName(clusterName: java.lang.String | string): void
                /**
                 * Create a new manager which will use this cluster to replicate its
                 * sessions.
                 * @param name Name (key) of the application with which the manager is
                 *  associated
                 * @return The newly created Manager instance
                 */
                // @ts-ignore
                createManager(name: java.lang.String | string): org.apache.catalina.Manager
                /**
                 * Register a manager with the cluster. If the cluster is not responsible
                 * for creating a manager, then the container will at least notify the
                 * cluster that this manager is participating in the cluster.
                 * @param manager Manager
                 */
                // @ts-ignore
                registerManager(manager: org.apache.catalina.Manager): void
                /**
                 * Removes a manager from the cluster
                 * @param manager Manager
                 */
                // @ts-ignore
                removeManager(manager: org.apache.catalina.Manager): void
                /**
                 * Execute a periodic task, such as reloading, etc. This method will be
                 * invoked inside the classloading context of this container. Unexpected
                 * throwables will be caught and logged.
                 */
                // @ts-ignore
                backgroundProcess(): void
            }
        }
    }
}
