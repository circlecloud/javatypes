declare namespace javax {
    namespace script {
        /**
         * Extended by classes that store results of compilations.  State
         * might be stored in the form of Java classes, Java class files or scripting
         * language opcodes.  The script may be executed repeatedly
         * without reparsing.
         * <br><br>
         * Each <code>CompiledScript</code> is associated with a <code>ScriptEngine</code> -- A call to an  <code>eval</code>
         * method of the <code>CompiledScript</code> causes the execution of the script by the
         * <code>ScriptEngine</code>.  Changes in the state of the <code>ScriptEngine</code> caused by execution
         * of the <code>CompiledScript</code>  may visible during subsequent executions of scripts by the engine.
         * @author Mike Grogan
         * @since 1.6
         */
        // @ts-ignore
        class CompiledScript extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Executes the program stored in this <code>CompiledScript</code> object.
             * @param context A <code>ScriptContext</code> that is used in the same way as
             *  the <code>ScriptContext</code> passed to the <code>eval</code> methods of
             *  <code>ScriptEngine</code>.
             * @return The value returned by the script execution, if any.  Should return <code>null</code>
             *  if no value is returned by the script execution.
             * @throws ScriptException if an error occurs.
             * @throws NullPointerException if context is null.
             */
            // @ts-ignore
            abstract eval(context: javax.script.ScriptContext): java.lang.Object
            /**
             * Executes the program stored in the <code>CompiledScript</code> object using
             * the supplied <code>Bindings</code> of attributes as the <code>ENGINE_SCOPE</code> of the
             * associated <code>ScriptEngine</code> during script execution.  If bindings is null,
             * then the effect of calling this method is same as that of eval(getEngine().getContext()).
             * <p>.
             * The <code>GLOBAL_SCOPE</code> <code>Bindings</code>, <code>Reader</code> and <code>Writer</code>
             * associated with the default <code>ScriptContext</code> of the associated <code>ScriptEngine</code> are used.
             * @param bindings The bindings of attributes used for the <code>ENGINE_SCOPE</code>.
             * @return The return value from the script execution
             * @throws ScriptException if an error occurs.
             */
            // @ts-ignore
            eval(bindings: javax.script.Bindings): java.lang.Object
            /**
             * Executes the program stored in the <code>CompiledScript</code> object.  The
             * default <code>ScriptContext</code> of the associated <code>ScriptEngine</code> is used.
             * The effect of calling this method is same as that of eval(getEngine().getContext()).
             * @return The return value from the script execution
             * @throws ScriptException if an error occurs.
             */
            // @ts-ignore
            eval(): java.lang.Object
            /**
             * Returns the <code>ScriptEngine</code> whose <code>compile</code> method created this <code>CompiledScript</code>.
             * The <code>CompiledScript</code> will execute in this engine.
             * @return The <code>ScriptEngine</code> that created this <code>CompiledScript</code>
             */
            // @ts-ignore
            abstract getEngine(): javax.script.ScriptEngine
        }
    }
}
