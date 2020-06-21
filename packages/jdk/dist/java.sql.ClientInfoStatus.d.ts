declare namespace java {
    namespace sql {
        /**
         * Enumeration for status of the reason that a property could not be set
         * via a call to <code>Connection.setClientInfo</code>
         * @since 1.6
         */
        // @ts-ignore
        class ClientInfoStatus extends java.lang.Enum<java.sql.ClientInfoStatus> {
            /**
             * The client info property could not be set for some unknown reason
             * @since 1.6
             */
            // @ts-ignore
            readonly REASON_UNKNOWN: java.sql.ClientInfoStatus
            /**
             * The client info property name specified was not a recognized property
             * name.
             * @since 1.6
             */
            // @ts-ignore
            readonly REASON_UNKNOWN_PROPERTY: java.sql.ClientInfoStatus
            /**
             * The value specified for the client info property was not valid.
             * @since 1.6
             */
            // @ts-ignore
            readonly REASON_VALUE_INVALID: java.sql.ClientInfoStatus
            /**
             * The value specified for the client info property was too large.
             * @since 1.6
             */
            // @ts-ignore
            readonly REASON_VALUE_TRUNCATED: java.sql.ClientInfoStatus
            // @ts-ignore
            values(): java.sql.ClientInfoStatus[]
            // @ts-ignore
            valueOf(name: java.lang.String | string): java.sql.ClientInfoStatus
        }
    }
}
