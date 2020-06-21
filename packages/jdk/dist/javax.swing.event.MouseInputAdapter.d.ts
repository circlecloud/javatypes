declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * An empty implementation of the {@code MouseInputListener} interface, provided
             * as a convenience to simplify the task of creating listeners, by extending
             * and implementing only the methods of interest. This class also provides an
             * empty implementation of the {@code MouseWheelListener} interface, through
             * its extension from AWT's {@code MouseAdapter}.
             * @author Philip Milne
             * @author Shannon Hickey
             */
            // @ts-ignore
            abstract class MouseInputAdapter extends java.awt.event.MouseAdapter implements javax.swing.event.MouseInputListener {
                // @ts-ignore
                constructor()
            }
        }
    }
}
