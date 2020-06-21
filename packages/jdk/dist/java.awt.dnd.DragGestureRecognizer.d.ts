declare namespace java {
    namespace awt {
        namespace dnd {
            /**
             * The <code>DragGestureRecognizer</code> is an
             * abstract base class for the specification
             * of a platform-dependent listener that can be associated with a particular
             * <code>Component</code> in order to
             * identify platform-dependent drag initiating gestures.
             * <p>
             * The appropriate <code>DragGestureRecognizer</code>
             * subclass instance is obtained from the
             * {@link DragSource} associated with
             * a particular <code>Component</code>, or from the <code>Toolkit</code> object via its
             * {@link java.awt.Toolkit#createDragGestureRecognizer createDragGestureRecognizer()}
             * method.
             * <p>
             * Once the <code>DragGestureRecognizer</code>
             * is associated with a particular <code>Component</code>
             * it will register the appropriate listener interfaces on that
             * <code>Component</code>
             * in order to track the input events delivered to the <code>Component</code>.
             * <p>
             * Once the <code>DragGestureRecognizer</code> identifies a sequence of events
             * on the <code>Component</code> as a drag initiating gesture, it will notify
             * its unicast <code>DragGestureListener</code> by
             * invoking its
             * {@link java.awt.dnd.DragGestureListener#dragGestureRecognized gestureRecognized()}
             * method.
             * <P>
             * When a concrete <code>DragGestureRecognizer</code>
             * instance detects a drag initiating
             * gesture on the <code>Component</code> it is associated with,
             * it fires a {@link DragGestureEvent} to
             * the <code>DragGestureListener</code> registered on
             * its unicast event source for <code>DragGestureListener</code>
             * events. This <code>DragGestureListener</code> is responsible
             * for causing the associated
             * <code>DragSource</code> to start the Drag and Drop operation (if
             * appropriate).
             * <P>
             * @author Laurence P. G. Cable
             * @see java.awt.dnd.DragGestureListener
             * @see java.awt.dnd.DragGestureEvent
             * @see java.awt.dnd.DragSource
             */
            // @ts-ignore
            abstract class DragGestureRecognizer extends java.lang.Object implements java.io.Serializable {
                /**
                 * Construct a new <code>DragGestureRecognizer</code>
                 * given the <code>DragSource</code> to be used
                 * in this Drag and Drop operation, the <code>Component</code>
                 * this <code>DragGestureRecognizer</code> should "observe"
                 * for drag initiating gestures, the action(s) supported
                 * for this Drag and Drop operation, and the
                 * <code>DragGestureListener</code> to notify
                 * once a drag initiating gesture has been detected.
                 * <P>
                 * @param ds  the <code>DragSource</code> this
                 *  <code>DragGestureRecognizer</code>
                 *  will use to process the Drag and Drop operation
                 * @param c the <code>Component</code>
                 *  this <code>DragGestureRecognizer</code>
                 *  should "observe" the event stream to,
                 *  in order to detect a drag initiating gesture.
                 *  If this value is <code>null</code>, the
                 *  <code>DragGestureRecognizer</code>
                 *  is not associated with any <code>Component</code>.
                 * @param sa  the set (logical OR) of the
                 *  <code>DnDConstants</code>
                 *  that this Drag and Drop operation will support
                 * @param dgl the <code>DragGestureRecognizer</code>
                 *  to notify when a drag gesture is detected
                 *  <P>
                 * @throws IllegalArgumentException
                 *  if ds is <code>null</code>.
                 */
                // @ts-ignore
                constructor(ds: java.awt.dnd.DragSource, c: java.awt.Component, sa: number /*int*/, dgl: java.awt.dnd.DragGestureListener)
                /**
                 * Construct a new <code>DragGestureRecognizer</code>
                 * given the <code>DragSource</code> to be used in this
                 * Drag and Drop
                 * operation, the <code>Component</code> this
                 * <code>DragGestureRecognizer</code> should "observe"
                 * for drag initiating gestures, and the action(s)
                 * supported for this Drag and Drop operation.
                 * <P>
                 * @param ds  the <code>DragSource</code> this
                 *  <code>DragGestureRecognizer</code> will use to
                 *  process the Drag and Drop operation
                 * @param c   the <code>Component</code> this
                 *  <code>DragGestureRecognizer</code> should "observe" the event
                 *  stream to, in order to detect a drag initiating gesture.
                 *  If this value is <code>null</code>, the
                 *  <code>DragGestureRecognizer</code>
                 *  is not associated with any <code>Component</code>.
                 * @param sa the set (logical OR) of the <code>DnDConstants</code>
                 *  that this Drag and Drop operation will support
                 *  <P>
                 * @throws IllegalArgumentException
                 *  if ds is <code>null</code>.
                 */
                // @ts-ignore
                constructor(ds: java.awt.dnd.DragSource, c: java.awt.Component, sa: number /*int*/)
                /**
                 * Construct a new <code>DragGestureRecognizer</code>
                 * given the <code>DragSource</code> to be used
                 * in this Drag and Drop operation, and
                 * the <code>Component</code> this
                 * <code>DragGestureRecognizer</code>
                 * should "observe" for drag initiating gestures.
                 * <P>
                 * @param ds the <code>DragSource</code> this
                 *  <code>DragGestureRecognizer</code>
                 *  will use to process the Drag and Drop operation
                 * @param c the <code>Component</code>
                 *  this <code>DragGestureRecognizer</code>
                 *  should "observe" the event stream to,
                 *  in order to detect a drag initiating gesture.
                 *  If this value is <code>null</code>,
                 *  the <code>DragGestureRecognizer</code>
                 *  is not associated with any <code>Component</code>.
                 *  <P>
                 * @throws IllegalArgumentException
                 *  if ds is <code>null</code>.
                 */
                // @ts-ignore
                constructor(ds: java.awt.dnd.DragSource, c: java.awt.Component)
                /**
                 * Construct a new <code>DragGestureRecognizer</code>
                 * given the <code>DragSource</code> to be used in this
                 * Drag and Drop operation.
                 * <P>
                 * @param ds the <code>DragSource</code> this
                 *  <code>DragGestureRecognizer</code> will
                 *  use to process the Drag and Drop operation
                 *  <P>
                 * @throws IllegalArgumentException
                 *  if ds is <code>null</code>.
                 */
                // @ts-ignore
                constructor(ds: java.awt.dnd.DragSource)
                /**
                 * The <code>DragSource</code>
                 * associated with this
                 * <code>DragGestureRecognizer</code>.
                 * @serial 
                 */
                // @ts-ignore
                dragSource: java.awt.dnd.DragSource
                /**
                 * The <code>Component</code>
                 * associated with this <code>DragGestureRecognizer</code>.
                 * @serial 
                 */
                // @ts-ignore
                component: java.awt.Component
                /**
                 * The <code>DragGestureListener</code>
                 * associated with this <code>DragGestureRecognizer</code>.
                 */
                // @ts-ignore
                dragGestureListener: java.awt.dnd.DragGestureListener
                /**
                 * An <code>int</code> representing
                 * the type(s) of action(s) used
                 * in this Drag and Drop operation.
                 * @serial 
                 */
                // @ts-ignore
                sourceActions: number /*int*/
                /**
                 * The list of events (in order) that
                 * the <code>DragGestureRecognizer</code>
                 * "recognized" as a "gesture" that triggers a drag.
                 * @serial 
                 */
                // @ts-ignore
                events: java.util.ArrayList<java.awt.event.InputEvent>
                /**
                 * register this DragGestureRecognizer's Listeners with the Component
                 * subclasses must override this method
                 */
                // @ts-ignore
                abstract registerListeners(): void
                /**
                 * unregister this DragGestureRecognizer's Listeners with the Component
                 * subclasses must override this method
                 */
                // @ts-ignore
                abstract unregisterListeners(): void
                /**
                 * This method returns the <code>DragSource</code>
                 * this <code>DragGestureRecognizer</code>
                 * will use in order to process the Drag and Drop
                 * operation.
                 * <P>
                 * @return the DragSource
                 */
                // @ts-ignore
                public getDragSource(): java.awt.dnd.DragSource
                /**
                 * This method returns the <code>Component</code>
                 * that is to be "observed" by the
                 * <code>DragGestureRecognizer</code>
                 * for drag initiating gestures.
                 * <P>
                 * @return The Component this DragGestureRecognizer
                 *  is associated with
                 */
                // @ts-ignore
                public getComponent(): java.awt.Component
                /**
                 * set the Component that the DragGestureRecognizer is associated with
                 * registerListeners() and unregisterListeners() are called as a side
                 * effect as appropriate.
                 * <P>
                 * @param c The <code>Component</code> or <code>null</code>
                 */
                // @ts-ignore
                public setComponent(c: java.awt.Component): void
                /**
                 * This method returns an int representing the
                 * type of action(s) this Drag and Drop
                 * operation will support.
                 * <P>
                 * @return the currently permitted source action(s)
                 */
                // @ts-ignore
                public getSourceActions(): number /*int*/
                /**
                 * This method sets the permitted source drag action(s)
                 * for this Drag and Drop operation.
                 * <P>
                 * @param actions the permitted source drag action(s)
                 */
                // @ts-ignore
                public setSourceActions(actions: number /*int*/): void
                /**
                 * This method returns the first event in the
                 * series of events that initiated
                 * the Drag and Drop operation.
                 * <P>
                 * @return the initial event that triggered the drag gesture
                 */
                // @ts-ignore
                public getTriggerEvent(): java.awt.event.InputEvent
                /**
                 * Reset the Recognizer, if its currently recognizing a gesture, ignore
                 * it.
                 */
                // @ts-ignore
                public resetRecognizer(): void
                /**
                 * Register a new <code>DragGestureListener</code>.
                 * <P>
                 * @param dgl the <code>DragGestureListener</code> to register
                 *  with this <code>DragGestureRecognizer</code>.
                 *  <P>
                 * @throws java.util.TooManyListenersException if a
                 *  <code>DragGestureListener</code> has already been added.
                 */
                // @ts-ignore
                public addDragGestureListener(dgl: java.awt.dnd.DragGestureListener): void
                /**
                 * unregister the current DragGestureListener
                 * <P>
                 * @param dgl the <code>DragGestureListener</code> to unregister
                 *  from this <code>DragGestureRecognizer</code>
                 *  <P>
                 * @throws IllegalArgumentException if
                 *  dgl is not (equal to) the currently registered <code>DragGestureListener</code>.
                 */
                // @ts-ignore
                public removeDragGestureListener(dgl: java.awt.dnd.DragGestureListener): void
                /**
                 * Notify the DragGestureListener that a Drag and Drop initiating
                 * gesture has occurred. Then reset the state of the Recognizer.
                 * <P>
                 * @param dragAction The action initially selected by the users gesture
                 * @param p          The point (in Component coords) where the gesture originated
                 */
                // @ts-ignore
                fireDragGestureRecognized(dragAction: number /*int*/, p: java.awt.Point): void
                /**
                 * Listeners registered on the Component by this Recognizer shall record
                 * all Events that are recognized as part of the series of Events that go
                 * to comprise a Drag and Drop initiating gesture via this API.
                 * <P>
                 * This method is used by a <code>DragGestureRecognizer</code>
                 * implementation to add an <code>InputEvent</code>
                 * subclass (that it believes is one in a series
                 * of events that comprise a Drag and Drop operation)
                 * to the array of events that this
                 * <code>DragGestureRecognizer</code> maintains internally.
                 * <P>
                 * @param awtie the <code>InputEvent</code>
                 *  to add to this <code>DragGestureRecognizer</code>'s
                 *  internal array of events. Note that <code>null</code>
                 *  is not a valid value, and will be ignored.
                 */
                // @ts-ignore
                appendEvent(awtie: java.awt.event.InputEvent): void
            }
        }
    }
}
