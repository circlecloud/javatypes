declare namespace javax {
    namespace swing {
        namespace table {
            namespace JTableHeader {
                namespace AccessibleJTableHeader {
                    /**
                     * This class provides an implementation of the Java Accessibility
                     * API appropriate for JTableHeader entries.
                     */
                    // @ts-ignore
                    class AccessibleJTableHeaderEntry extends javax.accessibility.AccessibleContext implements javax.accessibility.Accessible, javax.accessibility.AccessibleComponent {
                        /**
                         * Constructs an AccessiblJTableHeaaderEntry
                         * @since 1.4
                         */
                        // @ts-ignore
                        constructor(c: number /*int*/, p: javax.swing.table.JTableHeader, t: javax.swing.JTable)
                        /**
                         * Get the AccessibleContext associated with this object.
                         * In the implementation of the Java Accessibility API
                         * for this class, returns this object, which serves as
                         * its own AccessibleContext.
                         * @return this object
                         */
                        // @ts-ignore
                        public getAccessibleContext(): javax.accessibility.AccessibleContext
                        // @ts-ignore
                        public getAccessibleName(): string
                        // @ts-ignore
                        public setAccessibleName(s: java.lang.String | string): void
                        // @ts-ignore
                        public getAccessibleDescription(): string
                        // @ts-ignore
                        public setAccessibleDescription(s: java.lang.String | string): void
                        // @ts-ignore
                        public getAccessibleRole(): javax.accessibility.AccessibleRole
                        // @ts-ignore
                        public getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
                        // @ts-ignore
                        public getAccessibleIndexInParent(): number /*int*/
                        // @ts-ignore
                        public getAccessibleChildrenCount(): number /*int*/
                        // @ts-ignore
                        public getAccessibleChild(i: number /*int*/): javax.accessibility.Accessible
                        // @ts-ignore
                        public getLocale(): java.util.Locale
                        // @ts-ignore
                        public addPropertyChangeListener(l: java.beans.PropertyChangeListener): void
                        // @ts-ignore
                        public removePropertyChangeListener(l: java.beans.PropertyChangeListener): void
                        // @ts-ignore
                        public getAccessibleAction(): javax.accessibility.AccessibleAction
                        /**
                         * Get the AccessibleComponent associated with this object.  In the
                         * implementation of the Java Accessibility API for this class,
                         * return this object, which is responsible for implementing the
                         * AccessibleComponent interface on behalf of itself.
                         * @return this object
                         */
                        // @ts-ignore
                        public getAccessibleComponent(): javax.accessibility.AccessibleComponent
                        // @ts-ignore
                        public getAccessibleSelection(): javax.accessibility.AccessibleSelection
                        // @ts-ignore
                        public getAccessibleText(): javax.accessibility.AccessibleText
                        // @ts-ignore
                        public getAccessibleValue(): javax.accessibility.AccessibleValue
                        // @ts-ignore
                        public getBackground(): java.awt.Color
                        // @ts-ignore
                        public setBackground(c: java.awt.Color): void
                        // @ts-ignore
                        public getForeground(): java.awt.Color
                        // @ts-ignore
                        public setForeground(c: java.awt.Color): void
                        // @ts-ignore
                        public getCursor(): java.awt.Cursor
                        // @ts-ignore
                        public setCursor(c: java.awt.Cursor): void
                        // @ts-ignore
                        public getFont(): java.awt.Font
                        // @ts-ignore
                        public setFont(f: java.awt.Font): void
                        // @ts-ignore
                        public getFontMetrics(f: java.awt.Font): java.awt.FontMetrics
                        // @ts-ignore
                        public isEnabled(): boolean
                        // @ts-ignore
                        public setEnabled(b: boolean): void
                        // @ts-ignore
                        public isVisible(): boolean
                        // @ts-ignore
                        public setVisible(b: boolean): void
                        // @ts-ignore
                        public isShowing(): boolean
                        // @ts-ignore
                        public contains(p: java.awt.Point): boolean
                        // @ts-ignore
                        public getLocationOnScreen(): java.awt.Point
                        // @ts-ignore
                        public getLocation(): java.awt.Point
                        // @ts-ignore
                        public setLocation(p: java.awt.Point): void
                        // @ts-ignore
                        public getBounds(): java.awt.Rectangle
                        // @ts-ignore
                        public setBounds(r: java.awt.Rectangle): void
                        // @ts-ignore
                        public getSize(): java.awt.Dimension
                        // @ts-ignore
                        public setSize(d: java.awt.Dimension): void
                        // @ts-ignore
                        public getAccessibleAt(p: java.awt.Point): javax.accessibility.Accessible
                        // @ts-ignore
                        public isFocusTraversable(): boolean
                        // @ts-ignore
                        public requestFocus(): void
                        // @ts-ignore
                        public addFocusListener(l: java.awt.event.FocusListener): void
                        // @ts-ignore
                        public removeFocusListener(l: java.awt.event.FocusListener): void
                    }
                }
            }
        }
    }
}
