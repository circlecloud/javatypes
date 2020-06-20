declare namespace java {
    namespace awt {
        namespace dnd {
            namespace DropTargetContext {
                /**
                 * <code>TransferableProxy</code> is a helper inner class that implements
                 * <code>Transferable</code> interface and serves as a proxy for another
                 * <code>Transferable</code> object which represents data transfer for
                 * a particular drag-n-drop operation.
                 * <p>
                 * The proxy forwards all requests to the encapsulated transferable
                 * and automatically performs additional conversion on the data
                 * returned by the encapsulated transferable in case of local transfer.
                 */
                // @ts-ignore
                class TransferableProxy extends java.lang.Object implements java.awt.datatransfer.Transferable {
                    /**
                     * The encapsulated <code>Transferable</code> object.
                     */
                    // @ts-ignore
                    transferable: java.awt.datatransfer.Transferable
                    /**
                     * A <code>boolean</code> indicating if the encapsulated
                     * <code>Transferable</code> object represents the result
                     * of local drag-n-drop operation (within the same JVM).
                     */
                    // @ts-ignore
                    isLocal: boolean
                    /**
                     * Returns an array of DataFlavor objects indicating the flavors
                     * the data can be provided in by the encapsulated transferable.
                     * <p>
                     * @return an array of data flavors in which the data can be
                     *          provided by the encapsulated transferable
                     */
                    // @ts-ignore
                    getTransferDataFlavors(): java.awt.datatransfer.DataFlavor[]
                    /**
                     * Returns whether or not the specified data flavor is supported by
                     * the encapsulated transferable.
                     * @param flavor the requested flavor for the data
                     * @return <code>true</code> if the data flavor is supported,
                     *          <code>false</code> otherwise
                     */
                    // @ts-ignore
                    isDataFlavorSupported(flavor: java.awt.datatransfer.DataFlavor): boolean
                    /**
                     * Returns an object which represents the data provided by
                     * the encapsulated transferable for the requested data flavor.
                     * <p>
                     * In case of local transfer a serialized copy of the object
                     * returned by the encapsulated transferable is provided when
                     * the data is requested in application/x-java-serialized-object
                     * data flavor.
                     * @param df the requested flavor for the data
                     * @throws IOException if the data is no longer available
                     *               in the requested flavor.
                     * @throws UnsupportedFlavorException if the requested data flavor is
                     *               not supported.
                     */
                    // @ts-ignore
                    getTransferData(df: java.awt.datatransfer.DataFlavor): java.lang.Object
                }
            }
        }
    }
}
