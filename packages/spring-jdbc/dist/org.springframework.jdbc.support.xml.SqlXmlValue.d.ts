declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace xml {
                    /**
                     * Subinterface of {@link org.springframework.jdbc.support.SqlValue}
                     * that supports passing in XML data to specified column and adds a
                     * cleanup callback, to be invoked after the value has been set and
                     * the corresponding statement has been executed.
                     * @author Thomas Risberg
                     * @since 2.5.5
                     * @see org.springframework.jdbc.support.SqlValue
                     */
                    // @ts-ignore
                    interface SqlXmlValue extends org.springframework.jdbc.support.SqlValue {
                    }
                }
            }
        }
    }
}
