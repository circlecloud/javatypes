declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace json {
                    /**
                     * An implementation of interface CharStream, where the stream is assumed to
                     * contain only ASCII characters (with java-like unicode escape processing).
                     */
                    // @ts-ignore
                    class JavaCharStream extends java.lang.Object {
                        /**
                         * Constructor.
                         */
                        // @ts-ignore
                        constructor(dstream: java.io.Reader, startline: number /*int*/, startcolumn: number /*int*/, buffersize: number /*int*/)
                        /**
                         * Constructor.
                         */
                        // @ts-ignore
                        constructor(dstream: java.io.Reader, startline: number /*int*/, startcolumn: number /*int*/)
                        /**
                         * Constructor.
                         */
                        // @ts-ignore
                        constructor(dstream: java.io.Reader)
                        /**
                         * Constructor.
                         */
                        // @ts-ignore
                        constructor(dstream: java.io.InputStream, encoding: java.lang.String | string, startline: number /*int*/, startcolumn: number /*int*/, buffersize: number /*int*/)
                        /**
                         * Constructor.
                         */
                        // @ts-ignore
                        constructor(dstream: java.io.InputStream, startline: number /*int*/, startcolumn: number /*int*/, buffersize: number /*int*/)
                        /**
                         * Constructor.
                         */
                        // @ts-ignore
                        constructor(dstream: java.io.InputStream, encoding: java.lang.String | string, startline: number /*int*/, startcolumn: number /*int*/)
                        /**
                         * Constructor.
                         */
                        // @ts-ignore
                        constructor(dstream: java.io.InputStream, startline: number /*int*/, startcolumn: number /*int*/)
                        /**
                         * Constructor.
                         */
                        // @ts-ignore
                        constructor(dstream: java.io.InputStream, encoding: java.lang.String | string)
                        /**
                         * Constructor.
                         */
                        // @ts-ignore
                        constructor(dstream: java.io.InputStream)
                        /**
                         * Whether parser is static.
                         */
                        // @ts-ignore
                        public static readonly staticFlag: boolean
                        /**
                         * Position in buffer.
                         */
                        // @ts-ignore
                        public bufpos: number /*int*/
                        // @ts-ignore
                        bufline: number /*int*/[]
                        // @ts-ignore
                        bufcolumn: number /*int*/[]
                        // @ts-ignore
                        column: number /*int*/
                        // @ts-ignore
                        line: number /*int*/
                        // @ts-ignore
                        prevCharIsCR: boolean
                        // @ts-ignore
                        prevCharIsLF: boolean
                        // @ts-ignore
                        inputStream: java.io.Reader
                        // @ts-ignore
                        nextCharBuf: string[]
                        // @ts-ignore
                        buffer: string[]
                        // @ts-ignore
                        maxNextCharInd: number /*int*/
                        // @ts-ignore
                        nextCharInd: number /*int*/
                        // @ts-ignore
                        inBuf: number /*int*/
                        // @ts-ignore
                        tabSize: number /*int*/
                        // @ts-ignore
                        trackLineColumn: boolean
                        // @ts-ignore
                        public setTabSize(i: number /*int*/): void
                        // @ts-ignore
                        public getTabSize(): number /*int*/
                        // @ts-ignore
                        ExpandBuff(wrapAround: boolean): void
                        // @ts-ignore
                        FillBuff(): void
                        // @ts-ignore
                        ReadByte(): string
                        /**
                         * @return starting character for token.
                         */
                        // @ts-ignore
                        public BeginToken(): string
                        // @ts-ignore
                        AdjustBuffSize(): void
                        // @ts-ignore
                        UpdateLineColumn(c: string): void
                        /**
                         * Read a character.
                         */
                        // @ts-ignore
                        public readChar(): string
                        // @ts-ignore
                        public getColumn(): number /*int*/
                        // @ts-ignore
                        public getLine(): number /*int*/
                        /**
                         * Get end column.
                         */
                        // @ts-ignore
                        public getEndColumn(): number /*int*/
                        /**
                         * Get end line.
                         */
                        // @ts-ignore
                        public getEndLine(): number /*int*/
                        /**
                         * @return column of token start
                         */
                        // @ts-ignore
                        public getBeginColumn(): number /*int*/
                        /**
                         * @return line number of token start
                         */
                        // @ts-ignore
                        public getBeginLine(): number /*int*/
                        /**
                         * Retreat.
                         */
                        // @ts-ignore
                        public backup(amount: number /*int*/): void
                        /**
                         * Reinitialise.
                         */
                        // @ts-ignore
                        public ReInit(dstream: java.io.Reader, startline: number /*int*/, startcolumn: number /*int*/, buffersize: number /*int*/): void
                        /**
                         * Reinitialise.
                         */
                        // @ts-ignore
                        public ReInit(dstream: java.io.Reader, startline: number /*int*/, startcolumn: number /*int*/): void
                        /**
                         * Reinitialise.
                         */
                        // @ts-ignore
                        public ReInit(dstream: java.io.Reader): void
                        /**
                         * Reinitialise.
                         */
                        // @ts-ignore
                        public ReInit(dstream: java.io.InputStream, encoding: java.lang.String | string, startline: number /*int*/, startcolumn: number /*int*/, buffersize: number /*int*/): void
                        /**
                         * Reinitialise.
                         */
                        // @ts-ignore
                        public ReInit(dstream: java.io.InputStream, startline: number /*int*/, startcolumn: number /*int*/, buffersize: number /*int*/): void
                        /**
                         * Reinitialise.
                         */
                        // @ts-ignore
                        public ReInit(dstream: java.io.InputStream, encoding: java.lang.String | string, startline: number /*int*/, startcolumn: number /*int*/): void
                        /**
                         * Reinitialise.
                         */
                        // @ts-ignore
                        public ReInit(dstream: java.io.InputStream, startline: number /*int*/, startcolumn: number /*int*/): void
                        /**
                         * Reinitialise.
                         */
                        // @ts-ignore
                        public ReInit(dstream: java.io.InputStream, encoding: java.lang.String | string): void
                        /**
                         * Reinitialise.
                         */
                        // @ts-ignore
                        public ReInit(dstream: java.io.InputStream): void
                        /**
                         * @return token image as String
                         */
                        // @ts-ignore
                        public GetImage(): string
                        /**
                         * @return suffix
                         */
                        // @ts-ignore
                        public GetSuffix(len: number /*int*/): string[]
                        /**
                         * Set buffers back to null when finished.
                         */
                        // @ts-ignore
                        public Done(): void
                        /**
                         * Method to adjust line and column numbers for the start of a token.
                         */
                        // @ts-ignore
                        public adjustBeginLineColumn(newLine: number /*int*/, newCol: number /*int*/): void
                    }
                }
            }
        }
    }
}
