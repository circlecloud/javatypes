declare namespace javax {
    namespace swing {
        namespace tree {
            /**
             * Exception used to stop and expand/collapse from happening.
             * See <a
             * href="https://docs.oracle.com/javase/tutorial/uiswing/events/treewillexpandlistener.html">How to Write a Tree-Will-Expand Listener</a>
             * in <em>The Java Tutorial</em>
             * for further information and examples.
             * @author Scott Violet
             */
            // @ts-ignore
            class ExpandVetoException extends java.lang.Exception {
                /**
                 * Constructs an ExpandVetoException object with no message.
                 * @param event  a TreeExpansionEvent object
                 */
                // @ts-ignore
                constructor(event: javax.swing.event.TreeExpansionEvent)
                /**
                 * Constructs an ExpandVetoException object with the specified message.
                 * @param event    a TreeExpansionEvent object
                 * @param message  a String containing the message
                 */
                // @ts-ignore
                constructor(event: javax.swing.event.TreeExpansionEvent, message: string)
                /**
                 * The event that the exception was created for.
                 */
                // @ts-ignore
                event: javax.swing.event.TreeExpansionEvent
            }
        }
    }
}
