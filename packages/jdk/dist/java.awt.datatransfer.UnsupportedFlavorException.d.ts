declare namespace java {
    namespace awt {
        namespace datatransfer {
            /**
             * Signals that the requested data is not supported in this flavor.
             * @see Transferable#getTransferData
             * @author Amy Fowler
             */
            // @ts-ignore
            class UnsupportedFlavorException extends java.lang.Exception {
                /**
                 * Constructs an UnsupportedFlavorException.
                 * @param flavor the flavor object which caused the exception. May
                 *         be <code>null</code>.
                 */
                // @ts-ignore
                constructor(flavor: java.awt.datatransfer.DataFlavor)
            }
        }
    }
}
