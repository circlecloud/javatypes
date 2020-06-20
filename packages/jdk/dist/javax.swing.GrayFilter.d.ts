declare namespace javax {
    namespace swing {
        /**
         * An image filter that "disables" an image by turning
         * it into a grayscale image, and brightening the pixels
         * in the image. Used by buttons to create an image for
         * a disabled button.
         * @author Jeff Dinkins
         * @author Tom Ball
         * @author Jim Graham
         */
        // @ts-ignore
        class GrayFilter extends java.awt.image.RGBImageFilter {
            /**
             * Constructs a GrayFilter object that filters a color image to a
             * grayscale image. Used by buttons to create disabled ("grayed out")
             * button images.
             * @param b  a boolean -- true if the pixels should be brightened
             * @param p  an int in the range 0..100 that determines the percentage
             *            of gray, where 100 is the darkest gray, and 0 is the lightest
             */
            // @ts-ignore
            constructor(b: boolean, p: number /*int*/)
            /**
             * Creates a disabled image
             */
            // @ts-ignore
            createDisabledImage(i: java.awt.Image): java.awt.Image
            /**
             * Overrides <code>RGBImageFilter.filterRGB</code>.
             */
            // @ts-ignore
            filterRGB(x: number /*int*/, y: number /*int*/, rgb: number /*int*/): int
        }
    }
}
