declare namespace javax {
    namespace transaction {
        namespace xa {
            /**
             * The Xid interface is a Java mapping of the X/Open transaction identifier
             * XID structure. This interface specifies three accessor methods to
             * retrieve a global transaction format ID, global transaction ID,
             * and branch qualifier. The Xid interface is used by the transaction
             * manager and the resource managers. This interface is not visible to
             * the application programs.
             */
            // @ts-ignore
            interface Xid {
                /**
                 * Maximum number of bytes returned by getGtrid.
                 */
                // @ts-ignore
                
                /**
                 * Maximum number of bytes returned by getBqual.
                 */
                // @ts-ignore
                
                /**
                 * Obtain the format identifier part of the XID.
                 * @return Format identifier. O means the OSI CCR format.
                 */
                // @ts-ignore
                getFormatId(): int
                /**
                 * Obtain the global transaction identifier part of XID as an array
                 * of bytes.
                 * @return Global transaction identifier.
                 */
                // @ts-ignore
                getGlobalTransactionId(): byte[]
                /**
                 * Obtain the transaction branch identifier part of XID as an array
                 * of bytes.
                 * @return Global transaction identifier.
                 */
                // @ts-ignore
                getBranchQualifier(): byte[]
            }
        }
    }
}
