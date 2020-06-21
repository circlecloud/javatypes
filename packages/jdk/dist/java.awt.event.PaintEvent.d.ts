declare namespace java {
    namespace awt {
        namespace event {
            /**
             * The component-level paint event.
             * This event is a special type which is used to ensure that
             * paint/update method calls are serialized along with the other
             * events delivered from the event queue.  This event is not
             * designed to be used with the Event Listener model; programs
             * should continue to override paint/update methods in order
             * render themselves properly.
             * <p>
             * An unspecified behavior will be caused if the {@code id} parameter
             * of any particular {@code PaintEvent} instance is not
             * in the range from {@code PAINT_FIRST} to {@code PAINT_LAST}.
             * @author Amy Fowler
             * @since 1.1
             */
            // @ts-ignore
            class PaintEvent extends java.awt.event.ComponentEvent {
                /**
                 * Constructs a <code>PaintEvent</code> object with the specified
                 * source component and type.
                 * <p> This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 * @param source     The object where the event originated
                 * @param id           The integer that identifies the event type.
                 *                      For information on allowable values, see
                 *                      the class description for {#link PaintEvent}
                 * @param updateRect The rectangle area which needs to be repainted
                 * @throws IllegalArgumentException if <code>source</code> is null
                 * @see #getSource()
                 * @see #getID()
                 * @see #getUpdateRect()
                 */
                // @ts-ignore
                constructor(source: java.awt.Component, id: number /*int*/, updateRect: java.awt.Rectangle)
                /**
                 * Marks the first integer id for the range of paint event ids.
                 */
                // @ts-ignore
                public static readonly PAINT_FIRST: number /*int*/
                /**
                 * Marks the last integer id for the range of paint event ids.
                 */
                // @ts-ignore
                public static readonly PAINT_LAST: number /*int*/
                /**
                 * The paint event type.
                 */
                // @ts-ignore
                public static readonly PAINT: number /*int*/
                /**
                 * The update event type.
                 */
                // @ts-ignore
                public static readonly UPDATE: number /*int*/
                /**
                 * Returns the rectangle representing the area which needs to be
                 * repainted in response to this event.
                 */
                // @ts-ignore
                public getUpdateRect(): java.awt.Rectangle
                /**
                 * Sets the rectangle representing the area which needs to be
                 * repainted in response to this event.
                 * @param updateRect the rectangle area which needs to be repainted
                 */
                // @ts-ignore
                public setUpdateRect(updateRect: java.awt.Rectangle): void
                // @ts-ignore
                public paramString(): string
            }
        }
    }
}
