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
            // @ts-ignore
            values(): java.sql.JDBCType[]
            // @ts-ignore
            valueOf(name: string): java.sql.JDBCType
            /**
             * {@inheritDoc }
             * @return The name of this {#code SQLType}.
             */
            // @ts-ignore
            getName(): java.lang.String
            /**
             * Returns the name of the vendor that supports this data type.
             * @return The name of the vendor for this data type which is
             *  {#literal java.sql} for JDBCType.
             */
            // @ts-ignore
            getVendor(): java.lang.String
            /**
             * Returns the vendor specific type number for the data type.
             * @return An Integer representing the data type. For {#code JDBCType},
             *  the value will be the same value as in {@code Types} for the data type.
             */
            // @ts-ignore
            getVendorTypeNumber(): java.lang.Integer
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
