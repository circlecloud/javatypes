declare namespace java {
    namespace awt {
        namespace event {
            /**
             * A low-level event which indicates that a component moved, changed
             * size, or changed visibility (also, the root class for the other
             * component-level events).
             * <P>
             * Component events are provided for notification purposes ONLY;
             * The AWT will automatically handle component moves and resizes
             * internally so that GUI layout works properly regardless of
             * whether a program is receiving these events or not.
             * <P>
             * In addition to serving as the base class for other component-related
             * events (InputEvent, FocusEvent, WindowEvent, ContainerEvent),
             * this class defines the events that indicate changes in
             * a component's size, position, or visibility.
             * <P>
             * This low-level event is generated by a component object (such as a
             * List) when the component is moved, resized, rendered invisible, or made
             * visible again. The event is passed to every <code>ComponentListener</code>
             * or <code>ComponentAdapter</code> object which registered to receive such
             * events using the component's <code>addComponentListener</code> method.
             * (<code>ComponentAdapter</code> objects implement the
             * <code>ComponentListener</code> interface.) Each such listener object
             * gets this <code>ComponentEvent</code> when the event occurs.
             * <p>
             * An unspecified behavior will be caused if the {@code id} parameter
             * of any particular {@code ComponentEvent} instance is not
             * in the range from {@code COMPONENT_FIRST} to {@code COMPONENT_LAST}.
             * @see ComponentAdapter
             * @see ComponentListener
             * @see <a href="https://docs.oracle.com/javase/tutorial/uiswing/events/componentlistener.html">Tutorial: Writing a Component Listener</a>
             * @author Carl Quinn
             * @since 1.1
             */
            // @ts-ignore
            class ComponentEvent extends java.awt.AWTEvent {
                /**
                 * Constructs a <code>ComponentEvent</code> object.
                 * <p> This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 * @param source The <code>Component</code> that originated the event
                 * @param id     An integer indicating the type of event.
                 *                      For information on allowable values, see
                 *                      the class description for {#link ComponentEvent}
                 * @throws IllegalArgumentException if <code>source</code> is null
                 * @see #getComponent()
                 * @see #getID()
                 */
                // @ts-ignore
                constructor(source: java.awt.Component, id: number /*int*/)
                /**
                 * The first number in the range of ids used for component events.
                 */
                // @ts-ignore
                readonly COMPONENT_FIRST: number /*int*/
                /**
                 * The last number in the range of ids used for component events.
                 */
                // @ts-ignore
                readonly COMPONENT_LAST: number /*int*/
                /**
                 * This event indicates that the component's position changed.
                 */
                // @ts-ignore
                readonly COMPONENT_MOVED: number /*int*/
                /**
                 * This event indicates that the component's size changed.
                 */
                // @ts-ignore
                readonly COMPONENT_RESIZED: number /*int*/
                /**
                 * This event indicates that the component was made visible.
                 */
                // @ts-ignore
                readonly COMPONENT_SHOWN: number /*int*/
                /**
                 * This event indicates that the component was rendered invisible.
                 */
                // @ts-ignore
                readonly COMPONENT_HIDDEN: number /*int*/
                /**
                 * Returns the originator of the event.
                 * @return the <code>Component</code> object that originated
                 *  the event, or <code>null</code> if the object is not a
                 *  <code>Component</code>.
                 */
                // @ts-ignore
                getComponent(): java.awt.Component
                /**
                 * Returns a parameter string identifying this event.
                 * This method is useful for event-logging and for debugging.
                 * @return a string identifying the event and its attributes
                 */
                // @ts-ignore
                paramString(): java.lang.String
            }
        }
    }
}