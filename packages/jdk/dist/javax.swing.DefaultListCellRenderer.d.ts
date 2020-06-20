declare namespace javax {
    namespace swing {
        /**
         * Renders an item in a list.
         * <p>
         * <strong><a name="override">Implementation Note:</a></strong>
         * This class overrides
         * <code>invalidate</code>,
         * <code>validate</code>,
         * <code>revalidate</code>,
         * <code>repaint</code>,
         * <code>isOpaque</code>,
         * and
         * <code>firePropertyChange</code>
         * solely to improve performance.
         * If not overridden, these frequently called methods would execute code paths
         * that are unnecessary for the default list cell renderer.
         * If you write your own renderer,
         * take care to weigh the benefits and
         * drawbacks of overriding these methods.
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing.  As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * @author Philip Milne
         * @author Hans Muller
         */
        // @ts-ignore
        class DefaultListCellRenderer extends javax.swing.JLabel implements javax.swing.ListCellRenderer<java.lang.Object>, java.io.Serializable {
            /**
             * Constructs a default renderer object for an item
             * in a list.
             */
            // @ts-ignore
            constructor()
            // @ts-ignore
            noFocusBorder: javax.swing.border.Border
            // @ts-ignore
            getListCellRendererComponent(list: javax.swing.JList<any>, value: any, index: number /*int*/, isSelected: boolean, cellHasFocus: boolean): java.awt.Component
            /**
             * Overridden for performance reasons.
             * See the <a href="#override">Implementation Note</a>
             * for more information.
             * @since 1.5
             * @return <code>true</code> if the background is completely opaque
             *          and differs from the JList's background;
             *          <code>false</code> otherwise
             */
            // @ts-ignore
            isOpaque(): boolean
            /**
             * Overridden for performance reasons.
             * See the <a href="#override">Implementation Note</a>
             * for more information.
             */
            // @ts-ignore
            validate(): void
            /**
             * Overridden for performance reasons.
             * See the <a href="#override">Implementation Note</a>
             * for more information.
             * @since 1.5
             */
            // @ts-ignore
            invalidate(): void
            /**
             * Overridden for performance reasons.
             * See the <a href="#override">Implementation Note</a>
             * for more information.
             * @since 1.5
             */
            // @ts-ignore
            repaint(): void
            /**
             * Overridden for performance reasons.
             * See the <a href="#override">Implementation Note</a>
             * for more information.
             */
            // @ts-ignore
            revalidate(): void
            /**
             * Overridden for performance reasons.
             * See the <a href="#override">Implementation Note</a>
             * for more information.
             */
            // @ts-ignore
            repaint(tm: number /*long*/, x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
            /**
             * Overridden for performance reasons.
             * See the <a href="#override">Implementation Note</a>
             * for more information.
             */
            // @ts-ignore
            repaint(r: java.awt.Rectangle): void
            /**
             * Overridden for performance reasons.
             * See the <a href="#override">Implementation Note</a>
             * for more information.
             */
            // @ts-ignore
            firePropertyChange(propertyName: string, oldValue: any, newValue: any): void
            /**
             * Overridden for performance reasons.
             * See the <a href="#override">Implementation Note</a>
             * for more information.
             */
            // @ts-ignore
            firePropertyChange(propertyName: string, oldValue: number /*byte*/, newValue: number /*byte*/): void
            /**
             * Overridden for performance reasons.
             * See the <a href="#override">Implementation Note</a>
             * for more information.
             */
            // @ts-ignore
            firePropertyChange(propertyName: string, oldValue: string, newValue: string): void
            /**
             * Overridden for performance reasons.
             * See the <a href="#override">Implementation Note</a>
             * for more information.
             */
            // @ts-ignore
            firePropertyChange(propertyName: string, oldValue: number /*short*/, newValue: number /*short*/): void
            /**
             * Overridden for performance reasons.
             * See the <a href="#override">Implementation Note</a>
             * for more information.
             */
            // @ts-ignore
            firePropertyChange(propertyName: string, oldValue: number /*int*/, newValue: number /*int*/): void
            /**
             * Overridden for performance reasons.
             * See the <a href="#override">Implementation Note</a>
             * for more information.
             */
            // @ts-ignore
            firePropertyChange(propertyName: string, oldValue: number /*long*/, newValue: number /*long*/): void
            /**
             * Overridden for performance reasons.
             * See the <a href="#override">Implementation Note</a>
             * for more information.
             */
            // @ts-ignore
            firePropertyChange(propertyName: string, oldValue: number /*float*/, newValue: number /*float*/): void
            /**
             * Overridden for performance reasons.
             * See the <a href="#override">Implementation Note</a>
             * for more information.
             */
            // @ts-ignore
            firePropertyChange(propertyName: string, oldValue: number /*double*/, newValue: number /*double*/): void
            /**
             * Overridden for performance reasons.
             * See the <a href="#override">Implementation Note</a>
             * for more information.
             */
            // @ts-ignore
            firePropertyChange(propertyName: string, oldValue: boolean, newValue: boolean): void
        }
    }
}
