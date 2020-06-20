declare namespace javax {
    namespace print {
        /**
         * Interface MultiPrintService is the factory for a MultiDocPrintJob.
         * A MultiPrintService
         * describes the capabilities of a Printer and can be queried regarding
         * a printer's supported attributes.
         */
        // @ts-ignore
        interface MultiDocPrintService extends javax.print.PrintService {
            /**
             * Create a job which can print a multiDoc.
             * @return a MultiDocPrintJob
             */
            // @ts-ignore
            createMultiDocPrintJob(): javax.print.MultiDocPrintJob
        }
    }
}
