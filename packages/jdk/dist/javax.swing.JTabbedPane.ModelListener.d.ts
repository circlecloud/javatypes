declare namespace javax {
    namespace swing {
        namespace JTabbedPane {
            /**
             * We pass <code>ModelChanged</code> events along to the listeners with
             * the tabbedpane (instead of the model itself) as the event source.
             */
            // @ts-ignore
            class ModelListener extends java.lang.Object implements javax.swing.event.ChangeListener, java.io.Serializable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                stateChanged(e: javax.swing.event.ChangeEvent): void
            }
        }
    }
}
