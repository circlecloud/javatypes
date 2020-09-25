declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                namespace embedded {
                    /**
                     * A supported embedded database type.
                     * @author Keith Donald
                     * @author Oliver Gierke
                     * @since 3.0
                     */
                    // @ts-ignore
                    class EmbeddedDatabaseType extends java.lang.Enum<org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType> {
                        /**
                         * The <a href="http://hsqldb.org">Hypersonic</a> Embedded Java SQL Database.
                         */
                        // @ts-ignore
                        public static readonly HSQL: org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType
                        /**
                         * The <a href="https://h2database.com">H2</a> Embedded Java SQL Database Engine.
                         */
                        // @ts-ignore
                        public static readonly H2: org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType
                        /**
                         * The <a href="https://db.apache.org/derby">Apache Derby</a> Embedded SQL Database.
                         */
                        // @ts-ignore
                        public static readonly DERBY: org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType
                        // @ts-ignore
                        public static values(): org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType
                    }
                }
            }
        }
    }
}
