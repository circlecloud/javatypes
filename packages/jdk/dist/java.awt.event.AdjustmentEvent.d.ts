declare namespace java {
    namespace awt {
        namespace event {
            /**
             * The adjustment event emitted by Adjustable objects like
             * {@link java.awt.Scrollbar} and {@link java.awt.ScrollPane}.
             * When the user changes the value of the scrolling component,
             * it receives an instance of {@code AdjustmentEvent}.
             * <p>
             * An unspecified behavior will be caused if the {@code id} parameter
             * of any particular {@code AdjustmentEvent} instance is not
             * in the range from {@code ADJUSTMENT_FIRST} to {@code ADJUSTMENT_LAST}.
             * <p>
             * The {@code type} of any {@code AdjustmentEvent} instance takes one of the following
             * values:
             * <ul>
             * <li> {@code UNIT_INCREMENT}
             * <li> {@code UNIT_DECREMENT}
             * <li> {@code BLOCK_INCREMENT}
             * <li> {@code BLOCK_DECREMENT}
             * <li> {@code TRACK}
             * </ul>
             * Assigning the value different from listed above will cause an unspecified behavior.
             * @see java.awt.Adjustable
             * @see AdjustmentListener
             * @author Amy Fowler
             * @since 1.1
             */
            // @ts-ignore
            class AdjustmentEvent extends java.awt.AWTEvent {
                /**
                 * Constructs an <code>AdjustmentEvent</code> object with the
                 * specified <code>Adjustable</code> source, event type,
                 * adjustment type, and value.
                 * <p> This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 * @param source The <code>Adjustable</code> object where the
                 *                event originated
                 * @param id     An integer indicating the type of event.
                 *                      For information on allowable values, see
                 *                      the class description for {#link AdjustmentEvent}
                 * @param type   An integer indicating the adjustment type.
                 *                      For information on allowable values, see
                 *                      the class description for {#link AdjustmentEvent}
                 * @param value  The current value of the adjustment
                 * @throws IllegalArgumentException if <code>source</code> is null
                 * @see #getSource()
                 * @see #getID()
                 * @see #getAdjustmentType()
                 * @see #getValue()
                 */
                // @ts-ignore
                constructor(source: java.awt.Adjustable, id: number /*int*/, type: number /*int*/, value: number /*int*/)
                /**
                 * Constructs an <code>AdjustmentEvent</code> object with the
                 * specified Adjustable source, event type, adjustment type, and value.
                 * <p> This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 * @param source The <code>Adjustable</code> object where the
                 *                event originated
                 * @param id     An integer indicating the type of event.
                 *                      For information on allowable values, see
                 *                      the class description for {#link AdjustmentEvent}
                 * @param type   An integer indicating the adjustment type.
                 *                      For information on allowable values, see
                 *                      the class description for {#link AdjustmentEvent}
                 * @param value  The current value of the adjustment
                 * @param isAdjusting A boolean that equals <code>true</code> if the event is one
                 *                of a series of multiple adjusting events,
                 *                otherwise <code>false</code>
                 * @throws IllegalArgumentException if <code>source</code> is null
                 * @since 1.4
                 * @see #getSource()
                 * @see #getID()
                 * @see #getAdjustmentType()
                 * @see #getValue()
                 * @see #getValueIsAdjusting()
                 */
                // @ts-ignore
                constructor(source: java.awt.Adjustable, id: number /*int*/, type: number /*int*/, value: number /*int*/, isAdjusting: boolean)
                /**
                 * Marks the first integer id for the range of adjustment event ids.
                 */
                // @ts-ignore
                public static readonly ADJUSTMENT_FIRST: number /*int*/
                /**
                 * Marks the last integer id for the range of adjustment event ids.
                 */
                // @ts-ignore
                public static readonly ADJUSTMENT_LAST: number /*int*/
                /**
                 * The adjustment value changed event.
                 */
                // @ts-ignore
                public static readonly ADJUSTMENT_VALUE_CHANGED: number /*int*/
                /**
                 * The unit increment adjustment type.
                 */
                // @ts-ignore
                public static readonly UNIT_INCREMENT: number /*int*/
                /**
                 * The unit decrement adjustment type.
                 */
                // @ts-ignore
                public static readonly UNIT_DECREMENT: number /*int*/
                /**
                 * The block decrement adjustment type.
                 */
                // @ts-ignore
                public static readonly BLOCK_DECREMENT: number /*int*/
                /**
                 * The block increment adjustment type.
                 */
                // @ts-ignore
                public static readonly BLOCK_INCREMENT: number /*int*/
                /**
                 * The absolute tracking adjustment type.
                 */
                // @ts-ignore
                public static readonly TRACK: number /*int*/
                /**
                 * Returns the <code>Adjustable</code> object where this event originated.
                 * @return the <code>Adjustable</code> object where this event originated
                 */
                // @ts-ignore
                public getAdjustable(): java.awt.Adjustable
                /**
                 * Returns the current value in the adjustment event.
                 * @return the current value in the adjustment event
                 */
                // @ts-ignore
                public getValue(): number /*int*/
                /**
                 * Returns the type of adjustment which caused the value changed
                 * event.  It will have one of the following values:
                 * <ul>
                 * <li>{@link #UNIT_INCREMENT}
                 * <li>{@link #UNIT_DECREMENT}
                 * <li>{@link #BLOCK_INCREMENT}
                 * <li>{@link #BLOCK_DECREMENT}
                 * <li>{@link #TRACK}
                 * </ul>
                 * @return one of the adjustment values listed above
                 */
                // @ts-ignore
                public getAdjustmentType(): number /*int*/
                /**
                 * Returns <code>true</code> if this is one of multiple
                 * adjustment events.
                 * @return <code>true</code> if this is one of multiple
                 *          adjustment events, otherwise returns <code>false</code>
                 * @since 1.4
                 */
                // @ts-ignore
                public getValueIsAdjusting(): boolean
                // @ts-ignore
                public paramString(): string
            }
        }
    }
}
