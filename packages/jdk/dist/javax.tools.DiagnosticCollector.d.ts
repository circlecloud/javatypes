declare namespace javax {
    namespace tools {
        /**
         * Provides an easy way to collect diagnostics in a list.
         * @param <S> the type of source objects used by diagnostics received
         *  by this object
         * @author Peter von der Ah&eacute;
         * @since 1.6
         */
        // @ts-ignore
        class DiagnosticCollector<S> extends java.lang.Object implements javax.tools.DiagnosticListener<S> {
            // @ts-ignore
            constructor()
            // @ts-ignore
            public report(diagnostic: javax.tools.Diagnostic<any>): void
            /**
             * Gets a list view of diagnostics collected by this object.
             * @return a list view of diagnostics
             */
            // @ts-ignore
            public getDiagnostics(): Array<javax.tools.Diagnostic<any>>
        }
    }
}
