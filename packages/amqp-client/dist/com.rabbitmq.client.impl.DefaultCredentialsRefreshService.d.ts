declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * Scheduling-based implementation of {@link CredentialsRefreshService}.
                 * <p>
                 * This implementation keeps track of entities (typically AMQP connections) that need
                 * to renew credentials. Token renewal is scheduled based on token expiration, using
                 * a <code>Function<Duration, Long> refreshDelayStrategy</code>. Once credentials
                 * for a {@link CredentialsProvider} have been renewed, the callback registered
                 * by each entity/connection is performed. This callback typically propagates
                 * the new credentials in the entity state, e.g. sending the new password to the
                 * broker for AMQP connections.
                 * <p>
                 * Instances are preferably created with {@link DefaultCredentialsRefreshServiceBuilder}.
                 */
                // @ts-ignore
                class DefaultCredentialsRefreshService extends java.lang.Object implements com.rabbitmq.client.impl.CredentialsRefreshService {
                    /**
                     * Constructor. Consider using {@link DefaultCredentialsRefreshServiceBuilder} to create instances.
                     * @param scheduler
                     * @param refreshDelayStrategy
                     * @param approachingExpirationStrategy
                     */
                    // @ts-ignore
                    constructor(scheduler: java.util.concurrent.ScheduledExecutorService, refreshDelayStrategy: java.util.function$.Function<java.time.Duration, java.time.Duration>, approachingExpirationStrategy: java.util.function$.Function<java.time.Duration, java.lang.Boolean>)
                    /**
                     * Delay before refresh is a ratio of the time before expiration.
                     * <p>
                     * E.g. if time before expiration is 60 minutes and specified ratio is 0.8, refresh will
                     * be scheduled in 60 x 0.8 = 48 minutes.
                     * @param ratio
                     * @return the delay before refreshing
                     */
                    // @ts-ignore
                    public static ratioRefreshDelayStrategy(ratio: number /*double*/): java.util.function$.Function<java.time.Duration, java.time.Duration>
                    /**
                     * Delay before refresh is <code>time before expiration - specified duration</code>.
                     * <p>
                     * E.g. if time before expiration is 60 minutes and specified duration is 10 minutes, refresh will
                     * be scheduled in 60 - 10 = 50 minutes.
                     * @param duration
                     * @return the delay before refreshing
                     */
                    // @ts-ignore
                    public static fixedDelayBeforeExpirationRefreshDelayStrategy(duration: java.time.Duration): java.util.function$.Function<java.time.Duration, java.time.Duration>
                    /**
                     * Advise to refresh credentials if <code>TTL <= limit</code>.
                     * @param limitBeforeExpiration
                     * @return true if credentials should be refreshed, false otherwise
                     */
                    // @ts-ignore
                    public static fixedTimeApproachingExpirationStrategy(limitBeforeExpiration: java.time.Duration): java.util.function$.Function<java.time.Duration, java.lang.Boolean>
                    // @ts-ignore
                    public register(credentialsProvider: com.rabbitmq.client.impl.CredentialsProvider, refreshAction: java.util.concurrent.Callable<java.lang.Boolean>): string
                    // @ts-ignore
                    public unregister(credentialsProvider: com.rabbitmq.client.impl.CredentialsProvider, registrationId: java.lang.String | string): void
                    // @ts-ignore
                    public isApproachingExpiration(timeBeforeExpiration: java.time.Duration): boolean
                    // @ts-ignore
                    public close(): void
                }
            }
        }
    }
}
