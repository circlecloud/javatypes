declare namespace javax {
    namespace swing {
        /**
         * <code>PopupFactory</code>, as the name implies, is used to obtain
         * instances of <code>Popup</code>s. <code>Popup</code>s are used to
         * display a <code>Component</code> above all other <code>Component</code>s
         * in a particular containment hierarchy. The general contract is that
         * once you have obtained a <code>Popup</code> from a
         * <code>PopupFactory</code>, you must invoke <code>hide</code> on the
         * <code>Popup</code>. The typical usage is:
         * <pre>
         * PopupFactory factory = PopupFactory.getSharedInstance();
         * Popup popup = factory.getPopup(owner, contents, x, y);
         * popup.show();
         * ...
         * popup.hide();
         * </pre>
         * @see Popup
         * @since 1.4
         */
        // @ts-ignore
        class PopupFactory extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Sets the <code>PopupFactory</code> that will be used to obtain
             * <code>Popup</code>s.
             * This will throw an <code>IllegalArgumentException</code> if
             * <code>factory</code> is null.
             * @param factory Shared PopupFactory
             * @exception IllegalArgumentException if <code>factory</code> is null
             * @see #getPopup
             */
            // @ts-ignore
            public static setSharedInstance(factory: javax.swing.PopupFactory): void
            /**
             * Returns the shared <code>PopupFactory</code> which can be used
             * to obtain <code>Popup</code>s.
             * @return Shared PopupFactory
             */
            // @ts-ignore
            public static getSharedInstance(): javax.swing.PopupFactory
            /**
             * Creates a <code>Popup</code> for the Component <code>owner</code>
             * containing the Component <code>contents</code>. <code>owner</code>
             * is used to determine which <code>Window</code> the new
             * <code>Popup</code> will parent the <code>Component</code> the
             * <code>Popup</code> creates to. A null <code>owner</code> implies there
             * is no valid parent. <code>x</code> and
             * <code>y</code> specify the preferred initial location to place
             * the <code>Popup</code> at. Based on screen size, or other paramaters,
             * the <code>Popup</code> may not display at <code>x</code> and
             * <code>y</code>.
             * @param owner    Component mouse coordinates are relative to, may be null
             * @param contents Contents of the Popup
             * @param x        Initial x screen coordinate
             * @param y        Initial y screen coordinate
             * @exception IllegalArgumentException if contents is null
             * @return Popup containing Contents
             */
            // @ts-ignore
            public getPopup(owner: java.awt.Component, contents: java.awt.Component, x: number /*int*/, y: number /*int*/): javax.swing.Popup
        }
    }
}
