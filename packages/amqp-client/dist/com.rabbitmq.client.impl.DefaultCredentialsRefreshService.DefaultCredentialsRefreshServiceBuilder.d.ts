declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace DefaultCredentialsRefreshService {
                    /**
                     * Builder to create instances of {@link DefaultCredentialsRefreshServiceBuilder}.
                     */
                    // @ts-ignore
                    class DefaultCredentialsRefreshServiceBuilder extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public scheduler(scheduler: java.util.concurrent.ScheduledThreadPoolExecutor): com.rabbitmq.client.impl.DefaultCredentialsRefreshService.DefaultCredentialsRefreshServiceBuilder
                        /**
                         * Set the strategy to schedule credentials refresh after credentials retrieval.
                         * <p>
                         * Default is a 80 % ratio-based strategy (refresh is scheduled after 80 % of the time
                         * before expiration, e.g. 48 minutes for a token with a validity of 60 minutes, that
                         * is refresh will be scheduled 12 minutes before the token actually expires).
                         * @param refreshDelayStrategy
                         * @return this builder instance
                         * @see DefaultCredentialsRefreshService#refreshDelayStrategy
                         * @see DefaultCredentialsRefreshService#ratioRefreshDelayStrategy(double)
                         */
                        // @ts-ignore
                        public refreshDelayStrategy(refreshDelayStrategy: java.util.function$.Function<java.time.Duration, java.time.Duration>): com.rabbitmq.client.impl.DefaultCredentialsRefreshService.DefaultCredentialsRefreshServiceBuilder
                        /**
                         * Set the strategy to trigger an early refresh before attempting to connect.
                         * <p>
                         * Default is to never advise to refresh before connecting.
                         * @param approachingExpirationStrategy
                         * @return this builder instances
                         * @see DefaultCredentialsRefreshService#approachingExpirationStrategy
                         * @see CredentialsRefreshService#isApproachingExpiration(Duration)
                         */
                        // @ts-ignore
                        public approachingExpirationStrategy(approachingExpirationStrategy: java.util.function$.Function<java.time.Duration, java.lang.Boolean>): com.rabbitmq.client.impl.DefaultCredentialsRefreshService.DefaultCredentialsRefreshServiceBuilder
                        /**
                         * Create the {@link DefaultCredentialsRefreshService} instance.
                         * @return 
                         */
                        // @ts-ignore
                        public build(): com.rabbitmq.client.impl.DefaultCredentialsRefreshService
                    }
                }
            }
        }
    }
}
