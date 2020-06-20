declare namespace javax {
    namespace print {
        /**
         * Interface FlavorException is a mixin interface which a subclass of {@link
         * PrintException PrintException} can implement to report an error condition
         * involving a doc flavor or flavors (class {@link javax.print.DocFlavor
         * DocFlavor}). The Print Service API does not define any print exception
         * classes that implement interface FlavorException, that being left to the
         * Print Service implementor's discretion.
         */
        // @ts-ignore
        interface FlavorException {
            /**
             * Returns the unsupported flavors.
             * @return the unsupported doc flavors.
             */
            // @ts-ignore
            getUnsupportedFlavors(): javax.print.DocFlavor[]
        }
    }
}
