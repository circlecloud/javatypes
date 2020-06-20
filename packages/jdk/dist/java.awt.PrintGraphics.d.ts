declare namespace java {
    namespace awt {
        /**
         * An abstract class which provides a print graphics context for a page.
         * @author Amy Fowler
         */
        // @ts-ignore
        interface PrintGraphics {
            /**
             * Returns the PrintJob object from which this PrintGraphics
             * object originated.
             */
            // @ts-ignore
            getPrintJob(): java.awt.PrintJob
        }
    }
}
