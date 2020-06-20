declare namespace java {
    namespace awt {
        namespace dnd {
            /**
             * The <code>DropTarget</code> is associated
             * with a <code>Component</code> when that <code>Component</code>
             * wishes
             * to accept drops during Drag and Drop operations.
             * <P>
             * Each
             * <code>DropTarget</code> is associated with a <code>FlavorMap</code>.
             * The default <code>FlavorMap</code> hereafter designates the
             * <code>FlavorMap</code> returned by <code>SystemFlavorMap.getDefaultFlavorMap()</code>.
             * @since 1.2
             */
            // @ts-ignore
            class DropTarget extends java.lang.Object implements java.awt.dnd.DropTargetListener, java.io.Serializable {
                /**
                 * Creates a new DropTarget given the <code>Component</code>
                 * to associate itself with, an <code>int</code> representing
                 * the default acceptable action(s) to
                 * support, a <code>DropTargetListener</code>
                 * to handle event processing, a <code>boolean</code> indicating
                 * if the <code>DropTarget</code> is currently accepting drops, and
                 * a <code>FlavorMap</code> to use (or null for the default <CODE>FlavorMap</CODE>).
                 * <P>
                 * The Component will receive drops only if it is enabled.
                 * @param c         The <code>Component</code> with which this <code>DropTarget</code> is associated
                 * @param ops       The default acceptable actions for this <code>DropTarget</code>
                 * @param dtl       The <code>DropTargetListener</code> for this <code>DropTarget</code>
                 * @param act       Is the <code>DropTarget</code> accepting drops.
                 * @param fm        The <code>FlavorMap</code> to use, or null for the default <CODE>FlavorMap</CODE>
                 * @exception HeadlessException if GraphicsEnvironment.isHeadless()
                 *             returns true
                 * @see java.awt.GraphicsEnvironment#isHeadless
                 */
                // @ts-ignore
                constructor(c: java.awt.Component, ops: number /*int*/, dtl: java.awt.dnd.DropTargetListener, act: boolean, fm: java.awt.datatransfer.FlavorMap)
                /**
                 * Creates a <code>DropTarget</code> given the <code>Component</code>
                 * to associate itself with, an <code>int</code> representing
                 * the default acceptable action(s)
                 * to support, a <code>DropTargetListener</code>
                 * to handle event processing, and a <code>boolean</code> indicating
                 * if the <code>DropTarget</code> is currently accepting drops.
                 * <P>
                 * The Component will receive drops only if it is enabled.
                 * @param c         The <code>Component</code> with which this <code>DropTarget</code> is associated
                 * @param ops       The default acceptable actions for this <code>DropTarget</code>
                 * @param dtl       The <code>DropTargetListener</code> for this <code>DropTarget</code>
                 * @param act       Is the <code>DropTarget</code> accepting drops.
                 * @exception HeadlessException if GraphicsEnvironment.isHeadless()
                 *             returns true
                 * @see java.awt.GraphicsEnvironment#isHeadless
                 */
                // @ts-ignore
                constructor(c: java.awt.Component, ops: number /*int*/, dtl: java.awt.dnd.DropTargetListener, act: boolean)
                /**
                 * Creates a <code>DropTarget</code>.
                 * @exception HeadlessException if GraphicsEnvironment.isHeadless()
                 *             returns true
                 * @see java.awt.GraphicsEnvironment#isHeadless
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a <code>DropTarget</code> given the <code>Component</code>
                 * to associate itself with, and the <code>DropTargetListener</code>
                 * to handle event processing.
                 * <P>
                 * The Component will receive drops only if it is enabled.
                 * @param c         The <code>Component</code> with which this <code>DropTarget</code> is associated
                 * @param dtl       The <code>DropTargetListener</code> for this <code>DropTarget</code>
                 * @exception HeadlessException if GraphicsEnvironment.isHeadless()
                 *             returns true
                 * @see java.awt.GraphicsEnvironment#isHeadless
                 */
                // @ts-ignore
                constructor(c: java.awt.Component, dtl: java.awt.dnd.DropTargetListener)
                /**
                 * Creates a <code>DropTarget</code> given the <code>Component</code>
                 * to associate itself with, an <code>int</code> representing
                 * the default acceptable action(s) to support, and a
                 * <code>DropTargetListener</code> to handle event processing.
                 * <P>
                 * The Component will receive drops only if it is enabled.
                 * @param c         The <code>Component</code> with which this <code>DropTarget</code> is associated
                 * @param ops       The default acceptable actions for this <code>DropTarget</code>
                 * @param dtl       The <code>DropTargetListener</code> for this <code>DropTarget</code>
                 * @exception HeadlessException if GraphicsEnvironment.isHeadless()
                 *             returns true
                 * @see java.awt.GraphicsEnvironment#isHeadless
                 */
                // @ts-ignore
                constructor(c: java.awt.Component, ops: number /*int*/, dtl: java.awt.dnd.DropTargetListener)
                /**
                 * Note: this interface is required to permit the safe association
                 * of a DropTarget with a Component in one of two ways, either:
                 * <code> component.setDropTarget(droptarget); </code>
                 * or <code> droptarget.setComponent(component); </code>
                 * <P>
                 * The Component will receive drops only if it is enabled.
                 * @param c The new <code>Component</code> this <code>DropTarget</code>
                 *  is to be associated with.
                 */
                // @ts-ignore
                setComponent(c: java.awt.Component): void
                /**
                 * Gets the <code>Component</code> associated
                 * with this <code>DropTarget</code>.
                 * <P>
                 * @return the current <code>Component</code>
                 */
                // @ts-ignore
                getComponent(): java.awt.Component
                /**
                 * Sets the default acceptable actions for this <code>DropTarget</code>
                 * <P>
                 * @param ops the default actions
                 * @see java.awt.dnd.DnDConstants
                 */
                // @ts-ignore
                setDefaultActions(ops: number /*int*/): void
                /**
                 * Gets an <code>int</code> representing the
                 * current action(s) supported by this <code>DropTarget</code>.
                 * <P>
                 * @return the current default actions
                 */
                // @ts-ignore
                getDefaultActions(): int
                /**
                 * Sets the DropTarget active if <code>true</code>,
                 * inactive if <code>false</code>.
                 * <P>
                 * @param isActive sets the <code>DropTarget</code> (in)active.
                 */
                // @ts-ignore
                setActive(isActive: boolean): void
                /**
                 * Reports whether or not
                 * this <code>DropTarget</code>
                 * is currently active (ready to accept drops).
                 * <P>
                 * @return <CODE>true</CODE> if active, <CODE>false</CODE> if not
                 */
                // @ts-ignore
                isActive(): boolean
                /**
                 * Adds a new <code>DropTargetListener</code> (UNICAST SOURCE).
                 * <P>
                 * @param dtl The new <code>DropTargetListener</code>
                 *  <P>
                 * @throws TooManyListenersException if a
                 *  <code>DropTargetListener</code> is already added to this
                 *  <code>DropTarget</code>.
                 */
                // @ts-ignore
                addDropTargetListener(dtl: java.awt.dnd.DropTargetListener): void
                /**
                 * Removes the current <code>DropTargetListener</code> (UNICAST SOURCE).
                 * <P>
                 * @param dtl the DropTargetListener to deregister.
                 */
                // @ts-ignore
                removeDropTargetListener(dtl: java.awt.dnd.DropTargetListener): void
                /**
                 * Calls <code>dragEnter</code> on the registered
                 * <code>DropTargetListener</code> and passes it
                 * the specified <code>DropTargetDragEvent</code>.
                 * Has no effect if this <code>DropTarget</code>
                 * is not active.
                 * @param dtde the <code>DropTargetDragEvent</code>
                 * @throws NullPointerException if this <code>DropTarget</code>
                 *          is active and <code>dtde</code> is <code>null</code>
                 * @see #isActive
                 */
                // @ts-ignore
                dragEnter(dtde: java.awt.dnd.DropTargetDragEvent): void
                /**
                 * Calls <code>dragOver</code> on the registered
                 * <code>DropTargetListener</code> and passes it
                 * the specified <code>DropTargetDragEvent</code>.
                 * Has no effect if this <code>DropTarget</code>
                 * is not active.
                 * @param dtde the <code>DropTargetDragEvent</code>
                 * @throws NullPointerException if this <code>DropTarget</code>
                 *          is active and <code>dtde</code> is <code>null</code>
                 * @see #isActive
                 */
                // @ts-ignore
                dragOver(dtde: java.awt.dnd.DropTargetDragEvent): void
                /**
                 * Calls <code>dropActionChanged</code> on the registered
                 * <code>DropTargetListener</code> and passes it
                 * the specified <code>DropTargetDragEvent</code>.
                 * Has no effect if this <code>DropTarget</code>
                 * is not active.
                 * @param dtde the <code>DropTargetDragEvent</code>
                 * @throws NullPointerException if this <code>DropTarget</code>
                 *          is active and <code>dtde</code> is <code>null</code>
                 * @see #isActive
                 */
                // @ts-ignore
                dropActionChanged(dtde: java.awt.dnd.DropTargetDragEvent): void
                /**
                 * Calls <code>dragExit</code> on the registered
                 * <code>DropTargetListener</code> and passes it
                 * the specified <code>DropTargetEvent</code>.
                 * Has no effect if this <code>DropTarget</code>
                 * is not active.
                 * <p>
                 * This method itself does not throw any exception
                 * for null parameter but for exceptions thrown by
                 * the respective method of the listener.
                 * @param dte the <code>DropTargetEvent</code>
                 * @see #isActive
                 */
                // @ts-ignore
                dragExit(dte: java.awt.dnd.DropTargetEvent): void
                /**
                 * Calls <code>drop</code> on the registered
                 * <code>DropTargetListener</code> and passes it
                 * the specified <code>DropTargetDropEvent</code>
                 * if this <code>DropTarget</code> is active.
                 * @param dtde the <code>DropTargetDropEvent</code>
                 * @throws NullPointerException if <code>dtde</code> is null
                 *          and at least one of the following is true: this
                 *          <code>DropTarget</code> is not active, or there is
                 *          no a <code>DropTargetListener</code> registered.
                 * @see #isActive
                 */
                // @ts-ignore
                drop(dtde: java.awt.dnd.DropTargetDropEvent): void
                /**
                 * Gets the <code>FlavorMap</code>
                 * associated with this <code>DropTarget</code>.
                 * If no <code>FlavorMap</code> has been set for this
                 * <code>DropTarget</code>, it is associated with the default
                 * <code>FlavorMap</code>.
                 * <P>
                 * @return the FlavorMap for this DropTarget
                 */
                // @ts-ignore
                getFlavorMap(): java.awt.datatransfer.FlavorMap
                /**
                 * Sets the <code>FlavorMap</code> associated
                 * with this <code>DropTarget</code>.
                 * <P>
                 * @param fm the new <code>FlavorMap</code>, or null to
                 *  associate the default FlavorMap with this DropTarget.
                 */
                // @ts-ignore
                setFlavorMap(fm: java.awt.datatransfer.FlavorMap): void
                /**
                 * Notify the DropTarget that it has been associated with a Component
                 * This method is usually called from java.awt.Component.addNotify() of
                 * the Component associated with this DropTarget to notify the DropTarget
                 * that a ComponentPeer has been associated with that Component.
                 * Calling this method, other than to notify this DropTarget of the
                 * association of the ComponentPeer with the Component may result in
                 * a malfunction of the DnD system.
                 * <P>
                 * @param peer The Peer of the Component we are associated with!
                 */
                // @ts-ignore
                addNotify(peer: java.awt.peer.ComponentPeer): void
                /**
                 * Notify the DropTarget that it has been disassociated from a Component
                 * This method is usually called from java.awt.Component.removeNotify() of
                 * the Component associated with this DropTarget to notify the DropTarget
                 * that a ComponentPeer has been disassociated with that Component.
                 * Calling this method, other than to notify this DropTarget of the
                 * disassociation of the ComponentPeer from the Component may result in
                 * a malfunction of the DnD system.
                 * <P>
                 * @param peer The Peer of the Component we are being disassociated from!
                 */
                // @ts-ignore
                removeNotify(peer: java.awt.peer.ComponentPeer): void
                /**
                 * Gets the <code>DropTargetContext</code> associated
                 * with this <code>DropTarget</code>.
                 * <P>
                 * @return the <code>DropTargetContext</code> associated with this <code>DropTarget</code>.
                 */
                // @ts-ignore
                getDropTargetContext(): java.awt.dnd.DropTargetContext
                /**
                 * Creates the DropTargetContext associated with this DropTarget.
                 * Subclasses may override this method to instantiate their own
                 * DropTargetContext subclass.
                 * This call is typically *only* called by the platform's
                 * DropTargetContextPeer as a drag operation encounters this
                 * DropTarget. Accessing the Context while no Drag is current
                 * has undefined results.
                 */
                // @ts-ignore
                createDropTargetContext(): java.awt.dnd.DropTargetContext
                /**
                 * create an embedded autoscroller
                 * <P>
                 * @param c the <code>Component</code>
                 * @param p the <code>Point</code>
                 */
                // @ts-ignore
                createDropTargetAutoScroller(c: java.awt.Component, p: java.awt.Point): java.awt.dnd.DropTarget.DropTargetAutoScroller
                /**
                 * initialize autoscrolling
                 * <P>
                 * @param p the <code>Point</code>
                 */
                // @ts-ignore
                initializeAutoscrolling(p: java.awt.Point): void
                /**
                 * update autoscrolling with current cursor location
                 * <P>
                 * @param dragCursorLocn the <code>Point</code>
                 */
                // @ts-ignore
                updateAutoscroll(dragCursorLocn: java.awt.Point): void
                /**
                 * clear autoscrolling
                 */
                // @ts-ignore
                clearAutoscroll(): void
            }
        }
    }
}
