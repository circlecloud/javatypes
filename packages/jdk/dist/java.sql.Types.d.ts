declare namespace java {
    namespace sql {
        /**
         * <P>The class that defines the constants that are used to identify generic
         * SQL types, called JDBC types.
         * <p>
         * This class is never instantiated.
         */
        // @ts-ignore
        class Types extends java.lang.Object {
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>BIT</code>.
             */
            // @ts-ignore
            public static readonly BIT: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>TINYINT</code>.
             */
            // @ts-ignore
            public static readonly TINYINT: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>SMALLINT</code>.
             */
            // @ts-ignore
            public static readonly SMALLINT: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>INTEGER</code>.
             */
            // @ts-ignore
            public static readonly INTEGER: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>BIGINT</code>.
             */
            // @ts-ignore
            public static readonly BIGINT: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>FLOAT</code>.
             */
            // @ts-ignore
            public static readonly FLOAT: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>REAL</code>.
             */
            // @ts-ignore
            public static readonly REAL: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>DOUBLE</code>.
             */
            // @ts-ignore
            public static readonly DOUBLE: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>NUMERIC</code>.
             */
            // @ts-ignore
            public static readonly NUMERIC: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>DECIMAL</code>.
             */
            // @ts-ignore
            public static readonly DECIMAL: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>CHAR</code>.
             */
            // @ts-ignore
            public static readonly CHAR: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>VARCHAR</code>.
             */
            // @ts-ignore
            public static readonly VARCHAR: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>LONGVARCHAR</code>.
             */
            // @ts-ignore
            public static readonly LONGVARCHAR: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>DATE</code>.
             */
            // @ts-ignore
            public static readonly DATE: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>TIME</code>.
             */
            // @ts-ignore
            public static readonly TIME: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>TIMESTAMP</code>.
             */
            // @ts-ignore
            public static readonly TIMESTAMP: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>BINARY</code>.
             */
            // @ts-ignore
            public static readonly BINARY: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>VARBINARY</code>.
             */
            // @ts-ignore
            public static readonly VARBINARY: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>LONGVARBINARY</code>.
             */
            // @ts-ignore
            public static readonly LONGVARBINARY: number /*int*/
            /**
             * <P>The constant in the Java programming language
             * that identifies the generic SQL value
             * <code>NULL</code>.
             */
            // @ts-ignore
            public static readonly NULL: number /*int*/
            /**
             * The constant in the Java programming language that indicates
             * that the SQL type is database-specific and
             * gets mapped to a Java object that can be accessed via
             * the methods <code>getObject</code> and <code>setObject</code>.
             */
            // @ts-ignore
            public static readonly OTHER: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type
             * <code>JAVA_OBJECT</code>.
             * @since 1.2
             */
            // @ts-ignore
            public static readonly JAVA_OBJECT: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type
             * <code>DISTINCT</code>.
             * @since 1.2
             */
            // @ts-ignore
            public static readonly DISTINCT: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type
             * <code>STRUCT</code>.
             * @since 1.2
             */
            // @ts-ignore
            public static readonly STRUCT: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type
             * <code>ARRAY</code>.
             * @since 1.2
             */
            // @ts-ignore
            public static readonly ARRAY: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type
             * <code>BLOB</code>.
             * @since 1.2
             */
            // @ts-ignore
            public static readonly BLOB: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type
             * <code>CLOB</code>.
             * @since 1.2
             */
            // @ts-ignore
            public static readonly CLOB: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type
             * <code>REF</code>.
             * @since 1.2
             */
            // @ts-ignore
            public static readonly REF: number /*int*/
            /**
             * The constant in the Java programming language, somtimes referred to
             * as a type code, that identifies the generic SQL type <code>DATALINK</code>.
             * @since 1.4
             */
            // @ts-ignore
            public static readonly DATALINK: number /*int*/
            /**
             * The constant in the Java programming language, somtimes referred to
             * as a type code, that identifies the generic SQL type <code>BOOLEAN</code>.
             * @since 1.4
             */
            // @ts-ignore
            public static readonly BOOLEAN: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type <code>ROWID</code>
             * @since 1.6
             */
            // @ts-ignore
            public static readonly ROWID: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type <code>NCHAR</code>
             * @since 1.6
             */
            // @ts-ignore
            public static readonly NCHAR: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type <code>NVARCHAR</code>.
             * @since 1.6
             */
            // @ts-ignore
            public static readonly NVARCHAR: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type <code>LONGNVARCHAR</code>.
             * @since 1.6
             */
            // @ts-ignore
            public static readonly LONGNVARCHAR: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type <code>NCLOB</code>.
             * @since 1.6
             */
            // @ts-ignore
            public static readonly NCLOB: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type <code>XML</code>.
             * @since 1.6
             */
            // @ts-ignore
            public static readonly SQLXML: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type {@code REF CURSOR}.
             * @since 1.8
             */
            // @ts-ignore
            public static readonly REF_CURSOR: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type
             * {@code TIME WITH TIMEZONE}.
             * @since 1.8
             */
            // @ts-ignore
            public static readonly TIME_WITH_TIMEZONE: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type
             * {@code TIMESTAMP WITH TIMEZONE}.
             * @since 1.8
             */
            // @ts-ignore
            public static readonly TIMESTAMP_WITH_TIMEZONE: number /*int*/
        }
    }
}
