declare namespace javax {
    namespace swing {
        /**
         * An implementation of the Icon interface that paints Icons
         * from Images. Images that are created from a URL, filename or byte array
         * are preloaded using MediaTracker to monitor the loaded state
         * of the image.
         * <p>
         * For further information and examples of using image icons, see
         * <a href="https://docs.oracle.com/javase/tutorial/uiswing/components/icon.html">How to Use Icons</a>
         * in <em>The Java Tutorial.</em>
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing.  As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * @author Jeff Dinkins
         * @author Lynn Monsanto
         */
        // @ts-ignore
        class ImageIcon extends java.lang.Object implements javax.swing.Icon, java.io.Serializable, javax.accessibility.Accessible {
            /**
             * Creates an ImageIcon from the specified file. The image will
             * be preloaded by using MediaTracker to monitor the loading state
             * of the image.
             * @param filename the name of the file containing the image
             * @param description a brief textual description of the image
             * @see #ImageIcon(String)
             */
            // @ts-ignore
            constructor(filename: java.lang.String | string, description: java.lang.String | string)
            /**
             * Creates an ImageIcon from the specified file. The image will
             * be preloaded by using MediaTracker to monitor the loading state
             * of the image. The specified String can be a file name or a
             * file path. When specifying a path, use the Internet-standard
             * forward-slash ("/") as a separator.
             * (The string is converted to an URL, so the forward-slash works
             * on all systems.)
             * For example, specify:
             * <pre>
             * new ImageIcon("images/myImage.gif") </pre>
             * The description is initialized to the <code>filename</code> string.
             * @param filename a String specifying a filename or path
             * @see #getDescription
             */
            // @ts-ignore
            constructor(filename: java.lang.String | string)
            /**
             * Creates an ImageIcon from the specified URL. The image will
             * be preloaded by using MediaTracker to monitor the loaded state
             * of the image.
             * @param location the URL for the image
             * @param description a brief textual description of the image
             * @see #ImageIcon(String)
             */
            // @ts-ignore
            constructor(location: java.net.URL, description: java.lang.String | string)
            /**
             * Creates an ImageIcon from the specified URL. The image will
             * be preloaded by using MediaTracker to monitor the loaded state
             * of the image.
             * The icon's description is initialized to be
             * a string representation of the URL.
             * @param location the URL for the image
             * @see #getDescription
             */
            // @ts-ignore
            constructor(location: java.net.URL)
            /**
             * Creates an ImageIcon from the image.
             * @param image the image
             * @param description a brief textual description of the image
             */
            // @ts-ignore
            constructor(image: java.awt.Image, description: java.lang.String | string)
            /**
             * Creates an ImageIcon from an image object.
             * If the image has a "comment" property that is a string,
             * then the string is used as the description of this icon.
             * @param image the image
             * @see #getDescription
             * @see java.awt.Image#getProperty
             */
            // @ts-ignore
            constructor(image: java.awt.Image)
            /**
             * Creates an ImageIcon from an array of bytes which were
             * read from an image file containing a supported image format,
             * such as GIF, JPEG, or (as of 1.3) PNG.
             * Normally this array is created
             * by reading an image using Class.getResourceAsStream(), but
             * the byte array may also be statically stored in a class.
             * @param imageData an array of pixels in an image format supported
             *          by the AWT Toolkit, such as GIF, JPEG, or (as of 1.3) PNG
             * @param description a brief textual description of the image
             * @see java.awt.Toolkit#createImage
             */
            // @ts-ignore
            constructor(imageData: number /*byte*/[], description: java.lang.String | string)
            /**
             * Creates an ImageIcon from an array of bytes which were
             * read from an image file containing a supported image format,
             * such as GIF, JPEG, or (as of 1.3) PNG.
             * Normally this array is created
             * by reading an image using Class.getResourceAsStream(), but
             * the byte array may also be statically stored in a class.
             * If the resulting image has a "comment" property that is a string,
             * then the string is used as the description of this icon.
             * @param imageData an array of pixels in an image format supported by
             *              the AWT Toolkit, such as GIF, JPEG, or (as of 1.3) PNG
             * @see java.awt.Toolkit#createImage
             * @see #getDescription
             * @see java.awt.Image#getProperty
             */
            // @ts-ignore
            constructor(imageData: number /*byte*/[])
            /**
             * Creates an uninitialized image icon.
             */
            // @ts-ignore
            constructor()
            /**
             * Do not use this shared component, which is used to track image loading.
             * It is left for backward compatibility only.
             * @deprecated since 1.8
             */
            // @ts-ignore
            static readonly component: java.awt.Component
            /**
             * Do not use this shared media tracker, which is used to load images.
             * It is left for backward compatibility only.
             * @deprecated since 1.8
             */
            // @ts-ignore
            static readonly tracker: java.awt.MediaTracker
            /**
             * Loads the image, returning only when the image is loaded.
             * @param image the image
             */
            // @ts-ignore
            loadImage(image: java.awt.Image): void
            /**
             * Returns the status of the image loading operation.
             * @return the loading status as defined by java.awt.MediaTracker
             * @see java.awt.MediaTracker#ABORTED
             * @see java.awt.MediaTracker#ERRORED
             * @see java.awt.MediaTracker#COMPLETE
             */
            // @ts-ignore
            public getImageLoadStatus(): number /*int*/
            /**
             * Returns this icon's <code>Image</code>.
             * @return the <code>Image</code> object for this <code>ImageIcon</code>
             */
            // @ts-ignore
            public getImage(): java.awt.Image
            /**
             * Sets the image displayed by this icon.
             * @param image the image
             */
            // @ts-ignore
            public setImage(image: java.awt.Image): void
            /**
             * Gets the description of the image.  This is meant to be a brief
             * textual description of the object.  For example, it might be
             * presented to a blind user to give an indication of the purpose
             * of the image.
             * The description may be null.
             * @return a brief textual description of the image
             */
            // @ts-ignore
            public getDescription(): string
            /**
             * Sets the description of the image.  This is meant to be a brief
             * textual description of the object.  For example, it might be
             * presented to a blind user to give an indication of the purpose
             * of the image.
             * @param description a brief textual description of the image
             */
            // @ts-ignore
            public setDescription(description: java.lang.String | string): void
            /**
             * Paints the icon.
             * The top-left corner of the icon is drawn at
             * the point (<code>x</code>, <code>y</code>)
             * in the coordinate space of the graphics context <code>g</code>.
             * If this icon has no image observer,
             * this method uses the <code>c</code> component
             * as the observer.
             * @param c the component to be used as the observer
             *           if this icon has no image observer
             * @param g the graphics context
             * @param x the X coordinate of the icon's top-left corner
             * @param y the Y coordinate of the icon's top-left corner
             */
            // @ts-ignore
            public paintIcon(c: java.awt.Component, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/): void
            /**
             * Gets the width of the icon.
             * @return the width in pixels of this icon
             */
            // @ts-ignore
            public getIconWidth(): number /*int*/
            /**
             * Gets the height of the icon.
             * @return the height in pixels of this icon
             */
            // @ts-ignore
            public getIconHeight(): number /*int*/
            /**
             * Sets the image observer for the image.  Set this
             * property if the ImageIcon contains an animated GIF, so
             * the observer is notified to update its display.
             * For example:
             * <pre>
             * icon = new ImageIcon(...)
             * button.setIcon(icon);
             * icon.setImageObserver(button);
             * </pre>
             * @param observer the image observer
             */
            // @ts-ignore
            public setImageObserver(observer: java.awt.image.ImageObserver): void
            /**
             * Returns the image observer for the image.
             * @return the image observer, which may be null
             */
            // @ts-ignore
            public getImageObserver(): java.awt.image.ImageObserver
            /**
             * Returns a string representation of this image.
             * @return a string representing this image
             */
            // @ts-ignore
            public toString(): string
            /**
             * Gets the AccessibleContext associated with this ImageIcon.
             * For image icons, the AccessibleContext takes the form of an
             * AccessibleImageIcon.
             * A new AccessibleImageIcon instance is created if necessary.
             * @return an AccessibleImageIcon that serves as the
             *          AccessibleContext of this ImageIcon
             * @beaninfo expert: true
             *   description: The AccessibleContext associated with this ImageIcon.
             * @since 1.3
             */
            // @ts-ignore
            public getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
