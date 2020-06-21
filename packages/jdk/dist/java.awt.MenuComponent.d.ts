declare namespace java {
    namespace awt {
        /**
         * The abstract class <code>MenuComponent</code> is the superclass
         * of all menu-related components. In this respect, the class
         * <code>MenuComponent</code> is analogous to the abstract superclass
         * <code>Component</code> for AWT components.
         * <p>
         * Menu components receive and process AWT events, just as components do,
         * through the method <code>processEvent</code>.
         * @author Arthur van Hoff
         * @since JDK1.0
         */
        // @ts-ignore
        abstract class MenuComponent extends java.lang.Object implements java.io.Serializable {
            /**
             * Creates a <code>MenuComponent</code>.
             * @exception HeadlessException if
             *     <code>GraphicsEnvironment.isHeadless</code>
             *     returns <code>true</code>
             * @see java.awt.GraphicsEnvironment#isHeadless
             */
            // @ts-ignore
            constructor()
            /**
             * Gets the name of the menu component.
             * @return the name of the menu component
             * @see java.awt.MenuComponent#setName(java.lang.String)
             * @since JDK1.1
             */
            // @ts-ignore
            public getName(): string
            /**
             * Sets the name of the component to the specified string.
             * @param name    the name of the menu component
             * @see java.awt.MenuComponent#getName
             * @since JDK1.1
             */
            // @ts-ignore
            public setName(name: java.lang.String | string): void
            /**
             * Returns the parent container for this menu component.
             * @return the menu component containing this menu component,
             *                  or <code>null</code> if this menu component
             *                  is the outermost component, the menu bar itself
             */
            // @ts-ignore
            public getParent(): java.awt.MenuContainer
            /**
             * @deprecated As of JDK version 1.1,
             *  programs should not directly manipulate peers.
             */
            // @ts-ignore
            public getPeer(): java.awt.peer.MenuComponentPeer
            /**
             * Gets the font used for this menu component.
             * @return the font used in this menu component, if there is one;
             *                   <code>null</code> otherwise
             * @see java.awt.MenuComponent#setFont
             */
            // @ts-ignore
            public getFont(): java.awt.Font
            /**
             * Sets the font to be used for this menu component to the specified
             * font. This font is also used by all subcomponents of this menu
             * component, unless those subcomponents specify a different font.
             * <p>
             * Some platforms may not support setting of all font attributes
             * of a menu component; in such cases, calling <code>setFont</code>
             * will have no effect on the unsupported font attributes of this
             * menu component.  Unless subcomponents of this menu component
             * specify a different font, this font will be used by those
             * subcomponents if supported by the underlying platform.
             * @param f   the font to be set
             * @see #getFont
             * @see Font#getAttributes
             * @see java.awt.font.TextAttribute
             */
            // @ts-ignore
            public setFont(f: java.awt.Font): void
            /**
             * Removes the menu component's peer.  The peer allows us to modify the
             * appearance of the menu component without changing the functionality of
             * the menu component.
             */
            // @ts-ignore
            public removeNotify(): void
            /**
             * Posts the specified event to the menu.
             * This method is part of the Java&nbsp;1.0 event system
             * and it is maintained only for backwards compatibility.
             * Its use is discouraged, and it may not be supported
             * in the future.
             * @param evt the event which is to take place
             * @deprecated As of JDK version 1.1, replaced by {#link
             *  #dispatchEvent(AWTEvent) dispatchEvent}.
             */
            // @ts-ignore
            public postEvent(evt: java.awt.Event): boolean
            /**
             * Delivers an event to this component or one of its sub components.
             * @param e the event
             */
            // @ts-ignore
            public dispatchEvent(e: java.awt.AWTEvent): void
            /**
             * Processes events occurring on this menu component.
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             * @param e the event
             * @since JDK1.1
             */
            // @ts-ignore
            processEvent(e: java.awt.AWTEvent): void
            /**
             * Returns a string representing the state of this
             * <code>MenuComponent</code>. This method is intended to be used
             * only for debugging purposes, and the content and format of the
             * returned string may vary between implementations. The returned
             * string may be empty but may not be <code>null</code>.
             * @return the parameter string of this menu component
             */
            // @ts-ignore
            paramString(): string
            /**
             * Returns a representation of this menu component as a string.
             * @return a string representation of this menu component
             */
            // @ts-ignore
            public toString(): string
            /**
             * Gets this component's locking object (the object that owns the thread
             * synchronization monitor) for AWT component-tree and layout
             * operations.
             * @return this component's locking object
             */
            // @ts-ignore
            getTreeLock(): any
            /**
             * Gets the <code>AccessibleContext</code> associated with
             * this <code>MenuComponent</code>.
             * The method implemented by this base class returns <code>null</code>.
             * Classes that extend <code>MenuComponent</code>
             * should implement this method to return the
             * <code>AccessibleContext</code> associated with the subclass.
             * @return the <code>AccessibleContext</code> of this
             *      <code>MenuComponent</code>
             * @since 1.3
             */
            // @ts-ignore
            public getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
