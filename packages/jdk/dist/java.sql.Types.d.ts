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
            readonly BIT: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>TINYINT</code>.
             */
            // @ts-ignore
            readonly TINYINT: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>SMALLINT</code>.
             */
            // @ts-ignore
            readonly SMALLINT: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>INTEGER</code>.
             */
            // @ts-ignore
            readonly INTEGER: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>BIGINT</code>.
             */
            // @ts-ignore
            readonly BIGINT: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>FLOAT</code>.
             */
            // @ts-ignore
            readonly FLOAT: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>REAL</code>.
             */
            // @ts-ignore
            readonly REAL: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>DOUBLE</code>.
             */
            // @ts-ignore
            readonly DOUBLE: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>NUMERIC</code>.
             */
            // @ts-ignore
            readonly NUMERIC: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>DECIMAL</code>.
             */
            // @ts-ignore
            readonly DECIMAL: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>CHAR</code>.
             */
            // @ts-ignore
            readonly CHAR: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>VARCHAR</code>.
             */
            // @ts-ignore
            readonly VARCHAR: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>LONGVARCHAR</code>.
             */
            // @ts-ignore
            readonly LONGVARCHAR: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>DATE</code>.
             */
            // @ts-ignore
            readonly DATE: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>TIME</code>.
             */
            // @ts-ignore
            readonly TIME: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>TIMESTAMP</code>.
             */
            // @ts-ignore
            readonly TIMESTAMP: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>BINARY</code>.
             */
            // @ts-ignore
            readonly BINARY: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>VARBINARY</code>.
             */
            // @ts-ignore
            readonly VARBINARY: number /*int*/
            /**
             * <P>The constant in the Java programming language, sometimes referred
             * to as a type code, that identifies the generic SQL type
             * <code>LONGVARBINARY</code>.
             */
            // @ts-ignore
            readonly LONGVARBINARY: number /*int*/
            /**
             * <P>The constant in the Java programming language
             * that identifies the generic SQL value
             * <code>NULL</code>.
             */
            // @ts-ignore
            readonly NULL: number /*int*/
            /**
             * The constant in the Java programming language that indicates
             * that the SQL type is database-specific and
             * gets mapped to a Java object that can be accessed via
             * the methods <code>getObject</code> and <code>setObject</code>.
             */
            // @ts-ignore
            readonly OTHER: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type
             * <code>JAVA_OBJECT</code>.
             * @since 1.2
             */
            // @ts-ignore
            readonly JAVA_OBJECT: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type
             * <code>DISTINCT</code>.
             * @since 1.2
             */
            // @ts-ignore
            readonly DISTINCT: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type
             * <code>STRUCT</code>.
             * @since 1.2
             */
            // @ts-ignore
            readonly STRUCT: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type
             * <code>ARRAY</code>.
             * @since 1.2
             */
            // @ts-ignore
            readonly ARRAY: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type
             * <code>BLOB</code>.
             * @since 1.2
             */
            // @ts-ignore
            readonly BLOB: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type
             * <code>CLOB</code>.
             * @since 1.2
             */
            // @ts-ignore
            readonly CLOB: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type
             * <code>REF</code>.
             * @since 1.2
             */
            // @ts-ignore
            readonly REF: number /*int*/
            /**
             * The constant in the Java programming language, somtimes referred to
             * as a type code, that identifies the generic SQL type <code>DATALINK</code>.
             * @since 1.4
             */
            // @ts-ignore
            readonly DATALINK: number /*int*/
            /**
             * The constant in the Java programming language, somtimes referred to
             * as a type code, that identifies the generic SQL type <code>BOOLEAN</code>.
             * @since 1.4
             */
            // @ts-ignore
            readonly BOOLEAN: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type <code>ROWID</code>
             * @since 1.6
             */
            // @ts-ignore
            readonly ROWID: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type <code>NCHAR</code>
             * @since 1.6
             */
            // @ts-ignore
            readonly NCHAR: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type <code>NVARCHAR</code>.
             * @since 1.6
             */
            // @ts-ignore
            readonly NVARCHAR: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type <code>LONGNVARCHAR</code>.
             * @since 1.6
             */
            // @ts-ignore
            readonly LONGNVARCHAR: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type <code>NCLOB</code>.
             * @since 1.6
             */
            // @ts-ignore
            readonly NCLOB: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type <code>XML</code>.
             * @since 1.6
             */
            // @ts-ignore
            readonly SQLXML: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type {@code REF CURSOR}.
             * @since 1.8
             */
            // @ts-ignore
            readonly REF_CURSOR: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type
             * {@code TIME WITH TIMEZONE}.
             * @since 1.8
             */
            // @ts-ignore
            readonly TIME_WITH_TIMEZONE: number /*int*/
            /**
             * The constant in the Java programming language, sometimes referred to
             * as a type code, that identifies the generic SQL type
             * {@code TIMESTAMP WITH TIMEZONE}.
             * @since 1.8
             */
            // @ts-ignore
            readonly TIMESTAMP_WITH_TIMEZONE: number /*int*/
        }
    }
}
