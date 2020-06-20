declare namespace java {
    namespace awt {
        /**
         * An abstract class which initiates and executes a print job.
         * It provides access to a print graphics object which renders
         * to an appropriate print device.
         * @see Toolkit#getPrintJob
         * @author Amy Fowler
         */
        // @ts-ignore
        class PrintJob extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Gets a Graphics object that will draw to the next page.
             * The page is sent to the printer when the graphics
             * object is disposed.  This graphics object will also implement
             * the PrintGraphics interface.
             * @see PrintGraphics
             */
            // @ts-ignore
            abstract getGraphics(): java.awt.Graphics
            /**
             * Returns the dimensions of the page in pixels.
             * The resolution of the page is chosen so that it
             * is similar to the screen resolution.
             */
            // @ts-ignore
            abstract getPageDimension(): java.awt.Dimension
            /**
             * Returns the resolution of the page in pixels per inch.
             * Note that this doesn't have to correspond to the physical
             * resolution of the printer.
             */
            // @ts-ignore
            abstract getPageResolution(): int
            /**
             * Returns true if the last page will be printed first.
             */
            // @ts-ignore
            abstract lastPageFirst(): boolean
            /**
             * Ends the print job and does any necessary cleanup.
             */
            // @ts-ignore
            abstract end(): void
            /**
             * Ends this print job once it is no longer referenced.
             * @see #end
             */
            // @ts-ignore
            finalize(): void
        }
    }
}
