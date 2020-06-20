declare namespace javax {
    namespace swing {
        /**
         * This class is used to handle the transfer of a <code>Transferable</code>
         * to and from Swing components.  The <code>Transferable</code> is used to
         * represent data that is exchanged via a cut, copy, or paste
         * to/from a clipboard.  It is also used in drag-and-drop operations
         * to represent a drag from a component, and a drop to a component.
         * Swing provides functionality that automatically supports cut, copy,
         * and paste keyboard bindings that use the functionality provided by
         * an implementation of this class.  Swing also provides functionality
         * that automatically supports drag and drop that uses the functionality
         * provided by an implementation of this class.  The Swing developer can
         * concentrate on specifying the semantics of a transfer primarily by setting
         * the <code>transferHandler</code> property on a Swing component.
         * <p>
         * This class is implemented to provide a default behavior of transferring
         * a component property simply by specifying the name of the property in
         * the constructor.  For example, to transfer the foreground color from
         * one component to another either via the clipboard or a drag and drop operation
         * a <code>TransferHandler</code> can be constructed with the string "foreground".  The
         * built in support will use the color returned by <code>getForeground</code> as the source
         * of the transfer, and <code>setForeground</code> for the target of a transfer.
         * <p>
         * Please see
         * <a href="https://docs.oracle.com/javase/tutorial/uiswing/dnd/index.html">
         * How to Use Drag and Drop and Data Transfer</a>,
         * a section in <em>The Java Tutorial</em>, for more information.
         * @author Timothy Prinzing
         * @author Shannon Hickey
         * @since 1.4
         */
        // @ts-ignore
        class TransferHandler extends java.lang.Object implements java.io.Serializable {
            /**
             * Constructs a transfer handler that can transfer a Java Bean property
             * from one component to another via the clipboard or a drag and drop
             * operation.
             * @param property  the name of the property to transfer; this can
             *   be <code>null</code> if there is no property associated with the transfer
             *   handler (a subclass that performs some other kind of transfer, for example)
             */
            // @ts-ignore
            constructor(property: string)
            /**
             * Convenience constructor for subclasses.
             */
            // @ts-ignore
            constructor()
            /**
             * An <code>int</code> representing no transfer action.
             */
            // @ts-ignore
            readonly NONE: number /*int*/
            /**
             * An <code>int</code> representing a &quot;copy&quot; transfer action.
             * This value is used when data is copied to a clipboard
             * or copied elsewhere in a drag and drop operation.
             */
            // @ts-ignore
            readonly COPY: number /*int*/
            /**
             * An <code>int</code> representing a &quot;move&quot; transfer action.
             * This value is used when data is moved to a clipboard (i.e. a cut)
             * or moved elsewhere in a drag and drop operation.
             */
            // @ts-ignore
            readonly MOVE: number /*int*/
            /**
             * An <code>int</code> representing a source action capability of either
             * &quot;copy&quot; or &quot;move&quot;.
             */
            // @ts-ignore
            readonly COPY_OR_MOVE: number /*int*/
            /**
             * An <code>int</code> representing a &quot;link&quot; transfer action.
             * This value is used to specify that data should be linked in a drag
             * and drop operation.
             * @see java.awt.dnd.DnDConstants#ACTION_LINK
             * @since 1.6
             */
            // @ts-ignore
            readonly LINK: number /*int*/
            /**
             * Returns an {@code Action} that performs cut operations to the
             * clipboard. When performed, this action operates on the {@code JComponent}
             * source of the {@code ActionEvent} by invoking {@code exportToClipboard},
             * with a {@code MOVE} action, on the component's {@code TransferHandler}.
             * @return an {#code Action} for performing cuts to the clipboard
             */
            // @ts-ignore
            getCutAction(): javax.swing.Action
            /**
             * Returns an {@code Action} that performs copy operations to the
             * clipboard. When performed, this action operates on the {@code JComponent}
             * source of the {@code ActionEvent} by invoking {@code exportToClipboard},
             * with a {@code COPY} action, on the component's {@code TransferHandler}.
             * @return an {#code Action} for performing copies to the clipboard
             */
            // @ts-ignore
            getCopyAction(): javax.swing.Action
            /**
             * Returns an {@code Action} that performs paste operations from the
             * clipboard. When performed, this action operates on the {@code JComponent}
             * source of the {@code ActionEvent} by invoking {@code importData},
             * with the clipboard contents, on the component's {@code TransferHandler}.
             * @return an {#code Action} for performing pastes from the clipboard
             */
            // @ts-ignore
            getPasteAction(): javax.swing.Action
            /**
             * Sets the drag image parameter. The image has to be prepared
             * for rendering by the moment of the call. The image is stored
             * by reference because of some performance reasons.
             * @param img an image to drag
             */
            // @ts-ignore
            setDragImage(img: java.awt.Image): void
            /**
             * Returns the drag image. If there is no image to drag,
             * the returned value is {@code null}.
             * @return the reference to the drag image
             */
            // @ts-ignore
            getDragImage(): java.awt.Image
            /**
             * Sets an anchor offset for the image to drag.
             * It can not be {@code null}.
             * @param p a {#code Point} object that corresponds
             *  to coordinates of an anchor offset of the image
             *  relative to the upper left corner of the image
             */
            // @ts-ignore
            setDragImageOffset(p: java.awt.Point): void
            /**
             * Returns an anchor offset for the image to drag.
             * @return a {#code Point} object that corresponds
             *  to coordinates of an anchor offset of the image
             *  relative to the upper left corner of the image.
             *  The point {@code (0,0)} returns by default.
             */
            // @ts-ignore
            getDragImageOffset(): java.awt.Point
            /**
             * Causes the Swing drag support to be initiated.  This is called by
             * the various UI implementations in the <code>javax.swing.plaf.basic</code>
             * package if the dragEnabled property is set on the component.
             * This can be called by custom UI
             * implementations to use the Swing drag support.  This method can also be called
             * by a Swing extension written as a subclass of <code>JComponent</code>
             * to take advantage of the Swing drag support.
             * <p>
             * The transfer <em>will not necessarily</em> have been completed at the
             * return of this call (i.e. the call does not block waiting for the drop).
             * The transfer will take place through the Swing implementation of the
             * <code>java.awt.dnd</code> mechanism, requiring no further effort
             * from the developer. The <code>exportDone</code> method will be called
             * when the transfer has completed.
             * @param comp  the component holding the data to be transferred;
             *               provided to enable sharing of <code>TransferHandler</code>s
             * @param e     the event that triggered the transfer
             * @param action the transfer action initially requested;
             *                either {#code COPY}, {@code MOVE} or {@code LINK};
             *                the DnD system may change the action used during the
             *                course of the drag operation
             */
            // @ts-ignore
            exportAsDrag(comp: javax.swing.JComponent, e: java.awt.event.InputEvent, action: number /*int*/): void
            /**
             * Causes a transfer from the given component to the
             * given clipboard.  This method is called by the default cut and
             * copy actions registered in a component's action map.
             * <p>
             * The transfer will take place using the <code>java.awt.datatransfer</code>
             * mechanism, requiring no further effort from the developer. Any data
             * transfer <em>will</em> be complete and the <code>exportDone</code>
             * method will be called with the action that occurred, before this method
             * returns. Should the clipboard be unavailable when attempting to place
             * data on it, the <code>IllegalStateException</code> thrown by
             * {@link Clipboard#setContents(Transferable, ClipboardOwner)} will
             * be propagated through this method. However,
             * <code>exportDone</code> will first be called with an action
             * of <code>NONE</code> for consistency.
             * @param comp  the component holding the data to be transferred;
             *               provided to enable sharing of <code>TransferHandler</code>s
             * @param clip  the clipboard to transfer the data into
             * @param action the transfer action requested; this should
             *   be a value of either <code>COPY</code> or <code>MOVE</code>;
             *   the operation performed is the intersection  of the transfer
             *   capabilities given by getSourceActions and the requested action;
             *   the intersection may result in an action of <code>NONE</code>
             *   if the requested action isn't supported
             * @throws IllegalStateException if the clipboard is currently unavailable
             * @see Clipboard#setContents(Transferable, ClipboardOwner)
             */
            // @ts-ignore
            exportToClipboard(comp: javax.swing.JComponent, clip: java.awt.datatransfer.Clipboard, action: number /*int*/): void
            /**
             * Causes a transfer to occur from a clipboard or a drag and
             * drop operation. The <code>Transferable</code> to be
             * imported and the component to transfer to are contained
             * within the <code>TransferSupport</code>.
             * <p>
             * While the drag and drop implementation calls {@code canImport}
             * to determine the suitability of a transfer before calling this
             * method, the implementation of paste does not. As such, it cannot
             * be assumed that the transfer is acceptable upon a call to
             * this method for paste. It is recommended that {@code canImport} be
             * explicitly called to cover this case.
             * <p>
             * Note: The <code>TransferSupport</code> object passed to this method
             * is only valid for the duration of the method call. It is undefined
             * what values it may contain after this method returns.
             * @param support the object containing the details of
             *         the transfer, not <code>null</code>.
             * @return true if the data was inserted into the component,
             *          false otherwise
             * @throws NullPointerException if <code>support</code> is {#code null}
             * @see #canImport(TransferHandler.TransferSupport)
             * @since 1.6
             */
            // @ts-ignore
            importData(support: javax.swing.TransferHandler.TransferSupport): boolean
            /**
             * Causes a transfer to a component from a clipboard or a
             * DND drop operation.  The <code>Transferable</code> represents
             * the data to be imported into the component.
             * <p>
             * Note: Swing now calls the newer version of <code>importData</code>
             * that takes a <code>TransferSupport</code>, which in turn calls this
             * method (if the component in the {@code TransferSupport} is a
             * {@code JComponent}). Developers are encouraged to call and override the
             * newer version as it provides more information (and is the only
             * version that supports use with a {@code TransferHandler} set directly
             * on a {@code JFrame} or other non-{@code JComponent}).
             * @param comp  the component to receive the transfer;
             *               provided to enable sharing of <code>TransferHandler</code>s
             * @param t     the data to import
             * @return true if the data was inserted into the component, false otherwise
             * @see #importData(TransferHandler.TransferSupport)
             */
            // @ts-ignore
            importData(comp: javax.swing.JComponent, t: java.awt.datatransfer.Transferable): boolean
            /**
             * This method is called repeatedly during a drag and drop operation
             * to allow the developer to configure properties of, and to return
             * the acceptability of transfers; with a return value of {@code true}
             * indicating that the transfer represented by the given
             * {@code TransferSupport} (which contains all of the details of the
             * transfer) is acceptable at the current time, and a value of {@code false}
             * rejecting the transfer.
             * <p>
             * For those components that automatically display a drop location during
             * drag and drop, accepting the transfer, by default, tells them to show
             * the drop location. This can be changed by calling
             * {@code setShowDropLocation} on the {@code TransferSupport}.
             * <p>
             * By default, when the transfer is accepted, the chosen drop action is that
             * picked by the user via their drag gesture. The developer can override
             * this and choose a different action, from the supported source
             * actions, by calling {@code setDropAction} on the {@code TransferSupport}.
             * <p>
             * On every call to {@code canImport}, the {@code TransferSupport} contains
             * fresh state. As such, any properties set on it must be set on every
             * call. Upon a drop, {@code canImport} is called one final time before
             * calling into {@code importData}. Any state set on the
             * {@code TransferSupport} during that last call will be available in
             * {@code importData}.
             * <p>
             * This method is not called internally in response to paste operations.
             * As such, it is recommended that implementations of {@code importData}
             * explicitly call this method for such cases and that this method
             * be prepared to return the suitability of paste operations as well.
             * <p>
             * Note: The <code>TransferSupport</code> object passed to this method
             * is only valid for the duration of the method call. It is undefined
             * what values it may contain after this method returns.
             * @param support the object containing the details of
             *         the transfer, not <code>null</code>.
             * @return <code>true</code> if the import can happen,
             *          <code>false</code> otherwise
             * @throws NullPointerException if <code>support</code> is {#code null}
             * @see #importData(TransferHandler.TransferSupport)
             * @see javax.swing.TransferHandler.TransferSupport#setShowDropLocation
             * @see javax.swing.TransferHandler.TransferSupport#setDropAction
             * @since 1.6
             */
            // @ts-ignore
            canImport(support: javax.swing.TransferHandler.TransferSupport): boolean
            /**
             * Indicates whether a component will accept an import of the given
             * set of data flavors prior to actually attempting to import it.
             * <p>
             * Note: Swing now calls the newer version of <code>canImport</code>
             * that takes a <code>TransferSupport</code>, which in turn calls this
             * method (only if the component in the {@code TransferSupport} is a
             * {@code JComponent}). Developers are encouraged to call and override the
             * newer version as it provides more information (and is the only
             * version that supports use with a {@code TransferHandler} set directly
             * on a {@code JFrame} or other non-{@code JComponent}).
             * @param comp  the component to receive the transfer;
             *               provided to enable sharing of <code>TransferHandler</code>s
             * @param transferFlavors  the data formats available
             * @return true if the data can be inserted into the component, false otherwise
             * @see #canImport(TransferHandler.TransferSupport)
             */
            // @ts-ignore
            canImport(comp: javax.swing.JComponent, transferFlavors: java.awt.datatransfer.DataFlavor[]): boolean
            /**
             * Returns the type of transfer actions supported by the source;
             * any bitwise-OR combination of {@code COPY}, {@code MOVE}
             * and {@code LINK}.
             * <p>
             * Some models are not mutable, so a transfer operation of {@code MOVE}
             * should not be advertised in that case. Returning {@code NONE}
             * disables transfers from the component.
             * @param c  the component holding the data to be transferred;
             *            provided to enable sharing of <code>TransferHandler</code>s
             * @return {#code COPY} if the transfer property can be found,
             *           otherwise returns <code>NONE</code>
             */
            // @ts-ignore
            getSourceActions(c: javax.swing.JComponent): int
            /**
             * Returns an object that establishes the look of a transfer.  This is
             * useful for both providing feedback while performing a drag operation and for
             * representing the transfer in a clipboard implementation that has a visual
             * appearance.  The implementation of the <code>Icon</code> interface should
             * not alter the graphics clip or alpha level.
             * The icon implementation need not be rectangular or paint all of the
             * bounding rectangle and logic that calls the icons paint method should
             * not assume the all bits are painted. <code>null</code> is a valid return value
             * for this method and indicates there is no visual representation provided.
             * In that case, the calling logic is free to represent the
             * transferable however it wants.
             * <p>
             * The default Swing logic will not do an alpha blended drag animation if
             * the return is <code>null</code>.
             * @param t  the data to be transferred; this value is expected to have been
             *   created by the <code>createTransferable</code> method
             * @return <code>null</code>, indicating
             *     there is no default visual representation
             */
            // @ts-ignore
            getVisualRepresentation(t: java.awt.datatransfer.Transferable): javax.swing.Icon
            /**
             * Creates a <code>Transferable</code> to use as the source for
             * a data transfer. Returns the representation of the data to
             * be transferred, or <code>null</code> if the component's
             * property is <code>null</code>
             * @param c  the component holding the data to be transferred;
             *               provided to enable sharing of <code>TransferHandler</code>s
             * @return the representation of the data to be transferred, or
             *   <code>null</code> if the property associated with <code>c</code>
             *   is <code>null</code>
             */
            // @ts-ignore
            createTransferable(c: javax.swing.JComponent): java.awt.datatransfer.Transferable
            /**
             * Invoked after data has been exported.  This method should remove
             * the data that was transferred if the action was <code>MOVE</code>.
             * <p>
             * This method is implemented to do nothing since <code>MOVE</code>
             * is not a supported action of this implementation
             * (<code>getSourceActions</code> does not include <code>MOVE</code>).
             * @param source the component that was the source of the data
             * @param data   The data that was transferred or possibly null
             *                if the action is <code>NONE</code>.
             * @param action the actual action that was performed
             */
            // @ts-ignore
            exportDone(source: javax.swing.JComponent, data: java.awt.datatransfer.Transferable, action: number /*int*/): void
        }
    }
}
