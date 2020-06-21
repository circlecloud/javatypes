declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace namedparam {
                    /**
                     * Extension of JdbcDaoSupport that exposes a NamedParameterJdbcTemplate as well.
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see NamedParameterJdbcTemplate
                     */
                    // @ts-ignore
                    class NamedParameterJdbcDaoSupport extends org.springframework.jdbc.core.support.JdbcDaoSupport {
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a NamedParameterJdbcTemplate based on the configured JdbcTemplate.
                         */
                        // @ts-ignore
                        initTemplateConfig(): void
                        /**
                         * Return a NamedParameterJdbcTemplate wrapping the configured JdbcTemplate.
                         */
                        // @ts-ignore
                        public getNamedParameterJdbcTemplate(): org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate
                    }
                }
            }
        }
    }
}
