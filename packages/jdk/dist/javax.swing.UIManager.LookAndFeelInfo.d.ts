declare namespace javax {
    namespace swing {
        namespace UIManager {
            /**
             * Provides a little information about an installed
             * <code>LookAndFeel</code> for the sake of configuring a menu or
             * for initial application set up.
             * @see UIManager#getInstalledLookAndFeels
             * @see LookAndFeel
             */
            // @ts-ignore
            class LookAndFeelInfo extends java.lang.Object {
                /**
                 * Constructs a <code>UIManager</code>s
                 * <code>LookAndFeelInfo</code> object.
                 * @param name      a <code>String</code> specifying the name of
                 *                       the look and feel
                 * @param className a <code>String</code> specifying the name of
                 *                       the class that implements the look and feel
                 */
                // @ts-ignore
                constructor(name: string, className: string)
                /**
                 * Returns the name of the look and feel in a form suitable
                 * for a menu or other presentation
                 * @return a <code>String</code> containing the name
                 * @see LookAndFeel#getName
                 */
                // @ts-ignore
                getName(): java.lang.String
                /**
                 * Returns the name of the class that implements this look and feel.
                 * @return the name of the class that implements this
                 *               <code>LookAndFeel</code>
                 * @see LookAndFeel
                 */
                // @ts-ignore
                getClassName(): java.lang.String
                /**
                 * Returns a string that displays and identifies this
                 * object's properties.
                 * @return a <code>String</code> representation of this object
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
