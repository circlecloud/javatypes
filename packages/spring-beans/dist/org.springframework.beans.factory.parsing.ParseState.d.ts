declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace parsing {
                    /**
                     * Simple {@link LinkedList}-based structure for tracking the logical position during
                     * a parsing process. {@link Entry entries} are added to the LinkedList at
                     * each point during the parse phase in a reader-specific manner.
                     * <p>Calling {@link #toString()} will render a tree-style view of the current logical
                     * position in the parse phase. This representation is intended for use in
                     * error messages.
                     * @author Rob Harrop
                     * @since 2.0
                     */
                    // @ts-ignore
                    class ParseState extends java.lang.Object {
                        /**
                         * Create a new {@code ParseState} with an empty {@link LinkedList}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Add a new {@link Entry} to the {@link LinkedList}.
                         */
                        // @ts-ignore
                        public push(entry: org.springframework.beans.factory.parsing.ParseState.Entry): void
                        /**
                         * Remove an {@link Entry} from the {@link LinkedList}.
                         */
                        // @ts-ignore
                        public pop(): void
                        /**
                         * Return the {@link Entry} currently at the top of the {@link LinkedList} or
                         * {@code null} if the {@link LinkedList} is empty.
                         */
                        // @ts-ignore
                        public peek(): org.springframework.beans.factory.parsing.ParseState.Entry
                        /**
                         * Create a new instance of {@link ParseState} which is an independent snapshot
                         * of this instance.
                         */
                        // @ts-ignore
                        public snapshot(): org.springframework.beans.factory.parsing.ParseState
                        /**
                         * Returns a tree-style representation of the current {@code ParseState}.
                         */
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
