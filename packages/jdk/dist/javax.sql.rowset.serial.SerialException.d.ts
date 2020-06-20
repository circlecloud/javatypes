declare namespace javax {
    namespace sql {
        namespace rowset {
            namespace serial {
                /**
                 * Indicates and an error with the serialization or de-serialization of
                 * SQL types such as <code>BLOB, CLOB, STRUCT or ARRAY</code> in
                 * addition to SQL types such as <code>DATALINK and JAVAOBJECT</code>
                 */
                // @ts-ignore
                class SerialException extends java.sql.SQLException {
                    /**
                     * Creates a new <code>SerialException</code> without a
                     * message.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a new <code>SerialException</code> with the
                     * specified message.
                     * @param msg the detail message
                     */
                    // @ts-ignore
                    constructor(msg: string)
                }
            }
        }
    }
}
