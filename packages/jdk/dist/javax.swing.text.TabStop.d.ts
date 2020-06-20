declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * This class encapsulates a single tab stop (basically as tab stops
             * are thought of by RTF). A tab stop is at a specified distance from the
             * left margin, aligns text in a specified way, and has a specified leader.
             * TabStops are immutable, and usually contained in TabSets.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             */
            // @ts-ignore
            class TabStop extends java.lang.Object implements java.io.Serializable {
                /**
                 * Creates a tab at position <code>pos</code> with a default alignment
                 * and default leader.
                 */
                // @ts-ignore
                constructor(pos: number /*float*/)
                /**
                 * Creates a tab with the specified position <code>pos</code>,
                 * alignment <code>align</code> and leader <code>leader</code>.
                 */
                // @ts-ignore
                constructor(pos: number /*float*/, align: number /*int*/, leader: number /*int*/)
                /**
                 * Character following tab is positioned at location.
                 */
                // @ts-ignore
                readonly ALIGN_LEFT: number /*int*/
                /**
                 * Characters following tab are positioned such that all following
                 * characters up to next tab/newline end at location.
                 */
                // @ts-ignore
                readonly ALIGN_RIGHT: number /*int*/
                /**
                 * Characters following tab are positioned such that all following
                 * characters up to next tab/newline are centered around the tabs
                 * location.
                 */
                // @ts-ignore
                readonly ALIGN_CENTER: number /*int*/
                /**
                 * Characters following tab are aligned such that next
                 * decimal/tab/newline is at the tab location, very similar to
                 * RIGHT_TAB, just includes decimal as additional character to look for.
                 */
                // @ts-ignore
                readonly ALIGN_DECIMAL: number /*int*/
                // @ts-ignore
                readonly ALIGN_BAR: number /*int*/
                // @ts-ignore
                readonly LEAD_NONE: number /*int*/
                // @ts-ignore
                readonly LEAD_DOTS: number /*int*/
                // @ts-ignore
                readonly LEAD_HYPHENS: number /*int*/
                // @ts-ignore
                readonly LEAD_UNDERLINE: number /*int*/
                // @ts-ignore
                readonly LEAD_THICKLINE: number /*int*/
                // @ts-ignore
                readonly LEAD_EQUALS: number /*int*/
                /**
                 * Returns the position, as a float, of the tab.
                 * @return the position of the tab
                 */
                // @ts-ignore
                getPosition(): float
                /**
                 * Returns the alignment, as an integer, of the tab.
                 * @return the alignment of the tab
                 */
                // @ts-ignore
                getAlignment(): int
                /**
                 * Returns the leader of the tab.
                 * @return the leader of the tab
                 */
                // @ts-ignore
                getLeader(): int
                /**
                 * Returns true if the tabs are equal.
                 * @return true if the tabs are equal, otherwise false
                 */
                // @ts-ignore
                equals(other: any): boolean
                /**
                 * Returns the hashCode for the object.  This must be defined
                 * here to ensure 100% pure.
                 * @return the hashCode for the object
                 */
                // @ts-ignore
                hashCode(): int
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
