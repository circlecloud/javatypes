declare namespace java {
    namespace sql {
        /**
         * Enumeration for pseudo/hidden column usage.
         * @since 1.7
         * @see DatabaseMetaData#getPseudoColumns
         */
        // @ts-ignore
        class PseudoColumnUsage extends java.lang.Enum<java.sql.PseudoColumnUsage> {
            /**
             * The pseudo/hidden column may only be used in a SELECT list.
             */
            // @ts-ignore
            public static readonly SELECT_LIST_ONLY: java.sql.PseudoColumnUsage
            /**
             * The pseudo/hidden column may only be used in a WHERE clause.
             */
            // @ts-ignore
            public static readonly WHERE_CLAUSE_ONLY: java.sql.PseudoColumnUsage
            /**
             * There are no restrictions on the usage of the pseudo/hidden columns.
             */
            // @ts-ignore
            public static readonly NO_USAGE_RESTRICTIONS: java.sql.PseudoColumnUsage
            /**
             * The usage of the pseudo/hidden column cannot be determined.
             */
            // @ts-ignore
            public static readonly USAGE_UNKNOWN: java.sql.PseudoColumnUsage
            // @ts-ignore
            public static values(): java.sql.PseudoColumnUsage[]
            // @ts-ignore
            public static valueOf(name: java.lang.String | string): java.sql.PseudoColumnUsage
        }
    }
}
