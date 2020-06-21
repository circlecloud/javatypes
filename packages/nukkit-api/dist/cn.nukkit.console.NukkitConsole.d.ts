declare namespace cn {
    namespace nukkit {
        namespace console {
            // @ts-ignore
            class NukkitConsole extends SimpleTerminalConsole {
                // @ts-ignore
                constructor()
                // @ts-ignore
                isRunning(): boolean
                // @ts-ignore
                runCommand(command: java.lang.String | string): void
                // @ts-ignore
                public readLine(): string
                // @ts-ignore
                shutdown(): void
                // @ts-ignore
                buildReader(builder: LineReaderBuilder): LineReader
                // @ts-ignore
                public isExecutingCommands(): boolean
                // @ts-ignore
                public setExecutingCommands(executingCommands: boolean): void
            }
        }
    }
}
