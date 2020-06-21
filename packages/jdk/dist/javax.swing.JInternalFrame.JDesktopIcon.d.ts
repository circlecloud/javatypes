declare namespace javax {
    namespace swing {
        namespace JInternalFrame {
            /**
             * This component represents an iconified version of a
             * <code>JInternalFrame</code>.
             * This API should NOT BE USED by Swing applications, as it will go
             * away in future versions of Swing as its functionality is moved into
             * <code>JInternalFrame</code>.  This class is public only so that
             * UI objects can display a desktop icon.  If an application
             * wants to display a desktop icon, it should create a
             * <code>JInternalFrame</code> instance and iconify it.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @author David Kloba
             */
            // @ts-ignore
            class JDesktopIcon extends javax.swing.JComponent implements javax.accessibility.Accessible {
                /**
                 * Creates an icon for an internal frame.
                 * @param f  the <code>JInternalFrame</code>
                 *               for which the icon is created
                 */
                // @ts-ignore
                constructor(f: javax.swing.JInternalFrame)
                /**
                 * Returns the look-and-feel object that renders this component.
                 * @return the <code>DesktopIconUI</code> object that renders
                 *               this component
                 */
                // @ts-ignore
                public getUI(): javax.swing.plaf.DesktopIconUI
                /**
                 * Sets the look-and-feel object that renders this component.
                 * @param ui  the <code>DesktopIconUI</code> look-and-feel object
                 * @see UIDefaults#getUI
                 */
                // @ts-ignore
                public setUI(ui: javax.swing.plaf.DesktopIconUI): void
                /**
                 * Returns the <code>JInternalFrame</code> that this
                 * <code>DesktopIcon</code> is associated with.
                 * @return the <code>JInternalFrame</code> with which this icon
                 *               is associated
                 */
                // @ts-ignore
                public getInternalFrame(): javax.swing.JInternalFrame
                /**
                 * Sets the <code>JInternalFrame</code> with which this
                 * <code>DesktopIcon</code> is associated.
                 * @param f  the <code>JInternalFrame</code> with which this icon
                 *               is associated
                 */
                // @ts-ignore
                public setInternalFrame(f: javax.swing.JInternalFrame): void
                /**
                 * Convenience method to ask the icon for the <code>Desktop</code>
                 * object it belongs to.
                 * @return the <code>JDesktopPane</code> that contains this
                 *            icon's internal frame, or <code>null</code> if none found
                 */
                // @ts-ignore
                public getDesktopPane(): javax.swing.JDesktopPane
                /**
                 * Notification from the <code>UIManager</code> that the look and feel
                 * has changed.
                 * Replaces the current UI object with the latest version from the
                 * <code>UIManager</code>.
                 * @see JComponent#updateUI
                 */
                // @ts-ignore
                public updateUI(): void
                /**
                 * Returns the name of the look-and-feel
                 * class that renders this component.
                 * @return the string "DesktopIconUI"
                 * @see JComponent#getUIClassID
                 * @see UIDefaults#getUI
                 */
                // @ts-ignore
                public getUIClassID(): string
                /**
                 * Gets the AccessibleContext associated with this JDesktopIcon.
                 * For desktop icons, the AccessibleContext takes the form of an
                 * AccessibleJDesktopIcon.
                 * A new AccessibleJDesktopIcon instance is created if necessary.
                 * @return an AccessibleJDesktopIcon that serves as the
                 *          AccessibleContext of this JDesktopIcon
                 */
                // @ts-ignore
                public getAccessibleContext(): javax.accessibility.AccessibleContext
            }
        }
    }
}
