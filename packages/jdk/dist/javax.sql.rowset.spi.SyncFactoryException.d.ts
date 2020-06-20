declare namespace javax {
    namespace sql {
        namespace rowset {
            namespace spi {
                /**
                 * Indicates an error with <code>SyncFactory</code> mechanism. A disconnected
                 * RowSet implementation cannot be used  without a <code>SyncProvider</code>
                 * being successfully instantiated
                 * @author Jonathan Bruce
                 * @see javax.sql.rowset.spi.SyncFactory
                 * @see javax.sql.rowset.spi.SyncFactoryException
                 */
                // @ts-ignore
                class SyncFactoryException extends java.sql.SQLException {
                    /**
                     * Creates new <code>SyncFactoryException</code> without detail message.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs an <code>SyncFactoryException</code> with the specified
                     * detail message.
                     * @param msg the detail message.
                     */
                    // @ts-ignore
                    constructor(msg: string)
                }
            }
        }
    }
}
