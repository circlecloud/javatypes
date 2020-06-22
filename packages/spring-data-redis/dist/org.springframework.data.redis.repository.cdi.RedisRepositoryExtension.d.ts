declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace repository {
                    namespace cdi {
                        /**
                         * CDI extension to export Redis repositories. This extension enables Redis
                         * {@link org.springframework.data.repository.Repository} support. It requires either a {@link RedisKeyValueTemplate} or a
                         * {@link RedisOperations} bean. If no {@link RedisKeyValueTemplate} or {@link RedisKeyValueAdapter} are provided by the
                         * user, the extension creates own managed beans.
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class RedisRepositoryExtension extends CdiRepositoryExtensionSupport {
                            // @ts-ignore
                            constructor()
                        }
                    }
                }
            }
        }
    }
}
