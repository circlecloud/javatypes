declare namespace java {
    namespace awt {
        /**
         * Capabilities and properties of images.
         * @author Michael Martak
         * @since 1.4
         */
        // @ts-ignore
        class ImageCapabilities extends java.lang.Object implements java.lang.Cloneable {
            /**
             * Creates a new object for specifying image capabilities.
             * @param accelerated whether or not an accelerated image is desired
             */
            // @ts-ignore
            constructor(accelerated: boolean)
            /**
             * Returns <code>true</code> if the object whose capabilities are
             * encapsulated in this <code>ImageCapabilities</code> can be or is
             * accelerated.
             * @return whether or not an image can be, or is, accelerated.  There are
             *  various platform-specific ways to accelerate an image, including
             *  pixmaps, VRAM, AGP.  This is the general acceleration method (as
             *  opposed to residing in system memory).
             */
            // @ts-ignore
            public isAccelerated(): boolean
            /**
             * Returns <code>true</code> if the <code>VolatileImage</code>
             * described by this <code>ImageCapabilities</code> can lose
             * its surfaces.
             * @return whether or not a volatile image is subject to losing its surfaces
             *  at the whim of the operating system.
             */
            // @ts-ignore
            public isTrueVolatile(): boolean
            /**
             * @return a copy of this ImageCapabilities object.
             */
            // @ts-ignore
            public clone(): any
        }
    }
}
