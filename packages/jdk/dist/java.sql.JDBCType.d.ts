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
            readonly BIT: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code TINYINT}.
             */
            // @ts-ignore
            readonly TINYINT: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code SMALLINT}.
             */
            // @ts-ignore
            readonly SMALLINT: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code INTEGER}.
             */
            // @ts-ignore
            readonly INTEGER: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code BIGINT}.
             */
            // @ts-ignore
            readonly BIGINT: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code FLOAT}.
             */
            // @ts-ignore
            readonly FLOAT: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code REAL}.
             */
            // @ts-ignore
            readonly REAL: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code DOUBLE}.
             */
            // @ts-ignore
            readonly DOUBLE: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code NUMERIC}.
             */
            // @ts-ignore
            readonly NUMERIC: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code DECIMAL}.
             */
            // @ts-ignore
            readonly DECIMAL: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code CHAR}.
             */
            // @ts-ignore
            readonly CHAR: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code VARCHAR}.
             */
            // @ts-ignore
            readonly VARCHAR: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code LONGVARCHAR}.
             */
            // @ts-ignore
            readonly LONGVARCHAR: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code DATE}.
             */
            // @ts-ignore
            readonly DATE: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code TIME}.
             */
            // @ts-ignore
            readonly TIME: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code TIMESTAMP}.
             */
            // @ts-ignore
            readonly TIMESTAMP: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code BINARY}.
             */
            // @ts-ignore
            readonly BINARY: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code VARBINARY}.
             */
            // @ts-ignore
            readonly VARBINARY: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code LONGVARBINARY}.
             */
            // @ts-ignore
            readonly LONGVARBINARY: java.sql.JDBCType
            /**
             * Identifies the generic SQL value {@code NULL}.
             */
            // @ts-ignore
            readonly NULL: java.sql.JDBCType
            /**
             * Indicates that the SQL type
             * is database-specific and gets mapped to a Java object that can be
             * accessed via the methods getObject and setObject.
             */
            // @ts-ignore
            readonly OTHER: java.sql.JDBCType
            /**
             * Indicates that the SQL type
             * is database-specific and gets mapped to a Java object that can be
             * accessed via the methods getObject and setObject.
             */
            // @ts-ignore
            readonly JAVA_OBJECT: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code DISTINCT}.
             */
            // @ts-ignore
            readonly DISTINCT: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code STRUCT}.
             */
            // @ts-ignore
            readonly STRUCT: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code ARRAY}.
             */
            // @ts-ignore
            readonly ARRAY: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code BLOB}.
             */
            // @ts-ignore
            readonly BLOB: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code CLOB}.
             */
            // @ts-ignore
            readonly CLOB: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code REF}.
             */
            // @ts-ignore
            readonly REF: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code DATALINK}.
             */
            // @ts-ignore
            readonly DATALINK: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code BOOLEAN}.
             */
            // @ts-ignore
            readonly BOOLEAN: java.sql.JDBCType
            /**
             * Identifies the SQL type {@code ROWID}.
             */
            // @ts-ignore
            readonly ROWID: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code NCHAR}.
             */
            // @ts-ignore
            readonly NCHAR: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code NVARCHAR}.
             */
            // @ts-ignore
            readonly NVARCHAR: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code LONGNVARCHAR}.
             */
            // @ts-ignore
            readonly LONGNVARCHAR: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code NCLOB}.
             */
            // @ts-ignore
            readonly NCLOB: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code SQLXML}.
             */
            // @ts-ignore
            readonly SQLXML: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code REF_CURSOR}.
             */
            // @ts-ignore
            readonly REF_CURSOR: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code TIME_WITH_TIMEZONE}.
             */
            // @ts-ignore
            readonly TIME_WITH_TIMEZONE: java.sql.JDBCType
            /**
             * Identifies the generic SQL type {@code TIMESTAMP_WITH_TIMEZONE}.
             */
            // @ts-ignore
            readonly TIMESTAMP_WITH_TIMEZONE: java.sql.JDBCType
            // @ts-ignore
            values(): java.sql.JDBCType[]
            // @ts-ignore
            valueOf(name: java.lang.String | string): java.sql.JDBCType
            /**
             * {@inheritDoc }
             * @return The name of this {#code SQLType}.
             */
            // @ts-ignore
            getName(): string
            /**
             * Returns the name of the vendor that supports this data type.
             * @return The name of the vendor for this data type which is
             *  {#literal java.sql} for JDBCType.
             */
            // @ts-ignore
            getVendor(): string
            /**
             * Returns the vendor specific type number for the data type.
             * @return An Integer representing the data type. For {#code JDBCType},
             *  the value will be the same value as in {@code Types} for the data type.
             */
            // @ts-ignore
            getVendorTypeNumber(): number
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
            valueOf(type: number /*int*/): java.sql.JDBCType
        }
    }
}
