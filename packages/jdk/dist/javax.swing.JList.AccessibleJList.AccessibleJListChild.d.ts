declare namespace javax {
    namespace swing {
        namespace JList {
            namespace AccessibleJList {
                /**
                 * This class implements accessibility support appropriate
                 * for list children.
                 */
                // @ts-ignore
                class st.AccessibleJListChild extends javax.accessibility.AccessibleContext implements javax.accessibility.Accessible, javax.accessibility.AccessibleComponent {
                    // @ts-ignore
                    constructor(parent: javax.swing.JList<E>, indexInParent: number /*int*/)
                    /**
                     * Get the AccessibleContext for this object. In the
                     * implementation of the Java Accessibility API for this class,
                     * returns this object, which is its own AccessibleContext.
                     * @return this object
                     */
                    // @ts-ignore
                    getAccessibleContext(): javax.accessibility.AccessibleContext
                    // @ts-ignore
                    getAccessibleName(): java.lang.String
                    // @ts-ignore
                    setAccessibleName(s: string): void
                    // @ts-ignore
                    getAccessibleDescription(): java.lang.String
                    // @ts-ignore
                    setAccessibleDescription(s: string): void
                    // @ts-ignore
                    getAccessibleRole(): javax.accessibility.AccessibleRole
                    // @ts-ignore
                    getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
                    // @ts-ignore
                    getAccessibleIndexInParent(): int
                    // @ts-ignore
                    getAccessibleChildrenCount(): int
                    // @ts-ignore
                    getAccessibleChild(i: number /*int*/): javax.accessibility.Accessible
                    // @ts-ignore
                    getLocale(): java.util.Locale
                    // @ts-ignore
                    addPropertyChangeListener(l: java.beans.PropertyChangeListener): void
                    // @ts-ignore
                    removePropertyChangeListener(l: java.beans.PropertyChangeListener): void
                    /**
                     * Get the AccessibleComponent associated with this object.  In the
                     * implementation of the Java Accessibility API for this class,
                     * return this object, which is responsible for implementing the
                     * AccessibleComponent interface on behalf of itself.
                     * @return this object
                     */
                    // @ts-ignore
                    getAccessibleComponent(): javax.accessibility.AccessibleComponent
                    // @ts-ignore
                    getAccessibleSelection(): javax.accessibility.AccessibleSelection
                    // @ts-ignore
                    getAccessibleText(): javax.accessibility.AccessibleText
                    // @ts-ignore
                    getAccessibleValue(): javax.accessibility.AccessibleValue
                    // @ts-ignore
                    getBackground(): java.awt.Color
                    // @ts-ignore
                    setBackground(c: java.awt.Color): void
                    // @ts-ignore
                    getForeground(): java.awt.Color
                    // @ts-ignore
                    setForeground(c: java.awt.Color): void
                    // @ts-ignore
                    getCursor(): java.awt.Cursor
                    // @ts-ignore
                    setCursor(c: java.awt.Cursor): void
                    // @ts-ignore
                    getFont(): java.awt.Font
                    // @ts-ignore
                    setFont(f: java.awt.Font): void
                    // @ts-ignore
                    getFontMetrics(f: java.awt.Font): java.awt.FontMetrics
                    // @ts-ignore
                    isEnabled(): boolean
                    // @ts-ignore
                    setEnabled(b: boolean): void
                    // @ts-ignore
                    isVisible(): boolean
                    // @ts-ignore
                    setVisible(b: boolean): void
                    // @ts-ignore
                    isShowing(): boolean
                    // @ts-ignore
                    contains(p: java.awt.Point): boolean
                    // @ts-ignore
                    getLocationOnScreen(): java.awt.Point
                    // @ts-ignore
                    getLocation(): java.awt.Point
                    // @ts-ignore
                    setLocation(p: java.awt.Point): void
                    // @ts-ignore
                    getBounds(): java.awt.Rectangle
                    // @ts-ignore
                    setBounds(r: java.awt.Rectangle): void
                    // @ts-ignore
                    getSize(): java.awt.Dimension
                    // @ts-ignore
                    setSize(d: java.awt.Dimension): void
                    // @ts-ignore
                    getAccessibleAt(p: java.awt.Point): javax.accessibility.Accessible
                    // @ts-ignore
                    isFocusTraversable(): boolean
                    // @ts-ignore
                    requestFocus(): void
                    // @ts-ignore
                    addFocusListener(l: java.awt.event.FocusListener): void
                    // @ts-ignore
                    removeFocusListener(l: java.awt.event.FocusListener): void
                    /**
                     * Returns the icon for the element renderer, as the only item
                     * of an array of <code>AccessibleIcon</code>s or a <code>null</code> array
                     * if the renderer component contains no icons.
                     * @return an array containing the accessible icon
                     *          or a <code>null</code> array if none
                     * @since 1.3
                     */
                    // @ts-ignore
                    getAccessibleIcon(): javax.accessibility.AccessibleIcon[]
                }
            }
        }
    }
}
