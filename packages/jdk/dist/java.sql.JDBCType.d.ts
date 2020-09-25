declare namespace java {
    namespace sql {
        /**
         * <P>Defines the constants that are used to identify generic
         * SQL types, called JDBC types.
         * <p>
         * @see SQLType
         * @since 1.8
         */
        // @ts-ignore
        class JDBCType extends java.lang.Enum<java.sql.JDBCType> implements java.sql.SQLType {
            /**
             * Identifies the generic SQL type {@code BIT}.
             */
            // @ts-ignore
            public static readonly BIT: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code TINYINT}.
             */
            // @ts-ignore
            public static readonly TINYINT: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code SMALLINT}.
             */
            // @ts-ignore
            public static readonly SMALLINT: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code INTEGER}.
             */
            // @ts-ignore
            public static readonly INTEGER: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code BIGINT}.
             */
            // @ts-ignore
            public static readonly BIGINT: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code FLOAT}.
             */
            // @ts-ignore
            public static readonly FLOAT: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code REAL}.
             */
            // @ts-ignore
            public static readonly REAL: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code DOUBLE}.
             */
            // @ts-ignore
            public static readonly DOUBLE: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code NUMERIC}.
             */
            // @ts-ignore
            public static readonly NUMERIC: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code DECIMAL}.
             */
            // @ts-ignore
            public static readonly DECIMAL: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code CHAR}.
             */
            // @ts-ignore
            public static readonly CHAR: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code VARCHAR}.
             */
            // @ts-ignore
            public static readonly VARCHAR: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code LONGVARCHAR}.
             */
            // @ts-ignore
            public static readonly LONGVARCHAR: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code DATE}.
             */
            // @ts-ignore
            public static readonly DATE: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code TIME}.
             */
            // @ts-ignore
            public static readonly TIME: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code TIMESTAMP}.
             */
            // @ts-ignore
            public static readonly TIMESTAMP: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code BINARY}.
             */
            // @ts-ignore
            public static readonly BINARY: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code VARBINARY}.
             */
            // @ts-ignore
            public static readonly VARBINARY: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code LONGVARBINARY}.
             */
            // @ts-ignore
            public static readonly LONGVARBINARY: java.sql.JDBCType
            /**
             * Identifies the generic SQL value {@code NULL}.
             */
            // @ts-ignore
            public static readonly NULL: java.sql.JDBCType
            /**
             * Indicates that the SQL type
             * is database-specific and gets mapped to a Java object that can be
             * accessed via the methods getObject and setObject.
             */
            // @ts-ignore
            public static readonly OTHER: java.sql.JDBCType
            /**
             * Indicates that the SQL type
             * is database-specific and gets mapped to a Java object that can be
             * accessed via the methods getObject and setObject.
             */
            // @ts-ignore
            public static readonly JAVA_OBJECT: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code DISTINCT}.
             */
            // @ts-ignore
            public static readonly DISTINCT: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code STRUCT}.
             */
            // @ts-ignore
            public static readonly STRUCT: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code ARRAY}.
             */
            // @ts-ignore
            public static readonly ARRAY: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code BLOB}.
             */
            // @ts-ignore
            public static readonly BLOB: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code CLOB}.
             */
            // @ts-ignore
            public static readonly CLOB: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code REF}.
             */
            // @ts-ignore
            public static readonly REF: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code DATALINK}.
             */
            // @ts-ignore
            public static readonly DATALINK: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code BOOLEAN}.
             */
            // @ts-ignore
            public static readonly BOOLEAN: java.sql.JDBCType
            /**
             * Identifies the SQL type {@code ROWID}.
             */
            // @ts-ignore
            public static readonly ROWID: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code NCHAR}.
             */
            // @ts-ignore
            public static readonly NCHAR: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code NVARCHAR}.
             */
            // @ts-ignore
            public static readonly NVARCHAR: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code LONGNVARCHAR}.
             */
            // @ts-ignore
            public static readonly LONGNVARCHAR: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code NCLOB}.
             */
            // @ts-ignore
            public static readonly NCLOB: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code SQLXML}.
             */
            // @ts-ignore
            public static readonly SQLXML: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code REF_CURSOR}.
             */
            // @ts-ignore
            public static readonly REF_CURSOR: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code TIME_WITH_TIMEZONE}.
             */
            // @ts-ignore
            public static readonly TIME_WITH_TIMEZONE: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code TIMESTAMP_WITH_TIMEZONE}.
             */
            // @ts-ignore
            public static readonly TIMESTAMP_WITH_TIMEZONE: java.sql.JDBCType
            // @ts-ignore
            public static values(): java.sql.JDBCType[]
            // @ts-ignore
            public static valueOf(name: java.lang.String | string): java.sql.JDBCType
            /**
             * {@inheritDoc }
             * @return The name of this {#code SQLType}.
             */
            // @ts-ignore
            public getName(): string
            /**
             * Returns the name of the vendor that supports this data type.
             * @return The name of the vendor for this data type which is
             *  {#literal java.sql} for JDBCType.
             */
            // @ts-ignore
            public getVendor(): string
            /**
             * Returns the vendor specific type number for the data type.
             * @return An Integer representing the data type. For {#code JDBCType},
             *  the value will be the same value as in {@code Types} for the data type.
             */
            // @ts-ignore
            public getVendorTypeNumber(): number
            /**
             * Returns the {@code JDBCType} that corresponds to the specified
             * {@code Types} value
             * @param type {#code Types} value
             * @return The {#code JDBCType} constant
             * @throws IllegalArgumentException if this enum type has no constant with
             *  the specified {#code Types} value
             * @see Types
             */
            // @ts-ignore
            public static valueOf(type: number /*int*/): java.sql.JDBCType
        }
    }
}
