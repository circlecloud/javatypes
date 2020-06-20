declare namespace java {
    namespace awt {
        namespace datatransfer {
            /**
             * A class that implements a mechanism to transfer data using
             * cut/copy/paste operations.
             * <p>
             * {@link FlavorListener}s may be registered on an instance of the
             * Clipboard class to be notified about changes to the set of
             * {@link DataFlavor}s available on this clipboard (see
             * {@link #addFlavorListener}).
             * @see java.awt.Toolkit#getSystemClipboard
             * @see java.awt.Toolkit#getSystemSelection
             * @author Amy Fowler
             * @author Alexander Gerasimov
             */
            // @ts-ignore
            class Clipboard extends java.lang.Object {
                /**
                 * Creates a clipboard object.
                 * @see java.awt.Toolkit#getSystemClipboard
                 */
                // @ts-ignore
                constructor(name: string)
                // @ts-ignore
                owner: java.awt.datatransfer.ClipboardOwner
                // @ts-ignore
                contents: java.awt.datatransfer.Transferable
                /**
                 * Returns the name of this clipboard object.
                 * @see java.awt.Toolkit#getSystemClipboard
                 */
                // @ts-ignore
                getName(): java.lang.String
                /**
                 * Sets the current contents of the clipboard to the specified
                 * transferable object and registers the specified clipboard owner
                 * as the owner of the new contents.
                 * <p>
                 * If there is an existing owner different from the argument
                 * <code>owner</code>, that owner is notified that it no longer
                 * holds ownership of the clipboard contents via an invocation
                 * of <code>ClipboardOwner.lostOwnership()</code> on that owner.
                 * An implementation of <code>setContents()</code> is free not
                 * to invoke <code>lostOwnership()</code> directly from this method.
                 * For example, <code>lostOwnership()</code> may be invoked later on
                 * a different thread. The same applies to <code>FlavorListener</code>s
                 * registered on this clipboard.
                 * <p>
                 * The method throws <code>IllegalStateException</code> if the clipboard
                 * is currently unavailable. For example, on some platforms, the system
                 * clipboard is unavailable while it is accessed by another application.
                 * @param contents the transferable object representing the
                 *                  clipboard content
                 * @param owner the object which owns the clipboard content
                 * @throws IllegalStateException if the clipboard is currently unavailable
                 * @see java.awt.Toolkit#getSystemClipboard
                 */
                // @ts-ignore
                setContents(contents: java.awt.datatransfer.Transferable, owner: java.awt.datatransfer.ClipboardOwner): void
                /**
                 * Returns a transferable object representing the current contents
                 * of the clipboard.  If the clipboard currently has no contents,
                 * it returns <code>null</code>. The parameter Object requestor is
                 * not currently used.  The method throws
                 * <code>IllegalStateException</code> if the clipboard is currently
                 * unavailable.  For example, on some platforms, the system clipboard is
                 * unavailable while it is accessed by another application.
                 * @param requestor the object requesting the clip data  (not used)
                 * @return the current transferable object on the clipboard
                 * @throws IllegalStateException if the clipboard is currently unavailable
                 * @see java.awt.Toolkit#getSystemClipboard
                 */
                // @ts-ignore
                getContents(requestor: any): java.awt.datatransfer.Transferable
                /**
                 * Returns an array of <code>DataFlavor</code>s in which the current
                 * contents of this clipboard can be provided. If there are no
                 * <code>DataFlavor</code>s available, this method returns a zero-length
                 * array.
                 * @return an array of <code>DataFlavor</code>s in which the current
                 *          contents of this clipboard can be provided
                 * @throws IllegalStateException if this clipboard is currently unavailable
                 * @since 1.5
                 */
                // @ts-ignore
                getAvailableDataFlavors(): java.awt.datatransfer.DataFlavor[]
                /**
                 * Returns whether or not the current contents of this clipboard can be
                 * provided in the specified <code>DataFlavor</code>.
                 * @param flavor the requested <code>DataFlavor</code> for the contents
                 * @return <code>true</code> if the current contents of this clipboard
                 *          can be provided in the specified <code>DataFlavor</code>;
                 *          <code>false</code> otherwise
                 * @throws NullPointerException if <code>flavor</code> is <code>null</code>
                 * @throws IllegalStateException if this clipboard is currently unavailable
                 * @since 1.5
                 */
                // @ts-ignore
                isDataFlavorAvailable(flavor: java.awt.datatransfer.DataFlavor): boolean
                /**
                 * Returns an object representing the current contents of this clipboard
                 * in the specified <code>DataFlavor</code>.
                 * The class of the object returned is defined by the representation
                 * class of <code>flavor</code>.
                 * @param flavor the requested <code>DataFlavor</code> for the contents
                 * @return an object representing the current contents of this clipboard
                 *          in the specified <code>DataFlavor</code>
                 * @throws NullPointerException if <code>flavor</code> is <code>null</code>
                 * @throws IllegalStateException if this clipboard is currently unavailable
                 * @throws UnsupportedFlavorException if the requested <code>DataFlavor</code>
                 *          is not available
                 * @throws IOException if the data in the requested <code>DataFlavor</code>
                 *          can not be retrieved
                 * @see DataFlavor#getRepresentationClass
                 * @since 1.5
                 */
                // @ts-ignore
                getData(flavor: java.awt.datatransfer.DataFlavor): java.lang.Object
                /**
                 * Registers the specified <code>FlavorListener</code> to receive
                 * <code>FlavorEvent</code>s from this clipboard.
                 * If <code>listener</code> is <code>null</code>, no exception
                 * is thrown and no action is performed.
                 * @param listener the listener to be added
                 * @see #removeFlavorListener
                 * @see #getFlavorListeners
                 * @see FlavorListener
                 * @see FlavorEvent
                 * @since 1.5
                 */
                // @ts-ignore
                addFlavorListener(listener: java.awt.datatransfer.FlavorListener): void
                /**
                 * Removes the specified <code>FlavorListener</code> so that it no longer
                 * receives <code>FlavorEvent</code>s from this <code>Clipboard</code>.
                 * This method performs no function, nor does it throw an exception, if
                 * the listener specified by the argument was not previously added to this
                 * <code>Clipboard</code>.
                 * If <code>listener</code> is <code>null</code>, no exception
                 * is thrown and no action is performed.
                 * @param listener the listener to be removed
                 * @see #addFlavorListener
                 * @see #getFlavorListeners
                 * @see FlavorListener
                 * @see FlavorEvent
                 * @since 1.5
                 */
                // @ts-ignore
                removeFlavorListener(listener: java.awt.datatransfer.FlavorListener): void
                /**
                 * Returns an array of all the <code>FlavorListener</code>s currently
                 * registered on this <code>Clipboard</code>.
                 * @return all of this clipboard's <code>FlavorListener</code>s or an empty
                 *          array if no listeners are currently registered
                 * @see #addFlavorListener
                 * @see #removeFlavorListener
                 * @see FlavorListener
                 * @see FlavorEvent
                 * @since 1.5
                 */
                // @ts-ignore
                getFlavorListeners(): java.awt.datatransfer.FlavorListener[]
            }
        }
    }
}
