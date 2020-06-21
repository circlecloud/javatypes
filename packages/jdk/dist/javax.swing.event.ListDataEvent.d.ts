declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * Defines an event that encapsulates changes to a list.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @author Hans Muller
             */
            // @ts-ignore
            class ListDataEvent extends java.util.EventObject {
                /**
                 * Constructs a ListDataEvent object. If index0 is &gt;
                 * index1, index0 and index1 will be swapped such that
                 * index0 will always be &lt;= index1.
                 * @param source  the source Object (typically <code>this</code>)
                 * @param type    an int specifying {#link #CONTENTS_CHANGED},
                 *                 {@link #INTERVAL_ADDED}, or {@link #INTERVAL_REMOVED}
                 * @param index0  one end of the new interval
                 * @param index1  the other end of the new interval
                 */
                // @ts-ignore
                constructor(source: java.lang.Object | any, type: number /*int*/, index0: number /*int*/, index1: number /*int*/)
                /**
                 * Identifies one or more changes in the lists contents.
                 */
                // @ts-ignore
                public static readonly CONTENTS_CHANGED: number /*int*/
                /**
                 * Identifies the addition of one or more contiguous items to the list
                 */
                // @ts-ignore
                public static readonly INTERVAL_ADDED: number /*int*/
                /**
                 * Identifies the removal of one or more contiguous items from the list
                 */
                // @ts-ignore
                public static readonly INTERVAL_REMOVED: number /*int*/
                /**
                 * Returns the event type. The possible values are:
                 * <ul>
                 * <li> {@link #CONTENTS_CHANGED}
                 * <li> {@link #INTERVAL_ADDED}
                 * <li> {@link #INTERVAL_REMOVED}
                 * </ul>
                 * @return an int representing the type value
                 */
                // @ts-ignore
                public getType(): number /*int*/
                /**
                 * Returns the lower index of the range. For a single
                 * element, this value is the same as that returned by {@link #getIndex1}.
                 * @return an int representing the lower index value
                 */
                // @ts-ignore
                public getIndex0(): number /*int*/
                /**
                 * Returns the upper index of the range. For a single
                 * element, this value is the same as that returned by {@link #getIndex0}.
                 * @return an int representing the upper index value
                 */
                // @ts-ignore
                public getIndex1(): number /*int*/
                /**
                 * Returns a string representation of this ListDataEvent. This method
                 * is intended to be used only for debugging purposes, and the
                 * content and format of the returned string may vary between
                 * implementations. The returned string may be empty but may not
                 * be <code>null</code>.
                 * @since 1.4
                 * @return a string representation of this ListDataEvent.
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
