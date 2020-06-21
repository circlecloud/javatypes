declare namespace java {
    namespace sql {
        /**
         * An object that is used to identify a generic SQL type, called a JDBC type or
         * a vendor specific data type.
         * @since 1.8
         */
        // @ts-ignore
        interface SQLType {
            /**
             * Returns the {@code SQLType} name that represents a SQL data type.
             * @return The name of this {#code SQLType}.
             */
            // @ts-ignore
            getName(): string
            /**
             * Returns the name of the vendor that supports this data type. The value
             * returned typically is the package name for this vendor.
             * @return The name of the vendor for this data type
             */
            // @ts-ignore
            getVendor(): string
            /**
             * Returns the vendor specific type number for the data type.
             * @return An Integer representing the vendor specific data type
             */
            // @ts-ignore
            getVendorTypeNumber(): number
        }
    }
}
