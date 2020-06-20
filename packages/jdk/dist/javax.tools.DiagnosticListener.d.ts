declare namespace javax {
    namespace tools {
        /**
         * Interface for receiving diagnostics from tools.
         * @param <S> the type of source objects used by diagnostics received
         *  by this listener
         * @author Jonathan Gibbons
         * @author Peter von der Ah&eacute;
         * @since 1.6
         */
        // @ts-ignore
        interface DiagnosticListener<S> {
            /**
             * Invoked when a problem is found.
             * @param diagnostic a diagnostic representing the problem that
             *  was found
             * @throws NullPointerException if the diagnostic argument is
             *  {#code null} and the implementation cannot handle {@code null}
             *  arguments
             */
            // @ts-ignore
            report(diagnostic: javax.tools.Diagnostic<S>): void
        }
    }
}
