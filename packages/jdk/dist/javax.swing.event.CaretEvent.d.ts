declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * CaretEvent is used to notify interested parties that
             * the text caret has changed in the event source.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @author Timothy Prinzing
             */
            // @ts-ignore
            abstract class CaretEvent extends java.util.EventObject {
                /**
                 * Creates a new CaretEvent object.
                 * @param source the object responsible for the event
                 */
                // @ts-ignore
                constructor(source: java.lang.Object | any)
                /**
                 * Fetches the location of the caret.
                 * @return the dot &gt;= 0
                 */
                // @ts-ignore
                public abstract getDot(): number /*int*/
                /**
                 * Fetches the location of other end of a logical
                 * selection.  If there is no selection, this
                 * will be the same as dot.
                 * @return the mark &gt;= 0
                 */
                // @ts-ignore
                public abstract getMark(): number /*int*/
            }
        }
    }
}
