declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * Provider interface to refresh credentials when appropriate
                 * and perform an operation once the credentials have been
                 * renewed. In the context of RabbitMQ, the operation consists
                 * in calling the <code>update.secret</code> AMQP extension
                 * to provide new valid credentials before the current ones
                 * expire.
                 * <p>
                 * New connections are registered and implementations must perform
                 * credentials renewal when appropriate. Implementations
                 * must call a registered callback once credentials are renewed.
                 * @see CredentialsProvider
                 * @see DefaultCredentialsRefreshService
                 */
                // @ts-ignore
                interface CredentialsRefreshService {
                    /**
                     * Register a new entity that needs credentials renewal.
                     * <p>
                     * The registered callback must return true if the action was
                     * performed correctly, throw an exception if something goes wrong,
                     * and return false if it became stale and wants to be unregistered.
                     * <p>
                     * Implementations are free to automatically unregister an entity whose
                     * callback has failed a given number of times.
                     * @param credentialsProvider the credentials provider
                     * @param refreshAction       the action to perform after credentials renewal
                     * @return a tracking ID for the registration
                     */
                    // @ts-ignore
                    register(credentialsProvider: com.rabbitmq.client.impl.CredentialsProvider, refreshAction: java.util.concurrent.Callable<java.lang.Boolean>): string
                    /**
                     * Unregister the entity with the given registration ID.
                     * <p>
                     * Its state is cleaned up and its registered callback will not be
                     * called again.
                     * @param credentialsProvider the credentials provider
                     * @param registrationId      the registration ID
                     */
                    // @ts-ignore
                    unregister(credentialsProvider: com.rabbitmq.client.impl.CredentialsProvider, registrationId: java.lang.String | string): void
                    /**
                     * Provide a hint about whether credentials should be renewed now or not before attempting to connect.
                     * <p>
                     * This can avoid a connection to use almost expired credentials if this connection
                     * is created just before credentials are refreshed in the background, but does not
                     * benefit from the refresh.
                     * @param timeBeforeExpiration
                     * @return true if credentials should be renewed, false otherwise
                     */
                    // @ts-ignore
                    isApproachingExpiration(timeBeforeExpiration: java.time.Duration): boolean
                }
            }
        }
    }
}
