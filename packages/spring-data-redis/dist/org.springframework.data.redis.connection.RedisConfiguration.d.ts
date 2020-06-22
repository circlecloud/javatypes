declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Marker interface for configuration classes related to Redis connection setup. As the setup scenarios are quite
                     * diverse instead of struggling with unifying those, {@link RedisConfiguration} provides means to identify
                     * configurations for the individual purposes.
                     * @author Christoph Strobl
                     * @author Luis De Bello
                     * @since 2.1
                     */
                    // @ts-ignore
                    interface RedisConfiguration {
                        /**
                         * Get the configured database index if the current {@link RedisConfiguration} is
                         * {@link #isDatabaseIndexAware(RedisConfiguration) database aware} or evaluate and return the value of the given
                         * {@link Supplier}.
                         * @param other a {#code Supplier} whose result is returned if given {@link RedisConfiguration} is not
                         *           {@link #isDatabaseIndexAware(RedisConfiguration) database aware}.
                         * @return never {#literal null}.
                         * @throws IllegalArgumentException if {#code other} is {@literal null}.
                         */
                        // @ts-ignore
                        getDatabaseOrElse(other: java.util.function$.Supplier<java.lang.Integer | number>): number
                        /**
                         * Get the configured {@link RedisPassword} if the current {@link RedisConfiguration} is
                         * {@link #isPasswordAware(RedisConfiguration) password aware} or evaluate and return the value of the given
                         * {@link Supplier}.
                         * @param other a {#code Supplier} whose result is returned if given {@link RedisConfiguration} is not
                         *           {@link #isPasswordAware(RedisConfiguration) password aware}.
                         * @return never {#literal null}.
                         * @throws IllegalArgumentException if {#code other} is {@literal null}.
                         */
                        // @ts-ignore
                        getPasswordOrElse(other: java.util.function$.Supplier<org.springframework.data.redis.connection.RedisPassword>): org.springframework.data.redis.connection.RedisPassword
                        /**
                         * @param configuration can be {#literal null}.
                         * @return {#code true} if given {@link RedisConfiguration} is instance of {@link WithPassword}.
                         */
                        // @ts-ignore
                        isPasswordAware(configuration: org.springframework.data.redis.connection.RedisConfiguration): boolean
                        /**
                         * @param configuration can be {#literal null}.
                         * @return {#code true} if given {@link RedisConfiguration} is instance of {@link WithDatabaseIndex}.
                         */
                        // @ts-ignore
                        isDatabaseIndexAware(configuration: org.springframework.data.redis.connection.RedisConfiguration): boolean
                        /**
                         * @param configuration can be {#literal null}.
                         * @return {#code true} if given {@link RedisConfiguration} is instance of {@link SentinelConfiguration}.
                         */
                        // @ts-ignore
                        isSentinelConfiguration(configuration: org.springframework.data.redis.connection.RedisConfiguration): boolean
                        /**
                         * @param configuration can be {#literal null}.
                         * @return {#code true} if given {@link RedisConfiguration} is instance of {@link WithHostAndPort}.
                         * @since 2.1.6
                         */
                        // @ts-ignore
                        isHostAndPortAware(configuration: org.springframework.data.redis.connection.RedisConfiguration): boolean
                        /**
                         * @param configuration can be {#literal null}.
                         * @return {#code true} if given {@link RedisConfiguration} is instance of {@link ClusterConfiguration}.
                         */
                        // @ts-ignore
                        isClusterConfiguration(configuration: org.springframework.data.redis.connection.RedisConfiguration): boolean
                        /**
                         * @param configuration can be {#literal null}.
                         * @return {#code true} if given {@link RedisConfiguration} is instance of {@link StaticMasterReplicaConfiguration}.
                         */
                        // @ts-ignore
                        isStaticMasterReplicaConfiguration(configuration: org.springframework.data.redis.connection.RedisConfiguration): boolean
                        /**
                         * @param configuration can be {#literal null}.
                         * @return {#code true} if given {@link RedisConfiguration} is instance of {@link DomainSocketConfiguration}.
                         */
                        // @ts-ignore
                        isDomainSocketConfiguration(configuration: org.springframework.data.redis.connection.RedisConfiguration): boolean
                        /**
                         * @param configuration can be {#literal null}.
                         * @param other a {#code Supplier} whose result is returned if given {@link RedisConfiguration} is not
                         *           {@link #isDatabaseIndexAware(RedisConfiguration) database aware}.
                         * @return never {#literal null}.
                         * @throws IllegalArgumentException if {#code other} is {@literal null}.
                         */
                        // @ts-ignore
                        getDatabaseOrElse(configuration: org.springframework.data.redis.connection.RedisConfiguration, other: java.util.function$.Supplier<java.lang.Integer | number>): number
                        /**
                         * @param configuration can be {#literal null}.
                         * @param other a {#code Supplier} whose result is returned if given {@link RedisConfiguration} is not
                         *           {@link #isPasswordAware(RedisConfiguration) password aware}.
                         * @return never {#literal null}.
                         * @throws IllegalArgumentException if {#code other} is {@literal null}.
                         */
                        // @ts-ignore
                        getPasswordOrElse(configuration: org.springframework.data.redis.connection.RedisConfiguration, other: java.util.function$.Supplier<org.springframework.data.redis.connection.RedisPassword>): org.springframework.data.redis.connection.RedisPassword
                        /**
                         * @param configuration can be {#literal null}.
                         * @param other a {#code Supplier} whose result is returned if given {@link RedisConfiguration} is not
                         *           {@link #isHostAndPortAware(RedisConfiguration) port aware}.
                         * @return never {#literal null}.
                         * @throws IllegalArgumentException if {#code other} is {@literal null}.
                         * @since 2.1.6
                         */
                        // @ts-ignore
                        getPortOrElse(configuration: org.springframework.data.redis.connection.RedisConfiguration, other: java.util.function$.IntSupplier): number /*int*/
                        /**
                         * @param configuration can be {#literal null}.
                         * @param other a {#code Supplier} whose result is returned if given {@link RedisConfiguration} is not
                         *           {@link #isHostAndPortAware(RedisConfiguration) host aware}.
                         * @return never {#literal null}.
                         * @throws IllegalArgumentException if {#code other} is {@literal null}.
                         * @since 2.1.6
                         */
                        // @ts-ignore
                        getHostOrElse(configuration: org.springframework.data.redis.connection.RedisConfiguration, other: java.util.function$.Supplier<java.lang.String | string>): string
                    }
                }
            }
        }
    }
}
