declare namespace javax {
    namespace swing {
        /**
         * Popups are used to display a <code>Component</code> to the user, typically
         * on top of all the other <code>Component</code>s in a particular containment
         * hierarchy. <code>Popup</code>s have a very small life cycle. Once you
         * have obtained a <code>Popup</code>, and hidden it (invoked the
         * <code>hide</code> method), you should no longer
         * invoke any methods on it. This allows the <code>PopupFactory</code> to cache
         * <code>Popup</code>s for later use.
         * <p>
         * The general contract is that if you need to change the size of the
         * <code>Component</code>, or location of the <code>Popup</code>, you should
         * obtain a new <code>Popup</code>.
         * <p>
         * <code>Popup</code> does not descend from <code>Component</code>, rather
         * implementations of <code>Popup</code> are responsible for creating
         * and maintaining their own <code>Component</code>s to render the
         * requested <code>Component</code> to the user.
         * <p>
         * You typically do not explicitly create an instance of <code>Popup</code>,
         * instead obtain one from a <code>PopupFactory</code>.
         * @see PopupFactory
         * @since 1.4
         */
        // @ts-ignore
        class Popup extends java.lang.Object {
            /**
             * Creates a <code>Popup</code> for the Component <code>owner</code>
             * containing the Component <code>contents</code>. <code>owner</code>
             * is used to determine which <code>Window</code> the new
             * <code>Popup</code> will parent the <code>Component</code> the
             * <code>Popup</code> creates to.
             * A null <code>owner</code> implies there is no valid parent.
             * <code>x</code> and
             * <code>y</code> specify the preferred initial location to place
             * the <code>Popup</code> at. Based on screen size, or other paramaters,
             * the <code>Popup</code> may not display at <code>x</code> and
             * <code>y</code>.
             * @param owner    Component mouse coordinates are relative to, may be null
             * @param contents Contents of the Popup
             * @param x        Initial x screen coordinate
             * @param y        Initial y screen coordinate
             * @exception IllegalArgumentException if contents is null
             */
            // @ts-ignore
            constructor(owner: java.awt.Component, contents: java.awt.Component, x: number /*int*/, y: number /*int*/)
            /**
             * Creates a <code>Popup</code>. This is provided for subclasses.
             */
            // @ts-ignore
            constructor()
            /**
             * Makes the <code>Popup</code> visible. If the <code>Popup</code> is
             * currently visible, this has no effect.
             */
            // @ts-ignore
            public show(): void
            /**
             * Hides and disposes of the <code>Popup</code>. Once a <code>Popup</code>
             * has been disposed you should no longer invoke methods on it. A
             * <code>dispose</code>d <code>Popup</code> may be reclaimed and later used
             * based on the <code>PopupFactory</code>. As such, if you invoke methods
             * on a <code>disposed</code> <code>Popup</code>, indeterminate
             * behavior will result.
             */
            // @ts-ignore
            public hide(): void
        }
    }
}
