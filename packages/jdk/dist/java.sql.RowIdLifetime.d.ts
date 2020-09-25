declare namespace java {
    namespace sql {
        /**
         * Enumeration for RowId life-time values.
         * @since 1.6
         */
        // @ts-ignore
        class RowIdLifetime extends java.lang.Enum<java.sql.RowIdLifetime> {
            /**
             * Indicates that this data source does not support the ROWID type.
             */
            // @ts-ignore
            public static readonly ROWID_UNSUPPORTED: java.sql.RowIdLifetime
            /**
             * Indicates that the lifetime of a RowId from this data source is indeterminate;
             * but not one of ROWID_VALID_TRANSACTION, ROWID_VALID_SESSION, or,
             * ROWID_VALID_FOREVER.
             */
            // @ts-ignore
            public static readonly ROWID_VALID_OTHER: java.sql.RowIdLifetime
            /**
             * Indicates that the lifetime of a RowId from this data source is at least the
             * containing session.
             */
            // @ts-ignore
            public static readonly ROWID_VALID_SESSION: java.sql.RowIdLifetime
            /**
             * Indicates that the lifetime of a RowId from this data source is at least the
             * containing transaction.
             */
            // @ts-ignore
            public static readonly ROWID_VALID_TRANSACTION: java.sql.RowIdLifetime
            /**
             * Indicates that the lifetime of a RowId from this data source is, effectively,
             * unlimited.
             */
            // @ts-ignore
            public static readonly ROWID_VALID_FOREVER: java.sql.RowIdLifetime
            // @ts-ignore
            public static values(): java.sql.RowIdLifetime[]
            // @ts-ignore
            public static valueOf(name: java.lang.String | string): java.sql.RowIdLifetime
        }
    }
}
