declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * An event reported to a child component that originated from an
             * ancestor in the component hierarchy.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @author Dave Moore
             */
            // @ts-ignore
            class AncestorEvent extends java.awt.AWTEvent {
                /**
                 * Constructs an AncestorEvent object to identify a change
                 * in an ancestor-component's display-status.
                 * @param source          the JComponent that originated the event
                 *                         (typically <code>this</code>)
                 * @param id              an int specifying {#link #ANCESTOR_ADDED},
                 *                         {@link #ANCESTOR_REMOVED} or {@link #ANCESTOR_MOVED}
                 * @param ancestor        a Container object specifying the ancestor-component
                 *                         whose display-status changed
                 * @param ancestorParent  a Container object specifying the ancestor's parent
                 */
                // @ts-ignore
                constructor(source: javax.swing.JComponent, id: number /*int*/, ancestor: java.awt.Container, ancestorParent: java.awt.Container)
                /**
                 * An ancestor-component was added to the hierarchy of
                 * visible objects (made visible), and is currently being displayed.
                 */
                // @ts-ignore
                public static readonly ANCESTOR_ADDED: number /*int*/
                /**
                 * An ancestor-component was removed from the hierarchy
                 * of visible objects (hidden) and is no longer being displayed.
                 */
                // @ts-ignore
                public static readonly ANCESTOR_REMOVED: number /*int*/
                /**
                 * An ancestor-component changed its position on the screen.
                 */
                // @ts-ignore
                public static readonly ANCESTOR_MOVED: number /*int*/
                /**
                 * Returns the ancestor that the event actually occurred on.
                 */
                // @ts-ignore
                public getAncestor(): java.awt.Container
                /**
                 * Returns the parent of the ancestor the event actually occurred on.
                 * This is most interesting in an ANCESTOR_REMOVED event, as
                 * the ancestor may no longer be in the component hierarchy.
                 */
                // @ts-ignore
                public getAncestorParent(): java.awt.Container
                /**
                 * Returns the component that the listener was added to.
                 */
                // @ts-ignore
                public getComponent(): javax.swing.JComponent
            }
        }
    }
}
